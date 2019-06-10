  var q = ["What is an NBA player deemed to be if he has received the Maurice Podoloff Trophy?<br /><br />", 
  "Who is the the NFL's All-time Leader in Yard in Scrimmage <br /><br />", 
  "Who won the MOST Tennis Grand Slam Touranments(men or women)?<br /><br />", 
  "What is the maximum amount of games an NFL team can play(including playoffs, excluding preseason)?<br /><br />", 
  "Who was the only person in NBA history to be named Most Valuable Player, Coach of the Year, and Executive of the Year?<br /><br />", 
  "Who is the last NBA team to be 3-peat Champions?<br /><br />", 
  "WHICH NFL TEAM APPEARED IN FOUR CONSECUTIVE SUPER BOWLS FROM 1991 - 1994 AND LOST THEM ALL?<br /><br />", 
  "IN BASEBALL, WHICH OF THE FOLLOWING CAN A BATTER REACH BASE ?<br /><br />",
   "WHICH 2 TEAMS THAT THE NEW ENGLAND PATRIOTS LOST TO IN THE SUPER BOWL DIVISION RESIDE FROM?<br /><br />", 
  "Which is the only American Football team to go a whole season undefeated, including the Super Bowl?<br /><br />"];
        
        
        
        
        var a1 = ["<button class=buttons002 onclick=q1c()>Most Valuable Player</button>",
                  "<button class=buttons002 onclick=q2i()>Terrell Owens</button>",
                  "<button class=buttons002 onclick=q3i()>Roger Federer</button>",
                  "<button class=buttons002 onclick=q4i()>15</button>",
                  "<button class=buttons002 onclick=q5i()>Magic Johnson</button>",
                  "<button class=buttons002 onclick=q6c()>La Lakers</button>",
                  "<button class=buttons002 onclick=q7i()>New York Giants</button>",
                  "<button class=buttons002 onclick=q8i()>Base on Balls(walk)</button>",
                  "<button class=buttons002 onclick=q9i()>NFC North</button>",
                  "<button class=buttons002 onclick=q10i()>New England Patriots</button>"];

        var a2 = ["<button class=buttons002 onclick=q1i()>Sixth Man</button>",
                  "<button class=buttons002 onclick=q2c()>Jerry Rice</button>",
                  "<button class=buttons002 onclick=q3i()>Serena Williams</button>",
                  "<button class=buttons002 onclick=q4i()>19</button>",
                  "<button class=buttons002 onclick=q5i()>Phil Jackson</button>",
                  "<button class=buttons002 onclick=q6i()>Miami Heat</button>",
                  "<button class=buttons002 onclick=q7c()>Buffalo Bills</button>",
                  "<button class=buttons002 onclick=q8i()>Hit by Pitch</button>",
                  "<button class=buttons002 onclick=q9i()>NFC South</button>",
                  "<button class=buttons002 onclick=q10i()>Denver Broncos</button>"];

        var a3 = ["<button class=buttons002 onclick=q1i()>Most Improved Player</button>",
                  "<button class=buttons002 onclick=q2i()>Emmitt Smith</button>",
                  "<button class=buttons002 onclick=q3i()>Novak Djokovic</button>",
                  "<button class=buttons002 onclick=q4c()>20</button>",
                  "<button class=buttons002 onclick=q5c()>Larry Bird</button>",
                  "<button class=buttons002 onclick=q6i()>San Antonio Spurs</button>",
                  "<button class=buttons002 onclick=q7i()>Minnesota Vikings</button>",
                  "<button class=buttons002 onclick=q8i()>Base Hit</button>",
                  "<button class=buttons002 onclick=q9c()>NFC East</button>",
                  "<button class=buttons002 onclick=q10i()>Pittsburgh Steelers</button>"];

        var a4 = ["<button class=buttons002 onclick=q1i()>Defensive Player of the Year</button>",
                  "<button class=buttons002 onclick=q2i()>Barry Sanders</button>",
                  "<button class=buttons002 onclick=q3c()>Margaret Court</button>",
                  "<button class=buttons002 onclick=q4i()>16</button>",
                  "<button class=buttons002 onclick=q5i()>Michael Jordan</button>",
                  "<button class=buttons002 onclick=q6i()>Chicago Bulls</button>",
                   "<button class=buttons002 onclick=q7i()>Dallas Cowboys</button>",
                  "<button class=buttons002 onclick=q8c()>All of the Above</button>",
                  "<button class=buttons002 onclick=q9i>NFC West </button>",
                  "<button class=buttons002 onclick=q10c()>Miami Dolphins</button>"];                  


        var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
        var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

        var n = 0;
        n++;
        var s = 0;
        s++;

        function begin001() {
            disappear001.innerHTML = "";
            message001.innerHTML = "";
            question001.innerHTML = q[0];
            option001.innerHTML = a1[0];
            option002.innerHTML = a2[0];
            option003.innerHTML = a3[0];
            option004.innerHTML = a4[0];
            number001.innerHTML = n++;
        }

        function q1c() {
            answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
            score001.innerHTML = s++;
        }

        function q1i() {
            answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
        }

        function new002() {
            question001.innerHTML = q[1];
            option001.innerHTML = a1[1];
            option002.innerHTML = a2[1];
            option003.innerHTML = a3[1];
            option004.innerHTML = a4[1];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q2c() {
            answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
            score001.innerHTML = s++;
        }

        function q2i() {
            answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
        }

        function new003() {
            question001.innerHTML = q[2];
            option001.innerHTML = a1[2];
            option002.innerHTML = a2[2];
            option003.innerHTML = a3[2];
            option004.innerHTML = a4[2];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q3c() {
            answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
            score001.innerHTML = s++;
        }

        function q3i() {
            answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
        }

        function new004() {
            question001.innerHTML = q[3];
            option001.innerHTML = a1[3];
            option002.innerHTML = a2[3];
            option003.innerHTML = a3[3];
            option004.innerHTML = a4[3];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q4c() {
            answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
            score001.innerHTML = s++;
        }

        function q4i() {
            answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
        }

        function new005() {
            question001.innerHTML = q[4];
            option001.innerHTML = a1[4];
            option002.innerHTML = a2[4];
            option003.innerHTML = a3[4];
            option004.innerHTML = a4[4];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q5c() {
            answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
            score001.innerHTML = s++;
        }

        function q5i() {
            answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
        }

        function new006() {
            question001.innerHTML = q[5];
            option001.innerHTML = a1[5];
            option002.innerHTML = a2[5];
            option003.innerHTML = a3[5];
            option004.innerHTML = a4[5];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q6c() {
            answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
            score001.innerHTML = s++;
        }

        function q6i() {
            answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
        }

        function new007() {
            question001.innerHTML = q[6];
            option001.innerHTML = a1[6];
            option002.innerHTML = a2[6];
            option003.innerHTML = a3[6];
            option004.innerHTML = a4[6];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q7c() {
            answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
            score001.innerHTML = s++;
        }

        function q7i() {
            answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
        }

        function new008() {
            question001.innerHTML = q[7];
            option001.innerHTML = a1[7];
            option002.innerHTML = a2[7];
            option003.innerHTML = a3[7];
            option004.innerHTML = a4[7];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q8c() {
            answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
            score001.innerHTML = s++;
        }

        function q8i() {
            answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
        }

        function new009() {
            question001.innerHTML = q[8];
            option001.innerHTML = a1[8];
            option002.innerHTML = a2[8];
            option003.innerHTML = a3[8];
            option004.innerHTML = a4[8];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q9c() {
            answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
            score001.innerHTML = s++;
        }

        function q9i() {
            answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
        }

        function new010() {
            question001.innerHTML = q[9];
            option001.innerHTML = a1[9];
            option002.innerHTML = a2[9];
            option003.innerHTML = a3[9];
            option004.innerHTML = a4[9];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q10c() {
            answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
            score001.innerHTML = s++;
        }

        function q10i() {
            answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
        }

        function end001() {
            message001.innerHTML = "0-3: you trash(go home rookie)<br></br> 4-6: you a casual sports fan(bandwagon)<br></br> 7-10 : You are an sports expert(somewhat)!! ";
            question001.innerHTML = "";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
            answer001.innerHTML = "";
        }

        function repeat001() {
            location.reload();
        }