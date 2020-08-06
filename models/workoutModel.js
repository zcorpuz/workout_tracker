const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of workout is required"
      },

      name: {
        type: String,
        trim: true,
        required: "Name of workout is required"
      },

      duration: {
        type: Number,
        trim: true,
        min: 0,
        required: "Please enter the duration of your workout in minutes"
      },

      weight: {
        type: Number,
        trim: true,
        min: 0,
        required: "Please enter the weight in pounds"
      },

      reps: {
        type: Number,
        trim: true,
        min: 0,
        required: "Please enter how many reps you did"
      },

      sets: {
        type: Number,
        trim: true,
        min: 0,
        required: "Please enter how many sets you did"
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;