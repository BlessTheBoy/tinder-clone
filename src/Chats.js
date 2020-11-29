import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sadra Benede"
        message="Hey! How are you"
        timestamp="3 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jYiFUpHi_EkgoU_ffUpcZrU3x6xIuaNsFQ&usqp=CAU"
      />
      <Chat
        name="Kimberly Skinny"
        message="Xup!"
        timestamp="5 minutes ago"
        profilePic="https://assets.vogue.com/photos/5b884e671edb2878de8d065c/master/w_1600%2Cc_limit/03-streetstyle-100-skinny-kimberly.jpg"
      />
      <Chat
        name="Danileigh"
        message="What time are we getting started"
        timestamp="23 minutes ago"
        profilePic="https://townsquare.media/site/812/files/2019/01/1W4A0071.jpg?w=980&q=75"
      />
      <Chat
        name="Vicky"
        message="Big Head"
        timestamp="2 hours ago"
        profilePic="https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/118672675_114767146881555_8249350710761291904_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=25ggvhL0dgUAX_kRORE&tp=1&oh=1820e45ae75883c3aa05786110b94182&oe=5FEE4B26"
      />
    </div>
  );
}

export default Chats;
