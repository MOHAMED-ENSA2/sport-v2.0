from django.urls import path

from .views import *

urlpatterns = [
    path("matches/<str:date>" , getMatches ) ,
    path("leagues" , getLeagues ) ,
    path("leagues/<str:id>" , getLeague ) ,
    path("teams" , getTeams ) ,
    path("teams/<str:id>" , getTeam ) ,
    path("players" , getPlayers ) ,
    path("players/<str:id>" , getplayer ) ,
    path("search/<str:id>" , search ) ,

    path("getTeamMatches/<str:id>/<str:date>" , getTeamMatches),
    path("getTeamResult/<str:id>/<str:date>" , getTeamResult),

    path("table/<str:id>" , getTable ) ,
    path("topScorers/<str:id>" , getTopScorers ) ,
    path("getLeagueMatches/<str:id>/<str:date>" , getLeagueMatches),
    path("getLeagueResults/<str:id>/<str:date>" , getLeagueResults),

    path("getSubjects" , getSubjects),
    path("getSubject/<str:pk>" , getSubject), 
    path("addSubject" , addSubject), 
    path("getTags" , getTags), 

    path("getTagSubjets/<str:pk>" , getTagSubjets), 
]
