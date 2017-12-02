var quotes=["Stay Hungry Stay Foolish","The world around us is made by people who are no smarter than us and we can change it","Live as if this the last day of your life and someday you'll be certainly right","Be the change that you wanted to see in others","Don't live someone else's life","Patience is a virtue, and I'm learning patience. It's a tough lesson.","I would like to die on Mars. Just not on impact","Great companies are built on great products","Life is too short for long-term grudges","Live to inspire others"];
function getQuote()
{
  var num=Math.floor(Math.random()*10+1);
  if(quotes[num]!=undefined)
    {
      
    
  document.getElementById("quote").innerHTML=quotes[num];
    }
}