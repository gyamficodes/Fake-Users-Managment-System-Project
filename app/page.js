
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <main>
      <main className={roboto.className}>
        
      </main>
    </main>
  );
}
