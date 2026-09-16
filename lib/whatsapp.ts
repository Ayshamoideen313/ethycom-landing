// TODO: replace with Ethycom's real WhatsApp number, country code first, no + or spaces
// Example: 91XXXXXXXXXX
export const WHATSAPP_NUMBER = "919207286777";

/**
 * Builds a wa.me link that opens WhatsApp with a pre-filled enquiry message.
 * Pass a product/category name to personalize the message; omit it for a
 * generic enquiry link (e.g. from the hero button or footer).
 */
export function getWhatsAppLink(itemName?: string) {
  const baseMessage = itemName
    ? `Hi, I'm interested in ${itemName}. Could you share more details?`
    : `Hi, I'd like to know more about your products.`;

  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
