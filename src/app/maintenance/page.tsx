import { Coffee } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-dark p-6">
      <div className="w-full max-w-md rounded-2xl bg-cream p-10 text-center text-green-dark shadow-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-dark">
          <Coffee className="h-10 w-10 text-cream" />
        </div>

        <h1 className="mb-2 font-display text-4xl">Smile Coffee</h1>

        <div className="my-6 h-px bg-cream-dark" />

        <p className="mb-1 text-lg font-bold">Nous revenons bientôt !</p>
        <p className="mb-6 text-sm text-green-medium">
          Notre site est en cours de maintenance.
        </p>

        <p className="mb-1 text-lg font-bold">We'll be back soon!</p>
        <p className="text-sm text-green-medium">
          Our website is currently under maintenance.
        </p>
      </div>
    </div>
  );
}
