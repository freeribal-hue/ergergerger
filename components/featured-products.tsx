export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Essential Hoodie - Black",
      price: "$44.99",
      originalPrice: "$59.99",
      image: "/black-hoodie-streetwear.jpg",
      badge: "Sale",
    },
    {
      id: 2,
      name: "Classic T-Shirt - White",
      price: "$24.99",
      image: "/white-t-shirt-basic.jpg",
    },
    {
      id: 3,
      name: "Performance Cap",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "/cap-hat-accessories.jpg",
      badge: "Sold out",
    },
    {
      id: 4,
      name: "Urban Backpack",
      price: "$89.99",
      image: "/backpack-urban.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg bg-card border border-border mb-4">
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10 bg-foreground text-background px-3 py-1 rounded text-xs font-semibold">
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
