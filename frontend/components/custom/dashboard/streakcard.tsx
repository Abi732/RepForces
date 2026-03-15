import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StreakCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Streak 🔥</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold text-orange-500">5 Days</p>
        <p className="text-sm text-muted-foreground">
          Keep going! Complete today's reps to maintain your streak.
        </p>
      </CardContent>
    </Card>
  );
}
