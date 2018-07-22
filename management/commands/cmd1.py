from django.core.management.base import BaseCommand

from ags2sld.handlers import Service, Layer


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        self.exec2()

    def exec2(self):
        # mapurl = "http://eservices.dls.moi.gov.cy/arcgis/rest/services/National/CadastralMap_EN/MapServer/"

        # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/Basemap/MapServer/"        # 4 city limits
        # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SCEMD_Data/MitigationPlans/MapServer/"    # 0,2
        # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/PublicWorks/MapServer/"    # 7,8
        mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/FireStations/MapServer"  # 0,3
        # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/Regions/MapServer/"        # 0,2
        # mapurl = "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/"
        # mapurl = "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyFeedSample/MapServer/"
        # mapurl = "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Fire/Sheep/MapServer/"
        # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/Agriculture/MapServer/"
        # mapurl = "https://rest.palmettoeoc.net/arcgis/rest/services/SC_Base_Data/HealthMedical/FeatureServer/"

        service = Service(mapurl)

        for lay in service.layers:
            print("\n{} {}".format(lay.get('id'), lay.get('name')))

            layer = Layer(service.url, lay.get('id'))
            layer.dump_sld_file()