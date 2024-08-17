import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const MyChats = () => {
  const [loggedUser, setloggedUser] = useState();
  const { chats, setChats, user, setUser, selectedChat, setSelectedChat } =
    ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        header: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to load chat",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return <div>MyChats</div>;
};

export default MyChats;
