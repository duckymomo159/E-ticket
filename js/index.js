 //sử dụng infura để làm trung gian
 var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/e3d2d3957483461aae4a4ee95381a42d'));
 window.addEventListener('load', function(){
	if( typeof web3 !='undefined'){
		// console.log('web3 detected');
		// web3 = new Web3(web3.currentProvider);                                    
		// console.log(web3.eth.getAccounts((err,rs)=>{
		// 	console.log(rs[0]);
		// }));
		// LoadAccount().then(rs=>{
		// 	console.log(web3.eth.accounts.privateKeyToAccount(rs));
		// 	var desc=web3.eth.getAccount(rs,'12345678',(a,b)=>{console.log(b)});
		// 	console.log(desc);
		// })
		// console.log(LoadAccount());
		LoadAccount().then(rs=>{console.log(rs)});
	}else{
		alert("please install MetaMask");
	}
})
async function LoadAccount(){
	var result = await window.ethereum.enable().then((account) =>{
		const defaultAccount =account[0]
		web3.eth.defaultAccount = defaultAccount
		return defaultAccount;
	});
	return result;
}
 //public key và private key của 
//  var account1=LoadAccount();
//  var account1="0x5D8fd0158c84B4FFA112cD1fcD007A7e7dB8eA52";
//  var privatekey1= new EthJS.Buffer.Buffer("09448A8057241B5E95F34F2FD64F87CEC1BBEEB8A7DDA60BADF08D7FA55B9C2B","hex");
//  var account2="0x4D5F5eF77f5a5C39C77b743c1fa03A47Ce6a04B8";
//  var privatekey2=new EthJS.Buffer.Buffer("D2A2A40830596221F741F8E3C20E790B712E8A8E3B060A0BC0B0EF3BA73F9BA9","hex");
 //ABI được lấy từ Remix 

 
 var abi=[
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "x",
				"type": "bytes32"
			}
		],
		"name": "bytes32ToString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "priceTickets",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "place",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "begin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "end",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "soluong",
				"type": "uint256"
			}
		],
		"name": "createEvent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "eventname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "createTicket",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCreator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "takeEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "labor",
				"type": "address"
			}
		],
		"name": "TakeEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "viewName",
		"outputs": [
			{
				"internalType": "string",
				"name": "strname1",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chamthang",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "eventData",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "place",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "begin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "end",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "soluong",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "priceTickets",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "haicham",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "strname",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
//Tạo liên kết với Contract
 var eventContract = new web3.eth.Contract(abi,'0x39484CCa954cE0B279923B3B6CCc159FBC87B66d');
 //hàm upload blockchain
function SendTransaction() {
	if( typeof web3 !='undefined'){
		LoadAccount().then(account=>{
			console.log(account);
			console.log($('#pk').val());
			try{
				console.log($('#pk').val());
				var pk=new EthJS.Buffer.Buffer($('#pk').val(),"hex");
			}
			catch(e){
				alert("PrivateKey is invalid");
			}
			var data2=eventContract.methods.createEvent($('#price').val(),$('#name').val(),$('#time').val(),
			$('#place').val(),$('#begin').val(),$('#end').val(),$('#soluong').val()).call((errr,rsss)=>{
				console.log(rsss);
			});
			var data1=eventContract.methods.createEvent($("#price").val(),$('#name').val(),$('#time').val(),
			$('#place').val(),$('#begin').val(),$('#end').val(),$('#soluong').val()).encodeABI();	
			web3.eth.getTransactionCount(account,(err,nonce)=>{
				if(err){
					throw alert("Failed to create event");
				}
				var txObject = {
					nonce: web3.utils.toHex(nonce),
					gasLimit: web3.utils.toHex(800000),
					gasPrice: web3.utils.toHex(web3.utils.toWei('100','gwei')),
					to: "0x39484CCa954cE0B279923B3B6CCc159FBC87B66d",
					data: data1
				}
				var tx=new EthJS.Tx(txObject);
				tx.sign(pk);
			
				var serializedTx=tx.serialize();
				var raw = '0x' + serializedTx.toString('hex');
				web3.eth.sendSignedTransaction(raw, (err,txHash) => {
					document.getElementById('hash').value=txHash;
					resulticon();
					if(err){
					 throw alert("Can't send transaction, please check your information");
					}
					alert("Create Success")
				})
			})
		});
	}else{
		alert("please install MetaMask");
	}
// 	var data2=eventContract.methods.createEvent($('#price').val(),$('#name').val(),$('#time').val(),
// 	$('#place').val(),$('#begin').val(),$('#end').val(),$('#soluong').val()).call((errr,rsss)=>{
// 		console.log(rsss);
// 	});
// 	var data1=eventContract.methods.createEvent($("#price").val(),$('#name').val(),$('#time').val(),
// 	$('#place').val(),$('#begin').val(),$('#end').val(),$('#soluong').val()).encodeABI();	
// web3.eth.getTransactionCount(account1,(err,nonce)=>{
// 	 var txObject = {
// 		nonce: web3.utils.toHex(nonce),
// 		gasLimit: web3.utils.toHex(800000),
// 		gasPrice: web3.utils.toHex(web3.utils.toWei('100','gwei')),
// 		to: "0x39484CCa954cE0B279923B3B6CCc159FBC87B66d",
// 		data: data1
// 	}
// 	var tx=new EthJS.Tx(txObject);
// 	tx.sign(privatekey1);

// 	var serializedTx=tx.serialize();
// 	var raw = '0x' + serializedTx.toString('hex');
// 	web3.eth.sendSignedTransaction(raw, (err,txHash) => {
// 		document.getElementById('hash').value=txHash;
// 		resulticon();
// 	})
// })
}


//ipfs

function viewBlockchain()
{
	window.open("https://ropsten.etherscan.io/tx/"+ $('#hash').val());
}
function viewIpfs()
{
	window.open("https://ipfs.io/ipfs/" + $('#hash1').val())
}

function print()
{
    var begin=$('#begin').val();
	var end=$('#end').val();
	var name=$('#name').val();
	var place=$('#place').val();
	var time=$('#time').val();
    var text=`<p>Tên sự kiện ${name}</p></br>
    <p>Thời gian ${time}</p></br>
    <p>Địa điểm ${place}</p>
    <p>Ngày bắt đầu ${begin}</p>
	<p>Ngày kết thúc ${end}</p>
	<p>Số lượng vé ${soluong} </p>
    `;   
    return text;
}
function print1(){
	var hoten=$('#hoten').val();
	var cmnd=$('#cmnd').val();
	var sdt=$('#sdt').val();
	var event=$('#name1').val();
	var diachi=$('#diachi').val();
	var text=`<p>Tên sự kiện ${hoten}</p></br>
    <p>Thời gian ${cmnd}</p></br>
    <p>Địa điểm ${sdt}</p>
    <p>Ngày bắt đầu ${event}</p>
	<p>Ngày kết thúc ${diachi}</p>
	`;   
	return text;
}
function createFile(name)
{
    var text=print();
    var f = new File([text],name,{type: 'type/plain'});
    return f;
}
function createFile1(name)
{
	var text=print1();
	var f = new File([text],name,{type: 'type/plain'});
    return f;
}
//Upload lên ipfs
function upload()
{
    const repoPath = 'ipfs-' + Math.random()
    const ipfs=new Ipfs({host:'localhost', port: '5001', protocol: 'http'})

    ipfs.once('ready', () => {
        const reader = new FileReader();
        reader.onloadend = function() {   
		  const buf = buffer.Buffer(reader.result) // Convert data into buffer
		  
          ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
              if(err) {
                console.error(err)
                return
              }
              var hash=`${result[0].hash}`;
              document.getElementById("hash1").value=hash;      
              })
            }   
            var newfile=createFile("abc.html")
			reader.readAsArrayBuffer(newfile);
		})
}      

// buyticket
$(document).ready(function(){
	eventContract.methods.viewName().call((err,rs)=>{
		if(rs){
		var str=rs.split('!');
		for(var i=1;i<str.length;i++)
		{
			var str1=str[i].split(':');
			console.log(str1[1]);
			$('#event').append("<option value='"+str1[1]+"'>"+str1[0]+"</option>");
		}
	}
	});
})
$(document).on('change','#event',function(){
	console.log($('#event').val());
	eventContract.methods.getPrice($('#event').val()).call((err,rs)=>{
		$('#giatien').val(rs);
	});
	eventContract.methods.getName($('#event').val()).call((err,rs)=>{
		$('#name1').val(rs);
	})
})
//ipfs
function upload1()
{
    const repoPath = 'ipfs-' + Math.random()
    const ipfs=new Ipfs({host:'localhost', port: '5001', protocol: 'http'})
    ipfs.once('ready', () => {
        const reader = new FileReader();
        reader.onloadend = function() {   
		  const buf = buffer.Buffer(reader.result) // Convert data into buffer
		  
          ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
              if(err) {
                console.error(err)
                return
			  }
              var hash=`${result[0].hash}`;
              document.getElementById("hash1").value=hash;      
              })
            }   
            var newfile=createFile1("abc.html")
			reader.readAsArrayBuffer(newfile);
		})
}
function SendTransaction1() {
	if( typeof web3 !='undefined'){
		LoadAccount().then(account=>{
			try{
				var pk=new EthJS.Buffer.Buffer($('#pk_ticket').val(),"hex");
			}
			catch(e){
				throw alert("aPrivate Key is invalid");
			}
			eventContract.methods.getCreator($('#event').val()).call((err,rs)=>{
				var data1=eventContract.methods.createTicket($('#event option:selected').text(),$('#giatien').val(),$('#event').val()).encodeABI();	
			web3.eth.getTransactionCount(account,(err,nonce)=>{ 
					 var txObject = {
					nonce: web3.utils.toHex(nonce),
					gasLimit: web3.utils.toHex(800000),
					gasPrice: web3.utils.toHex(web3.utils.toWei('100','gwei')),
					value: web3.utils.toHex(web3.utils.toWei($('#giatien').val())),
					to: rs,
					data: data1
					}
				var tx=new EthJS.Tx(txObject);
				try{
					tx.sign(pk);
				}
				catch(e){
					throw alert("Private Key is invalid");
				}
				var serializedTx=tx.serialize();
				var raw = '0x' + serializedTx.toString('hex');
				web3.eth.sendSignedTransaction(raw, (err,txHash) => {
					document.getElementById('hash').value=txHash;
					resulticon();
					if(err)
					{
						throw alert("Failed action Buy ticket");
					}
					alert("You have got your ticket");
				})
				if(err)
				{
					throw alert("Failed action Buy ticket");
				}
				})
				if(err)
				{
					throw alert("Failed action Buy ticket");
				}
				// upload1();
			})
		});
	}else{
		throw alert("please install MetaMask");
	}
}
function loadeventname()
{
	$('ticketbuy').click(function(){
		eventContract.methods.viewName().call((err,rs)=>{
			var str=rs.split('!');
			for(var i=1;i<str.length;i++)
			{
				var str1=str[i].split(':');
				$('#event').append("<option value='"+str1[1]+"'>"+str1[0]+"</option>");
			}
		});
	})
}
function thanhtoan()
{
	eventContract.methods.getAmount($('#event').val()).call((err,rs)=>{
		console.log(rs);
		if(rs>0)
		{	
			SendTransaction1();
		}
		else
		{
			alert("Tickets sold out");
		}
	})
}