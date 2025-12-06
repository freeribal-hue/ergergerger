import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-black">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
        <img
          src="/e-moto-scooter-lifestyle-dark.jpg"
          alt="Premium e-moto lifestyle"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-end px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Slight Supply</h2>
          <p className="text-lg text-gray-300 mb-8">
            Discover essentials designed for the modern lifestyle. Slight, but mighty.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Shop Now</Button>
        </div>
      </div>
    </section>
  )
}
