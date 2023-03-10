import { ActivityIndicator, View, Text } from "react-native";
import { useNavigationState } from '@react-navigation/native'

interface LoadingTextProps {
    text?: string;
    subText?: string;
}

export function LoadingText({ text = "Carregando...", subText = "" }: LoadingTextProps) {
    const state = useNavigationState(state => state);
    const routeName = (state.routeNames[state.index]);

    if (routeName === "detailsbrother") {
        return (
            <View 
                className="justify-center items-center"
            >
                <ActivityIndicator 
                    color="#F99B16"
                    size="large"
                />
    
                <Text className="mt-2 font-extrabold text-base text-orange-400">
                    {text.toUpperCase()}
                </Text>
                
                <Text className="text-center font-extrabold text-base text-background">
                    {subText}
                </Text>            
            </View>
        )
    }

    return (
        <View 
            className="flex-1 h-[75vh] justify-center items-center"
        >
            <ActivityIndicator 
                color="orange"
                size="large"
            />

            <Text className="mt-2 font-extrabold text-base text-orange-500">
                {text.toUpperCase()}
            </Text>
            
            <Text className="mt-1 text-center font-extrabold text-base text-orange-400">
                {subText}
            </Text>            
        </View>
    )
}