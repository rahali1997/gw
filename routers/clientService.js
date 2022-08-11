import express from "express";
import axios from "axios";
var router = express.Router();
import {
    BASE_URL_FOR_Client,
    BASE_URL_FOR_Admin,
    BASE_URL_FOR_Soc

} from "../baseUrl.js"

router
  .post("/gw/client/login", async (req, res) => {
    try {
      let endpoint = BASE_URL_FOR_Client + "/api/user/login";
      let response = await axios.post(endpoint, req.body);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  })

  .post("/gw/login", async (req, res) => {
    const config = {
      headers: {
        token: req.headers.token,
      },
    };
    try {
      let endpoint = BASE_URL_FOR_Admin + "/api/login";
      let response = await axios.post(endpoint, req.body);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  })

  .post("/gw/societe/login", async (req, res) => {
    const config = {
      headers: {
        token: req.headers.token,
      },
    };
    try {
      let endpoint = BASE_URL_FOR_Soc + "/api/company/login";
      let response = await axios.post(endpoint, req.body);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

export default router
