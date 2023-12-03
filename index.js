const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
createProduct,
getAllProducts,
deleteProduct,
updateProduct,
} = require("./productsOperations");
app.use(express.json());

mongoose
.connect("mongodb://localhost/Products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log("Connection to MongoDB created");
    let product = await createProduct("Hp", 10000, ["Laptop", "Grey"]);
    console.log(product);
    let allProducts = await getAllProducts();
    console.log(allProducts);
    console.log(await deleteProduct("656cb6025a45716fe425e037"));
    let updatedProduct = updateProduct(
    "656cb417ec45f98a883401e8",
    "DELL Updated",
    250,
    []
    );
})
.catch((err) => {
    console.log("Error Connecting");
    console.log(err);
});
app.listen(3000);
