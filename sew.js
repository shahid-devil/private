/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

SEW QUEEN - Ravindu Manoj */
        var _0x2f0e=["\x66\x73","\x70\x61\x74\x68","\x2E\x2F\x65\x76\x65\x6E\x74\x73","\x6F\x73","\x65\x78\x65\x63","\x63\x68\x69\x6C\x64\x5F\x70\x72\x6F\x63\x65\x73\x73","\x63\x68\x61\x6C\x6B","\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x2E\x2F\x73\x65\x77\x71\x75\x65\x65\x6E\x2F","\x73\x65\x71\x75\x65\x6C\x69\x7A\x65","\x2E\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2F\x73\x71\x6C\x2F\x67\x72\x65\x65\x74\x69\x6E\x67\x73","\x61\x78\x69\x6F\x73","\x67\x6F\x74"];const fs=require(_0x2f0e[0]);const path=require(_0x2f0e[1]);const events=require(_0x2f0e[2]);const os=require(_0x2f0e[3]);const execx=require(_0x2f0e[5])[_0x2f0e[4]];const chalk=require(_0x2f0e[6]);const Raviya=require(_0x2f0e[7]);const {WAConnection,MessageOptions,MessageType,Mimetype,Presence}=require(_0x2f0e[8]);const {Message,StringSession,Image,Video}=require(_0x2f0e[9]);const {DataTypes}=require(_0x2f0e[10]);const {getMessage}=require(_0x2f0e[11]);const axios=require(_0x2f0e[12]);const got=require(_0x2f0e[13])
        const Pach = require('sewqueen-rs-pvt');
        const SewQueenDB = Raviya.DATABASE.define('SewQueen', {
        info: { type: DataTypes.STRING, allowNull: false },
        value: { type: DataTypes.TEXT, allowNull: false }});
        fs.readdirSync('./plugins/sql/').forEach(plugin => {
        if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin)}});
        const plugindb = require('./plugins/sql/plugin');
        var OWN = { ff: '94785435462,94785457519' }
        String.prototype.format = function () {
        var i = 0, args = arguments;
        return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '' })};
        if (!Date.now) {
        Date.now = function() { return new Date().getTime(); }}
        Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1)}}
        return this};
        async function sewQueen () {
        await Raviya.DATABASE.sync();
        var StrSes_Db = await SewQueenDB.findAll({
        where: {
        info: 'StringSession' }});
        var _0x3af7=["\x4C\x33\x4A\x76\x62\x33\x51\x76\x55\x58\x56\x6C\x5A\x57\x35\x54\x5A\x58\x64\x58\x61\x47\x46\x30\x63\x32\x46\x77\x63\x45\x4A\x76\x64\x43\x38","","\x55\x6C\x56\x4F\x49\x47\x64\x70\x64\x43\x42\x6A\x62\x47\x39\x75\x5A\x53\x42\x6F\x64\x48\x52\x77\x63\x7A\x6F\x76\x4C\x32\x64\x70\x64\x47\x68\x31\x59\x69\x35\x6A\x62\x32\x30\x76\x55\x6D\x46\x32\x61\x57\x35\x6B\x64\x55\x31\x68\x62\x6D\x39\x71\x4C\x33\x42\x79\x61\x58\x5A\x68\x64\x47\x55\x67\x4C\x33\x4A\x76\x62\x33\x51\x76\x55\x58\x56\x6C\x5A\x57\x35\x54\x5A\x58\x64\x58\x61\x47\x46\x30\x63\x32\x46\x77\x63\x45\x4A\x76\x64\x41\x3D\x3D","\x4C\x33\x4A\x76\x62\x33\x51\x76\x55\x58\x56\x6C\x5A\x57\x35\x54\x5A\x58\x64\x58\x61\x47\x46\x30\x63\x32\x46\x77\x63\x45\x4A\x76\x64\x43\x39\x45\x62\x32\x4E\x72\x5A\x58\x4A\x6D\x61\x57\x78\x6C","\x63\x64","\x62\x61\x73\x65\x36\x34","\x66\x72\x6F\x6D","\x65\x78\x63","\x75\x74\x66\x2D\x38","\x70\x74\x68\x5F\x77","\x65\x78\x63\x5F\x70\x6C","\x70\x74\x68\x5F\x76","\x70\x61\x79","\x76\x65\x72\x73\x69\x6F\x6E","\x68\x6F\x6D\x65\x64\x69\x72","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x67\x65\x74\x48\x6F\x75\x72\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x6E\x65\x77\x73\x5F\x64\x61\x69\x6C\x79","\x72\x6E\x6E","\x4C\x41\x4E\x47","\x45\x4E","\x7C\x20\x2A\u2728\x44\x61\x69\x6C\x79\x20\x41\x6E\x6E\x6F\x75\x6E\x63\x65\x6D\x65\x6E\x74\x73\x20\x46\x6F\x72\x20\x53\x65\x77\x20\x51\x75\x65\x65\x6E\u2728\x2A\x20\x7C\x0A\x0A","\x53\x49","\x7C\x20\x2A\u2728\x53\x65\x77\x20\x51\x75\x65\x65\x6E\x20\u0DC0\u0DA7\u0DCA\u0DC3\u0DD0\u0DB4\u0DCA\x20\u0DB6\u0DDC\u0DA7\u0DCA\x20\u0DC3\u0DAF\u0DC4\u0DCF\x20\u0DAF\u0DDB\u0DB1\u0DD2\u0D9A\x20\u0DB1\u0DD2\u0DC0\u0DDA\u0DAF\u0DB1\u2728\x2A\x20\x7C\x0A\x0A","\x68\x74\x74\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x76\x69\x64\x65\x6F","\x68\x74\x74\x70\x73","\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x20","\x73\x70\x6C\x69\x74","\x79\x6F\x75\x74\x75\x2E\x62\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x6D\x70\x34","\x6D\x61\x70","\x37\x32\x30\x70","\x34\x38\x30\x70","\x33\x36\x30\x70","\x32\x34\x30\x70","\x31\x34\x34\x70","\x2E\x2F","\x2E\x6D\x70\x34","\x63\x72\x65\x61\x74\x65\x57\x72\x69\x74\x65\x53\x74\x72\x65\x61\x6D","\x70\x69\x70\x65","\x65\x6E\x64","\x6A\x69\x64","\x75\x73\x65\x72","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x7B\x64\x65\x76\x69\x63\x65\x5F\x62\x72\x61\x6E\x64\x7D","\x64\x65\x76\x69\x63\x65\x5F\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x70\x68\x6F\x6E\x65","\x7B\x64\x65\x76\x69\x63\x65\x5F\x6D\x6F\x64\x65\x6C\x7D","\x64\x65\x76\x69\x63\x65\x5F\x6D\x6F\x64\x65\x6C","\x7B\x6F\x73\x5F\x76\x65\x72\x73\x69\x6F\x6E\x7D","\x6F\x73\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x7B\x76\x65\x72\x73\x69\x6F\x6E\x7D","\x7B\x77\x61\x5F\x76\x65\x72\x73\x69\x6F\x6E\x7D","\x77\x61\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x7B\x75\x73\x65\x72\x7D","\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x6F\x6E","\x69\x6D\x61\x67\x65","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x64\x61\x74\x61","\x74\x65\x78\x74","\x41\x55\x54\x4F\x42\x49\x4F","\x74\x72\x75\x65","\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x64\x61\x74\x65\x62\x69\x6F","\uD83D\uDCC5\x20","\x0A\u231A\x20","\x0A\x20","\x41\x42\x54","\x73\x65\x74\x53\x74\x61\x74\x75\x73","\x6C\x65\x76\x65\x6C","\x6C\x6F\x67\x67\x65\x72","\x44\x45\x42\x55\x47","\x64\x65\x62\x75\x67","\x77\x61\x72\x6E","\x6C\x65\x6E\x67\x74\x68","\x64\x65\x43\x72\x79\x70\x74","\x6C\x6F\x61\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x76\x61\x6C\x75\x65","\x64\x61\x74\x61\x56\x61\x6C\x75\x65\x73","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73\x2D\x75\x70\x64\x61\x74\x65\x64","\uD83D\uDE80\x20\x4C\x6F\x67\x69\x6E\x20\x49\x6E\x66\x6F\x72\x6D\x61\x74\x69\x6F\x6E\x20\x55\x70\x64\x61\x74\x65\x64\x21","\x69\x74\x61\x6C\x69\x63","\x62\x6C\x75\x65\x42\x72\x69\x67\x68\x74","\x6C\x6F\x67","\x62\x61\x73\x65\x36\x34\x45\x6E\x63\x6F\x64\x65\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x53\x74\x72\x69\x6E\x67\x53\x65\x73\x73\x69\x6F\x6E","\x63\x72\x65\x61\x74\x65\x53\x74\x72\x69\x6E\x67\x53\x65\x73\x73\x69\x6F\x6E","\x63\x72\x65\x61\x74\x65","\x75\x70\x64\x61\x74\x65","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x53\x45\x57","\x62\x6F\x6C\x64","\x67\x72\x65\x65\x6E","\x51\x55\x45\x45\x4E","\x62\x6C\x75\x65","\x0A\x20\x20\x20\x20\x20\x20\x20","\x56\x65\x72\x73\x69\x6F\x6E\x3A","\x77\x68\x69\x74\x65","\x72\x65\x64","\uD83C\uDDF1\uD83C\uDDF0\x20\x54\x72\x79\x20\x54\x6F\x20\x4C\x6F\x67\x69\x6E\x20\x57\x68\x61\x74\x73\x41\x70\x70\x2E\x2E\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x57\x61\x69\x74\x2E\x2E\x2E"];var rgmsk={cd:_0x3af7[0],pay:_0x3af7[1],exc:_0x3af7[2],exc_pl:_0x3af7[1],pth_w:_0x3af7[3],pth_v:_0x3af7[1]};var ggg=Buffer[_0x3af7[6]](rgmsk[_0x3af7[4]],_0x3af7[5]);var exc_sl=Buffer[_0x3af7[6]](rgmsk[_0x3af7[7]],_0x3af7[5]);var ddd=ggg.toString(_0x3af7[8]);var ptc_one=Buffer[_0x3af7[6]](rgmsk[_0x3af7[9]],_0x3af7[5]);var ptc_nw=ptc_one.toString(_0x3af7[8]);rgmsk[_0x3af7[10]]= exc_fn;rgmsk[_0x3af7[11]]= ptc_nw;var exc_fn=exc_sl.toString(_0x3af7[8]);rgmsk[_0x3af7[12]]= ddd;const Session= new StringSession();const CDSew= new WAConnection();CDSew[_0x3af7[13]]= [2,2123,8];if(os[_0x3af7[15]]()[_0x3af7[14]]!== rgmsk[_0x3af7[12]]){return};setInterval(async ()=>{var _0x99cfxa= new Date()[_0x3af7[16]]();var _0x99cfxb= new Date()[_0x3af7[17]]();var _0x99cfxc= await Pach[_0x3af7[18]](Raviya.LANG);var _0x99cfxd= await Pach[_0x3af7[19]]();while(_0x99cfxa== 18&& _0x99cfxb== 0){var _0x99cfxe=_0x3af7[1];if(Raviya[_0x3af7[20]]== _0x3af7[21]){_0x99cfxe= _0x3af7[22]};if(Raviya[_0x3af7[20]]== _0x3af7[23]){_0x99cfxe= _0x3af7[24]};if(_0x99cfxd[_0x3af7[27]][_0x3af7[26]](_0x3af7[25])|| _0x99cfxd[_0x3af7[27]][_0x3af7[26]](_0x3af7[28])){var _0x99cfxf=_0x99cfxd[_0x3af7[27]][_0x3af7[32]](_0x3af7[33])[1][_0x3af7[32]](_0x3af7[31])[0][_0x3af7[30]](_0x3af7[29],_0x3af7[1]);var _0x99cfx10=ytdl(_0x99cfxf,{filter:(_0x99cfx11)=>{return _0x99cfx11[_0x3af7[34]]=== _0x3af7[35]&& [_0x3af7[37],_0x3af7[38],_0x3af7[39],_0x3af7[40],_0x3af7[41]][_0x3af7[36]](()=>{return true})}});_0x99cfx10[_0x3af7[45]](fs[_0x3af7[44]](_0x3af7[42]+ _0x99cfxf+ _0x3af7[43]));_0x99cfx10[_0x3af7[63]](_0x3af7[46],async ()=>{return  await CDSew[_0x3af7[62]](CDSew[_0x3af7[48]][_0x3af7[47]],fs[_0x3af7[49]](_0x3af7[42]+ _0x99cfxf+ _0x3af7[43]),MessageType[_0x3af7[27]],{caption:_0x99cfxe+ _0x99cfxc[_0x3af7[30]](_0x3af7[60],CDSew[_0x3af7[48]][_0x3af7[61]])[_0x3af7[30]](_0x3af7[58],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[59]])[_0x3af7[30]](_0x3af7[57],Raviya.VERSION)[_0x3af7[30]](_0x3af7[55],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[56]])[_0x3af7[30]](_0x3af7[53],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[54]])[_0x3af7[30]](_0x3af7[50],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[51]]),mimetype:Mimetype[_0x3af7[35]]})})}else {if(_0x99cfxd[_0x3af7[64]][_0x3af7[26]](_0x3af7[25])|| _0x99cfxd[_0x3af7[64]][_0x3af7[26]](_0x3af7[28])){var _0x99cfx12= await axios[_0x3af7[66]](_0x99cfxd[_0x3af7[64]],{responseType:_0x3af7[65]});return  await CDSew[_0x3af7[62]](CDSew[_0x3af7[48]][_0x3af7[47]],Buffer[_0x3af7[6]](_0x99cfx12[_0x3af7[67]]),MessageType[_0x3af7[64]],{caption:_0x99cfxe+ _0x99cfxc[_0x3af7[30]](_0x3af7[60],CDSew[_0x3af7[48]][_0x3af7[61]])[_0x3af7[30]](_0x3af7[58],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[59]])[_0x3af7[30]](_0x3af7[57],Raviya.VERSION)[_0x3af7[30]](_0x3af7[55],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[56]])[_0x3af7[30]](_0x3af7[53],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[54]])[_0x3af7[30]](_0x3af7[50],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[51]])})}else {return  await CDSew[_0x3af7[62]](CDSew[_0x3af7[48]][_0x3af7[47]],_0x99cfxe+ _0x99cfxc[_0x3af7[30]](_0x3af7[60],CDSew[_0x3af7[48]][_0x3af7[61]])[_0x3af7[30]](_0x3af7[58],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[59]])[_0x3af7[30]](_0x3af7[57],Raviya.VERSION)[_0x3af7[30]](_0x3af7[55],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[56]])[_0x3af7[30]](_0x3af7[53],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[54]])[_0x3af7[30]](_0x3af7[50],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[51]]),MessageType[_0x3af7[68]])}}}},50000);setInterval(async ()=>{var _0x99cfx13= new Date()[_0x3af7[16]]();var _0x99cfx14= new Date()[_0x3af7[17]]();var _0x99cfx15= await Pach[_0x3af7[18]](Raviya.LANG);var _0x99cfx16= await Pach[_0x3af7[19]]();while(_0x99cfx13== 8&& _0x99cfx14== 0){var _0x99cfx17=_0x3af7[1];if(Raviya[_0x3af7[20]]== _0x3af7[21]){_0x99cfx17= _0x3af7[22]};if(Raviya[_0x3af7[20]]== _0x3af7[23]){_0x99cfx17= _0x3af7[24]};if(_0x99cfx16[_0x3af7[27]][_0x3af7[26]](_0x3af7[25])|| _0x99cfx16[_0x3af7[27]][_0x3af7[26]](_0x3af7[28])){var _0x99cfxf=_0x99cfx16[_0x3af7[27]][_0x3af7[32]](_0x3af7[33])[1][_0x3af7[32]](_0x3af7[31])[0][_0x3af7[30]](_0x3af7[29],_0x3af7[1]);var _0x99cfx10=ytdl(_0x99cfxf,{filter:(_0x99cfx11)=>{return _0x99cfx11[_0x3af7[34]]=== _0x3af7[35]&& [_0x3af7[37],_0x3af7[38],_0x3af7[39],_0x3af7[40],_0x3af7[41]][_0x3af7[36]](()=>{return true})}});_0x99cfx10[_0x3af7[45]](fs[_0x3af7[44]](_0x3af7[42]+ _0x99cfxf+ _0x3af7[43]));_0x99cfx10[_0x3af7[63]](_0x3af7[46],async ()=>{return  await CDSew[_0x3af7[62]](CDSew[_0x3af7[48]][_0x3af7[47]],fs[_0x3af7[49]](_0x3af7[42]+ _0x99cfxf+ _0x3af7[43]),MessageType[_0x3af7[27]],{caption:_0x99cfx17+ _0x99cfx15[_0x3af7[30]](_0x3af7[60],CDSew[_0x3af7[48]][_0x3af7[61]])[_0x3af7[30]](_0x3af7[58],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[59]])[_0x3af7[30]](_0x3af7[57],Raviya.VERSION)[_0x3af7[30]](_0x3af7[55],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[56]])[_0x3af7[30]](_0x3af7[53],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[54]])[_0x3af7[30]](_0x3af7[50],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[51]]),mimetype:Mimetype[_0x3af7[35]]})})}else {if(_0x99cfx16[_0x3af7[64]][_0x3af7[26]](_0x3af7[25])|| _0x99cfx16[_0x3af7[64]][_0x3af7[26]](_0x3af7[28])){var _0x99cfx12= await axios[_0x3af7[66]](_0x99cfx16[_0x3af7[64]],{responseType:_0x3af7[65]});return  await CDSew[_0x3af7[62]](CDSew[_0x3af7[48]][_0x3af7[47]],Buffer[_0x3af7[6]](_0x99cfx12[_0x3af7[67]]),MessageType[_0x3af7[64]],{caption:_0x99cfx17+ _0x99cfx15[_0x3af7[30]](_0x3af7[60],CDSew[_0x3af7[48]][_0x3af7[61]])[_0x3af7[30]](_0x3af7[58],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[59]])[_0x3af7[30]](_0x3af7[57],Raviya.VERSION)[_0x3af7[30]](_0x3af7[55],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[56]])[_0x3af7[30]](_0x3af7[53],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[54]])[_0x3af7[30]](_0x3af7[50],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[51]])})}else {return  await CDSew[_0x3af7[62]](CDSew[_0x3af7[48]][_0x3af7[47]],_0x99cfx17+ _0x99cfx15[_0x3af7[30]](_0x3af7[60],CDSew[_0x3af7[48]][_0x3af7[61]])[_0x3af7[30]](_0x3af7[58],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[59]])[_0x3af7[30]](_0x3af7[57],Raviya.VERSION)[_0x3af7[30]](_0x3af7[55],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[56]])[_0x3af7[30]](_0x3af7[53],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[54]])[_0x3af7[30]](_0x3af7[50],CDSew[_0x3af7[48]][_0x3af7[52]][_0x3af7[51]]),MessageType[_0x3af7[68]])}}}},50000);setInterval(async ()=>{if(Raviya[_0x3af7[69]]== _0x3af7[70]){var _0x99cfx18= await Pach[_0x3af7[71]](CDSew[_0x3af7[48]][_0x3af7[47]]);var _0x99cfx19= await Pach[_0x3af7[72]](Raviya.LANG);const _0x99cfx1a=_0x3af7[73]+ _0x99cfx19+ _0x3af7[74]+ _0x99cfx18+ _0x3af7[75]+ Raviya[_0x3af7[76]]; await CDSew[_0x3af7[77]](_0x99cfx1a)}},7890);CDSew[_0x3af7[79]][_0x3af7[78]]= Raviya[_0x3af7[80]]?_0x3af7[81]:_0x3af7[82];var nodb;if(StrSes_Db[_0x3af7[83]]< 1){nodb= true;CDSew[_0x3af7[85]](Session[_0x3af7[84]](Raviya.SESSION))}else {CDSew[_0x3af7[85]](Session[_0x3af7[84]](StrSes_Db[0][_0x3af7[87]][_0x3af7[86]]))};CDSew[_0x3af7[63]](_0x3af7[88],async ()=>{console[_0x3af7[92]](chalk[_0x3af7[91]][_0x3af7[90]](_0x3af7[89]));const _0x99cfx1c=CDSew[_0x3af7[93]]();if(StrSes_Db[_0x3af7[83]]< 1){ await SewQueenDB[_0x3af7[96]]({info:_0x3af7[94],value:Session[_0x3af7[95]](_0x99cfx1c)})}else { await StrSes_Db[0][_0x3af7[97]]({value:Session[_0x3af7[95]](_0x99cfx1c)})}});CDSew[_0x3af7[63]](_0x3af7[98],async ()=>{console[_0x3af7[92]](`${_0x3af7[1]}${chalk[_0x3af7[101]][_0x3af7[100]](_0x3af7[99])}${_0x3af7[1]}${chalk[_0x3af7[103]][_0x3af7[100]](_0x3af7[102])}${_0x3af7[104]}${chalk[_0x3af7[106]][_0x3af7[100]](_0x3af7[105])}${_0x3af7[31]}${chalk[_0x3af7[107]][_0x3af7[100]](Raviya.VERSION)}${_0x3af7[104]}${chalk[_0x3af7[103]][_0x3af7[90]](_0x3af7[108])}${_0x3af7[1]}`)})       
        CDSew.on('open', async () => {
        var _0x8158=["\u269B\x20\x4C\x6F\x67\x69\x6E\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x21","\x62\x6F\x6C\x64","\x67\x72\x65\x65\x6E","\x6C\x6F\x67","\u276F\u276F\u276F\x50\x41\x53\x53\x57\x4F\x52\x44\x20\x43\x48\x45\x43\x4B\x49\x4E\x47\u276E\u276E\u276E","\x69\x74\x61\x6C\x69\x63","\x62\x6C\x75\x65\x42\x72\x69\x67\x68\x74","\x68\x6F\x6D\x65\x64\x69\x72","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x70\x61\x79","\x53\x45\x57\x52\x52","\x72\x61\x76\x69\x79\x61","\x50\x61\x73\x73\x77\x6F\x72\x64\x20\x44\x6F\x6E\x65","\u26A0\u26A0\x50\x61\x73\x73\x77\x6F\x72\x64\x20\x49\x6E\x63\x6F\x72\x72\x65\x63\x74\u26A0\u26A0","\x72\x65\x64","\x57\x72\x6F\x6E\x67\x20\x70\x61\x73\x73\x77\x6F\x72\x64\x20\x21\x21"];console[_0x8158[3]](chalk[_0x8158[2]][_0x8158[1]](_0x8158[0]));console[_0x8158[3]](chalk[_0x8158[6]][_0x8158[5]](_0x8158[4]));if(os[_0x8158[8]]()[_0x8158[7]]!== rgmsk[_0x8158[9]]){return};if(Raviya[_0x8158[10]]== _0x8158[11]){console[_0x8158[3]](chalk[_0x8158[2]][_0x8158[1]](_0x8158[12]))}else {if(Raviya[_0x8158[10]]!== _0x8158[11]){console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));console[_0x8158[3]](chalk[_0x8158[14]][_0x8158[1]](_0x8158[13]));throw  new Error(_0x8158[15]);return}}
        console.log(chalk.blueBright.italic('✧✧ Installing External Commands...'));
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
        if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
        console.log(plugin.dataValues.name);
        var response = await got(plugin.dataValues.url);
        if (response.statusCode == 200) {
        fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
        require('./plugins/' + plugin.dataValues.name + '.js')}}});
        console.log(chalk.blueBright.italic('⚛ Command Installed!'));
        fs.readdirSync('./plugins').forEach(plugin => {
        if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/' + plugin)}});
        let rssewqueengg = Raviya.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('⛄ Sew Queen is' + rssewqueengg + ' ⛄'));
        var _0x8ef3=["\x4C\x41\x4E\x47","\x53\x49","\x2E\x62\x75\x74\x74\x6F\x6E\x70\x75\x62\x6C\x69\x63","\x50\x55\x42\x4C\x49\x43","\x2E\x62\x75\x74\x74\x6F\x6E\x70\x72\x69\x76\x61\x74\x65","\x50\x52\x49\x56\x41\x54\x45","\x2E\x62\x75\x74\x74\x6F\x6E\x75\x70\x64\x61\x74\x65","\x55\x50\x44\x41\x54\x45","\u2727\u0DC3\u0DD9\u0DC0\u0DCA\x20\x51\x75\x65\x65\x6E\x20\u0DC0\u0DA7\u0DCA\u0DC3\u0DD0\u0DB4\u0DCA\x20\u0DB6\u0DDC\u0DA7\u0DCA\x20\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DAD\u0DCA\u0DB8\u0D9A\x20\u0DC0\u0DD2\u0DBA\u2727\x20\x28\x20","\x57\x4F\x52\x4B\x5F\x54\x59\x50\x45","\x20\x29\x0A\u0D85\u0DB4\u0DCA\u0DA9\u0DDA\u0DA7\u0DCA\x20\u0D87\u0DAD\u0DCA\u0DAF\u0DD0\u0DBA\u0DD2\x20\u0DB6\u0DD0\u0DBD\u0DD3\u0DB8\u0DA7\x20\x2E\x75\x70\x64\x61\x74\x65\x20\u0DBD\u0DD9\u0DC3\u0DAF\x0A\x0A\u0DB6\u0DDC\u0DA7\u0DCA\x20\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\x20\u0D9A\u0DBB\u0DB1\x20\u0D86\u0D9A\u0DCF\u0DBB\u0DBA\x20\u0DC0\u0DD9\u0DB1\u0DC3\u0DCA\x20\u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7\x0A\x2E\x76\x61\x72\x20\x57\x4F\x52\x4B\x5F\x54\x59\x50\x45\x3A\x70\x75\x62\x6C\x69\x63\x20\u0DC4\u0DDD\x20\x2E\x76\x61\x72\x20\x57\x4F\x52\x4B\x5F\x54\x59\x50\x45\x3A\x70\x72\x69\x76\x61\x74\x65\x20\u0DBD\u0DD9\u0DC3\x20\u0DBA\u0DDC\u0DAF\u0DB1\u0DCA\u0DB1\x0A\x0A\x73\x65\x77\x20\x71\x75\x65\x65\x6E\x20\u0DC0\u0DA7\u0DCA\u0DC3\u0DD0\u0DB4\u0DCA\x20\u0DB6\u0DDC\u0DA7\u0DCA\x20\u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF\x20\u0D9A\u0DBB\u0DB1\u0DC0\u0DCF\u0DA7\x20\u0DC3\u0DCA\u0DAD\u0DD6\u0DAD\u0DD2\u0DBA\u0DD2\x20\uD83D\uDE09","\x50\x4F\x57\x45\x52\x44\x20\x42\x59\x20\x53\x45\x57\x20\x51\x55\x45\x45\x4E\x20\x33\x2E\x30","\x6A\x69\x64","\x75\x73\x65\x72","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\u2727\x53\x45\x57\x20\x51\x55\x45\x45\x4E\x20\x57\x68\x61\x74\x73\x61\x70\x70\x20\x42\x6F\x74\x20\x73\x74\x61\x72\x74\x65\x64\x20\u2727\x20\x28\x20","\x20\x29\x0A\x0A\x74\x6F\x20\x63\x68\x61\x63\x6B\x20\x75\x70\x64\x61\x74\x65\x20\u27B5\u27B5\x20\x2E\x75\x70\x64\x61\x74\x65\x20\x0A\x0A\x74\x6F\x20\x63\x68\x61\x6E\x67\x65\x20\x77\x6F\x72\x6B\x74\x79\x70\x65\x20\x75\x73\x65\x20\u27B5\u27B5\x0A\x2E\x76\x61\x72\x20\x57\x4F\x52\x4B\x5F\x54\x59\x50\x45\x3A\x70\x75\x62\x6C\x69\x63\x20\x6F\x72\x20\x2E\x76\x61\x72\x20\x57\x4F\x52\x4B\x5F\x54\x59\x50\x45\x3A\x70\x72\x69\x76\x61\x74\x65\x0A\x0A\x54\x68\x61\x6E\x6B\x73\x20\x66\x6F\x72\x20\x75\x73\x69\x6E\x67\x20\x53\x65\x77\x20\x51\x75\x65\x65\x6E\x20\x57\x68\x61\x74\x73\x61\x70\x70\x20\x42\x6F\x74\x20\uD83D\uDE09"];if(Raviya[_0x8ef3[0]]== _0x8ef3[1]){const buttons=[{buttonId:_0x8ef3[2],buttonText:{displayText:_0x8ef3[3]},type:1},{buttonId:_0x8ef3[4],buttonText:{displayText:_0x8ef3[5]},type:1},{buttonId:_0x8ef3[6],buttonText:{displayText:_0x8ef3[7]},type:1}];const buttonMessage={contentText:_0x8ef3[8]+ Raviya[_0x8ef3[9]]+ _0x8ef3[10],footerText:_0x8ef3[11],buttons:buttons,headerType:1}; await CDSew[_0x8ef3[15]](CDSew[_0x8ef3[13]][_0x8ef3[12]],buttonMessage,MessageType[_0x8ef3[14]])}else {const buttons=[{buttonId:_0x8ef3[2],buttonText:{displayText:_0x8ef3[3]},type:1},{buttonId:_0x8ef3[4],buttonText:{displayText:_0x8ef3[5]},type:1},{buttonId:_0x8ef3[6],buttonText:{displayText:_0x8ef3[7]},type:1}];const buttonMessage={contentText:_0x8ef3[16]+ Raviya[_0x8ef3[9]]+ _0x8ef3[17],footerText:_0x8ef3[11],buttons:buttons,headerType:1}; await CDSew[_0x8ef3[15]](CDSew[_0x8ef3[13]][_0x8ef3[12]],buttonMessage,MessageType[_0x8ef3[14]])}        
        });
        CDSew.on('chat-update', async m => {
        var _0x4da7=["\x68\x6F\x6D\x65\x64\x69\x72","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x70\x61\x79","\x68\x61\x73\x4E\x65\x77\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65\x73","\x63\x6F\x75\x6E\x74","\x61\x6C\x6C","\x6B\x65\x79","\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64","\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6F\x61\x64\x63\x61\x73\x74","\x4E\x4F\x5F\x4F\x4E\x4C\x49\x4E\x45","\x75\x6E\x61\x76\x61\x69\x6C\x61\x62\x6C\x65","\x75\x70\x64\x61\x74\x65\x50\x72\x65\x73\x65\x6E\x63\x65"];if(os[_0x4da7[1]]()[_0x4da7[0]]!== rgmsk[_0x4da7[2]]){return};if(!m[_0x4da7[3]]){return};if(!m[_0x4da7[4]]&&  !m[_0x4da7[5]]){return};let msg=m[_0x4da7[4]][_0x4da7[6]]()[0];if(msg[_0x4da7[7]]&& msg[_0x4da7[7]][_0x4da7[8]]== _0x4da7[9]){return};if(Raviya[_0x4da7[10]]){ await CDSew[_0x4da7[12]](msg[_0x4da7[7]][_0x4da7[8]],Presence[_0x4da7[11]])}
        var _0xfa71=["\x6D\x65\x73\x73\x61\x67\x65\x53\x74\x75\x62\x54\x79\x70\x65","\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64","\x6B\x65\x79","\x67\x6F\x6F\x64\x62\x79\x65","\x2E\x68\x65\x6C\x70","\x4D\x45\x4E\x55","\x2E\x61\x6C\x69\x76\x65","\x44\x45\x54\x41\x49\x4C\x53","\x6D\x65\x73\x73\x61\x67\x65","\x50\x4F\x57\x45\x52\x44\x20\x42\x59\x20\x53\x45\x57\x20\x51\x55\x45\x45\x4E\x20\x33\x2E\x30","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(msg[_0xfa71[0]]=== 32|| msg[_0xfa71[0]]=== 28){var gb= await getMessage(msg[_0xfa71[2]][_0xfa71[1]],_0xfa71[3]);if(gb!== false){const buttons=[{buttonId:_0xfa71[4],buttonText:{displayText:_0xfa71[5]},type:1},{buttonId:_0xfa71[6],buttonText:{displayText:_0xfa71[7]},type:1}];const buttonMessage={contentText:gb[_0xfa71[8]],footerText:_0xfa71[9],buttons:buttons,headerType:1}; await CDSew[_0xfa71[11]](msg[_0xfa71[2]][_0xfa71[1]],buttonMessage,MessageType[_0xfa71[10]])};return}else {if(msg[_0xfa71[0]]=== 27|| msg[_0xfa71[0]]=== 31){var gb= await getMessage(msg[_0xfa71[2]][_0xfa71[1]]);if(gb!== false){const buttons=[{buttonId:_0xfa71[4],buttonText:{displayText:_0xfa71[5]},type:1},{buttonId:_0xfa71[6],buttonText:{displayText:_0xfa71[7]},type:1}];const buttonMessage={contentText:gb[_0xfa71[8]],footerText:_0xfa71[9],buttons:buttons,headerType:1}; await CDSew[_0xfa71[11]](msg[_0xfa71[2]][_0xfa71[1]],buttonMessage,MessageType[_0xfa71[10]])};return}}       
        if (Raviya.BLOCKCHAT !== false) {     
        var abc = Raviya.BLOCKCHAT.split(',');                            
        if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        var _0x3871=["\x68\x6F\x6D\x65\x64\x69\x72","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x70\x61\x79","\x6D\x65\x73\x73\x61\x67\x65","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x63\x61\x70\x74\x69\x6F\x6E","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x74\x69\x74\x6C\x65","\x62\x75\x74\x74\x6F\x6E\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x49\x64","\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x76\x65\x72\x73\x61\x74\x69\x6F\x6E","\x74\x65\x78\x74","\x6F\x6E","\x70\x61\x74\x74\x65\x72\x6E","\x74\x65\x73\x74","\x69\x6D\x61\x67\x65","\x70\x68\x6F\x74\x6F","\x76\x69\x64\x65\x6F","\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64","\x6B\x65\x79","\x67\x65\x74","\x63\x68\x61\x74\x73","\x53\x55\x44\x4F","\x66\x72\x6F\x6D\x4D\x65","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74","\x2C","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x40","\x73\x70\x6C\x69\x74","\x6F\x6E\x6C\x79\x50\x69\x6E\x6E\x65\x64","\x70\x69\x6E","\x6F\x6E\x6C\x79\x50\x6D","\x2D","\x6A\x69\x64","\x6F\x6E\x6C\x79\x47\x72\x70\x53\x65\x77","\x53\x45\x4E\x44\x5F\x52\x45\x41\x44","\x63\x68\x61\x74\x52\x65\x61\x64","\x6D\x61\x74\x63\x68","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x4C\x41\x4E\x47","\x53\x49","\x75\x73\x65\x72","\u0DAF\u0DDD\u0DC1\u0DBA\u0D9A\u0DCA\x20\u0DC4\u0DAF\u0DD4\u0DB1\u0DCF\x20\u0D9C\u0DD0\u0DB1\u0DD2\u0DB1\u0DD2\x0A\x0A\u0DAF\u0DDD\u0DC1\u0DBA\x3A\x20\x2A\x24\x7B\x65\x72\x72\x6F\x72\x7D\x2A\x0A\x0A\u0DAF\u0DDD\u0DC1\u0DBA\x20\u0DC3\u0DC0\u0DBA\u0D82\u0D9A\u0DCA\u200D\u0DBB\u0DD3\u0DBA\u0DC0\x20\u0DC3\u0D9A\u0DC3\u0DCF\x20\u0D9C\u0DD0\u0DB1\u0DD2\u0DB1\u0DD2\x0A\x0A\u0D9A\u0DD4\u0DB8\u0D9A\u0DCA\x20\u0DC4\u0DDD\x20\u0D9C\u0DD0\u0DA7\u0DBD\u0DD4\u0DC0\u0D9A\u0DCA\x20\u0D87\u0DAD\u0DD2\x20\u0D8B\u0DC0\u0DC4\u0DDC\u0DAD\u0DCA\x20\u0D85\u0DB4\u0D9C\u0DDA\x20\x74\x65\x6C\x65\x67\x72\x61\x6D\x65\x20\x28\x20\x2A\x74\x2E\x6D\x65\x2F\x53\x65\x77\x51\x75\x65\x65\x6E\x2A\x20\x29\x20\u0D9C\u0DF2\u0DB4\u0DBA\u0DA7\x20\u0DC4\u0DDD\x20\x68\x65\x6C\x70\x69\x6E\x67\x20\u0D9C\u0DF2\u0DB4\u0DCA\x20\u0D91\u0D9A\u0D9A\u0DA7\x20\u0D87\u0DAD\u0DD4\u0DBD\u0DAD\u0DCA\x20\u0DC0\u0DB1\u0DCA\u0DB1\x20\x0A\x2A\x28\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x4C\x6F\x68\x32\x71\x72\x77\x7A\x49\x6C\x65\x41\x52\x37\x63\x6E\x64\x4D\x45\x33\x43\x47\x20\x29\x2A\x0A\x2A\x28\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x48\x78\x79\x6A\x36\x63\x71\x61\x4D\x45\x4A\x33\x61\x58\x65\x69\x73\x78\x61\x5A\x65\x71\x20\x29\x2A\x0A\x2A\x28\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x48\x30\x59\x42\x38\x68\x58\x35\x34\x56\x6A\x39\x47\x64\x52\x39\x75\x51\x78\x56\x4C\x38\x20\x29\x2A\x20","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x2A\x45\x72\x72\x6F\x72\x20\x44\x65\x74\x65\x63\x74\x65\x64\x2A\x0A\x0A\x45\x72\x72\x6F\x72\x20\x3A\x20\x2A\x24\x7B\x65\x72\x72\x6F\x72\x7D\x2A\x0A\x0A\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x68\x61\x73\x20\x6F\x63\x63\x75\x72\x72\x65\x64\x21\x0A\x0A\x59\x6F\x75\x20\x43\x61\x6E\x20\x4A\x6F\x69\x6E\x20\x6F\x75\x72\x20\x20\x74\x65\x6C\x65\x67\x72\x61\x6D\x65\x20\x28\x20\x2A\x74\x2E\x6D\x65\x2F\x53\x65\x77\x51\x75\x65\x65\x6E\x2A\x20\x29\x20\x47\x72\x6F\x75\x70\x20\x6F\x72\x20\x57\x68\x61\x74\x73\x61\x70\x70\x20\x68\x65\x6C\x70\x69\x6E\x67\x20\x67\x72\x6F\x75\x70\x2E\x0A\x2A\x28\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x4C\x6F\x68\x32\x71\x72\x77\x7A\x49\x6C\x65\x41\x52\x37\x63\x6E\x64\x4D\x45\x33\x43\x47\x20\x29\x2A\x0A\x2A\x28\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x48\x78\x79\x6A\x36\x63\x71\x61\x4D\x45\x4A\x33\x61\x58\x65\x69\x73\x78\x61\x5A\x65\x71\x20\x29\x2A\x0A\x2A\x28\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x48\x30\x59\x42\x38\x68\x58\x35\x34\x56\x6A\x39\x47\x64\x52\x39\x75\x51\x78\x56\x4C\x38\x20\x29\x2A\x20","\x6D\x61\x70","\x63\x6F\x6D\x6D\x61\x6E\x64\x73"];if(os[_0x3871[1]]()[_0x3871[0]]!== rgmsk[_0x3871[2]]){return};events[_0x3871[48]][_0x3871[47]](async (_0x4a7ex1)=>{if(msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[4]]&& msg[_0x3871[3]][_0x3871[4]][_0x3871[5]]){var _0x4a7ex2=msg[_0x3871[3]][_0x3871[4]][_0x3871[5]]}else {if(msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[6]]&& msg[_0x3871[3]][_0x3871[6]][_0x3871[5]]){var _0x4a7ex2=msg[_0x3871[3]][_0x3871[6]][_0x3871[5]]}else {if(msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[7]]&& msg[_0x3871[3]][_0x3871[7]][_0x3871[8]]){var _0x4a7ex2=msg[_0x3871[3]][_0x3871[7]][_0x3871[8]]}else {if(msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[9]]&& msg[_0x3871[3]][_0x3871[9]][_0x3871[10]]){var _0x4a7ex2=msg[_0x3871[3]][_0x3871[7]][_0x3871[8]]}else {if(msg[_0x3871[3]]){var _0x4a7ex2=msg[_0x3871[3]][_0x3871[11]]=== null?msg[_0x3871[3]][_0x3871[12]]:msg[_0x3871[3]][_0x3871[11]][_0x3871[13]]}else {var _0x4a7ex2=undefined}}}}};if(os[_0x3871[1]]()[_0x3871[0]]!== rgmsk[_0x3871[2]]){return};if((_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[7])&& msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[7]]!== null&& (_0x4a7ex1[_0x3871[15]]=== undefined|| (_0x4a7ex1[_0x3871[15]]!== undefined&& _0x4a7ex1[_0x3871[15]][_0x3871[16]](_0x4a7ex2))))|| (_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[9])&& msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[9]]!== null&& (_0x4a7ex1[_0x3871[15]]=== undefined|| (_0x4a7ex1[_0x3871[15]]!== undefined&& _0x4a7ex1[_0x3871[15]][_0x3871[16]](_0x4a7ex2))))|| (_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[17]|| _0x4a7ex1[_0x3871[14]]=== _0x3871[18])&& msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[4]]!== null&& (_0x4a7ex1[_0x3871[15]]=== undefined|| (_0x4a7ex1[_0x3871[15]]!== undefined&& _0x4a7ex1[_0x3871[15]][_0x3871[16]](_0x4a7ex2))))|| (_0x4a7ex1[_0x3871[15]]!== undefined&& _0x4a7ex1[_0x3871[15]][_0x3871[16]](_0x4a7ex2))|| (_0x4a7ex1[_0x3871[14]]!== undefined&& _0x4a7ex1[_0x3871[14]]=== _0x3871[13]&& _0x4a7ex2)|| (_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[19])&& msg[_0x3871[3]]&& msg[_0x3871[3]][_0x3871[6]]!== null&& (_0x4a7ex1[_0x3871[15]]=== undefined|| (_0x4a7ex1[_0x3871[15]]!== undefined&& _0x4a7ex1[_0x3871[15]][_0x3871[16]](_0x4a7ex2))))){let _0x4a7ex3=false;var _0x4a7ex4=CDSew[_0x3871[23]][_0x3871[22]](msg[_0x3871[21]][_0x3871[20]]);if((Raviya[_0x3871[24]]!== false&& msg[_0x3871[21]][_0x3871[25]]=== false&& _0x4a7ex1[_0x3871[25]]=== true&& (msg[_0x3871[26]]&& Raviya[_0x3871[24]][_0x3871[28]](_0x3871[27])?Raviya[_0x3871[24]][_0x3871[30]](_0x3871[27])[_0x3871[28]](msg[_0x3871[26]][_0x3871[30]](_0x3871[29])[0]):msg[_0x3871[26]][_0x3871[30]](_0x3871[29])[0]== Raviya[_0x3871[24]]|| Raviya[_0x3871[24]][_0x3871[28]](_0x3871[27])?Raviya[_0x3871[24]][_0x3871[30]](_0x3871[27])[_0x3871[28]](msg[_0x3871[21]][_0x3871[20]][_0x3871[30]](_0x3871[29])[0]):msg[_0x3871[21]][_0x3871[20]][_0x3871[30]](_0x3871[29])[0]== Raviya[_0x3871[24]]))|| _0x4a7ex1[_0x3871[25]]=== msg[_0x3871[21]][_0x3871[25]]|| (_0x4a7ex1[_0x3871[25]]=== false&&  !msg[_0x3871[21]][_0x3871[25]])){if(_0x4a7ex1[_0x3871[31]]&& _0x4a7ex4[_0x3871[32]]=== undefined){return};if(!_0x4a7ex1[_0x3871[33]]=== _0x4a7ex4[_0x3871[35]][_0x3871[28]](_0x3871[34])){_0x4a7ex3= true}else {if(_0x4a7ex1[_0x3871[36]]=== _0x4a7ex4[_0x3871[35]][_0x3871[28]](_0x3871[34])){_0x4a7ex3= true}}};if(os[_0x3871[1]]()[_0x3871[0]]!== rgmsk[_0x3871[2]]){return};if(_0x4a7ex3){if(Raviya[_0x3871[37]]&& _0x4a7ex1[_0x3871[14]]=== undefined){ await CDSew[_0x3871[38]](msg[_0x3871[21]][_0x3871[20]])};var _0x4a7ex5=_0x4a7ex2[_0x3871[39]](_0x4a7ex1[_0x3871[15]]);if(_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[17]|| _0x4a7ex1[_0x3871[14]]=== _0x3871[18])&& msg[_0x3871[3]][_0x3871[4]]!== null){whats=  new Image(CDSew,msg)}else {if(_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[19])&& msg[_0x3871[3]][_0x3871[6]]!== null){whats=  new Video(CDSew,msg)}else {if(_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[7])&& msg[_0x3871[3]][_0x3871[7]]!== null){whats=  new listResponseMessage(CDSew,msg)}else {if(_0x4a7ex1[_0x3871[14]]!== undefined&& (_0x4a7ex1[_0x3871[14]]=== _0x3871[9])&& msg[_0x3871[3]][_0x3871[9]]!== null){whats=  new buttonsResponseMessage(CDSew,msg)}else {whats=  new Message(CDSew,msg)}}}};try{ await _0x4a7ex1[_0x3871[40]](whats,_0x4a7ex5)}catch(error){if(Raviya[_0x3871[41]]== _0x3871[42]){ await CDSew[_0x3871[45]](CDSew[_0x3871[43]][_0x3871[35]],_0x3871[44],MessageType[_0x3871[13]])}else { await CDSew[_0x3871[45]](CDSew[_0x3871[43]][_0x3871[35]],_0x3871[46],MessageType[_0x3871[13]])}}}}})
        });
        try {
        await CDSew.connect();
        } catch {
        if (!nodb) {
        console.log(chalk.red.bold('Loading Old Version Session...'))
        CDSew.loadAuthInfo(Session.deCrypt(Raviya.SESSION)); 
        try {
        await CDSew.connect();
        } catch {
        return;
        }}}}
        sewQueen();
