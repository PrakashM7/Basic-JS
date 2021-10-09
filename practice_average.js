/*code challange average calculation 
two teams played a 3 set of games which team get higher average they won the trophy
TEST data; 
TEAM A -96,108,89 | 97,112,101 
TEAM B - 88, 91, 110 | 109, 95, 123 */

const team_a = 96+108+89;
const team_b= 88+91+110;

let avergeOfTeam1= (team_a/3);
let avergeOfTeam2= (team_b/3);

if (avergeOfTeam1> avergeOfTeam2)
{
    console.log('team A is champion score =',avergeOfTeam1);
}
else{
    console.log(' champion is team B   score =',avergeOfTeam2);
}