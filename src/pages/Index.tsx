
import Header from "@/components/Header";
import PlayerPerformance from "@/components/PlayerPerformance";
import TacticalSimulation from "@/components/TacticalSimulation";
import HistoricalInsights from "@/components/HistoricalInsights";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">AI-Powered Football Intelligence</h1>
            <p className="text-muted-foreground">Advanced analytics and predictive insights for Liverpool FC</p>
          </div>
          <Badge variant="outline" className="bg-liverpool-red text-white border-liverpool-red hover:bg-liverpool-darkRed">
            v1.0 Beta
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <PlayerPerformance />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TacticalSimulation />
            <HistoricalInsights />
          </div>
        </div>
      </main>
      
      <footer className="border-t py-4 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-liverpool-red">LFC NeuralX</span> • The Future of Intelligent Football
            </div>
            <div className="text-xs text-muted-foreground mt-2 md:mt-0">
              AI-Powered Analysis • Data-Driven Success • Liverpool FC
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
