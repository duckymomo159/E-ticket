import "github.com/Arachnid/solidity-stringutils/strings.sol";
pragma experimental ABIEncoderV2;
pragma solidity^0.4.17;

contract Events{
    using strings for *;
    //Khai báo
    struct Tickets{
        string eventname;
        uint idTickets;
        string price;
        address owner;
    }
    uint256 numTicket=0;
    mapping(uint256=>Tickets) ticketData;
	struct Event{
		string name;
		uint256 id;
		string time;
		string place;
		address creator;
		string begin;
		string end;
		uint256 soluong;
		string priceTickets;
	}
	uint256 totalEvent=0;
	string public strname="";
	string public haicham=":";
	string public chamthang="!";
	mapping(uint256 => Event) public eventData;
	event TakeEvent(
	    uint256 indexed id,
	    address indexed labor
	    );
    function bytes32ToString(bytes32 x) constant returns (string) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }
    function uint2str(uint i) internal pure returns (string){
    if (i == 0) return "0";
    uint j = i;
    uint length;
    while (j != 0){
        length++;
        j /= 10;
    }
    bytes memory bstr = new bytes(length);
    uint k = length - 1;
    while (i != 0){
        bstr[k--] = byte(uint8(48 + i % 10));
        i /= 10;
    }
    return string(bstr);
}
//hàm tạo event
	function createEvent(string priceTickets,string name,string time,string place, string begin, string end,uint256 soluong) public
	returns(uint256 eventId,string)
	{
		Event memory newEvent;
		eventId=totalEvent++;
		newEvent.soluong=soluong;
		newEvent.name=name;
		newEvent.time=time;
		newEvent.place=place;
		newEvent.id=eventId;
		newEvent.begin=begin;
		newEvent.end=end;
		newEvent.creator=msg.sender;
		newEvent.priceTickets=priceTickets;
		eventData[eventId]=newEvent;
		totalEvent=totalEvent++;
		string memory tmp=uint2str(eventId);
	    string memory tmp1=haicham.toSlice().concat(tmp.toSlice());
	    string memory tmp2=chamthang.toSlice().concat(name.toSlice());
	    string memory tmp3=tmp2.toSlice().concat(tmp1.toSlice());
	    strname=strname.toSlice().concat(tmp3.toSlice());
		return(eventId,strname);
	}
	
	function takeEvent(uint256 eventId) public{
        TakeEvent(eventId,msg.sender);
	}
	function viewName() returns(string strname1)
	{
	    strname1=strname;
	    return strname1;
	}
	function getPrice(uint256 id) returns(string)
	{
	    return eventData[id].priceTickets;
	}
	function getName(uint256 id) returns(string)
	{
	    return eventData[id].name;
	}
	function getCreator(uint256 id) returns(address)
	{
	    return eventData[id].creator;
	}
	function getAmount(uint256 id) returns(uint256)
	{
	    return eventData[id].soluong;
	}
	function createTicket(string eventname,string price,uint256 id){
	   Tickets memory newTicket;
	   uint256 idtick=numTicket++;
	   newTicket.eventname=eventname;
	   newTicket.price=price;
	   newTicket.idTickets=idtick;
	   newTicket.owner=msg.sender;
	   numTicket=numTicket++;
	   ticketData[idtick]=newTicket;
	   eventData[id].soluong=eventData[id].soluong--;
	}
}