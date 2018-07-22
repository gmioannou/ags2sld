# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from handlers import Service, Layer
import json


def index(request):
    return render(request, 'ags2sld/index.html', {})


# @csrf_exempt
def get_sld(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        mapUrl = data.get('mapUrl')
        dumpFolder = data.get('dumpFolder')

        service = Service(mapUrl)

        for lay in service.layers:
            print("\n{} {}".format(lay['id'], lay['name']))

            layer = Layer(service.url, lay.get('id'), dumpFolder)

            layer.dump_sld_file()

    return JsonResponse({"message": "Done!"})


def get_map(request):
    if request.method == "GET":
        mapUrl = request.GET.get('mapUrl', None)
        service = Service(mapUrl)
        # layers = json.loads(service.layers)
        for lay in service.layers:
            print("\n{} {}".format(lay['id'], lay['name']))

    return JsonResponse({"message": "Done!"})
