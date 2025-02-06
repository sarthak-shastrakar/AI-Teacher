import React from "react";
import "../styles/Exams.css";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import "../styles/Papers.css";

function Paidclass() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="card">
        <div className="head">SSC</div>
        <div className="content">
          Your hard work and strategic study will pave the path to SSC success
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/ssc");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">Banking</div>
        <div className="content">
          Building a secure financial future, one transaction at a time.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/banking");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">RRB</div>
        <div className="content">
          Your dedication and prepration will drive you towards your RRB dream
          job.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/rrb");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">UPSC</div>
        <div className="content">
          Empowering the nation through dedicated service and unwavering
          integrity.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/upsc");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">NEET</div>
        <div className="content">
          With perseverance and focused study your dream of being a doctor is
          within reach.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/upsc");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">JEE</div>
        <div className="content">
          Engineering your future one challenging problem at a time.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/jee");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">NDA</div>
        <div className="content">
          Serving the nation with courage, honor and unwavering commitment.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/nda");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">IB/RAW</div>
        <div className="content">
          Protecting national security through intelligence and unwavering
          vigilance.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/raw");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">DRDO</div>
        <div className="content">
          Your scientific brilliance and dedication will contribute to DRDO's
          technological advancemens.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/drdo");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="head">DELHI POLICE</div>
        <div className="content">
          Serving and protecting the heart of the nation , upholding law and
          order.
          <br />
          <button className="button">
          <MenuItem
            onClick={() => {
              navigate("/delhipolice");
            }}
          >
            Click
          </MenuItem>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Paidclass;
