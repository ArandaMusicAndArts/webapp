import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-balance">
                Aranda Music and Arts Program
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl text-pretty">
                An after school music, drama and art program
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Join Now</Button>
            </div>
          </div>

          {/* Right side - Video placeholder */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-sm">Video Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
