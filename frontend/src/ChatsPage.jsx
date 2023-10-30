/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="ca7f91e8-4f48-475a-8b64-19cc646a3820"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "99%" }}
      />
    </div>
  );
};

export default ChatsPage;
