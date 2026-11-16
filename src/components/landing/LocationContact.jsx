import locationBg from '../../assets/location.png'
import iconLocation from '../../assets/icon/lloc.png'
import iconWhatsapp from '../../assets/icon/lwa.png'
import iconInstagram from '../../assets/icon/lig.png'
import { CONTACT } from '../../data/contact'

const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`

const mapUrl =
  CONTACT.mapEmbedUrl ||
  `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT.mapQuery
  )}&hl=en&z=17&output=embed`

function ContactItem({ icon, title, children }) {
  return (
    <li className="flex items-start gap-4">
      <img
        src={icon}
        alt=""
        className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
      />
      <div>
        <h3 className="font-display text-lg font-bold italic text-white sm:text-xl lg:text-2xl">
          {title}
        </h3>
        <div className="mt-1 text-sm font-medium text-white sm:text-base lg:text-lg">
          {children}
        </div>
      </div>
    </li>
  )
}

export default function LocationContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-ivory px-4 py-6 sm:px-6 lg:px-12"
    >
      <div className="relative mx-auto max-w-[1440px] overflow-hidden">
        <img
          src={locationBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative z-10 px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
              Location & Contact by.Ficlo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-white sm:text-lg lg:text-xl">
              We’d love to connect with you! Visit our location or send us a
              message to brighten someone’s day.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <ul className="space-y-6">
              <ContactItem title="Florist Location" icon={iconLocation}>
                <p>{CONTACT.address}</p>
              </ContactItem>

              <ContactItem title="WhatsApp Admin" icon={iconWhatsapp}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {CONTACT.whatsappDisplay} ({CONTACT.whatsappName})
                </a>
              </ContactItem>

              <ContactItem title="Social Media" icon={iconInstagram}>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {CONTACT.instagramHandle} (Instagram)
                </a>
              </ContactItem>
            </ul>

            <div>
              <div className="h-72 overflow-hidden rounded-2xl bg-white shadow-lg sm:h-80 lg:h-[340px]">
                <iframe
                  title="Peta lokasi by.Ficlo di Cimanggis, Depok"
                  src={mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <a
                href={CONTACT.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline sm:text-base"
              >
                Open in Google Maps
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M9 7h8v8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}