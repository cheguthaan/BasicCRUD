const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productsRoute = require("./Routes/product.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productsRoute);

const PORT = 5000;

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.get('/api/products', async(req, res) => {
//     try {
//         const products =  await Product.find({})
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.get('/api/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params
//         console.log(id)
//         const product =  await Product.findById(id)
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.put('/api/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params
//         const product = req.body
//         const updatedProduct =  await Product.findByIdAndUpdate(id,product,{ new: true })
//         if(!updatedProduct){
//             res.status(404).json({message:'Product not found'})
//         }else{
//             res.status(200).json(updatedProduct)
//         }
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.delete('/api/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params
//         const deletedProduct =  await Product.findByIdAndDelete(id)
//         if(!deletedProduct){
//             res.status(404).json({message:'Product not found'})
//         }
//         res.status(200).json({product:deletedProduct,message:'product deleted successfully'})
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.post('/api/products', async(req, res) => {
//     try {
//         const product =  await Product.create(req.body)
//         res.status(201).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.listen(PORT,() => {
//     console.log(`Server is running on port ${PORT}`)
// });

mongoose
  .connect(
    "mongodb+srv://freeebeee:freeebeee@cluster0.gfmfed5.mongodb.net/NodeCRUD?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connect to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
