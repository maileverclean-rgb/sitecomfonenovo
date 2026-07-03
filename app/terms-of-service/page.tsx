import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Everclean Multi-services",
  description: "Terms of Service for Everclean Multi-services professional cleaning services in Maryland and Northern Virginia.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <p className="text-muted-foreground mb-6">
              Welcome to Everclean Multi-services. These Terms of Service (&quot;Terms&quot;) govern your use of our cleaning services. 
              By booking our services, you agree to be bound by these Terms. Please read them carefully.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Services</h2>
              <p className="text-muted-foreground mb-4">
                Everclean Multi-services provides professional residential and commercial cleaning services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>General house cleaning and maintenance cleaning</li>
                <li>Deep cleaning services</li>
                <li>Move-in and move-out cleaning</li>
                <li>Post-construction cleaning</li>
                <li>Professional carpet and upholstery cleaning</li>
                <li>Commercial and office cleaning</li>
              </ul>
              <p className="text-muted-foreground">
                The scope of each service will be agreed upon before the cleaning appointment and documented in your service agreement or quote.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Booking and Scheduling</h2>
              <p className="text-muted-foreground mb-4">
                <strong>2.1 Booking Confirmation:</strong> All bookings are subject to availability. A booking is confirmed only after you receive 
                written confirmation from Everclean Multi-services via email, text message, or phone.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>2.2 Access to Property:</strong> You are responsible for providing access to the property at the scheduled time. 
                If our team cannot access the property, a trip fee may apply.
              </p>
              <p className="text-muted-foreground">
                <strong>2.3 Rescheduling:</strong> We understand that schedules can change. Please contact us at least 24 hours before 
                your scheduled appointment to reschedule without any fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Cancellation Policy</h2>
              <p className="text-muted-foreground mb-4">
                <strong>3.1 Cancellation by Client:</strong> Cancellations made with less than 24 hours notice may be subject to a 
                cancellation fee of up to 50% of the quoted service price.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>3.2 Cancellation by Everclean:</strong> In rare circumstances, we may need to cancel or reschedule your 
                appointment due to emergencies, weather conditions, or unforeseen circumstances. We will make every effort to 
                notify you as soon as possible and reschedule at your convenience.
              </p>
              <p className="text-muted-foreground">
                <strong>3.3 No-Show:</strong> If you are not present or do not provide access at the scheduled time without prior 
                notice, the full service fee may be charged.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Pricing and Payment</h2>
              <p className="text-muted-foreground mb-4">
                <strong>4.1 Quotes:</strong> All quotes are estimates based on the information provided. Final pricing may vary 
                based on actual conditions encountered during the service.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>4.2 First-Time Clients:</strong> For first-time clients, full payment is required in advance before the 
                service is performed. Payment must be received through the payment method indicated by Everclean Multi-services 
                prior to the scheduled appointment.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>4.3 Client Not Present:</strong> If the client will not be present during the cleaning service, a 50% 
                deposit is required in advance through the payment method indicated by Everclean Multi-services. The remaining 
                balance is due upon completion of the service.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>4.4 Payment Methods:</strong> We accept cash, credit cards, Zelle, and other payment methods as specified 
                at the time of booking. Payment details and instructions will be provided upon booking confirmation.
              </p>
              <p className="text-muted-foreground">
                <strong>4.5 Additional Services:</strong> If additional services are requested during a cleaning appointment, 
                they will be provided at an additional cost, which will be communicated before the work is performed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Satisfaction Guarantee</h2>
              <p className="text-muted-foreground mb-4">
                We are committed to your complete satisfaction. If you are not satisfied with any aspect of our service, 
                please notify us within 24 hours of the service completion. We will return to address any concerns at no 
                additional cost.
              </p>
              <p className="text-muted-foreground">
                This guarantee is subject to reasonable limitations and does not cover issues caused by factors outside 
                our control, such as pre-existing damage or conditions that require specialized treatment beyond the 
                scope of our standard services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Liability and Insurance</h2>
              <p className="text-muted-foreground mb-4">
                <strong>6.1 Insurance:</strong> Everclean Multi-services is fully licensed, bonded, and insured. We carry 
                general liability insurance to protect against accidental damage or injury during our services.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>6.2 Damage Claims:</strong> In the unlikely event of damage caused by our team, please report it 
                within 24 hours of the service. We will assess the situation and work with you to resolve the matter fairly.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>6.3 Limitation of Liability:</strong> Our liability is limited to the cost of the services provided 
                or the actual cost of repairing or replacing damaged items, whichever is less. We are not liable for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Pre-existing damage or conditions</li>
                <li>Items of exceptional value not disclosed prior to service</li>
                <li>Damage caused by defective, worn, or improperly installed items</li>
                <li>Indirect or consequential damages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                To ensure the best possible service, clients agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Secure or remove valuable, fragile, or sentimental items before service</li>
                <li>Inform us of any areas requiring special attention or caution</li>
                <li>Ensure pets are secured in a safe area during the cleaning</li>
                <li>Provide accurate information about the property size and condition</li>
                <li>Disclose any known hazards or safety concerns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Health and Safety</h2>
              <p className="text-muted-foreground mb-4">
                <strong>8.1 Hazardous Materials:</strong> We do not clean or handle hazardous materials, biohazards, 
                or areas with mold contamination. Such situations require specialized services.
              </p>
              <p className="text-muted-foreground">
                <strong>8.2 Safe Working Conditions:</strong> Our team members have the right to refuse service if they 
                encounter unsafe working conditions, harassment, or any situation that poses a risk to their health or safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Privacy</h2>
              <p className="text-muted-foreground">
                We respect your privacy. Personal information collected during the booking and service process is handled 
                in accordance with our Privacy Policy. We do not share your information with third parties except as 
                necessary to provide our services or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                Everclean Multi-services reserves the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting to our website. Your continued use of our services after any changes constitutes 
                acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the State of Maryland. Any disputes arising from these Terms or 
                our services shall be resolved in the courts of Maryland.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-foreground font-semibold">Everclean Multi-services</p>
                <p className="text-muted-foreground mt-2">
                  Phone: <a href="tel:+12403752009" className="text-primary hover:underline">(240) 375-2009</a>
                </p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:contact@evercleanmultiservices.com" className="text-primary hover:underline">contact@evercleanmultiservices.com</a>
                </p>
              </div>
            </section>

            <p className="text-muted-foreground text-sm mt-8">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these 
              Terms of Service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
