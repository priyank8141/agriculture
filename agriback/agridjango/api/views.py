from django.shortcuts import render
from .models import Signup
from .serializers import SignupSerializers
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
import io
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@csrf_exempt
def signup_api(request):
    if request.method == 'GET':
        json_data = request.body
        stream = io.BytesIO(json_data)
        pythondata = JSONParser().parse(stream)
        id = pythondata.get('id',None)
        if id is not None:
            sign = Signup.objects.get(id=id)
            serializer = SignupSerializers(sign)
            json_data = JSONRenderer().render(serializer.data)
            return HttpResponse(json_data,content_type='application/json')
        sign = Signup.object.all()
        serializer = SignupSerializers(sign,many=True)
        json_data = JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')

    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        pythondata = JSONParser().parse(stream)
        serializer = SignupSerializers(data = pythondata)
        if serializer.is_valid():
            serializer.save()
            res = {'msg': 'Data inserted'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data,content_type='application/json')
        json_data = JSONRenderer().render(serializer.errors)
        return HttpResponse(json_data,content_type='application/json')

#     data1 =Signup.objects.get(id=pk) #fetching data from database
#     #print(data1)
#     serializer = SignupSerializers(data1) #converting data to called python object serializer
#     #print(serializer)
#     #json_data = JSONRenderer().render(serializer.data) # converting python object to json data
#     #print(json_data)
#     #return HttpResponse(json_data,content_type='application/json') #responsing the json data to client
#     return JsonResponse(serializer.data,safe=True) #instead of writing above two line json_data and return 


# def signup_list(request):
#     data1 =Signup.objects.all()
#     #print(data1)
#     serializer = SignupSerializers(data1,many=True)
#     #print(serializer)
#     json_data = JSONRenderer().render(serializer.data)
#     #print(json_data)
#     return HttpResponse(json_data,content_type='application/json')
