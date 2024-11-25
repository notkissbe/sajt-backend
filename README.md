# Backend

Adatszerkezet
---
### Sajtok

#### Adattagok:
```
    id Int @id @default(autoincrement())
    nev String
    szarmazasiHely String
    iz String
    allag String
    allagIndex Int
```


Végpontok
---

GET /sajt

GET /sajt/{id}

POST /sajt

PUT /sajt/{id}

DELETE /sajt/{id}

