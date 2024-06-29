from geopy.geocoders import Nominatim
from termcolor import colored
import plotly.express as px
import pandas as pd

# Jako město zaddej název města
# Jako místo zadej např. ulici

input_city = input(colored("Zadej město: ", "blue"))
input_location = input(colored("Zadej místo: ", "blue"))

geolocator = Nominatim(user_agent="user_agent")
location = geolocator.geocode(f"{input_city}, {input_location}")

if location:
    
    print(colored("Latitude: ", "green"), location.latitude)
    print(colored("Longitude: ", "green"), location.longitude)

    df = pd.DataFrame({"lat": location.latitude, "lon": location.longitude}, index=[0])

    # mapa je centralizována na Prahu
    fig = px.scatter_mapbox(df, lat='lat', lon='lon', center={'lat':50.073658, 'lon':14.418540}, color_discrete_sequence=["fuchsia"], zoom=10)
    fig.update_layout(mapbox_style='open-street-map')
    fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
    fig.show()

else:
    print(colored("Nejsou k dispozici souřadnice.", "red"))