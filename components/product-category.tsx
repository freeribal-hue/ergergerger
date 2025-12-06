export function ProductCategory() {
  const categories = [
    {
      id: 1,
      title: "Apparel",
      description: "Quality clothing and basics",
      image: "/t-shirt-apparel.jpg",
    },
    {
      id: 2,
      title: "Accessories",
      description: "Essential gear and add-ons",
      image: "/accessories-backpack.jpg",
    },
    {
      id: 3,
      title: "Essentials",
      description: "Must-have everyday items",
      image: "/essentials-caps.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Shop By Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
