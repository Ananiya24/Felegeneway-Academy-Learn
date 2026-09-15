import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-6 text-4xl font-serif font-bold text-primary md:text-5xl">We would love to hear from you.</h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Have a question about the school, our programs, or a visit? Contact our team and we will be happy to help.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-primary">Our location</h3>
                  <p className="text-muted-foreground">
                    Lebu, Nifas Silk-Lafto
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-primary">Phone</h3>
                  <p className="text-muted-foreground">+251 11 662 1234</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-primary">Email</h3>
                  <p className="text-muted-foreground">info@felegeneway.edu.et</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="min-h-[420px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            <iframe
              title="Felegeneway Academy location in Lebu, Addis Ababa"
              src="https://www.google.com/maps?q=Lebu%2C%20Addis%20Ababa%2C%20Ethiopia&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}