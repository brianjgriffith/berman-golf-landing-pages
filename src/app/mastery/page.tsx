import MasteryMembershipPage from "./MasteryMembershipPage";
import { annualBonusLive } from "@/config/masteryMembership";

// Per request, not prerendered: the annual 1-on-1 bonus expires at a fixed
// instant (config/masteryMembership.ts) and the page has to drop it then,
// not at the next deploy.
export const dynamic = "force-dynamic";

export default function MasteryPage() {
  return <MasteryMembershipPage bonusLive={annualBonusLive()} />;
}
