import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
   <div>
   <h2> Go to dashboard for giving <span style="color: blue;">mock interview</span></h2>
    <Button onClick={()=> navigate("./dashboard")}>Dashboard</Button>
   </div>
  );
}
