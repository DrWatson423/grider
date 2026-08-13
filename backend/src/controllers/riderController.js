import Rider from "../models/Rider.js";


// GET ALL RIDERS

export const getRiders = async (req, res) => {
  try {

    const {
      location,
      ride,
      deliveryType
    } = req.query;


    const filter = {};


    if (location) {
      filter.location = {
        $regex: location,
        $options: "i"
      };
    }


    if (ride) {
      filter.ride = ride;
    }


    if (deliveryType) {
      filter.deliveryType = deliveryType;
    }


    const riders = await Rider.find(filter);


    res.status(200).json({
      count: riders.length,
      riders
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// GET SINGLE RIDER

export const getRider = async (req, res) => {
  try {

    const rider = await Rider.findById(
      req.params.id
    );


    if (!rider) {
      return res.status(404).json({
        message: "Rider not found"
      });
    }


    res.status(200).json({
      rider
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// CREATE RIDER

export const createRider = async (req, res) => {
  try {

    const rider = await Rider.create(req.body);


    res.status(201).json({
      message: "Rider created successfully",
      rider
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};