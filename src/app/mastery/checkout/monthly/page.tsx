import MasteryCheckout from "@/components/MasteryCheckout";
import { annualBonusLive, blackFridayLive } from "@/config/masteryMembership";

// Per request: the annual 1-on-1 bonus expires at a fixed instant.
export const dynamic = "force-dynamic";

export default function MasteryMonthlyCheckout() {
  return <MasteryCheckout planKey="monthly" bonusLive={annualBonusLive()} blackFridayLive={blackFridayLive()} />;
}
