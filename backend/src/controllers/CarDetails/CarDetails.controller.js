const CarDetails = require("../../models/CarDetails.model");

const getAllCarDetails = async (req, res) => {
  const Details = await CarDetails.find({}).populate('Car');
  res.json({ Details });
};

const setCarDetails = async (req, res) => {
  const { Car,Key, Value } = req.body;
  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(401, {
      message: "Please fill all required fields",
    });
  }

  const Details = await CarDetails.create({
    Car,
    Key,
    Value,
  });
  if (!Details) {
    res.status(401).send({ message: "Error data" });
  }
  return res.json({ message: "CarDetails Created successfuly" });
};

const UpdateCarDetail = async (req, res) => {

  const Details = await CarDetails.findById(req.params.id)
  
  if(!Details) {
    res.status(401).send({message: "Invalide Param" })
  };
  
  if(Object.values(req.body).some((e) => !e)) {
    return res.sendStatus(401, {
      message: "Please fill all required fields",
    });
  }

  const UpdateDetail = await CarDetails.findByIdAndUpdate(req.param.id, req.body, {
    new: true
  })

  res.status(201).json(UpdateDetail)
}

const DeleteCarDetail = async (req, res) => {

}

module.exports = {
  getAllCarDetails,
  setCarDetails,
  UpdateCarDetail,
  DeleteCarDetail
};
