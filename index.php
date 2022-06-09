<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome</title>
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/bootstrap-datepicker.js"></script>
<script src="js/buffer.js"></script>
<script src="https://cdn.rawgit.com/ethereumjs/browser-builds/2fb69a714afe092b06645286f14b94f41e5c062c/dist/ethereumjs-tx.js"></script>
<script src="web3/dist/web3.min.js"></script>
<script src="js/index.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/datepicker.css" rel="stylesheet" type="text/css">
<link href="css/index.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" type="image/png" href="img/favicon.png"> <meta name="viewport" content="width=device-width, initial-scale=1">
<?php include('support.php'); ?>
</head>
<body>
<!--Loader progress-->
<div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
</div>

<!--Main content-->
<div class="topdiv"></div>
<div class="bodydiv">
	<center><strong>APPLYING BLOCKCHAIN TECHNOLOGY IN E-TICKET<br/>SV2018-20
    </strong></center>
    <br/><br/>
    Teacher:<br/>
    &emsp;&emsp;Le Ngoc Kim Khanh, MEng., PhD Candidate<br/><br/>
    Members:<br/>
    &emsp;&emsp;1. Vo Hong Son<br/>
    &emsp;&emsp;2. Doan Ngoc Thao<br/>
    &emsp;&emsp;3. Pham Nguyen Minh Toan<br/>
</div>
<div class="bottomdiv"></div>
<!---->

<!--Decoration-->
<div id="turnsound"><embed src="sound/sound.mp3" loop="true" autostart="true" width="0" height="0"></div>
<input type="button" class="btncheckmodules" data-toggle="modal" data-target="#PopupModules" value="CHECK MODULES">
<div onClick="turnsound()">
	<img class="rabbit" src="img/rabbit.png">
    <div id="turnicon"><img class="volicon" src="img/soundon.png"></div>
</div>
<img class="woodsign" src="img/woodsign.png">
	<div class="boardtitle"><span id="boardtitle">INFO</span></div>
<img class="groundsign" src="img/groundsign.png">
	<button class="btnCreateEvent" onClick="CreateEvent()">CREATE EVENT</button>
    <button class="btnBuyTicket" onClick="BuyTicket()">BUY TICKET</button>
<div class="infofooter">
	Smart Tickets &reg; IT team - Sai Gon University <script> d=new Date(); document.write(d.getFullYear())</script>
</div>
<!---->

<!--Popup 1-->
<div id="PopupModules" class="modal fade" role="dialog">
	<div class="modal-dialog" role="document">
    	<div class="modal-content">
            <div class="modal-header">
            	Is there any problem you see?
            </div>
            <div class="modal-body">
            	1 - Connect to server<br/>
                &emsp;&nbsp;&nbsp;Status >> 
                <?php
					$conn=@mysqli_connect('localhost','root','');
					if (!$conn) echo '<img src="img/btncheckred.png" width="20px" height="20px">';
						else echo '<img src="img/btncheckgreen.png" width="20px" height="20px">';
				?>
                <br/><br/>
                2 - Connect to database<br/>
                &emsp;&nbsp;&nbsp;Status >> 
                <?php
					$conn=@mysqli_connect('localhost','root','','nckhsv20');
					if ($conn)
					{
						echo '<img src="img/btncheckgreen.png" width="20px" height="20px">';
						$str='<br/>&emsp;&nbsp;&nbsp;Wanna drop database? <a href="javascript:dropdb()">Drop it</a>'.
							'<br/><br/>';
							echo $str;
					}
						else
						{
							echo '<img src="img/btncheckred.png" width="20px" height="20px">';
							$str='<br/>&emsp;&nbsp;&nbsp;Database has not been created yet. <a href="javascript:createdb()">Create now</a>'.
							'<br/><br/>';
							echo $str;
						}
				?>
            </div>
            <div class="modal-footer">
            	<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<!---->

</body>
</html>