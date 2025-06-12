"use client";

import { useEffect, useState } from "react";
import { getServices } from "@/lib/contentful";
import { ServiceEntry } from "@/types/component";
import ServiceLayout from "@/components/ServiceLayout";

export default function Service() {
  const [services, setServices] = useState<ServiceEntry[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const data = await getServices();
      setServices(data);
    }
    fetchServices();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
     

      <div className="space-y-16">
        {services.map((service, index) => (
          <ServiceLayout key={service.sys.id} service={service} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
