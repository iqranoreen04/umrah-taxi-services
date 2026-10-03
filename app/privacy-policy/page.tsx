import LegalPage from "@/components/site/legal-page";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you book a ride or contact us, we collect the details you provide, such as your name, phone or WhatsApp number, email address, pickup and drop-off locations, travel dates, and flight details.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information only to arrange and confirm your transportation, communicate with you about your booking, and improve our service.",
            "We do not sell or rent your personal information to third parties.",
          ],
        },
        {
          heading: "Sharing Your Information",
          body: [
            "Your trip details are shared only with the driver assigned to your booking, and only as needed to complete your journey.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable steps to protect your information. Booking messages sent through WhatsApp are also subject to WhatsApp's own privacy policy.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You may ask us at any time to view, correct, or delete the personal information we hold about you.",
          ],
        },
      ]}
    />
  );
}
