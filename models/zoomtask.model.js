import mongoose from "mongoose";

const zoomtaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    meetingLink: {
      type: String,
    },
    meetingId: {
      type: String,
    },
  },
  { timestamps: true },
);

const ZoomTask = mongoose.model("ZoomTask", zoomtaskSchema);

export default ZoomTask;
