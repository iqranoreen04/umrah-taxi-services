import LegalPage from "@/components/site/legal-page";

export const metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      sections={[
        {
          heading: "Cancellations",
          body: [
            "You can cancel your booking free of charge if you let us know at least 24 hours before your scheduled pickup time.",
            "Cancellations made less than 24 hours before pickup may be charged part of the fare.",
          ],
        },
        {
          heading: "No-Shows",
          body: [
            "If the passenger does not show up at the agreed pickup point and cannot be reached, the booking may be charged in full.",
          ],
        },
        {
          heading: "Flight Delays",
          body: [
            "We track flights for airport pickups. If your flight is delayed, we adjust the pickup time at no extra cost.",
          ],
        },
        {
          heading: "How Refunds Are Paid",
          body: [
            "Where a refund applies, it is paid back using the original payment method, normally within 7 working days.",
          ],
        },
      ]}
    />
  );
}
