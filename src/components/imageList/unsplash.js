import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a88a026320085ab66192af2f983d7639163d693c3d383f27f0b9ad3c9c7afe0d"
  }
});
