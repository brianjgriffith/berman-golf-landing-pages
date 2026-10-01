import MasteryCheckout from "@/components/MasteryCheckout";
import { annualBonusLive } from "@/config/masteryMembership";

// Per request: the annual 1-on-1 bonus expires at a fixed instant.
export const dynamic = "force-dynamic";

export default function MasteryMonthlyCheckout() {
  return <MasteryCheckout planKey="monthly" bonusLive={annualBonusLive()} />;
}
