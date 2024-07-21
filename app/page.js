import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (

   <div>
     <h2 className="font-bold text-2xl">
        Click the Welcome Button to Starting the <span style={{ color: 'blue' }}>Mock Interview</span>
      </h2>
      <a href="https://ai-interview-mocker-app-three.vercel.app/dashboard">
        <Button className="font-bold text-2xl">Welcome!</Button>
      </a>

  </div>
  )
}
