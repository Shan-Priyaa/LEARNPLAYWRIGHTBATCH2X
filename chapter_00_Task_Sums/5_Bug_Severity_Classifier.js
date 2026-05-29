let impact_score=5;
if(impact_score>=9 && impact_score <=8)
    console.log("Severity : Critical _Block release ");
else if(impact_score>=8 && impact_score<=7)
    console.log("Severity : High ");
else if(impact_score>=4 && impact_score<=6)
    console.log("Severity :Medium ");
else if(impact_score>=1 && impact_score<=3)
    console.log("Severity :Low ");
else
     console.log("Invalid");