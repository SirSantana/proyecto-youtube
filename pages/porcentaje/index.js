import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import Layout from '../../components/Layout'
import styles from '../../pages/menu/Menu.module.css'
import stylesForm from '../../components/Form.module.css'

let initial = {valor: "", descuento:""}
export default function Index(){
    const [valor, setValor] = useState(initial)
    const [total, setTotal] = useState(0)

    function algoritmo({valor, descuento}){
        console.log(valor, descuento);
        const descuentoParcial = (valor / descuento) 
        let totalDescuento = (valor - descuentoParcial) * (19/100)
        let totall = (valor - descuentoParcial) + totalDescuento
        setTotal(Math.round(totall))
    }

    const handleChange=(e)=>{
        setValor({...valor,[e.target.name]:e.target.value })
        console.log(valor);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        algoritmo(valor)
    }
    return(
        <Layout>
            <h2>Sacar Iva y descuento!</h2>
            <div className={stylesForm.div}>
            <TextField onChange={handleChange} name="valor" className={stylesForm.textField} value={valor.valor} color='primary' variant='outlined' type="number" placeholder='Valor'></TextField>
            <TextField onChange={handleChange} name="descuento" className={stylesForm.textField} value={valor.descuento} color='primary' variant='outlined' type="number" placeholder='Descuento'></TextField>
            <Button onClick={handleSubmit} variant='contained' color='secondary'>Calcular valor</Button>
            {total? <h2 className={styles.description}>{total}</h2>: <h2 className={styles.description}>Aqui aparecera tu resultado</h2>}
            </div>
        </Layout>
    )
}