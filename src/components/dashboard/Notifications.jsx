import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";

const Notifications = ({}) => {
  useFirestoreConnect([
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ]);
  const notifications = useSelector(
    state => state.firestore.ordered.notifications
  );
  if (!isLoaded(notifications)) {
    return <div>loading notifications....</div>;
  }
  if (isEmpty(notifications)) {
    return <div>no notification!</div>;
  }
  const displayNotice = notifications.map(n => {
    return (
      <li key={n.id}>
        <span className="pink-text">{n.user} </span>
        <span>{n.content}</span>
        <div className="grey-text note-date">
          {moment(n.time.toDate()).fromNow()}
        </div>
      </li>
    );
  });
  return (
    <div className="section transbox">
      <div className="z-depth-0">
        <div className="card-content">
          <span className="car-title">Notifications</span>
          <ul className="notification">{displayNotice}</ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
