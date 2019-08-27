import React from 'react';

import List from './styles';
import { ProductItem } from 'components';

export default function ProductList() {
  return (
    <List>
      <ProductItem
        avatar="https://static.zattini.com.br/produtos/sapato-social-venetto-thor-confort-masculino/38/EPL-0137-138/EPL-0137-138_zoom1.jpg?resize=544:*"
        description="Tênis muito legal com título muito grande que quebra varias linhas
        kaekaekaekaekaekakeake akeakekaekakeak"
        value="R$179,99"
      />
      <ProductItem
        avatar="https://www.procopio.shop/imagens/produtos/00025954/Detalhes/tenis-adidas-fem-calibrate-asweerun-f36733.jpg"
        description="Tênis muito legal com título muito grande que quebra varias linhas"
        value="R$50.000,00"
      />
      <ProductItem
        avatar="https://static.zattini.com.br/produtos/sapato-social-venetto-thor-confort-masculino/38/EPL-0137-138/EPL-0137-138_zoom1.jpg?resize=544:*"
        description="Tênis muito legal com"
        value="R$179,99"
      />

      <ProductItem
        avatar="https://static.zattini.com.br/produtos/sapato-social-venetto-thor-confort-masculino/38/EPL-0137-138/EPL-0137-138_zoom1.jpg?resize=544:*"
        description="Tênis muito legal com título muito grande que quebra varias linhas
        kaekaekaekaekaekakeake akeakekaekakeak"
        value="R$179,99"
      />
      <ProductItem
        avatar="https://static.zattini.com.br/produtos/sapato-social-venetto-thor-confort-masculino/38/EPL-0137-138/EPL-0137-138_zoom1.jpg?resize=544:*"
        description="Tênis muito legal com título muito grande que quebra varias linhas
        kaekaekaekaekaekakeake akeakekaekakeak"
        value="R$179,99"
      />
      <ProductItem
        avatar="https://static.zattini.com.br/produtos/sapato-social-venetto-thor-confort-masculino/38/EPL-0137-138/EPL-0137-138_zoom1.jpg?resize=544:*"
        description="Tênis muito legal com título muito grande que quebra varias linhas
        kaekaekaekaekaekakeake akeakekaekakeak"
        value="R$179,99"
      />
    </List>
  );
}
