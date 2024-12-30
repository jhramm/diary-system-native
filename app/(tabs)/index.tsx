import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Login from "@/components/Login";
import {Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
     <SafeAreaView style={{backgroundColor: "#29dbba"}}>
      <Header title="Instructor Diary Services"/>
      <Login />
      <Footer />
     </SafeAreaView>
  );
}

