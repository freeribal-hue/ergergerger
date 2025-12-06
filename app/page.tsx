import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductCategory } from "@/components/product-category"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductCategory />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}
