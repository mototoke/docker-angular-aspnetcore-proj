# docker-angular-aspnetcore-proj
自分用のdocker環境でのangular+apsnetcore開発環境

## develop
`docker-compose -d up --build`

## production
T.B.D

## client
- angular install
`RUN npm install -g @angular/cli`

- angular_app run
`ng serve --host 0.0.0.0`

access url
`http://{machine-IP}:4200`


## server
- server_app run
`cd /code/server_app & dotnet run`

access url
`http://{machine-IP}:5000/WeatherForecast`
`https://{machine-IP}:5001/WeatherForecast`
