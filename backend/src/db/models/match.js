const mongoose = require("mongoose");

const matchSchema = mongoose.Schema({
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: "Tournament" },
  style: {
    type: String,
    required: true,
  },
  weightClass: {
    type: Number,
    required: true,
  },
  round: {
    type: String,
    required: true,
  },
  result: {},
  redWrestler: {
    id: {
      type: String,
      required: true,
    },

    team: { type: String, required: true },
  },
  blueWrestler: {
    id: {
      type: String,
      required: true,
    },

    team: { type: String, required: true },
  },

  url: {},

  scores: [],
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
