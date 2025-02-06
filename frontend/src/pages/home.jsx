import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/Homepage.css";
import { Button, IconButton, TextField } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Main">
      <div className="navBar">
        <div>
          <h2>AI-TUTOR</h2>
        </div>

        <div>
          <Box sx={{ mr: 2, fontFamily: "monospace" }}>
            <div>
              <Tooltip title="Profile">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mr: 2, fontFamily: "monospace" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/history");
                  }}
                >
                  History
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/chatbot");
                  }}
                >
                  Chatbot Ai
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/auth");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div className="contentpage_1">
            <div className="paidclass">
              <MenuItem
                onClick={() => {
                  navigate("/paidclass");
                }}
              >
                <button>Exams</button>
              </MenuItem>
              <span className="img">
                <img src="/classes.jpg" alt="" srcset="" />
              </span>
            </div>
            <div className="weektest">
              <MenuItem
                onClick={() => {
                  navigate("/weeklytest");
                }}
              >
                <button>Weekly Test</button>
              </MenuItem>
              <div className="img">
                <img src="/test.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>

          <div className="contentpage_2">
            <div className="papers">
              <MenuItem
                onClick={() => {
                  navigate("/papers");
                }}
              >
                <button>Paper's </button>
              </MenuItem>
              <div className="img">
                <img src="/papers.jpg" alt="" srcset="" />
              </div>
            </div>
            <div className="books">
              <MenuItem
                onClick={() => {
                  navigate("/books");
                }}
              >
                <button>E-Books</button>
              </MenuItem>
              <div className="img">
                <img src="/book.jpg" alt="" srcset="" />
              </div>
            </div>
            <div className="syllabus">
              <MenuItem
                onClick={() => {
                  navigate("/syllabus");
                }}
              >
                <button>Syllabus</button>
              </MenuItem>
              <div className="img">
                <img src="/syllabus.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <img srcSet="/mainimg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
