import ZoomTask from "../../models/zoomtask.model.js";
import { createZoomMeeting } from "../ZoomController/zoomcontroller.js";

const createZoomTask = async (req,res) => {
    try {
      const { title } = req.body;

      //create zoom meeting
      const meeting = await createZoomMeeting();

      const zoomtask = await ZoomTask.create({
        title,
        meetingLink : meeting.join_url,
        meetingId: meeting.id,
      });
      res
        .status(201)
        .json({
          message: "Zoom task created successfully!",
          success: true,
          zoomtask,
        });
    } catch (error) {
        console.log("Scopes issue check");
console.log(error.response?.data);
      console.error("Error while createing zoom task ");
      res.status(500).json({
        success: false,
        message: error.message,
      });
      
    }
}

export default createZoomTask;