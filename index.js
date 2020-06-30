function theBeatlesPlay(musicians,instruments)
{
  var arr = [];
  var str = "";
  for(var i = 0;i<musicians.lenght;i++)
  {
    str = musicians + " plays "+ instruments;
    arr= str;
  }
  return arr;
}

function johnLennonFacts(facts)
{
  var arr = facts;
  var fact = "";
  var i = 0;
  while(i<=facts.lenght)
  {
    fact= facts + "!!!";
    arr[i]=fact;
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num)
{
  var emptyArray = [];
  var i = 0;
  do 
  {
    emptyArray[i]="I love the Beatles!" ;
    i++;
    num++;
  }while(i<15)
  return emptyArray;
}