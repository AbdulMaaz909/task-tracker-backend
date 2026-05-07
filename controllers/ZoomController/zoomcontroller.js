import axios from "axios";

import { getZoomAccessToken } from "../../config/zoom.js";

export const createZoomMeeting  = async () => {
    try {
       const token = await getZoomAccessToken();
       
       const response = await axios.post(
        "https://api.zoom.us/v2/users/me/meetings",
        {
            topic : "Task Meeting",
            type: 2,
            start_time: new Date().toISOString(),
            duration: 30,
            timezone: "Asia/Kolkata",
            settings: {
          join_before_host: true,
        },
        },
        {       
        headers: {
            Authorization :`Bearer ${token}`,

        }
    }
       )
       return response.data;
    } catch (error) {
        console.error("Zoom Meeting Error", error.response?.data || error.message);
        throw new Error("Failed to create zoom meeting!");
    }
}

