from rest_framework import serializers 
from .models import Tag,Subject

class SubjectSerializer(serializers.ModelSerializer)  : 
    class Meta() : 
        model  = Subject 
        fields =  "__all__"

# ["title","image","content","author"]

class TagSerializer(serializers.ModelSerializer)  : 
    class Meta() : 
        model  = Tag 
        fields = ["id" , "ab" , "name" , "create_at"]
       
    