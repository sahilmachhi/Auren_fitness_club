import JoiningFeesAndTermsSection from "./Components/JoiningFeesAndTermsSection";
import MembershipPlansSection from "./Components/MembershipPlansSection";
import MembershipEnquirySection from "./Components/MembershipEnquirySection";
import PricingComparisonSection from "./Components/PricingComparisonSection";

export default function page() {
  return (
    <>
      <main className="min-h-screen bg-surface-dark">
        <MembershipPlansSection />
        <PricingComparisonSection />
        <JoiningFeesAndTermsSection />
        <MembershipEnquirySection />
      </main>
    </>
  );
}
