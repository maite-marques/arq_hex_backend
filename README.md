# arq_hex_backend

Arquitetura Limpa
 ^ Externos (DB, Web, API, batch) (adapters do port)
 ^ Adaptadores
 ^ Casos de Uso
 ^ Entidades

CORE - (casos de uso + entidades)
  - Entidades
  - Casos de Uso
    - Intefaces

External (adapter no padrão port and adapters)
  - Corresponte aos externos da Clean Arq 
  - DB
  - Api
  - Web

  Adapter (em clean arq)
  - Garante uma comunicação saudável entre o mundo exterior e a sua aplicação.
  - Literalmente adapta os dados externos para o contrado interno
  - Usar o `DTO pattern` ou o `FACEDE`
  - Anti corruption layer, para não corromper o domínio do negócio e não depender de como foi estruturado no banco de dados.

  Exemplo: Conversão de dados externos para a aplicação, e conversão de dados internos para dependências externas como DB, Apis, etc.
    requisição 
      -> API {...} 
        -> Adaptador {...}
          -> Caso de Uso
            -> Adaptador -> API
            -> Adaptador -> DB


chain of responsability
- Nos middlewares do express, você consegue tratar em diferentes middlewares cada requisição, que vai sendo tratada e enviada ao próximo middleware, passando por essa cadeia de responsabilidade.
- Dentro de uma requisição post é possível colocar uma cadeia de handlers para tratar a req.

  Exemplo: 
    request => body parsing next() => auth next() => router


  ## Ports & Adapters
  Arquitetura hexagonal, define um padrão de design onde exitem portas e adaptadores. Cada adaptador deve se encaixar em uma porta através de uma interface específica, tornando a conexão de diferentes adaptadores mais fácil, permitindo a troca de adaptador se necessário de forma limpa e organizada.