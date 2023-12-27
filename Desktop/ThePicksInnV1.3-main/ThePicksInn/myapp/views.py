from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Drink
from .serializers import DrinkSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests
import json



@api_view(['GET', 'POST'])
def drink_list(request, format=None):

    # get all the drinks
    # serialize them
    # return json
    if request.method == 'GET':
        drinks = Drink.objects.all()
        serializer = DrinkSerializer(drinks, many=True)
        return Response(serializer.data)
    

    if request.method == 'POST':
        serializer = DrinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        

@api_view(['GET', 'PUT', 'DELETE'])
def drink_detail(request, id, format=None):

    try:
        drink = Drink.objects.get(pk=id)
    except Drink.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = DrinkSerializer(drink)
        return Response(serializer.data)
   
    elif request.method == 'PUT':
        serializer = DrinkSerializer(drink, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
   
    elif request.method == 'DELETE':
        drink.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET'])
def home(request):
    # actual top 20 players
    response1 = requests.get('https://mybackendnba-e0bd8ae9accb.herokuapp.com/advance-stats/')
    
    # Leaderboard list data
    response2 = requests.get('https://mybackendnba-e0bd8ae9accb.herokuapp.com/api/leaderboard-list/')

    # Print status codes for debugging
    print('Response 1 Status Code:', response1.status_code)
    print('Response 2 Status Code:', response2.status_code)

    # Check if the responses are successful (status code 200)
    if response1.status_code == 200 and response2.status_code == 200:
        # Get the response data as a python object. Verify that it's a dictionary.
        data1 = response1.json()
        data2 = response2.json()

        # sort the data2 by 'accuracy', 'correct_picks_count' and 'per_percentage'
        data2 = sorted(data2, key=lambda k: (k['accuracy'], k['correct_picks_count'], k['per_percentage']), reverse=True)

        

        # Pass all the data to the template
        context = {'data1': data1, 'data2': data2}
        return render(request, 'myapp/index.html', context)
    else:
        # Pass status codes to the template for debugging
        context = {'status_code': f'{response1.status_code}, {response2.status_code}'}
        return render(request, 'myapp/index.html', context)


