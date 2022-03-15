import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'

export default function Historia(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return(
        <Layout>
        <div>        

        <h4 className={styles.description}>
          ¿En qué año acabó la Segunda Guerra Mundial?
        </h4>
        <hr className={styles.hr}/>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>1939</h2>
          </a>

          <a href="" className={styles.card}>
            <h2>1945</h2>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>1943</h2>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>1946</h2>
            
          </a>
          
        </div>
        <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
        <hr className={styles.hr}/>
        <h3 className={styles.h3}>Suscribete</h3>
    </div>
    </Layout>
    )
}