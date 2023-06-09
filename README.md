# Examinerande Inlämningsuppgift: Integration med Strapi

1. Gör npm install i roten och i strapi.

2. Du startar strapi genom att köra npm run develop. För att logga in på mitt konto:
   användarnamn: natasaic@hotmail.se
   lösenord: Natasa123

3. För att starta express kör du npm start.

PS. Min secret_phrase har jag redan lagt till i utils rad 8. Det är bara att sätta igång med POSTMAN.

4. Serveradressn är http://localhost:8008 som informerar dig om du är inloggade eller inte. Som icke registrerad så kan du ta fram info om produkterna använder du dig av endpoints:
   /aduios, /computers, /mobiles och /televisions

5. För att kunna göra alla CRUD operationer behöver du registrera dig. Detta görs genom att använda endpoint: http://localhost:8008/admin/register skicka ett json objekt i formatet:
   {
   "username": "marcus",
   "password": "999"
   }

6. När du har registrerat dig kan du logga in. Detta gör du genom att använda endpoint: http://localhost:8008/admin/login du behöver ha samma json objekt som vid registreringen
   {
   "username": "marcus",
   "password": "999"
   }

I din response får du en JWT nyckel som du behöver för att kunna göra CRUD POST/PUT/DELETE operationer. Kopiera hashade nyckeln och klistra in den i headers detta ska du göra för varje endpoint:
http://localhost:8008/audios
http://localhost:8008/audios/id

http://localhost:8008/computers
http://localhost:8008/computers/id

http://localhost:8008/mobiles
http://localhost:8008/mobiles/id

http://localhost:8008/televisions
http://localhost:8008/televisions/id

7. För att en admin ska kunna skapa ett nytt objekt ska du skicka json objekt beroende på respektive interface som du kan se i models.
   exempel för audios:
   {
   "data": {
   "product_name": "string",
   "description": "string",
   "manufacturer": "string",
   "price": number,
   "effect": number
   }
   }
