"use client";

import PageHero from "@/components/site/page-hero";
import BookingWidget from "@/components/site/booking-widget";
import HowItWorks from "@/components/site/how-it-works";

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Your Ride"
        title="Reserve Your Umrah Taxi"
        description="Fill in your trip details and we will confirm your booking and price on WhatsApp within minutes."
      />

      <section className="section-py">
        <div className="container-mx container-px max-w-4xl">
          <BookingWidget />
        </div>
      </section>

      <HowItWorks />
    </>
  );
}
