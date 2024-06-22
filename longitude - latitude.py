from geopy.geocoders import Nominatim
from termcolor import colored

input_city = input(colored("Zadej město: ", "blue"))
input_location = input(colored("Zadej místo: ", "blue"))

geolocator = Nominatim(user_agent="user_agent")
location = geolocator.geocode(f"{input_city}, {input_location}")

print(colored("Latitude: ", "green"), location.latitude)
print(colored("Longitude: ", "green"), location.longitude)
