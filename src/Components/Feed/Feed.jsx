import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { CalendarViewDay } from "@material-ui/icons";
import Post from "../Post/Post";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionIcon} color="#7fc15e" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#e7a33e" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDay}
            color="#fc9295"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Ashar Ali"
        description="this is a test"
        message="wow this worked"
      />
    </div>
  );
};

export default Feed;
