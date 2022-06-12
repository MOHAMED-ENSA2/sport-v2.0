from django.db import models


class Tag(models.Model) : 
    name = models.CharField(max_length=55 , blank=True, null=True)
    ab = models.CharField(max_length = 15, blank=True , null = True)
    create_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name


class Subject(models.Model) : 
    title = models.CharField(max_length=255,null = True , blank=True )
    image = models.ImageField(null = True , blank = True)
    content = models.TextField(max_length=5000,null = True , blank=True)
    author = models.CharField(max_length=255,null = True , blank=True)
    tag = models.ManyToManyField(Tag, blank=True, null=True)
    create_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title
