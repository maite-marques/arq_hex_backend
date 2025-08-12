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

Adapter - baseado no padrão port and adapters
  - Corresponte aos externos da Clean Arq 
  - DB
  - Api
  - Web

  ## Ports & Adapters
  Arquitetura hexagonal, define um padrão de design onde exitem portas e adaptadores. Cada adaptador deve se encaixar em uma porta através de uma interface específica, tornando a conexão de diferentes adaptadores mais fácil, permitindo a troca de adaptador se necessário de forma limpa e organizada.