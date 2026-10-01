import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/services/contact";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import { ContactFormData } from "@/schemas/contact";

export const useSendMessage = () => {
  return useMutation({
    mutationFn: (data: ContactFormData) => sendMessage(data),
    onSuccess: () => {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error: Error) => {
      console.error("Error sending message:", error);
      const errorMessage =
        (isAxiosError<{ error?: string }>(error) ? error.response?.data?.error : undefined) ||
        error.message ||
        "Failed to send message. Please try again.";
      toast.error("Something went wrong.", {
        description: errorMessage,
      });
    },
  });
};
