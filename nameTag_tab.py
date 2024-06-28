import pandas as pd
pd.set_option("display.max_rows", None, "display.max_columns", None)
import re
from termcolor import colored

# zadání vstupu
zadej = input(colored("Zadej název xlsx: ", "blue"))

# zde nutno zadat správnou cestu na Desktop
file = f"C:/Users/Richard Změlík/Desktop/{zadej}.xlsx"
table = pd.read_excel(file)

# definujeme sloupce jako index 
df = table.set_index('Entity Type')

names = []
long = []
lat = []

# iterace přes každý kód
for a, b in df. iterrows():
    if a == "gh":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "gl":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "gq":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "gr":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "gs":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "g_":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "if":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "ic":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "i_":
        names.append(b["Entity Text"])
    else:
        pass
    if a == "io":
        names.append(b["Entity Text"])
    else:
        pass

# nadefinujeme prázdné slopupce jako nulu
for i in range(len(names)):
    long.append(0)
    lat.append(0)

# zakládáme tabulku
data = {
    "": names,
    "longitude": long,
    "latitude": lat
}

df_to_save = pd.DataFrame(data)
df_to_save_index = df_to_save.set_index('')

# zxde nutno zadat správnou cestu na output
df_to_save_index.to_excel(f"C:/Users/Richard Změlík/Desktop/{zadej}_toponyms.xlsx")

print(colored("Tabulka uložena na plochu.", "green"))
