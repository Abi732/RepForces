import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p>🥇 Alex — 18000 reps</p>
        <p>🥈 Sam — 16500 reps</p>
        <p>🥉 Chris — 15000 reps</p>
      </CardContent>
    </Card>
  );
}
