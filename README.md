# RSClone

# Server
    Конечно, что за такое приложение, у которого нет API где-нибудь на сервере, к которому оно будет обращаться за информацией? И конечно же раз мы живем в 2021 году то надо использовать микросервисный подход (его ж все пихают когда надо и когда не надо) в целях обучения.
    
    Поднимем три сервиса: 
        1) Первый будет чисто запукать сервак, чтоб отдавать прилоение, понятно, что пока это одна статичекая страница с SPA приложением, 
        но вдруг мы решим в целях какого-нибудь SEO перейти к server side rendering на чем-то типа Next.js.
        2) Второй -- это наше любимое серверное REST API, в котором мы будем создавать юзеров и борды
        3) Третий -- собственно База Данных. Куда ж без нее. Понятно, что мы умеем проектировать и подбирать технологии наперед в зависимости от требований проекта, поэтому с учетом того что у нас все написано на эльфийском языке (JavaScript), и нам нравится эльфийский синтаксис (синтаксис JS) -- мы выбираем базу придуманную специально для эльфийских целей (не зря же придумали MERN)-- MongoDB.
    Пока моя любимая команда пилит фронт, мы первый сервис подымать не будем. Используя docker-compose быстренько поднимем express server, который коннектится к бд в другом контейнере. За основу возьмем [1].
    ... тут код и скрипты ...
    В процессе создания контейнеров у меня никак не хотело приложение коннектиться к бд, поэтому пришлось сделать это вручную как тут [2].После этого все заработало)

    Далее необходимо продумать архитектуру нашего REST API. Посовещавшись с командой, и определив функционал мы решили для того чтоб усластить себе жизнь (из-за лени и скорого дедлайна) не конфигурировать swagger, и обойтись для начала простой схемкой (благо я когда-то посавил себе прогу, чтоб быстро эти схемки накидывать (dia)).
    ... тут схемка ... 


links:
[1]https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose-ru
[2]https://dev.to/efe136/how-to-enable-mongodb-authentication-with-docker-compose-2nbp