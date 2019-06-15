var topic=["世大運","亞洲U23女排錦標賽","亞洲U23男排錦標賽","亞洲女排錦標賽","亞洲男排錦標賽","世界杯"];
var startDate = new Date();

function setMonthAndDay(startMonth,startDay)
{
	startDate.setMonth(startMonth-1,startDay);
	startDate.setHours(0);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
}
setMonthAndDay(7,1);
