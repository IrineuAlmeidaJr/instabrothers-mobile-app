import { View, Alert } from "react-native";

import { BackButton } from "../components/buttons/BackButton";
import { ShowBrothersRanking } from "../components/compRankingBrother/ShowBrothersRanking";


export function RankingBrothers() {

    
    return (
        <View className="flex-1 pt-12 bg-orange-300">
            <View className="px-2 bg-orange-300 ">
                <BackButton />
            </View>
            <ShowBrothersRanking />
        </View>
    )
}

