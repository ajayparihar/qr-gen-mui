import icon from "../assets/icon.png"; // Ensure the path is correct
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";

export const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 pb-0">
        <a
          href="/"
          className="h-10 rounded-md shadow-[0_0px_2px_0_rgba(255,255,255,0.5)]"
        >
          <img src={icon} alt="QR Generator Logo" className="h-10 rounded-md" />
        </a>
        <h1 className="text-4xl font-extrabold tracking-tight flex-grow text-center">
          QR Generator
        </h1>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
      <Separator className="my-4 w-full" />
    </div>
  );
};
