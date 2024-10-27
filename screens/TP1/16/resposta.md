# A Arquitetura de uma Aplicação React Native

## Introdução

O React Native é uma ferramenta que permite desenvolver apps móveis, combinando a flexibilidade do React com a capacidade de criar apps para iOS e Android. Abaixo, vamos explorar como essa arquitetura funciona, destacando suas principais características e as semelhanças e diferenças em relação ao React.

## Desenvolvimento

O React Native foi criado pelo Facebook, e permite construir aplicações móveis usando JavaScript e React. Diferentemente do React, que é focado em interfaces web, o React Native transforma componentes em elementos nativos, oferecendo uma experiência mais integrada. Além disso, o React Native não manipula o DOM diretamente. Em vez disso, ele usa o bridge para que o JavaScript diga ao código nativo o que fazer, como renderizar um botão ou exibir uma imagem.

Podemos dizer que o React Native é composto de três partes principais: JavaScript, bridge, e código nativo.

### JavaScript

Essa é a camada onde é escrita a lógica do app e construída a interface, usando o React. Também é onde se definem os botões, listas, e o que acontece quando o usuário interage com o app. A diferença para o React da web é que aqui o JavaScript não fala diretamente com a tela. Em vez disso, ele passa as instruções para o bridge.

### Bridge (Ponte)

O bridge é o intermediário entre o JavaScript e o código nativo. Quando o JavaScript quer que o sistema nativo faça algo, ele manda uma "mensagem" através do bridge, que então chega no código nativo, e executa a tarefa e, se for necessário, devolve uma resposta para o JavaScript. Como o bridge usa comunicação assíncrona, o JavaScript não precisa ficar esperando. Isso ajuda o app a ser mais rápido e performático.

### Código Nativo

Nessa camada é o próprio código nativo do iOS ou Android, que cuida das coisas específicas de cada sistema. Quando o app precisa acessar algo mais avançado, como a câmera ou o GPS, ele usa o bridge para pedir ajuda ao código nativo. Esse código nativo recebe as instruções e executa a instrução que o JavaScript pediu.

## Conclusão

A arquitetura de aplicações em React Native oferece uma abordagem prática para o desenvolvimento de apps móveis, unindo a simplicidade do React com a performance nativa. Uma grande vantagem do React Native em relação ao React é a possibilidade de compartilhar a maior parte do código entre plataformas, economizando tempo e recursos. No entanto, algumas funcionalidades específicas de cada sistema podem exigir ajustes.

Com a evolução constante do React Native, podemos destacá-lo como uma das principais ferramentas para desenvolvedores que buscam criar aplicações mobile, sem a necessidade de criar separadamente para Android e iOS.

## Referências

- https://medium.com/@ryannnkl/a-ponte-do-react-native-ddb56dfdcc1e
- https://www.geeksforgeeks.org/what-is-a-bridge-in-react-native/
