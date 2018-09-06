const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help | BlueBot 💙✨ `,"https://www.twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()

  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` BlueBot
 .`, 'https://cdn.discordapp.com/avatars/349095859859881984/6a942bc4ff4d014a222dd91e1a6daa48.jpg?size=128')

  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
var perfix = "prefix";
      if (message.content.startsWith(prefix + 'clear')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`**You Don't Have**  *MANAGE_MESSAGES*  **Permission **`).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);
   const messagecount = parseInt(args.join(' '));
   message.channel.fetchMessages({
     limit: messagecount
 }).then(messages => message.channel.bulkDelete(messages));
    var embed = new Discord.RichEmbed()
        .setTitle('تم مسح الشات بنجاح :white_check_mark: ')
        .setColor('RANDOM')
       message.channel.sendEmbed(embed).then(m => {
    m.delete(1000);
});
 };
 });




client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = "-"; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});






client.on('message', message => {
    if (message.content.startsWith("-info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO BlueBot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});




const perfix = '-';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'msg')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let Emoko = msg.mentions.members.first()
      if (!Emoko) return msg.reply(`**يجب تحديد الشخص**`)
      let EmokoEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديدة:new_moon_with_face: **`)
      .setDescription(args.join(" "))

      client.users.get(`${Emoko.id}`).send(EmokoEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});






client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**message**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});





client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
})







client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + "bc")) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "BlueBot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .addField('السيرفر', message.guild.name)
       .addField('المرسل ', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });








client.on("message", msg => {
           var prefix = "-";//تكدر تغير البريفكس
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
        }
});


client.on('message', message => {
        if (message.content === "-invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=483499229407477762&permissions=8&scope=bot`)        
     message.channel.sendEmbed(embed);
       }
   }); 


client.on('message', message => {
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("  :gear: Server Support :gear: " , "  https://discord.gg/p4xQ6jv")


  message.channel.sendEmbed(embed);
    }
}); 




client.on('message',function(message) {
    let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**#-  ${args}**`); 
  }
});



client.on('message', message => {   
if (message.author.boss) return;
var prefix = "-";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find(r => r.name === "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 
 ${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}  
});  




client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === "-unmute") { // حط البرفكس حقت بوتك قبل الامر
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find(c => c.name === 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find(r => r.name === 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
    });
  }
 
};
 
})





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
__~~BlueBot~~__ By: iiBlueGamer295YT| SK ♕#0548
╭━━╮╭╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭╮╭┳━━┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃┃┃┃┃━┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╰╯┃┃━┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻━━┻━━┻━━━┻━━┻━╯
╔[❖════════════❖]╗
             Prefix = ' - '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

❖ -bc <message> ➾ message all members in server

❖ -mute <user> <time> <reason> ➾ mute from server

❖ -unmute <user> ➾ unmute from server

❖ -kick <user> <reason> ➾ kick from server

❖ -openc ➾ to open chat

❖ -colsec ➾ to close chat

❖ -clear <number> ➾ clear chat

❖ -ban <mention> <reason> ➾ ban member from server

❖ -unban <id> ➾ unban from server

╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ -id ➾ your id

❖ -report ➾ to report someone in server

❖ -avatar ➾ your avatar account

❖ -ping ➾ to see ping

❖ -info ➾ user & bot informations 

❖ -bot ➾ bot informations

❖ -server ➾  informations

❖ make room with name <welcome> ➾ for join-leave log

❖ -member ➾ members info

❖ -own ➾ bot owner

❖ -invite ➾ bot invite link

❖ -support ➾ server support link

❖ -sug <Suggestion> ➾ for Suggestions 

❖ -msg ➾  for send msg for someone by bot

❖ -send ➾  to send message with react in it to channel 

==================================================================

Server support: https://discord.gg/p4xQ6jv

==================================================================

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=483499229407477762&permissions=8&scope=bot

==================================================================

`);

    }
});  
 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
 __~~BlueBot~~__
╭━━╮╭╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭╮╭┳━━┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃┃┃┃┃━┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╰╯┃┃━┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻━━┻━━┻━━━┻━━┻━╯
 __created By__: iiBlueGamer295YT| SK #0548

Server Support : https://discord.gg/p4xQ6jv

bot link : https://discordapp.com/api/oauth2/authorize?client_id=483499229407477762&permissions=8&scope=bot
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});
  



  
client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(" ");
    var reason = args.slice(2).join(" ");
    var userM = message.mentions.users.first() || message.guild.members.get(args[1]);
    
    if(command == prefix + 'ban') {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
        
        if(!userM) return message.reply("**منشن شخص**");
        if(!message.guild.member(userM).bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
        
        if(!reason) reason = 'No reason.';
        
        message.guild.member(userM).ban(7, userM);
        message.channel.send(`**:white_check_mark: <@${userM.id}> banned from the server ! Reason: \`\`${reason}\`\` :airplane:**`);
    }
});



  client.on('message', msg => {
  if(msg.content === 'ping')
  msg.reply('pong')
});
  




client.on('message' , message => {
  
if (message.content.startsWith("-sug")) {
          if(!message.channel.guild) return message.reply('هذا الامر للسيرفرات فقط')
      if (message.author.bot) return;
            if (!message.channel.guild) return;
            let args = message.content.split(" ").slice(1).join(" ");

                var xsatt = new Discord.RichEmbed()
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
              .setThumbnail(message.guild.iconURL)
              .setColor('RANDOM')
              client.users.get("349095859859881984").send({embed: xsatt});

            let embed = new Discord.RichEmbed()
               .setAuthor(message.author.username, message.author.avatarURL)
               .setColor("RANDOM")
               .setDescription(' ✅ | **__ تم ارسال الأقتراح الى صاحب البوت __**')
               .setThumbnail(message.author.avatarURL)


          message.channel.send(embed);
        }});






client.on('guildMemberRemove', member => {
let channel = member.guild.channels.find(c => c.name === 'welcome');
let memberavatar = member.user.avatarURL
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | لقد غادر:' , `لقد خرج منا عضو هو , ${member}:cry: `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| تبقى',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("BlueBot")
    .setTimestamp()

  channel.sendEmbed(embed);
});



client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(" ");
    
    var userID = args[1];
    
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('انت لا تمتلك الصلاحية الكافيه');
        if(!userID) return  message.channel.send('**اكتب ايدي الشخص**');
        if(isNaN(userID)) return message.reply('**يجب ان يكون ايدي الشخص من ارقام فقط**');
        if(userID.length < 16) return message.reply('**هذا ليس ايدي شخص**');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === userID);
            if(!Found) return message.reply('**هذا الشخص ليس لديه باند في هذا السيرفر**');
            message.guild.unban(userID);
            message.channel.send(`:white_check_mark: <@${userID}> **unbanned from the server !**`);
        })
    }
});




client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    
    if(command == prefix + 'member') {
        var memberCount = message.guild.memberCount;
        var memberOnline = message.guild.members.filter(m => m.presence.status === 'online').size;
        var memberIdle = message.guild.members.filter(m => m.presence.status === 'idle').size;
        var memberDnd = message.guild.members.filter(m => m.presence.status === 'dnd').size;
        var memberOffline = message.guild.members.filter(m => m.presence.status === 'offline').size;
        var totalMemberOnline = memberOnline + memberIdle + memberDnd;
        
        let alatMember = new Discord.RichEmbed()
        .setTitle(':white_check_mark: **Members Status**')
        .setColor('RANDOM')
        .addField(`:green_heart: Online: ${memberOnline}`, '-', true)
        .addField(`:yellow_heart: Idle: ${memberIdle}`, '-', true)
        .addField(`:heart: Do not Disturb : ${memberDnd}`, '-', true)
        .addField(`:black_heart: Offline: ${memberOffline}`, '-', true)
        .addField(`:heavy_plus_sign: Member Online: ${totalMemberOnline}`, '-', true)
        .addField(`:blue_heart: All: ${memberCount}`, '-', true)
        .setImage(message.guild.iconURL)
        
        message.channel.send(alatMember);
    }
});




client.on('guildMemberAdd', member => {
let channel = member.guild.channels.find(c => c.name === 'welcome');
let memberavatar = member.user.avatarURL
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | انضم:' , `انضم عندنا عضو جديد , ${member}:grinning:  `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| اصبحوا',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("BlueBot")
    .setTimestamp()

  channel.sendEmbed(embed);
});






client.on('guildCreate', guild => {
  client.channels.get("485488228887953448").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("485488228887953448").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});



client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '-';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("RANDOM")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(c => c.name === "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});





client.on('message', message => {
const prefix = "-";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("485488228887953448").send({embed : banembed})
}
});



client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO BlueBot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[-]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | iiBlueGamer295YT| SK ♕')
    })
}
});



const moment = require('moment');
client.on('message', message => {
    var command = message.content.toLowerCase().split(" ")[0];
    if(command == prefix + 'server') {
        var botCount = message.guild.members.filter(m => m.user.bot).size;
        var memberCount = message.guild.memberCount - botCount;
        var memberOnline = message.guild.members.filter(m=>m.presence.status == 'online').size + message.guild.members.filter(m=>m.presence.status == 'idle').size + message.guild.members.filter(m=>m.presence.status == 'dnd').size;
       
        message.guild.fetchBans().then(bans => {
            var bansSize = bans.size;
           
            if(message.guild.verificationLevel === 0) {
                var vLvl = 'Very Easy';
            }else
            if(message.guild.verificationLevel === 1) {
                var vLvl = 'Easy';
            }else
            if(message.guild.verificationLevel === 2) {
                var vLvl = 'Medium';
            }else
            if(message.guild.verificationLevel === 3) {
                var vLvl = 'Hard';
            }else
            if(message.guild.verificationLevel === 4) {
                var vLvl = 'Very Hard';
            }
           
            var serverInfo = new Discord.RichEmbed()
            .setTitle(`:books: Information about **${message.guild.name}** Server.`)
            .setColor('AQUA')
            .setThumbnail(message.guild.iconURL)
            .addField(':crown: **Server Owner**', `**➥** [ ${message.guild.owner} ]`, true)
            .addField(':satellite: **Server Type**', `**➥** [ **${message.guild.region}** ]`, true)
            .addField(':date: **Server Created At**', `**➥** [ **${moment(message.guild.createdAt).format("LL")}** ]`, true)
            .addField(':shield: **Verification Level**', `**➥** [ **${vLvl}** ]`, true)
            .addField(':first_place: **Roles Amount**', `**➥** [ **${message.guild.roles.size}** ]`, true)
            .addField(':name_badge: **Bans Amount**', `**➥** [ **${bansSize}** ]`, true)
            .addField(':bar_chart: **Channels Amount**', `**➥** [ **${message.guild.channels.size}** ]`, true)
            .addField(':diamond_shape_with_a_dot_inside: **Categores Amount**', `**➥** [ **${message.guild.channels.filter(m=>m.type == 'category').size}** ]`, true)
            .addField(':pencil: **Text Amount**', `**➥** [ **${message.guild.channels.filter(m=>m.type == 'text').size}** ]`, true)
            .addField(':microphone2: **Voice Amount**', `**➥** [ **${message.guild.channels.filter(m=>m.type == 'voice').size}** ]`, true)
            .addField(':zzz: **AFK Channel**', `**➥** [ **${message.guild.afkChannel || 'لا يوجد'}** ]`, true)
            .addField(':robot: **Bots Count**', `**➥** [ **${botCount}** ]`, true)
            .addField(':busts_in_silhouette: **Members Count**', `**➥** [ **${memberCount}** ]`, true)
            .addField(':green_heart: **Online Members**', `**➥** [ **${memberOnline}** ]`, true)
            .addField(':black_circle: **Offline Members**', `**➥** [ **${message.guild.members.filter(m=>m.presence.status == 'offline').size}** ]`, true)
            .addField(':bust_in_silhouette: **Last Member**', `**➥** [ ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)} ]`, true)
            .addField(':id: **Server ID**', `**➥** [ **${message.guild.id}** ]`, true)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            message.channel.send(serverInfo);
        })
    }
});




client.on('message',function(message) {
    
    if(message.content.startsWith(`<@${client.user.id}>`)) {
        message.channel.send('Hey Im BlueBot')
        message.channel.send('if you need by a support write -support ')
        message.channel.send('if you need help do -help ')
    }
});






client.on('message', message => {
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.author.bot) return;
    if (command === 'closec') {
                        if(!message.channel.guild) return;
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('this command for admins only').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
 const starEmbed = new Discord.RichEmbed()
               .setAuthor('the chat was colsed : '+message.author.username)
                .setColor('RANDOM')
               
               message.channel.send(starEmbed)
               });
             }
if (command === "openc") {
    
    if(!message.channel.guild) return;
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('this cimmand for admins only ').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               const starEmbed = new Discord.RichEmbed()
               .setAuthor('the chat was opened: '+message.author.username)
                        .setColor('RANDOM')
               
               message.channel.send(starEmbed)
           });
             }



});


client.on('message', message => {
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.author.bot) return;
    if (command === 'closec') {
                        if(!message.channel.guild) return;
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('this command for admins only').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
 const starEmbed = new Discord.RichEmbed()
               .setAuthor('the chat was colsed : '+message.author.username)
                .setColor('RANDOM')
               
               message.channel.send(starEmbed)
               });
             }
if (command === "openc") {
    
    if(!message.channel.guild) return;
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('this cimmand for admins only ').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               const starEmbed = new Discord.RichEmbed()
               .setAuthor('the chat was opened: '+message.author.username)
                        .setColor('RANDOM')
               
               message.channel.send(starEmbed)
           });
             }



});


var fs = require("fs");
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`:atm: |**${message.author.username} you collect your \`310\` :yen: daily credits!**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans'))
if (!args[0]) {message.channel.send(`**Usage: ${prefix}trans @someone amount**`); 
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone number**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone number**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(`:credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID: ${message.author.id})\`\`\``));
               message.channel.sendEmbed(embed)
        })
        })
});

client.login(process.env.BOT_TOKEN);
