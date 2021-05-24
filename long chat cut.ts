/*
Made By corcle1 (omlet : kdg7313) (github : kdg7313)
*/

import { chat, CANCEL } from "bdsx";
const system = server.registerSystem(0, 0);
chat.on(ev=>{
   if (ev.message.length > 25) 
   {
	   system.executeCommand(`tellraw ${ev.name} {"rawtext":[{"text":"§l§cYour chat is too long!"}]}`, () => {}); //send a warning message to the player
      return CANCEL; // delete original message (원래 채팅 지우기)
   }
});