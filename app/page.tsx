import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col h-screen justify-between">
      <nav className="flex px-[6%] py-2 justify-between items-center">
        <span className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Trellow
        </span>
        <Button
          className="scroll-m-20 text-base px-9 font-semibold tracking-tight"
          link="/dashboard"
        >
          Login
        </Button>
      </nav>
      <main className="px-[6%] max-w-[55%] space-y-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Trello brings all your tasks, teammates, and tools together
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Keep everything in the same place—even if your team isn’t.
        </p>
      </main>
      <footer className="text-center py-2 leading-7 [&:not(:first-child)]:mt-6">
        create by @cemy.
      </footer>
    </section>
  );
}
