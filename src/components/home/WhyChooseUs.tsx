import Container from "../shared/Container";
import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Secure Marketplace",
    description:
      "Trade with verified buyers and sellers in a safe and trusted environment.",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    iconContainer: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
  },
  {
    id: 2,
    icon: Zap,
    title: "Easy Listing",
    description:
      "Post your item within minutes using our simple and user-friendly interface.",
    iconContainer: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white"
  },
  {
    id: 3,
    icon: BadgeDollarSign,
    title: "Best Deals",
    description:
      "Discover quality pre-owned products at affordable prices every day.",
    iconContainer: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
  },
  {
    id: 4,
    icon: Users,
    title: "Trusted Community",
    description:
      "Join thousands of active buyers and sellers across the country.",
    iconContainer: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 py-16 md:py-24 border-t border-gray-100/60">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm mb-3">
            ✨ Core Value
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Why Choose ResellHub?
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Experience a smarter, safer, and faster way to buy and sell
            second-hand products with confidence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-blue-900/5 flex flex-col h-full"
              >
                {/* Micro-Interaction Icon Box */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 border border-transparent group-hover:scale-105 shadow-sm group-hover:shadow-md ${feature.iconContainer}`}>
                  <Icon
                    size={26}
                    className="transition-transform duration-300 group-hover:rotate-6"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-grow space-y-2.5">
                  <h3 className="text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-500 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;