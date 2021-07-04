import { chat, CANCEL } from "bdsx";
const system = server.registerSystem(0, 0);

let time : any = {}

chat.on(ev => {
   if(time[ev.name] === undefined){
      time[ev.name] = new Date()
   }
   else if(Number(new Date()) - time[ev.name] < 1000){
      system.executeCommand(`tellraw @a[name="${ev.name}"] {"rawtext":[{"text":"§l§cYour chat is too fast!"}]}`, () => {}); //send a warning message to the player
      return CANCEL;
   }
   else {
  time[ev.name] = new Date();
      }

   if (ev.message.length > 25) 
   {
	   system.executeCommand(`tellraw @a[name="${ev.name}"] {"rawtext":[{"text":"§l§cYour chat is too long!"}]}`, () => {}); //send a warning message to the player
      return CANCEL; 
   }
});
