class Product {
  constructor(
    id,
    categoryIds,
    title,
    priceCategory,
    availability,
    imageUrl,
    price,
    ingredients,
    instructions,
    isFeatured,
    isAvailable,
    isDiscounted,
    isInStock
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.priceCategory = priceCategory;
    this.availability = availability;
    this.imageUrl = imageUrl;
    this.price = price;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.isFeatured = isFeatured;
    this.isAvailable = isAvailable;
    this.isDiscounted = isDiscounted;
    this.isInStock = isInStock;
  }
}

export default Product;