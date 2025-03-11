
import { cn } from "@/lib/utils";
import { Brain, ChartLine, Search, Target } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-2 border-b", className)}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-liverpool-red p-2 rounded">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center">
              LFC <span className="text-liverpool-red ml-1">NeuralX</span>
            </h1>
            <p className="text-xs text-muted-foreground">Intelligent Football Strategy</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <NavItem icon={<ChartLine className="h-4 w-4 mr-1" />} label="Performance" active />
          <NavItem icon={<Target className="h-4 w-4 mr-1" />} label="Tactics" />
          <NavItem icon={<Search className="h-4 w-4 mr-1" />} label="Scouting" />
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="text-xs bg-liverpool-darkRed text-white px-3 py-1 rounded-full">
            AI Active
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center text-sm font-medium transition-colors hover:text-liverpool-red",
        active ? "text-liverpool-red" : "text-muted-foreground"
      )}
    >
      {icon}
      {label}
    </a>
  );
};

export default Header;
