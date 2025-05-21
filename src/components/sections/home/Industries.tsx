"use client";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    id: "retail",
    title: "Retail & Convenience Stores",
    summary:
      "Improve customer experience, operational compliance, and staff professionalism.",
    sections: [
      {
        title: "Customer Retail Experience: Mystery Shopping & Feedback",
        content: (
          <div className="space-y-4">
            <p>
              We deploy mystery shoppers to evaluate stores as real customers,
              assessing service quality, checkout efficiency, and staff
              professionalism.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">
                Key Metrics & Business Impact
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Metric
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        What It Measures
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Why It&apos;s Useful
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Customer Service Ratings
                      </td>
                      <td className="px-4 py-2">
                        Staff friendliness, attentiveness, helpfulness
                      </td>
                      <td className="px-4 py-2">
                        Poor service leads to customer churn—tracking allows
                        targeted training
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Checkout Speed & Accuracy
                      </td>
                      <td className="px-4 py-2">
                        Wait times, transaction errors, receipt issuance
                      </td>
                      <td className="px-4 py-2">
                        Slow or inaccurate checkouts cause long queues & lost
                        sales
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Product Availability
                      </td>
                      <td className="px-4 py-2">
                        Stock levels, planogram compliance
                      </td>
                      <td className="px-4 py-2">
                        Frequent out-of-stock issues lead to lost revenue
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Cleanliness & Ambience
                      </td>
                      <td className="px-4 py-2">
                        Store hygiene, organization, aesthetics
                      </td>
                      <td className="px-4 py-2">
                        Messy stores reduce customer trust
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">
                Staff Professionalism Checks
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span> Uniform & Appearance
                  Compliance
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Receipt Issuance Verification
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Staff Conduct & Attitude
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Adherence to Promotions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Security & Cash Handling
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Freezer & Cold Storage Compliance",
        content: (
          <div className="space-y-4">
            <p>
              Ensuring frozen and perishable products are stored at the right
              temperature with minor cleaning support when needed.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">
                Key Metrics & Business Impact
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Metric
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        What It Measures
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Why It&apos;s Useful
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Temperature Compliance
                      </td>
                      <td className="px-4 py-2">
                        Freezer temps meet required standards
                      </td>
                      <td className="px-4 py-2">
                        Avoids food spoilage & legal violations
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Expired Product Checks
                      </td>
                      <td className="px-4 py-2">
                        Frequency of expired stock found
                      </td>
                      <td className="px-4 py-2">
                        Prevents customer complaints
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Stock Organization (FIFO)
                      </td>
                      <td className="px-4 py-2">
                        Whether First-In-First-Out is followed
                      </td>
                      <td className="px-4 py-2">Poor FIFO causes waste</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Energy Efficiency
                      </td>
                      <td className="px-4 py-2">Identifies faulty units</td>
                      <td className="px-4 py-2">Cuts electricity costs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
      },
    ],
    benefits: [
      "Real-time visibility into customer experience and compliance",
      "Actionable insights to correct infractions immediately",
      "Improved brand image through consistent standards",
      "Industry benchmarking against competitors",
    ],
  },
  {
    id: "food",
    title: "Food & Beverage",
    summary:
      "Optimize customer experience, service efficiency, hygiene, and revenue performance.",
    sections: [
      {
        title: "Mystery Shopping Audits",
        content: (
          <div className="space-y-4">
            <p>
              We deploy mystery diners to assess F&B businesses from a
              customer&apos;s perspective, gathering objective data on service
              quality and food standards.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">
                Key Metrics & Business Impact
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Metric
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        What It Measures
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Why It&apos;s Useful
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium">Service Speed</td>
                      <td className="px-4 py-2">
                        Time from order to food arrival
                      </td>
                      <td className="px-4 py-2">
                        Slow service = customer loss
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Order Accuracy</td>
                      <td className="px-4 py-2">
                        Correct orders, food presentation
                      </td>
                      <td className="px-4 py-2">
                        Mistakes lead to negative reviews
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Staff Professionalism
                      </td>
                      <td className="px-4 py-2">
                        Greetings, engagement, complaints
                      </td>
                      <td className="px-4 py-2">
                        Unfriendly service = bad word-of-mouth
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Upselling</td>
                      <td className="px-4 py-2">
                        Suggesting combos or add-ons
                      </td>
                      <td className="px-4 py-2">Higher average order value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Example Impact</h4>
              <div className="p-3 bg-blue-50 rounded border border-blue-100">
                <p className="font-medium">Problem:</p>
                <p>
                  A restaurant had inconsistent average order values across
                  branches.
                </p>
                <p className="font-medium mt-2">Solution:</p>
                <p>Staff received upselling training after identifying gaps.</p>
                <p className="font-medium mt-2">Outcome:</p>
                <p>Average order value increased by 18% in 3 months.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Customer Surveys",
        content: (
          <div className="space-y-4">
            <p>
              Collecting direct customer feedback to measure satisfaction and
              track long-term improvements.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">
                Key Metrics & Business Impact
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Metric
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        What It Measures
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Why It&apos;s Useful
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Net Promoter Score (NPS)
                      </td>
                      <td className="px-4 py-2">
                        Likelihood of recommendation
                      </td>
                      <td className="px-4 py-2">High NPS = strong loyalty</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">CSAT Score</td>
                      <td className="px-4 py-2">Overall satisfaction</td>
                      <td className="px-4 py-2">Tracks brand health</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Food Quality Perception
                      </td>
                      <td className="px-4 py-2">
                        Freshness, taste, presentation
                      </td>
                      <td className="px-4 py-2">Maintains consistency</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Common Complaints
                      </td>
                      <td className="px-4 py-2">Recurring issues mentioned</td>
                      <td className="px-4 py-2">
                        Early detection prevents PR issues
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
      },
    ],
    benefits: [
      "Higher revenue through better upselling",
      "Improved customer retention",
      "Operational efficiency insights",
      "Stronger brand reputation",
    ],
  },
  {
    id: "mobile",
    title: "Food Trucks & Pop-Ups",
    summary:
      "Improve service quality, operational efficiency, and customer retention.",
    sections: [
      {
        title: "Mystery Shopping Audits",
        content: (
          <div className="space-y-4">
            <p>
              Mystery shoppers evaluate every stage of the customer journey for
              mobile food businesses.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">
                Key Metrics & Business Impact
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Metric
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        What It Measures
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Why It&apos;s Useful
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Order Efficiency
                      </td>
                      <td className="px-4 py-2">
                        Speed of taking/preparing orders
                      </td>
                      <td className="px-4 py-2">
                        Slow service = lost customers
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Transaction Experience
                      </td>
                      <td className="px-4 py-2">
                        Payment options, receipt issuance
                      </td>
                      <td className="px-4 py-2">Prevents revenue leakage</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Food Quality</td>
                      <td className="px-4 py-2">
                        Freshness, portion sizes, temperature
                      </td>
                      <td className="px-4 py-2">Maintains brand reputation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Location Suitability
                      </td>
                      <td className="px-4 py-2">
                        Visibility, accessibility, signage
                      </td>
                      <td className="px-4 py-2">Impacts sales potential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Customer Surveys",
        content: (
          <div className="space-y-4">
            <p>
              Collecting direct feedback to measure satisfaction and identify
              areas for improvement.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">
                Key Metrics & Business Impact
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Metric
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        What It Measures
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Why It&apos;s Useful
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Net Promoter Score
                      </td>
                      <td className="px-4 py-2">
                        Likelihood of recommendation
                      </td>
                      <td className="px-4 py-2">
                        Higher NPS = stronger loyalty
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Service Satisfaction
                      </td>
                      <td className="px-4 py-2">
                        Did customers feel well served
                      </td>
                      <td className="px-4 py-2">Tracks service improvements</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">
                        Payment Preferences
                      </td>
                      <td className="px-4 py-2">Cash, card, QR code usage</td>
                      <td className="px-4 py-2">Ensures smooth transactions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
      },
    ],
    benefits: [
      "Higher sales through optimized operations",
      "Stronger customer loyalty",
      "Better hygiene and compliance",
      "Smoother transaction processes",
    ],
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    industries.reduce((acc, industry) => {
      acc[industry.id] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const { language } = useLanguage();
  const t = translations[language].industries;

  const toggleSection = (industryId: string, sectionIndex: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [`${industryId}-${sectionIndex}`]: !prev[`${industryId}-${sectionIndex}`],
    }));
  };

  const currentIndustry = industries.find((ind) => ind.id === activeIndustry);
  const translatedIndustry = t.industries.find((ind) => ind.id === activeIndustry);

  return (
    <section className="py-20 bg-custom-light">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-playfair text-center mb-12"
        >
          {t.title}
        </motion.h2>

        {/* Industry Selector */}
        <div className="flex justify-center mb-12">
          <nav className="bg-[#d3cccb] backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {industries.map((industry) => {
                const translatedTitle = t.industries.find(ti => ti.id === industry.id)?.title || industry.title;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`text-sm md:text-base transition-colors px-4 py-1 rounded-full ${
                      activeIndustry === industry.id
                        ? "bg-[#171716] text-white font-bold"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {translatedTitle}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Content Area */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto"
        >
          {currentIndustry && translatedIndustry && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-5 font-playfair">
                  {translatedIndustry.title} {t.solutions}
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                  {translatedIndustry.summary}
                </p>
              </div>

              {/* Benefits */}
              <div className="p-8 rounded-lg">
                <h2 className="text-lg lg:text-xl mb-6 lg:mb-8 text-center">
                  {t.howWeHelp} {translatedIndustry.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {translatedIndustry.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#171716] text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <p className="text-gray-800 self-center lg:text-lg">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <h1 className="font-bold text-2xl lg:text-3xl mt-12 mb-6">
                {t.exampleSolutions}
              </h1>

              {/* Sections */}
              <div className="space-y-6">
                {currentIndustry.sections.map((section, index) => {
                  const translatedSection = translatedIndustry.sections[index];
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-[#d3cccb]"
                    >
                      <button
                        onClick={() => toggleSection(currentIndustry.id, index)}
                        className="w-full flex justify-between items-center p-4 hover:bg-[#c4bdbd] transition-colors"
                      >
                        <h4 className="font-semibold text-lg">{translatedSection.title}</h4>
                        {expandedSections[`${currentIndustry.id}-${index}`] ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>

                      {expandedSections[`${currentIndustry.id}-${index}`] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-4 bg-[#d3cccb]"
                        >
                          {section.content}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
