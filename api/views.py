import json
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
from datetime import datetime

from .serialisers import SubjectSerializer,TagSerializer
from .models import Tag,Subject

KAPI_BASE_URL = "http://kapi.kooora.ws/api"

# get matches
@api_view(["GET"])
def getMatches(request, date) : 
    req = KAPI_BASE_URL + "/matches?tz=1.0&date=" + date + "&sport=0&byStage=True" 
    r = requests.get(req).json()
    return Response(r)

# get all 
@api_view(["GET"])
def getLeagues(request) :
    req = KAPI_BASE_URL + "/leagues"
    r = requests.get(req).json()
    return Response(r)

@api_view(["GET"])
def getPlayers(request) :
    req = KAPI_BASE_URL + "/players"
    r = requests.get(req).json()
    return Response(r)

@api_view(["GET"])
def getTeams(request) :
    req = KAPI_BASE_URL + "/teams"
    r = requests.get(req).json()
    return Response(r)

# get for a giving id
@api_view(["GET"])
def getTeam(request, id) :
    req = KAPI_BASE_URL + "/teams?id=%s" % str(id)
    r = requests.get(req).json()
    return Response(r)

@api_view(["GET"])
def getLeague(request, id) :
    req = KAPI_BASE_URL + "/leagues?id=%s" % str(id)
    r = requests.get(req).json()
    return Response(r)

@api_view(["GET"])
def getplayer(request, id) :
    req = KAPI_BASE_URL + "/players?id=%s" % str(id)
    r = requests.get(req).json()
    return Response(r)

# get team matches 
@api_view(["GET"])
def getTeamMatches(request, id , date) : 
    now = datetime.now()
    data = []
    req = KAPI_BASE_URL + "/teamMatches?tz=1.0f&date=" + date + "&id=" + id
    r = requests.get(req).json()
    for m in r:
        if (datetime.strptime(m["Matches"][0]["Kickoff"], '%Y-%m-%dT%H:%M:%S') > now) :
            data.append(m)
    return Response(data)

@api_view(["GET"])
def getTeamResult(request, id , date) : 
    now = datetime.now()
    data = []
    req = KAPI_BASE_URL + "/teamMatches?tz=1.0f&date=" + date + "&id=" + id
    r = requests.get(req).json()
    for m in r:
        if (datetime.strptime(m["Matches"][0]["Kickoff"], '%Y-%m-%dT%H:%M:%S') <= now) :
            data.append(m)
    return Response(data)

# get league teams
@api_view(["GET"])
def get_teams(request, id):
    r = requests.get(KAPI_BASE_URL + "/teams?league=%s" % str(id)).json()
    return Response(r)
# get league table
@api_view(["GET"])
def getTable(request, id):
    req = KAPI_BASE_URL + "/LeagueTable/" + id 
    r = requests.get(req).json()
    return Response(r)
# get league top scorrer
@api_view(["GET"])
def getTopScorers(request, id):
    req = KAPI_BASE_URL + "/scorers/" + id 
    r = requests.get(req).json()
    return Response(r)
# get league matches/results :

@api_view(["GET"])
def getLeagueMatches(request, id , date):
    now = datetime.now()
    data = []
    req = KAPI_BASE_URL + "/leagueMatches?tz=1.0f&date=" + date + "&id=" + id
    r = requests.get(req).json()
    for m in r:
        if (datetime.strptime(m["Matches"][0]["Kickoff"], '%Y-%m-%dT%H:%M:%S') > now) :
            data.append(m)
    return Response(data)

@api_view(["GET"])
def getLeagueResults(request, id , date):
    now = datetime.now()
    data = []
    req = KAPI_BASE_URL + "/leagueMatches?tz=1.0f&date=" + date + "&id=" + id
    r = requests.get(req).json()
    for m in r:
        if (datetime.strptime(m["Matches"][0]["Kickoff"], '%Y-%m-%dT%H:%M:%S') <= now) :
            data.append(m)
    return Response(data)

# search 
@api_view(["GET"])
def search(request, id) :
    req = KAPI_BASE_URL + "/search?keyWord=%s" % str(id)
    r = requests.get(req).json()
    return Response(r)



# our APIs

@api_view(["get"])
def getSubjects(request):
    subject = Subject.objects.all()
    serialiser = SubjectSerializer(subject, many = True)        
    return Response(serialiser.data)

@api_view(["get"])
def getSubject(request, pk):
    subject = Subject.objects.get(id = pk)
    serialiser = SubjectSerializer(subject, many= False)        
    return Response(serialiser.data)

@api_view(["post"])
def addSubject(request):
    data = request.data
    tags = [] 
    serializer = SubjectSerializer(data = request.data)
    
    for elm in data["tag"]:
        tag = Tag.objects.get(id = elm)
        tags.append(tag)

    if (serializer.is_valid()):
        subject = Subject.objects.create( 
            title = data["title"] , 
            image = data["image"] , 
            content = data["content"] , 
            author = data["author"] , 
            tag = tags
        )
        subject.save()

        return Response(serializer.data)
    return Response("error accured!")

@api_view(["get"])
def getTags(request):
    tag = Tag.objects.all()
    serialiser = TagSerializer(tag, many = True)        
    return Response(serialiser.data)

@api_view(["get"])
def getTagSubjets(request , pk ):
    tag = Tag.objects.filter(ab = pk)
    for item in tag : 
        print(tag["id"])

    subjects = Subject.objects.filter(tag = pk)
    serialiser = SubjectSerializer(subjects, many = True)        
    return Response(serialiser.data)
