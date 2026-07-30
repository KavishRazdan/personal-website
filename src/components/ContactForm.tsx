import { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormProps {
  labelSize?: string;
  inputSize?: string;
  textareaRows?: number;
  buttonPadding?: string;
  buttonTextSize?: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_7ubvhsb";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_6ekpeod";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "vvgxk9R03FACi5lVQ";

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(
  (
    {
      labelSize = "text-[14px]",
      inputSize = "text-[16px]",
      textareaRows = 4,
      buttonPadding = "px-10 py-3",
      buttonTextSize = "text-[14px]",
    },
    ref
  ) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{
      type: "success" | "error" | null;
      message: string;
    }>({ type: null, message: "" });

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formRef.current) return;

      setIsSending(true);
      setStatus({ type: null, message: "" });

      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );

        setIsSending(false);
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
        formRef.current.reset();

        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      } catch (error: any) {
        console.error("EmailJS submission error:", error);
        setIsSending(false);
        setStatus({
          type: "error",
          message:
            "Failed to send message. Please try again or email me directly at razdankavish67@gmail.com.",
        });

        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      }
    };

    return (
      <div ref={ref} className="space-y-6">
        {/* Status Messages */}
        {status.type === "success" && (
          <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-[6px] text-emerald-300 font-['Manrope',sans-serif] text-[14px] flex items-center gap-3">
            <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        {status.type === "error" && (
          <div className="p-4 bg-rose-950/80 border border-rose-500/40 rounded-[6px] text-rose-300 font-['Manrope',sans-serif] text-[14px] flex items-center gap-3">
            <AlertCircle className="size-5 text-rose-400 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Alias fields for backward compatibility with different EmailJS templates */}
          <input type="hidden" name="from_name" value={formData.name} />
          <input type="hidden" name="from_email" value={formData.email} />

          <div className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className={`font-['Manrope',sans-serif] text-[#c7c7c7] ${labelSize}`}
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={`w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white placeholder-neutral-500 font-['Manrope',sans-serif] ${inputSize} focus:outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all`}
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className={`font-['Manrope',sans-serif] text-[#c7c7c7] ${labelSize}`}
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className={`w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white placeholder-neutral-500 font-['Manrope',sans-serif] ${inputSize} focus:outline-none focus:ring-2 focus:ring-[#d3e97a] transition-all`}
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className={`font-['Manrope',sans-serif] text-[#c7c7c7] ${labelSize}`}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={textareaRows}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                className={`w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white placeholder-neutral-500 font-['Manrope',sans-serif] ${inputSize} focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none transition-all`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`bg-[#d3e97a] rounded-full ${buttonPadding} font-['Manrope',sans-serif] font-bold ${buttonTextSize} text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer`}
          >
            {isSending ? "Submitting..." : "Submit"}
            {isSending && (
              <Loader2 className="w-4 h-4 animate-spin" />
            )}
          </button>
        </form>
      </div>
    );
  }
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
