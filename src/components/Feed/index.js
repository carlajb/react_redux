import React from 'react'
import { connect} from "react-redux"
import* as CarrinhoAction from "../../store/actions/actions"
import {bindActionCreators} from "redux";
const Feed = ({roupas,adicionarCarrinho}) => {
return (

<section>
<h3>Feed de Roupas</h3>
     
<ul>
{roupas.map((item=>( 
<li key={item.id}>
{item.cor}|{item.tamanho}|{item.preco}
<button onClick={()=>adicionarCarrinho(item)}>Comprar</button>
</li>
)))}
</ul>
</section>

 );
};

const mapStateToProps= (state)=>({
    roupas:state.roupas.feed,
})

const mapDispathToProps=(dispatch)=>bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps,mapDispathToProps)(Feed); 
