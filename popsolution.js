//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/

var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="I know you could do it!"
compliments[7]="You are very good at it."
compliments[8]="You’ve got it rightt!"
compliments[9]="Super!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which is the oldest inhabited city in Florida?"
choice1[1]="Miami"
choice1[2]="Jacksonville"
choice1[3]="St. Augustine"
choice1[4]="St. Petersberg"

question[2]="How many lakes are in Florida?"
choice2[1]="less than 3000"
choice2[2]="3000-5000"
choice2[3]="5000-7000"
choice2[4]="more than 7000"

question[3]="How much percentages of the country's oranges are being produced from Florida?"
choice3[1]="30%"
choice3[2]="50%"
choice3[3]="70%"
choice3[4]="90%"

question[4]="When was the first human settelment in Florida?"
choice4[1]="4,000 Years Ago"
choice4[2]="10,000 Years Ago"
choice4[3]="14,000 Years Ago"
choice4[4]="18,000 Years Ago"

question[5]="What does 'Florida' mean?"
choice5[1]="Festival of flowers"
choice5[2]="Festival of oranges"
choice5[3]="Festival of sunshine"
choice5[4]="Festival of ants"

question[6]="What are the largest predators in Florida?"
choice6[1]="Aligators"
choice6[2]="Black Bears"
choice6[3]="Burmese pythons"
choice6[4]="Bobcats"

question[7]="How many islands are in Florida?"
choice7[1]="1000-2000"
choice7[2]="2000-3000"
choice7[3]="3000-4000"
choice7[4]="4000-5000"

question[8]="What is the Florida's rank of population in the U.S.(according to 2020 cencus)?"
choice8[1]="1st"
choice8[2]="2nd"
choice8[3]="3rd"
choice8[4]="4th"

question[9]="Which is the longest river in Florida?"
choice9[1]="Saint John's River"
choice9[2]="Apalachicola River"
choice9[3]="Alapaha River"
choice9[4]="Pea River"

question[10]="How many state parks are in Florida?"
choice10[1]="100-150"
choice10[2]="151-200"
choice10[3]="201-250"
choice10[4]="over 250"


solution[1]="c"
solution[2]="d"
solution[3]="c"
solution[4]="c"
solution[5]="a"
solution[6]="c"
solution[7]="d"
solution[8]="c"
solution[9]="b"
solution[10]="b"


