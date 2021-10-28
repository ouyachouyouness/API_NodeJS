<h1>Test technique </h1>

<h2>Objectif</h2>
L'objectif de cet exercice est de concevoir une API en lecture seule (REST) qui renvoie
un ou plusieurs enregistrements à partir d'un ensemble statique de données de
rémunération.
Challenge 1 - Create your API 2
En tant que développeur, je souhaite :
Lister les données de rémunération via une requête API GET :
Filtrer par un ou plusieurs champs/attributs (par ex. /data_remuneration?
salaire[gte]=120000&zip_code=11201 )
Trier par un ou plusieurs champs/attributs (par ex. /data_remuneration?
sort=last_name )
Récupérer un seul enregistrement via une requête GET :
renvoyer un ensemble de champs épars (par exemple, /data_remuneration?
fields=prenom,nom_de_famille,salaire )
