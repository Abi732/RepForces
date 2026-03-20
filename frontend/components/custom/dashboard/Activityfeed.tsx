import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p>You completed 200 push-ups 💪</p>
        <p>Daily streak: 🔥 5 days</p>
        <p>New challenge available</p>
      </CardContent>
    </Card>
  );
}
