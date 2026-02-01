import { useParams, useNavigate } from "react-router-dom";
import { services } from "@/data/services"; // or move array here
import { ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-primary"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-xl object-cover w-full h-[400px]"
        />

        <div>
          <h1 className="font-serif text-4xl font-bold mb-4">
            {service.title}
          </h1>

          <p className="text-muted-foreground mb-6">
            {service.description}
          </p>

          <div className="space-y-2">
            <p><strong>Price:</strong> {service.price}</p>
            <p><strong>Duration:</strong> {service.duration}</p>
          </div>

          <a
            href="/#booking"
            className="inline-block mt-8 btn-gold px-8 py-3"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
