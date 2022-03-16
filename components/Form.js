
import { TextField } from '@material-ui/core'
import styles from './Form.module.css'

export default function Form(){
   

    return(
        <>
        <form>
        <div className={styles.div}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </div>
        
        
        </form>
        </>
    )
}