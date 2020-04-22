DROP TABLE IF EXISTS named;
CREATE TABLE named (
sciname                    varchar(150),
comname             varchar(150),
subgroup                varchar(150),
orderClass           varchar(150),
family            varchar(150)
);

DROP TABLE IF EXISTS characteristics;
CREATE TABLE characteristics (
  sciname         varchar(150),
class             varchar(150),
herbivore                varchar(50),
omnivore           varchar(50),
carnivore            varchar(50),
known_predators               text
);

CREATE TABLE captures (
fname                    varchar(150),
lname             varchar(150),
location                varchar(150),
team              varchar(150),
date           varchar(150),
description            text,
tags              text
);





        Peregrine falcon (Falco pergrinus) prairie falcon (Falco colombarius) red-tailed hawk (Buteo jamaicensis)broad-winged hawk (Buteo platypterus) Swainson’s hawk (Buteo swainsoni) Cooper’s hawk (Accipiter cooperii) bald\, eagle (Haliaeetus leucocephalus) golden eagle (Aquila chrysaetos) fox coyote (Canis latrans) domestic cat (Felis\, catus) domestic dog (Canis lupus familiaris) badger (Taxidea taxus) Virginia opossum (Didelphisvirginiana)\, bobcat (Lynx rufus) cougar (Puma concolor) weasel skunk humans (Homo sapiens)