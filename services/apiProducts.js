export async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/admin");
    const data = await response.json();

    return data;
  } catch (err) {
    console.log("error fetching products", err);
  }
}

export async function createProduct(product) {
  try {
    const response = await fetch("http://localhost:3000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Failed to create product");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error creating product", err);
  }
}

export async function editProduct(id, product) {
  try {
    const response = await fetch(`http://localhost:3000/admin/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`Failed to edit product with id ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error editing product", err);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`http://localhost:3000/admin/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product with id ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error deleting product", err);
  }
}
