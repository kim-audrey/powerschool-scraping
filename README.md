OVERVIEW:
This software automatically retrieves a user’s grades from the PowerSchool website during operational hours (6pm-10pm). This frees users from the limit of the operational window, and allows them access to a static overview of their grades anytime they desire. 
 
The displayed grades do not include classes without grades (such as lunch) and the program cannot be set to run outside of PowerSchool’s operational hours. 
 
 
 
STEPS FOR USE:
    Download the accessps01t.exe file from the repository
    Open task scheduler and in task scheduler right click on Task Scheduler Library and click Create Task
        Navigate to “General” tab and give task a name
        Navigate to “Triggers” tab > New
            Set the “settings” to daily and a set time (recur every 1 days) and “Run Whether User is Logged on or Not”
        Navigate to “Actions” tab > New
            “Program/script” : browse to accessps01t.exe
            “Add Arguments” : put in arguments separated by spaces. ex: [username] [password]
            “Start in”: copy file path to where you want your grades (txt file) to be in. ex: C:\Users\owner\Desktop
    The program is now set and will run automatically at the given time, saving its results into a folder called scraped_data.
 
 
CONTRIBUTORS:
This project is currently being actively developed by
Alexander Druzenko (aledru21@bergen.org)
Audrey Kim (audkim21@bergen.org)
 
FUTURE GOALS:
In the future, we would like to set up a chrome extension so that the program is more user friendly and accessible. Additionally, we hope to set up cookies and a database so that the process our program takes is more efficient. 