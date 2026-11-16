// DRAFT UMUM. Cocokkan dengan kebijakan asli by.Ficlo (refund, ongkir, jam cut-off)
// dan fitur yang benar-benar dibangun, lalu minta admin dan tim mengecek ulang.
// Ini bukan nasihat hukum.
export const LEGAL_DOCS = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'November 2026',
    sections: [
      {
        heading: 'Information we collect',
        paragraphs: [
          'When you create an account or place an order, we collect your name, email address, and password (stored in encrypted form). For orders, we also collect the recipient’s name, delivery address, delivery date and time, your greeting card message, and the payment proof you upload.',
        ],
      },
      {
        heading: 'How we use your information',
        paragraphs: [
          'We use your information to process and deliver your order, verify your payment, send order status notifications through the website and email, and answer your questions.',
        ],
      },
      {
        heading: 'Payment proof',
        paragraphs: [
          'Payment proofs are stored privately. Only you and the by.Ficlo admin can view them.',
        ],
      },
      {
        heading: 'Chatbot',
        paragraphs: [
          'Messages you send to our chatbot may be stored to improve answer quality and may be processed by an AI service provider. Please do not share sensitive information, such as passwords or bank card details, in the chat.',
        ],
      },
      {
        heading: 'Sharing your information',
        paragraphs: [
          'We do not sell your personal information. We share it only with the services needed to run the website (such as hosting, database, email, and AI providers) and with couriers who deliver your order, limited to the details required for delivery.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You may ask us to correct or delete your information by contacting us through the details in the Location and Contact section. We keep order records for as long as needed for our business and bookkeeping purposes.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    updated: 'November 2026',
    sections: [
      {
        heading: 'About by.Ficlo',
        paragraphs: [
          'by.Ficlo is a florist based in Depok. This website lets you browse our catalog, place orders, and track their status.',
        ],
      },
      {
        heading: 'Your account',
        paragraphs: [
          'Please provide accurate information and keep your password confidential. You are responsible for activity that happens under your account.',
        ],
      },
      {
        heading: 'Orders and availability',
        paragraphs: [
          'All prices are in Indonesian Rupiah (IDR). Orders are subject to product and stock availability. The cut-off time for same-day orders is shown on the order form, and orders placed after it are scheduled for the next day.',
        ],
      },
      {
        heading: 'Payment',
        paragraphs: [
          'Payment is made by manual bank transfer. After transferring, upload your payment proof. Your order is processed once our admin has verified the payment. Orders that are not paid before the payment deadline may expire automatically.',
        ],
      },
      {
        heading: 'Delivery and pickup',
        paragraphs: [
          'Delivery areas, fees, and schedules are confirmed with our admin. Delivery times are estimates and may be affected by traffic, weather, or courier availability.',
        ],
      },
      {
        heading: 'Product appearance',
        paragraphs: [
          'Our bouquets are handcrafted and fresh flowers are natural products, so slight variations from the catalog photos may occur.',
        ],
      },
      {
        heading: 'Changes and refunds',
        paragraphs: [
          'Requests to change, cancel, or refund an order are handled by our admin case by case. Please contact us as soon as possible through WhatsApp.',
        ],
      },
      {
        heading: 'Chatbot',
        paragraphs: [
          'Our chatbot provides general information only. Please confirm prices, stock, and delivery details with our admin before ordering.',
        ],
      },
      {
        heading: 'Changes to these terms',
        paragraphs: [
          'We may update these terms from time to time. Continuing to use the website means you accept the updated terms.',
        ],
      },
    ],
  },
}