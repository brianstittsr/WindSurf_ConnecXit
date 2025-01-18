'use client';

import { Button, Heading } from '../components/ui';

export default function EventPromotionSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <Heading size="4xl" className="text-center">
              <span className="text-black-900_02">Promote Your </span>
              <span className="text-deep_orange-500">Event Services</span>
            </Heading>
            <p className="text-xl text-gray-500 text-center">
              Join our network of top event professionals and connect with clients looking for your services.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="min-w-[208px] rounded-lg px-[26px] font-medium"
            >
              List Your Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
