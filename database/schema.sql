CREATE TABLE named (
createid           SERIAL,
sciname                    varchar(150),
comname             varchar(150),
subgroup                varchar(150),
orderClass           varchar(150),
family            varchar(150)
);


CREATE TABLE characteristics (
class             varchar(150),
herbivore                int,
omnivore           int,
carnivore            int,
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