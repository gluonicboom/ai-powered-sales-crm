import {Crown, ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

function UpgradeCard(){
    return(
        <div className= "mx-3 mb-4 rounded-xl border border-violet-200/70 bg-gradient-to-b from-violet-50 to-white p-4">
            {/* Crown Icon */}
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                <Crown className="h-5 w-5"/>
            </div>

            {/* Heading */}
            <h3 className="text-sm font-semibold text-foreground">
                Upgrade to Pro
            </h3>
            {/* Description */}
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Unlock advanced AI insights, team collaboration and more.
            </p>
             {/* Upgrade button */}
                <Button className="mt-3 w-full bg-violet-600 text-white hover:bg-violet-700">
                    Upgrade now
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
    );
}

export default UpgradeCard;
