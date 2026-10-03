import LegalPage from "@/components/site/legal-page";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      sections={[
        {
          heading: "Bookings",
          body: [
            "A booking is confirmed once our team confirms it with you by WhatsApp, phone, or email. Please make sure your pickup details, date, time, and contact number are correct.",
          ],
        },
        {
          heading: "Prices",
          body: [
            "Prices shown on the website are starting prices in SAR and may vary depending on date, vehicle availability, and special requirements. Your final price will be confirmed before your trip.",
          ],
        },
        {
          heading: "Waiting Time",
          body: [
            "For airport pickups, we track your flight and allow reasonable waiting time after landing. For other pickups, please be ready at the agreed time; extended waiting may incur an extra charge.",
          ],
        },
        {
          heading: "Passengers & Luggage",
          body: [
            "Please choose a vehicle that fits your number of passengers and luggage. For safety, we cannot carry more passengers than the vehicle's seating capacity.",
          ],
        },
        {
          heading: "Conduct",
          body: [
            "We ask all passengers to treat drivers and vehicles with respect. Smoking is not permitted in our vehicles.",
          ],
        },
      ]}
    />
  );
}
