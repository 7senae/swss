const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

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
	if(message.author.bot) return;
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
	if(message.author.bot) return;
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




client.on('message', message => {
	if(message.author.bot) return;
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
	if(message.author.bot) return;
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


client.on('message', msg => {
	if(msg.author.bot) return;
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
    if (message.author.bot) return;
    if(message.content.includes('http://discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});






client.on('message', message => {
	if(message.author.bot) return;
              if(!message.channel.type === 'dm') return;
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
       .setFooter(copy, client.user.avatarURL)
       .addField('الرساله الى : ' , `${m}`)
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
	if(msg.author.bot) return;
	if(msg.channel.type === 'dm') return;
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
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
        if (message.content === "-invite") {
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=483499229407477762&permissions=8&scope=bot`)        
     message.channel.sendEmbed(embed);
       }
   }); 


client.on('message', message => {
	if(message.author.bot) return;
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("  :gear: Server Support :gear: " , "  https://discord.gg/p4xQ6jv")


  message.channel.sendEmbed(embed);
    }
}); 


client.on('message',function(message) {
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
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
message.reply('**check your DMs! :mailbox_with_mail: **')
	
		 


 message.author.sendMessage(`
__~~BlueBot~~__ By: iiBlueGamer295YT| SK ♕#1124
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

❖ -autoC <role name> than react any message ➾ to make auto role with react

❖ -openc ➾ to open chat

❖ -colsec ➾ to close chat

❖ -clear <number> ➾ clear chat

❖ -ban <mention> <reason> ➾ ban member from server

❖ -unban <id> ➾ unban from server

╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ -id ➾ your id

❖ -daily ➾ to get free credit

❖ -credit ➾ to see your credit

❖ -trans <@someone> <number> ➾ to get someone credit

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

❖ -giveaway <room name> <time in min> <giveaway name> ➾ make giveaway! 

❖ -BotTime ➾ to see time bot is online for

❖ -ticket ➾ to make ticket / or -close to close it 
 
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
message.reply('**check your DMs! :mailbox_with_mail: **')

 message.author.sendMessage(`
 
 __~~BlueBot~~__
╭━━╮╭╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭╮╭┳━━┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃┃┃┃┃━┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╰╯┃┃━┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻━━┻━━┻━━━┻━━┻━╯
 __created By__: iiBlueGamer295YT| SK ♕#1124 

Server Support : https://discord.gg/p4xQ6jv

bot link : https://discordapp.com/api/oauth2/authorize?client_id=483499229407477762&permissions=8&scope=bot
`);

    }
});
  

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(" ");
    var reason = args.slice(2).join(" ");
    
    if(command == prefix + 'ban') {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");

        var userM = message.mentions.users.first() || message.guild.members.get(args[1]);
        
        if(!userM) return message.reply("**منشن شخص**");
        if(!message.guild.member(userM).bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
        
        if(!reason) reason = 'No reason.';
        
        message.guild.member(userM.user).ban(7, userM.user);
        message.channel.send(`**:white_check_mark: <@${userM.id}> banned from the server ! Reason: \`\`${reason}\`\` :airplane:**`);
    }
});



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
if (message.author.bot) return;
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
  if (message.author.bot) return;
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
    if (message.author.bot) return;
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
    if (message.author.bot) return;
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
if (message.author.bot) return;
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
if(message.content.startsWith(prefix + 'trans')) {
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
mentionned.send(`:credit_card: | Transfer Receipt \`\`\`\`You have received ${args[0]} from user ${message.author.username} (ID: ${message.author.id})\`\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
}
});


client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("-ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '-confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// ALPHA CODES
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ALPHA CODES
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});


client.on("message", async message => {
if(message.channel.type === "dm") return;
 if(message.content === (prefix + "BotTime")) { /// حط اي كلمة تبيها
 if (!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) { ///لا تعدل اي شي 

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
 });



client.on('message', message => {
   
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
   
    var command = message.content.toLowerCase().split(" ")[0]; // حقوق الفا كوودز Alpha Codes.
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
    var prefix = '-'; // هنا تقدر تغير البرفكس <==================
   
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
 
        let roleCommand = new Discord.RichEmbed()
        .setTitle(':white_check_mark: Role Command.')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
 
        if(!args[1]) return message.channel.send(roleCommand);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
 
        if(userM) {
            var argsRole = message.content.toLowerCase().split(' ').slice(2);
        }else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = message.content.toLowerCase().split(' ').slice(3); // حقوق الفا كوودز Alpha Codes.
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
           
            if(!message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).addRole(getRole.id);
                message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
            }else if(message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).removeRole(getRole.id);
                message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
            }
        }else if(args[1] === 'humans') {
            let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كوودز Alpha Codes.
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
                                }, 10000)
                            });
                        });
                    }); // حقوق الفا كوودز Alpha Codes.
                    dontRemove.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            } // حقوق الفا كوودز Alpha Codes.
        }else if(args[1] === 'bots') {
        let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') { // حقوق الفا كوودز Alpha Codes.
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }
        }else if(args[1] === 'all') { // حقوق الفا كوودز Alpha Codes.
            let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // حقوق الفا كوودز Alpha Codes.
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎'))
 
                    let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveAll, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
                                }, 10000) // حقوق الفا كوودز Alpha Codes.
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed() // حقوق الفا كوودز Alpha Codes.
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; // حقوق الفا كوودز Alpha Codes.
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    }); // حقوق الفا كوودز Alpha Codes.
                })
            } // حقوق الفا كوودز Alpha Codes.
        }
    }
});

client.on('message', message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(' ').slice(1).join(' ');
    var sender = message.author;
    var sugChannel = message.guild.channels.find(r => r.name === 'suggestions');
   
    if(command == prefix + 'sug') {
        if(!sugChannel) return message.channel.send(':no_entry: | The Suggestions room is not defind! please make room with name `suggestions`');
        if(!args) return message.channel.send(`**Useage:** ${prefix}sug <SUG>`);
        if(args.length > 15000) return message.channel.send(':no_entry: | الاقتراح يجب ان يكون اقل من 1500 حرف');
       
        message.delete();
        message.channel.send(':octagonal_sign: __هل أنت متأكد انك تريد ارسال اقتراحك؟__').then(msg => {
            msg.react('✅').then(() => msg.react('❎'))
           
            let sugSure = new Discord.RichEmbed()
            .setColor('BLUE')
            .setDescription(`**${args}**`)
            .setTimestamp()
            .setFooter(sender.tag, sender.avatarURL)
           
            message.channel.send(sugSure).then(msg1 => {
               
                let yes = (reaction, user) => reaction.emoji.name === '✅'  && user.id === sender.id;
                let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === sender.id;
               
                let send = msg.createReactionCollector(yes);
                let dontSend = msg.createReactionCollector(no);
               
                send.on('collect', r => {
                    msg.delete();
                    msg1.delete();
                    let sugMsg = new Discord.RichEmbed()
                    .setTitle(':bell: New Suggestion! :bell:')
                    .setColor('RANDOM')
                    .setThumbnail(sender.avatarURL)
                    .setDescription(`**\n:arrow_right: Sender:**\n<@${sender.id}>\n\n:pencil: **Suggestion:**\n${args}`)
                    .setTimestamp()
                    .setFooter(sender.tag, sender.avatarURL)
                   
                    sugChannel.send(sugMsg).then(msg => {
                        msg.react('✅').then(() => msg.react('❎'));
                    })
                    message.channel.send(`:white_check_mark: | <@${sender.id}> The Suggestion was Successfully send to sugs room!`).then(msg => msg.delete(5000));
                });
                dontSend.on('collect', r => {
                    msg.delete();
                    msg1.delete();
                    message.channel.send(`:x: | <@${sender.id}> The suggestion was Successfully canceld.`).then(msg => msg.delete(5000));
                });
            })
        })
    }
});


const devs = ['349095859859881984'];
const child_process = require("child_process");
///restart
client.on('message', message => {
if(message.content === prefix + "restart") {
      if (!devs.includes(message.author.id)) return;;
        console.log("⚠️ جاري اعادة تشغيل البوت... ⚠️");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log("تم اعادة تشغيل البوت");
    }
  
  });

const adminprefix = "-";
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatarr')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

 



var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoc <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }     
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user); 
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
}) 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});
  

client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات ال��افية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Members Count : [ ${message.guild.members.size} ]`)
      },1000);
    });
    }
  });

    
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setTime")) {
    if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
      },1000);
    });
    }
  });


  
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setDate")) {
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
      },1000);
    });
    }
  });

client.on('message', message => {
    if(message.author.bot) return; // Alpha Codes Server.
    if(message.channel.type === 'dm') return;
   
    var args = message.content.toLowerCase().split(' '); // Alpha Codes Server.
    var command = args[0];
    var prefix = '-'; // <=========== تقدر تغير البرفكس
   
    if(command == prefix + 'members') {
        var memberS = message.guild.members.size; // Alpha Codes Server.
        if(!args[1] || isNaN(args[1]) || args[1] === '1') {
            var number = 1;
 
            if(memberS > 10) {
                var more = `\n__:sparkles: **More?** \`\`${prefix}members 2\`\` (${Math.round(memberS / 10)} pages)`;
            }else {
                var more = '__'; // Alpha Codes Server.
            }
 
            let embedS = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **${memberS}** Members.`) // Alpha Codes Server.
            .setColor('GREEN')
            .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(0, 10).join('\n')}__\n${more}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
 
            message.channel.send(embedS);
        }else if(!isNaN(args[1])) {
            var number = 1;
 
            if(memberS > 10) {
                var more = `choose **1** To **${Math.round(memberS / 10)}**`;
            }else {
                var more = 'This server have **1** Page only.'; // Alpha Codes Server.
            }
 
            if(Math.round(args[1].replace('-', '')) * 10 - 9 > memberS) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${more}`);
 
           let embedS = new Discord.RichEmbed()
           .setTitle(`:white_check_mark: **${memberS}** Members.`) // Alpha Codes Server.
           .setColor('GREEN')
           .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}\n\n:sparkles: **More?** \`\`${prefix}members ${Math.round(args[1].replace('-', '')) + 1}\`\` (${Math.round(memberS / 10)} pages)`)
           .setTimestamp()
           .setFooter(message.author.tag, message.author.avatarURL)
 
           message.channel.send(embedS);
       }
   }
 
 
   if(command == prefix + 'info-member') { // Alpha Codes Server.
       if(!args[1]) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
       if(isNaN(args[1])) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
       if(args[1] > message.guild.members.size) return message.channel.send(`:no_entry: | I couldn\'t find the user. Please selecte number from 1 to ${message.guild.members.size}`);
 
       let memberInfo = new Discord.RichEmbed()
       .setTitle(`:white_check_mark: Informations about **${message.guild.members.map(m => m.user.tag).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}**`) // Alpha Codes Server.
       .setThumbnail(`${message.guild.members.map(m => m.user.avatarURL).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}`)
       .setColor('GREEN')
       .setDescription(`__\n__**INFORMATIONS USER:**\n\n**User ID:** \`\`${message.guild.members.map(m => m.user.id).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Tag:** \`\`#${message.guild.members.map(m => m.user.discriminator).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Created at:** \`\`${message.guild.members.map(m => Days(m.user.createdAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Joined at:** \`\`${message.guild.members.map(m => Days(m.joinedAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Status:** \`\`${message.guild.members.map(m => m.user.presence.status).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Roles Amount:** \`\`${message.guild.members.map(m => m.roles.size - 1).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))} Role.\`\`\n**User Bot:** \`\`${message.guild.members.map(m => m.user.bot).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\``) // Alpha Codes Server.
       .setTimestamp()
       .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
 
       message.channel.send(memberInfo);
   } // Alpha Codes Server.
});


client.login(process.env.BOT_TOKEN);
