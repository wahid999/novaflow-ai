import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+4475349931475"
      target="_blank"
      className="fixed bottom-6 left-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}