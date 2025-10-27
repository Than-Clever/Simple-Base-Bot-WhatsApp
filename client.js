/*

# Base By Than Ror
# Owner : t.me/thanror
!! do not delete this credit !!

*/

require('./config')
const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const chalk = require('chalk')
const speed = require('performance-now')
const moment = require('moment-timezone')
const os = require('os')
const util = require('util')
const { spawn: spawn, exec } = require("child_process")
//=================================================//
module.exports = client = handler = async (client, m, chatUpdate, store) => {
	try {
	
		const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./storage/lib/myfunc.js');
		const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./storage/lib/converter');
		const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./storage/lib/uploader');
    //=================================================//
		var body = (
			m.mtype === 'conversation' ? m.message.conversation :
			m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
			m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
			m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
			m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
			m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
			m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
			m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
			m.mtype === 'messageContextInfo' ?
			m.message.buttonsResponseMessage?.selectedButtonId ||
			m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
			m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
			m.text :
			''
			);
		if (body == undefined) { body = '' };
		var budy = (typeof m.text == "string" ? m.text : "");
    //=================================================//
		//command
		const prefixRegex = /[.!#÷×/]/;
		const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : null;
		const isCmd = prefix ? body.startsWith(prefix) : false;
		const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';		
		const args = budy.trim().split(/ +/).slice(1);
		const q = text = args.join(' ')

		// Individual
		const botNumber = client.user.id.split(':')[0];
		const pushname = m.pushName || "No Name";
		const senderNumber = m.sender.split('@')[0];	
		const itsMe = m.sender == botNumber;
		const isOwner = [botNumber, ...global.owner]
			.map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
			.includes(m.sender);
			
		if (!client.public) {
			if (!m.fromMe && !isOwner) return;
		};

		// Group
		const isGroup = m.chat.endsWith('@g.us');
		const groupMetadata = isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : '';
		const groupName = isGroup ? groupMetadata.subject : '';
		const groupMembers = isGroup ? groupMetadata.participants : '';
		const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : '';
		const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false;
		const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
		const groupOwner = isGroup ? groupMetadata.owner : '';
		const isGroupOwner = isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;

		//msg
		const isMedia = (m.type === 'imageMessage' || m.type === 'videoMessage')
		const fatkuns = (m.quoted || m)
		const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
		const qmsg = (quoted.msg || quoted)
		const mime = qmsg.mimetype || "";
		const moon = fs.readFileSync('./storage/media/lol.jpeg')
		const wangy = fs.readFileSync('./storage/media/ror.jpeg')

		//time
		const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
		let ucapanWaktu;
		if (time >= "19:00:00" && time < "23:59:00") {
			ucapanWaktu = "夜 🌌";
		} else if (time >= "15:00:00" && time < "19:00:00") {
			ucapanWaktu = "午後 🌇";
		} else if (time >= "11:00:00" && time < "15:00:00") {
			ucapanWaktu = "正午 🏞️";
		} else if (time >= "06:00:00" && time < "11:00:00") {
			ucapanWaktu = "朝 🌁";
		} else {
			ucapanWaktu = "夜明け 🌆";
		}
		const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
		const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
		const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
		const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
		let d = new Date();
		let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime();
		let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5];
		let week = d.toLocaleDateString("id", { weekday: "long" });
		let calendar = d.toLocaleDateString("id", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});		

        //quoted
		const ctt = {
			key: {
				remoteJid: '0@s.whatsapp.net', // 'status@broadcast', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, saya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};

		const callg = {
			key: {
				remoteJid: 'status@broadcast', // '0@s.whatsapp.net', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, sebaiknya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				callLogMesssage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }]
                }
			}
		};

		const zreply = async (teks) => {
			await sleep(500)
			return client.sendMessage(m.chat, {
				contextInfo: {
					mentionedJid: [
						m.sender
					],
					externalAdReply: {
						showAdAttribution: false, //bebas
						renderLargerThumbnail: false, //bebas
						title: `Than - X$`,
						body: `By WhatsApp Meta`,
						previewType: "VIDEO",
						thumbnail: moon,
						sourceUrl: global.url,
						mediaUrl: global.url
					}
				},
				text: teks
			}, {
				quoted: ctt
			})
		}
		
		// Prepare Media
        async function prM(params) {
            return await prepareWAMessageMedia(params, {
                upload: client.waUploadToServer
            })
        }
//=================================================//
    // Mencetak catatan diconsole saat ada yang mengirim perintah

//  	if (m.message)  {		
		if (isCmd)  {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
//=================================================//

		switch (command) {
            case 'menu': {
                let timestampp = speed()
                let latensii = speed() - timestampp
                let run = process.uptime()
                let teks = `${runtime(run)}`
                let bajindul = `┌──────────┐
│  ▢  Simple - Base
│  ‣  Version  : *${require('./package.json').version}*
│  ‣  Author   : ThanRor
│  ‣  User     : ${m.pushName}
│  ‣  Prefix   : ${prefix}
│  ‣  Tanggal  : *${calendar}*
│  ‣  Jam      : *${time} (Asia/Jakarta)*
│  ‣  Status   : ${client.public ? 'Public' : 'Self'}
│  ‣  Speed    : *${latensii.toFixed(4)} Sec*
│  ‣  Run Time : *${teks}*
│  ‣  Library  : Baileys
└──────────┘

╭───「 Main 」
│ ▢ .menu
│ ▢ .public
│ ▢ .self
╰──────────

╭───「 Convert 」
│ ▢ .s
│ ▢ .sticker
│ ▢ .toimg
│ ▢ .shorturl
│ ▢ .tourl
╰──────────

╭───「 Owner 」
│ ▢ > (eval)
│ ▢ < (eval-async)
│ ▢ $ (cmd-exec)
╰──────────`
                
                client.sendMessage(m.chat, {
                    image: wangy,
                    caption: bajindul,
                    footer: "Simple Base Bot By Than",
                    buttons: [
                        {
                            buttonId: '.public',
                            buttonText: { displayText: 'X' },
                            type: 1,
                        }
                    ],
                    headerType: 1,
                    viewOnce: true
                }, { quoted: m });
            }
            break
			
			case "public": {
				if (!isOwner) return
				m.reply("succes change status to public")
				client.public = true
			}
			break

			case "self": {
				if (!isOwner) return
				m.reply("succes change status to self")
				client.public = false
			}
			break

            case 's': 
            case 'sticker': 
            case 'stiker': {            
                if (/image/.test(mime)) {
                    let media = await quoted.download();
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) {
                        return zreply(`Reply gambar dengan keterangan/caption ${prefix+command}\nJika media yang ingin dijadikan sticker adalah video, batas maksimal durasi Video 1-9 Detik`);
                    }
                    let media = await quoted.download();
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else {
                    zreply(`Reply gambar dengan keterangan/caption ${prefix+command}\nDurasi Video 1-9 Detik`);
                }
            }
            break

            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) {
                    return zreply(`Reply/Balas stiker dengan teks: *${prefix + command}*`);
                }
                
                let media = await client.downloadAndSaveMediaMessage(qmsg);
                let ran = await getRandom('.png');
                
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media);
                    if (err) return err;
            
                    let buffer = fs.readFileSync(ran);
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            }
            break

            case "shortlink": 
            case "shorturl": {
                if (!text) return zreply(`Contoh: ${prefix + command} https://showmypenis`);
                if (!isUrl(text)) return zreply(`Contoh: ${prefix + command} https://showmypenis`);
            
                var res = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(text));
                var link = `\n*Shortlink by TinyURL*\n${res.data.toString()}`;
            
                await zreply(link);
            }
            break

            case 'tourl': {
                if (!/video/.test(mime) && !/image/.test(mime)) return zreply(`Reply gambar dengan keterangan/caption ${prefix+command}`);
                let pnis = await m.quoted ? m.quoted : m;
                let media = await pnis.download();
                let link = await TelegraPh(media);
                await sleep(1000);
                await zreply(`${link}`);
            }
            break

			default:
			if (body.startsWith("<")) {
                if (!isOwner) return;
                try {
                    const output = await eval(`(async () => ${q})()`);
                    await m.reply(`${typeof output === 'string' ? output : JSON.stringify(output, null, 4)}`);
                } catch (e) {
                    await m.reply(`Error: ${String(e)}`);
                }
            }
			if (budy.startsWith(">")) {
			if (!isOwner) return
				try {
					let evaled = await eval(q);
					if (typeof evaled !== "string") evaled = util.inspect(evaled);
					await m.reply(evaled);
				} catch (e) {
					await m.reply(`Error: ${String(e)}`);
				}
			}
			if (budy.startsWith("$")) {
			if (!isOwner) return
				exec(q,
					(err, stdout) => {
						if (err) return m.reply(err.toString());
						if (stdout) return m.reply(stdout.toString());
				})
				}
		}
		
	} catch (e) {
		console.log(e)
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
