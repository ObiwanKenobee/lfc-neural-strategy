
import { useState } from "react";
import DashboardCard from "./DashboardCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TacticalSimulation = () => {
  const [selectedFormation, setSelectedFormation] = useState("4-3-3");
  const [selectedOpponent, setSelectedOpponent] = useState("Manchester City");
  
  return (
    <DashboardCard 
      title="Tactical Simulation" 
      description="AI-driven tactical modeling and match intelligence"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Formation</label>
            <Select 
              value={selectedFormation} 
              onValueChange={setSelectedFormation}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select formation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4-3-3">4-3-3 (Attacking)</SelectItem>
                <SelectItem value="4-2-3-1">4-2-3-1 (Balanced)</SelectItem>
                <SelectItem value="3-4-3">3-4-3 (Wing Play)</SelectItem>
                <SelectItem value="4-4-2">4-4-2 (Diamond)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Opponent</label>
            <Select 
              value={selectedOpponent} 
              onValueChange={setSelectedOpponent}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select opponent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Manchester City">Manchester City</SelectItem>
                <SelectItem value="Arsenal">Arsenal</SelectItem>
                <SelectItem value="Real Madrid">Real Madrid</SelectItem>
                <SelectItem value="Bayern Munich">Bayern Munich</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="border rounded-md overflow-hidden bg-white">
          <div className="bg-[#1D4629] text-white p-3 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-liverpool-red rounded-full flex items-center justify-center text-white font-bold">L</div>
              <span className="font-medium">Liverpool</span>
            </div>
            <div className="text-xl font-bold">vs</div>
            <div className="flex items-center space-x-3">
              <span className="font-medium">{selectedOpponent}</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {selectedOpponent === "Manchester City" ? "M" : 
                  selectedOpponent === "Arsenal" ? "A" : 
                  selectedOpponent === "Real Madrid" ? "R" : "B"}
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="pitch" className="w-full">
            <div className="px-3 pt-3">
              <TabsList className="w-full">
                <TabsTrigger value="pitch" className="flex-1">Pitch View</TabsTrigger>
                <TabsTrigger value="analysis" className="flex-1">AI Analysis</TabsTrigger>
                <TabsTrigger value="stats" className="flex-1">Match Stats</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="pitch" className="min-h-[300px]">
              <div className="flex flex-col items-center justify-center min-h-[300px] p-6">
                <div className="w-full max-w-md h-64 bg-[#308042] rounded-lg relative overflow-hidden border border-[#1D4629]">
                  {/* Field markings */}
                  <div className="absolute inset-0 border-2 border-white opacity-40 m-2 rounded"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white opacity-40 transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-white opacity-40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Player positioning based on formation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-medium text-center">
                      <p>Formation: {selectedFormation}</p>
                      <p className="text-xs mt-1 text-white/70">Interactive pitch view with real-time positioning</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  <Button variant="outline" size="sm">Run Simulation</Button>
                  <Button variant="outline" size="sm">Save Setup</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="p-4 min-h-[300px]">
              <div className="space-y-3">
                <h3 className="font-medium">AI Tactical Insights</h3>
                <div className="space-y-2 text-sm">
                  <p>• <span className="text-liverpool-red font-medium">High Press Vulnerability:</span> Current {selectedOpponent} setup shows weakness against high press in right channel.</p>
                  <p>• <span className="text-liverpool-red font-medium">Transition Opportunity:</span> Quick transitions after regaining possession in middle third highly effective.</p>
                  <p>• <span className="text-liverpool-red font-medium">Set Piece Analysis:</span> 62% success rate predicted for inswinging corners to near post.</p>
                  <p>• <span className="text-liverpool-red font-medium">Formation Advantage:</span> {selectedFormation} provides 76% tactical advantage in current match context.</p>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <h3 className="font-medium mb-2">AI-Suggested Tactical Adjustments</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mt-0.5">+</div>
                      <div>Increase pressing intensity in opponent's right defensive third</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs mt-0.5">+</div>
                      <div>Prioritize quick switches of play to exploit opponent's left channel</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mt-0.5">-</div>
                      <div>Reduce build-up through central channel during initial phase</div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="stats" className="p-4 min-h-[300px]">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Possession</label>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-liverpool-red h-full" style={{width: '58%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">58%</span>
                      <span className="text-muted-foreground">42%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Expected Goals (xG)</label>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-liverpool-red h-full" style={{width: '65%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">2.3</span>
                      <span className="text-muted-foreground">1.2</span>
                    </div>
                  </div>
                </div>
                
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { stat: 'Shots on Target', home: 7, away: 3 },
                      { stat: 'Pass Completion', home: '89%', away: '85%' },
                      { stat: 'Tackles', home: 18, away: 15 },
                      { stat: 'Corners', home: 6, away: 2 },
                    ].map((item, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-2 text-right pr-4 font-medium">{item.home}</td>
                        <td className="py-2 text-center text-muted-foreground">{item.stat}</td>
                        <td className="py-2 text-left pl-4">{item.away}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="pt-2 text-center">
                  <p className="text-sm font-medium text-liverpool-red">AI Win Probability: 72%</p>
                  <p className="text-xs text-muted-foreground mt-1">Based on 10,000 match simulations</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardCard>
  );
};

export default TacticalSimulation;
