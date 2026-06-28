import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ServiceCard({ title, description, icon: Icon }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-500 text-white shadow-lg shadow-cyan-900/20">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-7">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
