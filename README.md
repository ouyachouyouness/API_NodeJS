<h1>Test technique pour l'entreprise Converteo </h1>

<h2>Objectif</h2>
L'objectif de cet exercice est de concevoir une API en lecture seule (REST) qui renvoie
un ou plusieurs enregistrements à partir d'un ensemble statique de données de
rémunération.
Challenge 1 - Create your API 2</br>
En tant que développeur, je souhaite :</br>
Lister les données de rémunération via une requête API GET :</br>
Filtrer par un ou plusieurs champs/attributs (par ex. /data_remuneration?</br>
salaire[gte]=120000&zip_code=11201 )</br>
Trier par un ou plusieurs champs/attributs (par ex. /data_remuneration?</br>
sort=last_name )
Récupérer un seul enregistrement via une requête GET :</br>
renvoyer un ensemble de champs épars (par exemple, /data_remuneration?</br>
fields=prenom,nom_de_famille,salaire )</br>
