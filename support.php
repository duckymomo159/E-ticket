<?php
//Get action to load
$action = isset($_GET['action'])?$_GET['action']:'';
if ($action=='CreateDb') CreateDb();
	else if ($action=='DropDb') DropDb();
	
//Function
function CreateDb() {
	$conn=@mysqli_connect('localhost','root','');
	
	$query='create database `nckhsv20`';
	mysqli_query($conn,$query);
	
	$conn=@mysqli_connect('localhost','root','','nckhsv20');
	
	$query='CREATE TABLE `event` ('.
	  '`id` int(11) NOT NULL,'.
	  '`ename` varchar(255) NOT NULL,'.
	  '`begin` date NOT NULL,'.
	  '`end` date NOT NULL,'.
	  '`location` varchar(255) NOT NULL,'.
	  '`time` varchar(255) NOT NULL,'.
	  '`amount` int(11) NOT NULL,'.
	  '`available` int(11) NOT NULL,'.
	  '`price` int(11) NOT NULL,'.
	  '`hash` varchar(255) NOT NULL'.
	') ENGINE=InnoDB DEFAULT CHARSET=latin1;';
	mysqli_query($conn,$query);
	
	$query='CREATE TABLE `ticket` ('.
	  '`id` int(11) NOT NULL,'.
	  '`fullname` varchar(255) NOT NULL,'.
	  '`idcode` varchar(255) NOT NULL,'.
	  '`phone` varchar(255) NOT NULL,'.
	  '`event` varchar(255) NOT NULL,'.
	  '`address` varchar(255) NOT NULL,'.
	  '`hash` varchar(255) NOT NULL'.
	') ENGINE=InnoDB DEFAULT CHARSET=latin1;';
	mysqli_query($conn,$query);
	
	$query='ALTER TABLE `event` ADD PRIMARY KEY (`id`);';
	mysqli_query($conn,$query);
	
	$query='ALTER TABLE `ticket` ADD PRIMARY KEY (`id`);';
	mysqli_query($conn,$query);
}

function DropDb() {
	$conn=@mysqli_connect('localhost','root','');
	$query='drop database nckhsv20';
	mysqli_query($conn,$query);
}
?>

<script>
//Create database
function createdb() {
	window.location='./?action=CreateDb';
}

//Drop database
function dropdb() {
	if (confirm('Are you sure to delete database?'))
	window.location='./?action=DropDb';
}

//Prevent right click
var message="NoRightClicking";
function defeatIE() {
	if (document.all) {(message);return false;}}
function defeatNS(e) {if (document.layers||(document.getElementById&&!document.all)) { if (e.which==2||e.which==3) {(message);return false;}}} if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=defeatNS;} else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE;} document.oncontextmenu=new Function("return false")

//Color text
function getColor(start, end, percent){
	function hex2dec(hex){return(parseInt(hex,16));}
	function dec2hex(dec){return (dec < 16 ? "0" : "") + dec.toString(16);}
	var r1 = hex2dec(start.slice(0,2)), g1=hex2dec(start.slice(2,4)), b1=hex2dec(start.slice(4,6));
	var r2 = hex2dec(end.slice(0,2)),   g2=hex2dec(end.slice(2,4)),   b2=hex2dec(end.slice(4,6));
	var pc = percent/100;
	var r  = Math.floor(r1+(pc*(r2-r1)) + .5), g=Math.floor(g1+(pc*(g2-g1)) + .5), b=Math.floor(b1+(pc*(b2-b1)) + .5);
	return("#" + dec2hex(r) + dec2hex(g) + dec2hex(b));
}

var colors = new Array("339966", "FF0000", "00FF00", "0000FF", "FFFF00", "FF00FF", "00FFFF");
var start  = colors[0];
var end    = colors[0];
var index  = 0;
var cindex = 0;
var faderObj = new Array();

function fadeSpan()
{
	if(index == 0)
	{
		start = end;
		end = colors[ cindex = (cindex+1) % colors.length ];
	}

//	document.getElementById("fadingText").style.color = getColor(start, end, index);
	for(var i=0 ; i<faderObj.length ; i++)
		faderObj[i].style.color = getColor(start, end, index);

	index = (index+5) % 100;

	setTimeout("fadeSpan()", 100);
}
function fadeAll()
{
	for(var i=0 ; i<arguments.length ; i++)
		faderObj[i] = document.getElementById(arguments[i]);

	fadeSpan();
}
function JSFX_StartEffects()
{
	fadeAll("boardtitle");
}

//Sound on off
function turnsound() {
	if (document.getElementById('turnsound').innerHTML=='')
	{
		document.getElementById('turnsound').innerHTML='<embed src="sound/sound.mp3" loop="true" autostart="true" width="0" height="0">';
		document.getElementById('turnicon').innerHTML='<img class="volicon" src="img/soundon.png">';
	}
	else
	{
		document.getElementById('turnsound').innerHTML='';
		document.getElementById('turnicon').innerHTML='<img class="volicon" src="img/soundoff.png">';
	}
}

function resulticon() {
	if (document.eventform.hash.value=='' || document.eventform.hash.value=='undefined') document.getElementById("resultdivEvent1").innerHTML='<img src="img/btncheckred.png" width="90%" height="70%" style="margin-top:30%;">';
	else
	{
		document.getElementById("resultdivEvent1").innerHTML='<img src="img/btncheckgreen.png" width="90%" height="70%" style="margin-top:30%;">';
		document.getElementById("resultdivEvent22").innerHTML='<a target="_blank" href="https://ropsten.etherscan.io/tx/'+document.eventform.hash.value+'"><img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://ropsten.etherscan.io/tx/'+document.eventform.hash.value+'" width="35%" height="80%"></a>';
	}
}

function kiemtraEvent()
{
	a=document.eventform.begin.value;
	b=document.eventform.end.value;
	c=document.eventform.name.value;
	d=document.eventform.place.value;
	e=document.eventform.time.value;
	f=document.eventform.soluong.value;
	g=document.eventform.price.value;
	h=document.eventform.pk.value
	if (a==''||b==''||c==''||d==''||e==''||f==''||g==''||h=='') alert("Please complete all fields");
	else if (isNaN(f)||isNaN(g)) alert("Amount & Price fields must be numeric");
	else SendTransaction();
}

function kiemtraTicket()
{
	a=document.eventform.hoten.value;
	b=document.eventform.cmnd.value;
	c=document.eventform.sdt.value;
	d=document.eventform.event.value;
	e=document.eventform.diachi.value;
	f=document.eventform.pk_ticket.value;
	if (a==''||b==''&&c==''||d==''||e==''||f=='') alert("Please complete all fields");
	else if (isNaN(b)||isNaN(c)) alert("ID & Phone fields must be numeric");
	else thanhtoan();
}

//Create event
function CreateEvent()
{
	st='<form name="eventform">'+
		'<div class="labletext">Begin date:</div><div class="inputtext"><input type="text" id="begin" name="begin"></div>'+
		'<div class="labletext">End date:</div><div class="inputtext"><input type="text" id="end" name="end"></div>'+
		'<div class="labletext">Event name:</div><div class="inputtext"><input type="text" id="name" name="name" autocomplete="off"></div>'+
		'<div class="labletext">Place:</div><div class="inputtext"><input type="text" id="place" name="place" autocomplete="off"></div>'+
		'<div class="labletext">Time:</div><div class="inputtext"><input type="text" id="time" name="time" autocomplete="off"></div>'+
		'<div class="labletext">Amount:</div><div class="inputtext"><input type="text" id="soluong" name="soluong" autocomplete="off"></div>'+
		'<div class="labletext">PrivateKey:</div><div class="inputtext"><input type="text" id="pk" name="pk" autocomplete="off"></div>'+
		'<div class="labletext">Price:</div><div class="inputtext"><input type="text" id="price" name="price" autocomplete="off"></div>'+
		'<input class="submitCreateEvent" type="button" value="Create event" onClick="return kiemtraEvent()">'+
		'<div id="resultdivEvent">'+
			'<div id="resultdivEvent1">'+
			'</div>'+
			'<div id="resultdivEvent2">'+
				'<div id="resultdivEvent21">'+
					'<hash style="font-size:1.3vw; font-weight:bolder">Hash: </hash><input type="text" name="hash" id="hash" readonly>'+
				'</div>'+
				'<div id="resultdivEvent22">'+
					
				'</div>'+
			'</div>'+
		'</div>'+
	'</form>';
	document.getElementsByClassName('bodydiv')[0].innerHTML=st;
	document.getElementById('boardtitle').innerHTML='CREATE EVENT';
	resulticon();
}

//Buy ticket
function BuyTicket()
{	
	window.onload=function(){BuyTicket()};
	st='<form name="eventform">'+
		'<div class="labletext">Full name:</div><div class="inputtext"><input type="text" id="hoten" name="begin"></div>'+
		'<div class="labletext">ID:</div><div class="inputtext"><input type="text" id="cmnd" name="end"></div>'+
		'<div class="labletext">Phone:</div><div class="inputtext"><input type="text" id="sdt" name="name" autocomplete="off"></div>'+
		'<div class="labletext">Event name:</div><div class="inputtext"><select class="event" id="event"><option>--- Choose event ---</option></select></div>'+
		'<div class="labletext">Address:</div><div class="inputtext"><input type="text" id="diachi" name="time" autocomplete="off"></div>'+
		'<div class="labletext">Price:</div><div class="inputtext"><input type="text" id="giatien" autocomplete="off" readonly></div>'+
		'<div class="labletext">Private Key:</div><div class="inputtext"><input type="text" id="pk_ticket" autocomplete="off"></div>'+
		'<input class="submitCreateEvent" id="ticketbuy" type="button" value="Buy ticket" onClick="return kiemtraTicket()">'+
		'<div id="resultdivEvent">'+
			'<div id="resultdivEvent1">'+
			'</div>'+
			'<div id="resultdivEvent2">'+
				'<div id="resultdivEvent21">'+
					'<hash style="font-size:1.3vw; font-weight:bolder">Hash: </hash><input type="text" name="hash" id="hash" readonly>'+
				'</div>'+
				'<div id="resultdivEvent22">'+
					
				'</div>'+
			'</div>'+
		'</div>'+
	'</form>';
	document.getElementsByClassName('bodydiv')[0].innerHTML=st;
	eventContract.methods.viewName().call((err,rs)=>{
		if(rs){
			var str=rs.split('!');
			for(var i=1;i<str.length;i++)
			{
				var str1=str[i].split(':');
				$('#event').append("<option value='"+str1[1]+"'>"+str1[0]+"</option>");
			}
		}
		});
	document.getElementById('boardtitle').innerHTML='BUY TICKET';
	resulticon();
}

</script>