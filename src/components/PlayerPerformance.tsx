
import DashboardCard from "./DashboardCard";
import StatisticCard from "./StatisticCard";
import { Activity, Flag, ChartLine, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PlayerPerformance = () => {
  return (
    <div className="space-y-4">
      <DashboardCard 
        title="Player Performance Analysis" 
        description="AI-driven metrics showing real-time player optimization"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatisticCard 
              label="Overall Match Fitness" 
              value="92%" 
              icon={<Activity />} 
              trend="up" 
            />
            <StatisticCard 
              label="Neural Response" 
              value="86%" 
              icon={<Brain />}
              trend="neutral" 
            />
            <StatisticCard 
              label="Tactical Adherence" 
              value="94%" 
              icon={<Flag />}
              trend="up" 
            />
            <StatisticCard 
              label="Recovery Rate" 
              value="89%" 
              icon={<Shield />}
              trend="up" 
            />
          </div>
          
          <div className="border-t pt-4">
            <h3 className="text-md font-medium mb-3">Squad Performance Trends</h3>
            <div className="space-y-3">
              <PerformanceMetric 
                label="High Intensity Pressing" 
                value={87} 
                comparison="82"
                comparisonLabel="Last Season"
              />
              <PerformanceMetric 
                label="Positional Intelligence" 
                value={93} 
                comparison="88"
                comparisonLabel="League Average"
              />
              <PerformanceMetric 
                label="Tactical Adaptation Speed" 
                value={91} 
                comparison="84"
                comparisonLabel="Top 6 Average"
              />
            </div>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};

const Brain = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"></path>
  </svg>
);

const PerformanceMetric = ({ 
  label, 
  value, 
  comparison, 
  comparisonLabel 
}: { 
  label: string; 
  value: number; 
  comparison: string; 
  comparisonLabel: string;
}) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold">{value}%</span>
          <span className="text-xs text-muted-foreground">vs {comparison}% {comparisonLabel}</span>
        </div>
      </div>
      <div className="relative">
        <Progress value={value} className="h-2 bg-gray-200" />
        <div 
          className="absolute top-0 h-2 bg-gray-400 w-[1px]" 
          style={{ left: `${parseInt(comparison)}%` }}
        />
      </div>
    </div>
  );
};

export default PlayerPerformance;
