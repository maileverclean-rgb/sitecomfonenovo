import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Everclean Multi-services",
  description: "Privacy Policy for Everclean Multi-services. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <p className="text-muted-foreground mb-6">
              Everclean Multi-services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our services or visit our website.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-foreground mb-2">1.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Name and contact information (address, email, phone number)</li>
                <li>Property address and access information</li>
                <li>Payment information (credit card numbers, billing address)</li>
                <li>Service preferences and special instructions</li>
                <li>Communication history with our team</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">1.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To provide and improve our cleaning services</li>
                <li>To process bookings and payments</li>
                <li>To communicate with you about appointments and service updates</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send promotional materials and service offers (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To detect and prevent fraud or abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist 
                us in operating our business (e.g., payment processors, scheduling software)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Protection:</strong> To protect the rights, property, or safety of Everclean Multi-services, 
                our employees, or others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure storage of personal information</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Regular security assessments and updates</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While 
                we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes for which it 
                was collected, including to satisfy legal, accounting, or reporting requirements. When we no longer 
                need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Access:</strong> The right to request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> The right to request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> The right to request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> The right to opt out of marketing communications</li>
                <li><strong>Portability:</strong> The right to receive your data in a portable format</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                Cookies are small data files stored on your device that help us understand how you use our website.
              </p>
              <p className="text-muted-foreground">
                You can control cookie settings through your browser. Note that disabling cookies may affect 
                some functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies 
                of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If we become aware that we have collected information from 
                a child, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically to stay 
                informed about how we protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
              By using our services or visiting our website, you acknowledge that you have read and understood 
              this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
