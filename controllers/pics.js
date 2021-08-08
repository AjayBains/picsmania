const Pic = require("../models/Pic");
const getAllPics = async (req, res) => {
  try {
    const pics = await Pic.find({});

    res.render("index", { pics, title: "All  pics" });
  } catch (error) {
    console.log(err);
  }
};
const addPicForm = (req, res) => {
  res.render("add");
};
const addPic = async (req, res) => {
  try {
    const pic = await Pic.create(req.body);
    res.redirect("/pics");
  } catch (error) {
    console.log(error);
  }
};
// const addPic = async (req, res) => {
//   try {
//     const pic = await Pic.create(req.body);
//     res.status(201).json({ pic });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const getAPic = async (req, res) => {
//   try {
//     const { id: picID } = req.params;
//     const pic = await Pic.findOne({ _id: picID });
//     if (!pic) {
//       return res.status(404).json({ msg: `No pic with id: ${picID}` });
//     }
//     res.status(200).json({ pic });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
const getAPic = async (req, res) => {
  try {
    const { id } = req.params;
    const pic = await Pic.findById(id);
    // if (!id) {
    //   return res.send(`No pic with id: ${picID}`);
    // }
    res.render("pic", { pic, title: "Pic" });
  } catch (error) {
    res.render("404", { title: "pic not found" });
  }
};
const deletePic = async (req, res) => {
  try {
    const id = req.params.id;
    Pic.findByIdAndDelete(id)
      .then((result) => {
        res.json({ redirect: "/pics" });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// const deletePic = async (req, res) => {
//   try {
//     const { id: picID } = req.params;
//     const pic = await Pic.findOneAndDelete({ _id: picID });
//     if (!pic) {
//       return res.status(400).json({ msg: `No pic with id ${picID} ` });
//     }
//     res.status(200).json({ pic });
//     // res.status(200).send();
//     // res.status(200).json({ task: null, status: "success" });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// const updatePic = async (req, res) => {
//   try {
//     const { id: picID } = req.params;
//     const pic = await Pic.findOneAndUpdate({ _id: picID }, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!pic) {
//       res.status(404).json({ msg: `no Pic found with ${picID}` });
//     }
//     res.status(200).json({ pic });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getAllPics,
  addPic,
  getAPic,
  deletePic,
  addPicForm,
};
