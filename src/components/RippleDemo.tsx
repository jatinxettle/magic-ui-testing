import Ripple from "@/components/ui/ripple"

export function RippleDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-[#131217] animate-pulse transition-all duration-1000">
        Ripple
      </p>
      <Ripple />
    </div>
  )
}
