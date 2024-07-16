import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   <h2> Go to dashboard for giving <span style="color: blue;">mock interview</span></h2>
    <Button><a href="https://ai-interview-mocker-app-three.vercel.app/dashboard">dashboard</a></Button>
   </div>
  );
}
