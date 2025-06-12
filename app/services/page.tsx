import { getServices } from "@/lib/contentful";
import { ServiceEntry } from "@/types/component";
import ServiceLayout from "@/components/ServiceLayout";

export default async function Service() {
  const services: ServiceEntry[] = await getServices();

  return (
    <section className="bg-white max-w-7xl mx-auto py-16 px-4">
      <div className="space-y-16">
        {services.map((service, index) => (
          <ServiceLayout key={service.sys.id} service={service} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
