function theBeatlesPlay(musicians,instruments)
{
  var arr = [];
  for(var i = 0;i<musicians.lenght;i++)
  {
    arr= musicians + " plays "+ instruments;
  }
  return arr;
}

function johnLennonFacts(facts)
{
  var arr = [];
  var fact = "";
  var i = 0;
  while(i<=facts.lenght)
  {
    fact=facts[i]+"!!!";
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