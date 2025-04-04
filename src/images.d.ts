/**
 * Este arquivo é uma declaração de tipos para o TypeScript
 * Ele é necessário porque o TypeScript não sabe como lidar com arquivos de imagem por padrão
 * 
 * O que este arquivo faz:
 * 1. Declara que qualquer arquivo com extensão .png pode ser importado
 * 2. Define que o valor importado será do tipo 'any' (qualquer tipo)
 * 3. Permite que o TypeScript entenda que é válido importar imagens PNG
 * 
 * Por que é necessário:
 * - O TypeScript é um sistema de tipos estático
 * - Por padrão, ele não sabe como lidar com arquivos que não são TypeScript/JavaScript
 * - Sem esta declaração, o TypeScript acusaria erro ao tentar importar arquivos .png
 * - Mesmo que o código funcione em tempo de execução, o TypeScript precisa desta declaração
 *    para não mostrar erros durante o desenvolvimento
 */
declare module '*.png' {
    const value: any;
    export default value;
} 