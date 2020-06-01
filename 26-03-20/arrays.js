var days_of_the_week = ['Monday', 'Tuesday','Wednesday','Thursday','Friday', 'Saturday', 'Sunday'];

var remove_last = days_of_the_week.pop();

var sunday_first= days_of_the_week.unshift(remove_last);

//console.log(days_of_the_week);

//var new_days_of_the_week = [['Monday', 'Tuesday','Wednesday','Thursday','Friday'], ['Saturday', 'Sunday']];


var new_days_of_the_week = [[days_of_the_week.includes[1,2,3,4,5]],[days_of_the_week.find(element => element ==='Saturday'),days_of_the_week.find(element => element === 'Sunday')]];

 console.log(new_days_of_the_week)

 //var remove_days = new_days_of_the_week.pop();

 //console.log(new_days_of_the_week);

 //new_days_of_the_week[0].sort();
 
 //console.log(new_days_of_the_week);