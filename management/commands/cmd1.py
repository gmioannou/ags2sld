import json
import os

from django.core.management.base import BaseCommand
from django.template.defaultfilters import slugify

from ags2sld.handlers import Service, Layer

wdir = os.getcwd()


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        mapurl = "http://eservices.dls.moi.gov.cy/arcgis/rest/services/National/CadastralMap_EN/MapServer"
        self.getmap(mapurl)

    def getmap(self, mapurl):
        agsmap = Service(mapurl)

        for lay in agsmap.layers[2:4]:
            layid = lay.get('id')
            layname = slugify(lay.get('name')).replace("-", "_")

            print("\n{} {}".format(layid, layname))

            layer = Layer(mapurl, layid)
            layer.dump_sld_file()

            if layer.descriptor.get('type') == "Feature Layer":
                jsonfile = '{}.{}'.format(layname, 'json')
                jsonfile_path = os.path.join(layer.dump_folder, jsonfile)
                print("  {}".format(jsonfile))

                jsondata = agsmap.get(layid, srid=layer.spatialReference)
                with open(jsonfile_path, 'w') as f:
                    json.dump(jsondata, f)                
            else:
                print("  {} not a feature layer...".format(layer.descriptor.get('type')))





    # mapurl = "http://eservices.dls.moi.gov.cy/arcgis/rest/services/National/CadastralMap_EN/MapServer/"

    # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/Basemap/MapServer/"        # 4 city limits
    # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SCEMD_Data/MitigationPlans/MapServer/"    # 0,2
    # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/PublicWorks/MapServer/"    # 7,8
    # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/FireStations/MapServer"  # 0,3
    # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/Regions/MapServer"        # 0,2
    # mapurl = "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/"
    # mapurl = "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyFeedSample/MapServer/"
    # mapurl = "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Fire/Sheep/MapServer/"
    # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/Agriculture/MapServer/"
    # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/HealthMedical/FeatureServer/"
    # mapurl = "http://geoportal.capmas.gov.eg/gisserver/rest/services/Publications/usages/MapServer"
