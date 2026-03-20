import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ChallengeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Challenge 💪</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p>Push-ups Challenge</p>

        <Progress value={60} />

        <p className="text-sm text-muted-foreground">
          120 / 200 reps completed
        </p>
      </CardContent>
    </Card>
  );
}
