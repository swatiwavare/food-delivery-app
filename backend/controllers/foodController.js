import foodModel from "../models/foodModel.js";
import fs from "fs";
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ success: false, message: "Image not uploaded" });
    }

    let image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
//all food list
const listfood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};
const deletefood = async (req, res) => {
  try {
    const food = foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
const updatefood = async (req, res) => {
  try {
    const food = foodModel.findById(req.body.id);
    if (!food) {
      return res.json({ success: false, message: "Food not found" });
    }
    //if new image uploaded
    if (req.file) {
      //delete old image

      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) console.log(err);
      });
      //update new image
      food.image = req.file.filename;
    }
    //update name
    if (name) {
      food.name = req.body.name;
    }
    await food.save();
    res.json({ success: true, message: "Food Updated", data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { addFood, listfood, deletefood, updatefood };
