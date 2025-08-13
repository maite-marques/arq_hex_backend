// Esta interface é uma Porta para que diversos provedores forneçam uma criptografia

export default interface ProvedorCriptografia {
  criptografar(texto: string): string 
  comparar(senha: string, senhaCriptografada: string): boolean
}