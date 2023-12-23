/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
This is empty on purpose! Your code to build the resume will go here.
 */

$("#header").append(bio);
var bio =  {
           "name" : "Honey Patkar",
           "age" : 19,
           "role"  : "Web Developer",
    "contacts" : [
        {
           "number" : 7976909686,
           "email" : "honeypatkar@gmail.com",
           "location" : "Baran, Rajasthan",
           "github" : "honeypatkar",
            "twitter" : "HoneyPatkar"
        }
        ],
          "welcomeMessage" : "Hello Everyone", 
          "skills" : ["Awesomeness" ,"Multi-tasker", "Problem solving", "Creativity"],
          "biopic" : "images/avtar.jpg"
    

};
         
var work = {
    "jobs" : [
        {
            "employer" : "Self",
            "title" : "Web Devloper",
            "location" : "Baran",
            "dates" : "At running",
            "description" : "I'm a beginner and learning web devlopment.I'm looking for job.This is my Personal Portfolio. Here I have included some of my project that i made during practice. Hopefully you like them."
        }
        ]

};
var projects = {
    "projects" : [
        {
            "title" : "Personal Portfolio",
            "date" : 2023,
            "description" : "Simple portfolio use HTML & CSS",
            "image" : "images/portfolio.jpg"
        }
        ]
};

var education = {
	"schools": [
        {
            "name" : "Vardhman Mahaveer Open University",
            "degree" : "BCA",
            "location" : "Kota",
            "dates" : 2025,
            "major" : "CS"
        }
    ],
    "courses" : [
        {
            "title": "Basic JavaScript & Intro to CS",
            "school" : "Udacity",
            "dates" : 2023,
            "url" : "www.udacity.com"
        }
    ]
};
    

function displayBio() {

var formattedRole = HTMLheaderRole.replace("%data%" ,bio.role);
$("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%" ,bio["name"]);
$("#header").prepend(formattedName);  
    
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);
    
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMsg);
    
        for (contact in bio.contacts) {
            var formattedNumber = HTMLmobile.replace("%data%", bio.contacts[contact].number);
        $("#topContacts").append(formattedNumber);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        $("#topContacts").append(formattedEmail);

            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
        $("#topContacts").append(formattedGithub);

             var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
        $("#topContacts").append(formattedTwitter);
    
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
            $("#topContacts").append(formattedLocation);
        };
    
    if (bio.skills.length > 0) {
    
    $("#header").append(HTMLskillsStart);
    
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
     var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
     var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
     var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
}
    


};

displayBio();



function displayWork() {
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedEmployerTitle = formattedEmployer + formattedTitle ;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
         var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

                    };
};
displayWork();

function displayEducation() {
    for (school in education.schools) {
        
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDegree = formattedSchool + formattedDegree;
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
     $(".education-entry:last").append(formattedLocation);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
     $(".education-entry:last").append(formattedDates);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
                
        
    };
    for (course in education.courses){
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.courses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.courses[course].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.courses[course].dates);
         $(".education-entry:last").append(formattedOnlineDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.courses[course].url);
         $(".education-entry:last").append(formattedUrl);                                          
        
    };
};
displayEducation();

function displayClasses() {

};
displayClasses()



var displayProjects = function() {}

projects.display = function() {
    for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
     var formattedDates = HTMLprojectDates.replace("%data%" , projects.projects[project].date);
        $(".project-entry:last").append(formattedDates);
     var formattedDescription = HTMLprojectDescription.replace("%data%" , projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
     var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedImage);
            
      };
};
projects.display();

$("#mapDiv").append(googleMap);

for (contact in bio.contacts) {
    var formattedNumber = HTMLmobile.replace("%data%", bio.contacts[contact].number);
$("#footerContacts").append(formattedNumber);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
$("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
$("#footerContacts").append(formattedGithub);
    
     var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
$("#footerContacts").append(formattedTwitter);
};

$('.education-entry').children('h3').addClass('online');
$('.online').css('padding-left', '0');
$('.education-entry').children('a').attr('href', 'https://www.vmou.ac.in/');
$('.education-entry').children('a').last().attr('href', 'https://www.udacity.com/');
$('.project-entry').children('img').addClass('responsive');
$('.project-entry').children('img').attr('alt', 'Personal portfolio');
$('.responsive').css('max-width', '100%');
$('.project-entry').children('a').attr('href', 'https://portfolio.honeypatkar.repl.co/');
