
# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

En base a esto, este pequeño módulo, extrae de forma ordenada todos los links tipo Markdown, que se encuentren en el archivo.

## Planificación del Proyecto

Realizado en github.
[Planificación](https://github.com/vnssmorales/SCL008-md-links/projects/1)

![issues](https://github.com/vnssmorales/SCL008-md-links/blob/master/img/issues.png)



## Requisitos

* Tener NodeJS instalado.

## Herramientas utilizadas

Para poder realizar esta libreria utilicé Node.js, y específicamente los siguientes módulos:
* path : para poder tener información de la ruta.
* fs (file system): para ingresar al sistemas de archivos.
* marked : para renderizar texto plano a otro (como html).
* fetch : para poder realizar peticiones. npm

## Instalación de la librería

Lo primero que debes hacer es ingresar el comando "npm i md-links-vane" en la carpeta que desees usarlo.
Los comandos son para usarla son los siguientes:

md-links : la función de mi libreria; aquí puedes poner la ruta de tu archivo, o el nombre.

* --stats : para saber la cantidad total y unicos de links 
* --validate : para saber la informacion de links que se encuentran rotos y los que no.

Si quieres visualizar los links de tu archivo colocas solo la ruta:

* Ejemplo: md-links README.md