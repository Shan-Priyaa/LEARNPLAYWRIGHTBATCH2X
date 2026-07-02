let Test_case_passed=90;
if (Test_case_passed === 100)
{console.log("🟢Green Build");

}
else if (Test_case_passed >= 90 && Test_case_passed <= 99 )
{console.log(`Input :${Test_case_passed} \n Output :🟡Stable - investigate failures`);
}
else if (Test_case_passed >= 70 && Test_case_passed <= 89 )
{console.log(`Input :${Test_case_passed} \n Output :🟠Unstable`);
}
else if(Test_case_passed <= 70 )
{console.log("🔴Broken Build-Block deployment");    
}