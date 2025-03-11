
import React, { useState } from "react";
import Header from "@/components/Header";
import DashboardCard from "@/components/DashboardCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, MapPin, Search, Target, Users, ChevronRight, EyeIcon, Flag, Shield } from "lucide-react";

const TacticsAndScouting = () => {
  const [activeTab, setActiveTab] = useState("opponent-analysis");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Tactics & Scouting Dashboard</h1>
            <p className="text-muted-foreground">Advanced tactical analysis and talent identification</p>
          </div>
          <Badge variant="outline" className="bg-liverpool-red text-white border-liverpool-red hover:bg-liverpool-darkRed">
            AI-Powered
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <OpponentAnalysis />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TalentIdentification />
            <RecruitmentPlanning />
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

const OpponentAnalysis = () => {
  const [selectedTeam, setSelectedTeam] = useState("Manchester City");
  const [selectedCompetition, setSelectedCompetition] = useState("Premier League");
  
  return (
    <DashboardCard 
      title="Opponent Tactical Analysis" 
      description="AI-driven tactical breakdown and weakness identification"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Team</label>
            <Select 
              value={selectedTeam} 
              onValueChange={setSelectedTeam}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Manchester City">Manchester City</SelectItem>
                <SelectItem value="Arsenal">Arsenal</SelectItem>
                <SelectItem value="Chelsea">Chelsea</SelectItem>
                <SelectItem value="Manchester United">Manchester United</SelectItem>
                <SelectItem value="Real Madrid">Real Madrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Competition</label>
            <Select 
              value={selectedCompetition} 
              onValueChange={setSelectedCompetition}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select competition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Premier League">Premier League</SelectItem>
                <SelectItem value="Champions League">Champions League</SelectItem>
                <SelectItem value="FA Cup">FA Cup</SelectItem>
                <SelectItem value="Carabao Cup">Carabao Cup</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-liverpool-red hover:bg-liverpool-darkRed">
              <Target className="h-4 w-4 mr-2" />
              Analyze
            </Button>
          </div>
        </div>
        
        <div className="border rounded-md overflow-hidden bg-white">
          <div className="bg-liverpool-red text-white p-3 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="font-medium">{selectedTeam} | Tactical Profile</span>
          </div>
          
          <Tabs defaultValue="formation" className="w-full">
            <div className="px-3 pt-3">
              <TabsList className="w-full">
                <TabsTrigger value="formation" className="flex-1">Formation Analysis</TabsTrigger>
                <TabsTrigger value="patterns" className="flex-1">Play Patterns</TabsTrigger>
                <TabsTrigger value="vulnerabilities" className="flex-1">Vulnerabilities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="formation" className="p-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-medium mb-3">Primary Formation</h3>
                  <div className="w-full bg-[#308042] rounded-lg h-64 relative overflow-hidden border border-[#1D4629]">
                    {/* Formation visualization */}
                    <div className="absolute inset-0 border-2 border-white opacity-40 m-2 rounded"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white opacity-40 transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-white opacity-40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white font-medium text-center">
                        <p>4-3-3 (85% of matches)</p>
                        <p className="text-xs mt-1 text-white/70">Alternative: 4-2-3-1 (15%)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Key Tactical Insights</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-liverpool-red text-xs mt-0.5">+</div>
                        <div>High pressing intensity with fullbacks pushing high in possession</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-liverpool-red text-xs mt-0.5">+</div>
                        <div>Inverted fullbacks creating central overloads in build-up phase</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-liverpool-red text-xs mt-0.5">+</div>
                        <div>Fluid positional rotations between attacking midfielders and forwards</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center text-red-600 text-xs mt-0.5">-</div>
                        <div>Vulnerable to counter-attacks through the half-spaces</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-2">AI Counter-Recommendation</h3>
                    <p className="text-sm">
                      Deploy 4-3-3 with rapid transitions targeting their left defensive channel. 
                      Utilize long balls behind fullbacks, especially during high-press phases.
                    </p>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm" className="text-xs">
                        Export Full Report
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="patterns" className="p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-3 bg-gray-50">
                    <h4 className="font-medium text-sm">Build-up Phase</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Patient possession with goalkeeper actively involved. Center backs split wide, fullbacks push high.
                    </p>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between mb-1">
                        <span>Pattern Recognition Confidence</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-liverpool-red rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-3 bg-gray-50">
                    <h4 className="font-medium text-sm">Pressing Triggers</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Aggressive pressing when ball is played to fullbacks. Midfield shifts as block to trap opponents.
                    </p>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between mb-1">
                        <span>Pattern Recognition Confidence</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-liverpool-red rounded-full" style={{ width: "87%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-3 bg-gray-50">
                    <h4 className="font-medium text-sm">Set Piece Strategy</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Near-post corners with blockers creating lanes. Free kicks favor short combinations.
                    </p>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between mb-1">
                        <span>Pattern Recognition Confidence</span>
                        <span className="font-medium">79%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-liverpool-red rounded-full" style={{ width: "79%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-3 bg-gray-50">
                    <h4 className="font-medium text-sm">Attacking Transitions</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quick vertical passes to attacking midfielders who turn and progress. Wingers make immediate depth runs.
                    </p>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between mb-1">
                        <span>Pattern Recognition Confidence</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-liverpool-red rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-3 mt-3 border-t text-sm">
                  <h4 className="font-medium mb-2">AI Pattern Predictions</h4>
                  <p>Based on the last 3 matches, {selectedTeam} is likely to increase their focus on build-up through the right channel (73% probability), with the right-back taking a more prominent role in possession phases.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="vulnerabilities" className="p-4">
              <div className="space-y-4">
                <h3 className="font-medium">Tactical Vulnerabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "High Line Exploitation",
                      description: "Central defenders struggle with pace in behind. Space between defensive and midfield lines can be exploited.",
                      exploitability: 81,
                      recommendation: "Direct balls over the defensive line for forwards to chase."
                    },
                    {
                      title: "Pressing Trap Avoidance",
                      description: "Pressing traps can be bypassed with quick one-touch combinations through central midfield.",
                      exploitability: 68,
                      recommendation: "Use midfield triangles to break the first line of pressure."
                    },
                    {
                      title: "Set Piece Vulnerability",
                      description: "Zonal marking creates gaps at the near post. Poor at defending second balls from corners.",
                      exploitability: 76,
                      recommendation: "Near-post deliveries with runners attacking front zone."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden bg-white">
                      <div className="p-3 bg-liverpool-red/10 border-b">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                      </div>
                      <div className="p-3 space-y-3">
                        <p className="text-xs">{item.description}</p>
                        <div className="pt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Exploitability</span>
                            <span className="font-medium">{item.exploitability}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full">
                            <div className="h-full bg-liverpool-red rounded-full" style={{ width: `${item.exploitability}%` }}></div>
                          </div>
                        </div>
                        <div className="pt-2 border-t mt-2">
                          <h5 className="text-xs font-medium mb-1">AI Recommendation</h5>
                          <p className="text-xs">{item.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardCard>
  );
};

const TalentIdentification = () => {
  const [scoutingFilter, setScoutingFilter] = useState("all");
  
  return (
    <DashboardCard 
      title="Talent Identification" 
      description="AI-powered scouting and player analysis"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">Filter:</span>
          {["all", "attackers", "midfielders", "defenders", "goalkeepers"].map((filter) => (
            <Badge 
              key={filter}
              variant={scoutingFilter === filter ? "default" : "outline"}
              className={scoutingFilter === filter ? "bg-liverpool-red hover:bg-liverpool-darkRed" : "cursor-pointer"}
              onClick={() => setScoutingFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Badge>
          ))}
        </div>
        
        <div className="border rounded-md overflow-hidden bg-white">
          <div className="p-3 bg-gray-50 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-liverpool-red" />
              <h3 className="font-medium text-sm">AI-Identified Prospects</h3>
            </div>
            <Badge variant="outline" className="text-xs">
              27 matches found
            </Badge>
          </div>
          
          <div className="divide-y">
            {[
              {
                name: "Eduardo Camavinga",
                age: 19,
                position: "Central Midfielder",
                nationality: "France",
                club: "Stade Rennais",
                matchScore: 94,
                attributes: ["Press Resistance", "Progressive Passing", "Defensive Workrate"],
                notes: "Perfect profile match for Liverpool's midfield. Elite technical ability with defensive intelligence beyond his years."
              },
              {
                name: "Karim Adeyemi",
                age: 20,
                position: "Forward",
                nationality: "Germany",
                club: "RB Salzburg",
                matchScore: 92,
                attributes: ["Pace", "Off-ball Movement", "Finishing"],
                notes: "Explosive forward with intelligent movement. Pressing triggers and directness align perfectly with Liverpool's system."
              },
              {
                name: "Gavi",
                age: 18,
                position: "Attacking Midfielder",
                nationality: "Spain",
                club: "Barcelona",
                matchScore: 89,
                attributes: ["Technical Security", "Game Intelligence", "Work Rate"],
                notes: "Exceptional technical ability and football IQ. Pressing ability and positional awareness ideal for Liverpool's midfield."
              }
            ].map((player, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{player.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {player.position}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {player.age} years • {player.nationality} • {player.club}
                    </p>
                  </div>
                  <div className="bg-liverpool-red text-white text-xs font-bold h-8 w-8 rounded-full flex items-center justify-center">
                    {player.matchScore}%
                  </div>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-1">
                  {player.attributes.map((attr, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {attr}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-start gap-2">
                    <EyeIcon className="h-4 w-4 text-liverpool-red flex-shrink-0 mt-0.5" />
                    <p className="text-xs">{player.notes}</p>
                  </div>
                </div>
                
                <div className="mt-3 flex justify-end gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Full Report
                  </Button>
                  <Button size="sm" className="text-xs bg-liverpool-red hover:bg-liverpool-darkRed">
                    Add to Watchlist
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

const RecruitmentPlanning = () => {
  return (
    <DashboardCard 
      title="Recruitment Planning" 
      description="Strategic squad planning and succession modeling"
    >
      <div className="space-y-5">
        <div className="border rounded-md overflow-hidden bg-white">
          <div className="p-3 bg-liverpool-red/10 border-b flex items-center gap-2">
            <Users className="h-4 w-4 text-liverpool-red" />
            <h3 className="font-medium text-sm">Squad Age Profile</h3>
          </div>
          <div className="p-4">
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-sm text-gray-500">Age distribution visualization</p>
            </div>
            <div className="mt-3 text-xs">
              <p>Average Squad Age: <span className="font-medium">26.3 years</span></p>
              <p>Key Position Needs (Next 18 Months):</p>
              <ul className="mt-1 space-y-1 pl-4 list-disc">
                <li>Defensive Midfielder (Succession plan for Fabinho)</li>
                <li>Central Defender (Long-term partner for Van Dijk)</li>
                <li>Right Winger (Rotation option)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md overflow-hidden bg-white">
          <div className="p-3 bg-liverpool-red/10 border-b flex items-center gap-2">
            <MapPin className="h-4 w-4 text-liverpool-red" />
            <h3 className="font-medium text-sm">Market Opportunity Map</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  league: "Bundesliga",
                  valueRating: 85,
                  talentQuality: "High",
                  adaptationEase: "Excellent",
                  keyTargets: ["Florian Wirtz", "Youssoufa Moukoko"]
                },
                {
                  league: "Ligue 1",
                  valueRating: 92,
                  talentQuality: "Very High",
                  adaptationEase: "Good",
                  keyTargets: ["Rayan Cherki", "Hugo Ekitike"]
                }
              ].map((market, index) => (
                <div key={index} className="border rounded p-3 bg-gray-50">
                  <h4 className="font-medium text-sm">{market.league}</h4>
                  <div className="mt-2 text-xs">
                    <div className="flex justify-between mb-1">
                      <span>Value Rating</span>
                      <span className="font-medium">{market.valueRating}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-liverpool-red rounded-full" style={{ width: `${market.valueRating}%` }}></div>
                    </div>
                  </div>
                  <div className="mt-2 space-y-1 text-xs">
                    <p>Talent Quality: <span className="font-medium">{market.talentQuality}</span></p>
                    <p>Adaptation Ease: <span className="font-medium">{market.adaptationEase}</span></p>
                  </div>
                  <div className="mt-2 pt-2 border-t text-xs">
                    <p className="font-medium">Key Targets:</p>
                    <p>{market.keyTargets.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">AI Recommendation</h4>
                <Badge className="bg-liverpool-red text-white text-xs">Priority</Badge>
              </div>
              <p className="text-xs mt-2">
                Focus scouting resources on Portuguese Primeira Liga and Austrian Bundesliga for optimal value/quality ratio in the next two transfer windows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default TacticsAndScouting;
