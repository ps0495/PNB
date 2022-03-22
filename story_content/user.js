function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hiqMGpXojM":
        Script1();
        break;
      case "5eTDHVNlfPb":
        Script2();
        break;
  }
}

function Script1()
{
  var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
var dateString=month + "/" + day + "/" + year;
var player = GetPlayer();
player.SetVar("systemdate",dateString);

}

function Script2()
{
  window.print();
}

