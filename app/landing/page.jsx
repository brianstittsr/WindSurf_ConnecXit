'use client';

import CallToActionSection from './CallToActionSection';
import EventPlanningSection from './EventPlanningSection';
import EventPromotionSection from './EventPromotionSection';
import VendorSearchSection from './VendorSearchSection';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <EventPlanningSection />
      <VendorSearchSection />
      <EventPromotionSection />
      <CallToActionSection />
    </main>
  );
}
