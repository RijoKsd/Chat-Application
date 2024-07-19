import { create } from "zustand";

const useConversation = create((set) => ({
  // state
  selectedConversation: null,
  // setters
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  message: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
