
import DashboardCard from "./DashboardCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Search, ArrowRight } from "lucide-react";

const HistoricalInsights = () => {
  return (
    <DashboardCard 
      title="Historical Insights & Trend Prediction" 
      description="AI-powered historical analysis and future tactical predictions"
    >
      <Tabs defaultValue="trends" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="trends" className="flex-1">Tactical Trends</TabsTrigger>
          <TabsTrigger value="scouting" className="flex-1">Scouting Insights</TabsTrigger>
          <TabsTrigger value="legends" className="flex-1">LFC Legends Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trends" className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-liverpool-red h-5 w-5" />
              <h3 className="font-medium">Evolving Tactical Trends</h3>
            </div>
            
            <div className="border rounded-md overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                {[
                  {
                    title: "High Line Pressing",
                    description: "Aggressive pressing continues to dominate elite football",
                    adoption: 87,
                    prediction: "Will remain dominant with more structured triggers"
                  },
                  {
                    title: "Inverted Fullbacks",
                    description: "Tactical innovation becoming mainstream across top leagues",
                    adoption: 72,
                    prediction: "Evolution towards hybrid fullback/midfielder roles"
                  },
                  {
                    title: "Fluid Front Three",
                    description: "Positional rotation in attack disrupting defensive structures",
                    adoption: 65,
                    prediction: "Increasing emphasis on cognitive positional awareness"
                  }
                ].map((trend, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-semibold text-sm">{trend.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{trend.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-medium">Adoption:</span>
                      <div className="h-2 bg-gray-200 flex-1 rounded-full overflow-hidden">
                        <div 
                          className="bg-liverpool-red h-full" 
                          style={{width: `${trend.adoption}%`}}
                        ></div>
                      </div>
                      <span className="text-xs">{trend.adoption}%</span>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <ArrowRight className="h-3 w-3" />
                        <span className="font-medium">Future Prediction:</span>
                      </div>
                      <p className="text-xs mt-1">{trend.prediction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 pt-3 text-sm">
              <h4 className="font-medium mb-2">AI-Generated Tactical Predictions</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="bg-liverpool-red/10 hover:bg-liverpool-red/20 text-liverpool-red border-liverpool-red/20">Next 6 Months</Badge>
                  <p>Increased emphasis on data-driven half-time tactical adjustments based on real-time performance metrics</p>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="bg-liverpool-red/10 hover:bg-liverpool-red/20 text-liverpool-red border-liverpool-red/20">12-18 Months</Badge>
                  <p>Evolution of defensive structures to counter AI-enhanced offensive patterns</p>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="bg-liverpool-red/10 hover:bg-liverpool-red/20 text-liverpool-red border-liverpool-red/20">2-3 Years</Badge>
                  <p>Neural training systems creating unprecedented tactical intelligence in academy prospects</p>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="scouting" className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Search className="text-liverpool-red h-5 w-5" />
              <h3 className="font-medium">Emerging Talent Radar</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Carlos Mendes",
                  position: "Defensive Midfielder",
                  age: 19,
                  club: "FC Porto",
                  matchIndex: 92,
                  strengths: ["Tactical Intelligence", "Progressive Passing", "Pressing Resistance"]
                },
                {
                  name: "Javier Ruiz",
                  position: "Advanced Playmaker",
                  age: 20,
                  club: "Real Sociedad",
                  matchIndex: 88,
                  strengths: ["Creative Vision", "Set-Piece Delivery", "Work Rate"]
                }
              ].map((player, index) => (
                <div key={index} className="border rounded-md p-4 bg-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{player.name}</h4>
                      <p className="text-xs text-muted-foreground">{player.position} • {player.age} years • {player.club}</p>
                    </div>
                    <div className="bg-liverpool-red text-white text-xs font-bold h-8 w-8 rounded-full flex items-center justify-center">
                      {player.matchIndex}%
                    </div>
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-medium">Key Strengths:</p>
                    <div className="flex flex-wrap gap-1">
                      {player.strengths.map((strength, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{strength}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t text-xs">
                    <p className="font-medium text-liverpool-red">AI Analysis:</p>
                    <p className="mt-1">Perfect tactical profile match for Liverpool's system with high development ceiling. Similar early trajectory to Xabi Alonso.</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-center mt-4 text-muted-foreground">
              <p>AI-powered scouting has identified 24 additional high-match prospects.</p>
              <p>Full data available in the complete scouting dashboard.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="legends" className="space-y-4">
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="flex space-x-6 mb-4">
                {[
                  { name: "Gerrard", number: 8 },
                  { name: "Dalglish", number: 7 },
                  { name: "Rush", number: 9 }
                ].map((legend, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-liverpool-red flex items-center justify-center text-white font-bold text-lg mb-1">
                      {legend.number}
                    </div>
                    <span className="text-xs font-medium">{legend.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-center max-w-md">
                Our AI system analyzes the playing patterns and decision-making of Liverpool legends to enhance current tactical approaches and player development.
              </p>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <div className="bg-liverpool-red text-white p-3">
                <h3 className="font-medium">Legacy Tactical Insights</h3>
              </div>
              <div className="p-4 bg-white">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold">Gerrard's Transitional Play</h4>
                    <p className="text-xs mt-1">
                      AI has identified 7 unique transitional patterns from defense to attack that can be adapted to the modern game, particularly beneficial for our current midfield setup.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Dalglish's Positional Intelligence</h4>
                    <p className="text-xs mt-1">
                      Movement patterns and spatial awareness techniques have been integrated into forward training programs, with 28% improvement in offensive positioning metrics.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Historic Pressing Systems</h4>
                    <p className="text-xs mt-1">
                      The evolution of Liverpool's pressing approach from the 1980s to present day provides valuable insights for further tactical refinement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardCard>
  );
};

export default HistoricalInsights;
