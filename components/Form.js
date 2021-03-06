import { TextField } from "@material-ui/core";
import styles from "./Form.module.css";
import stylesBtn from "../pages/menu/Menu.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  textField: {
    color: "#f1f1f1",
  },
}));
const initial = {
  pregunta: "",
  description: "",
  link: "",
};

export default function Form({ url, route,newQuest = true,formm }) {

  const classes = useStyles();
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [form, setForm] = useState(formm ||initial);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newQuest) {
      postData(form);
    } else {
      putData(form)
    }
  };

  const putData =async(formm)=>{
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {"Content-type": 'application/json'},
        body: JSON.stringify(formm),
      });
      const data = await res.json();
      if (!data.success) {
        setMessage(data?.error);
      } else {
        router.push(route);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const postData = async (form) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {"Content-type": 'application/json'},
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if(!data){
        setMessage('Cargando')
      }      
      if (!data.success) {
        setMessage(data?.error);
      } else {
        router.push(route);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.div}>
        <form className={styles.div} onSubmit={handleSubmit}>
          <textarea
            className={styles.textFieldPre}
            placeholder="Pregunta"
            // variant="outlined"
            // multiline
            // minRows={2}
            name="pregunta"
            value={form.pregunta}
            onChange={handleChange}
          />
          <textarea
            className={styles.textFieldPre}
            placeholder="Descripcion Respuesta"
            // variant="outlined"
            // color="primary"
            // multiline
            // minRows={3}
            value={form.description}
            name="description"
            onChange={handleChange}
          />
          <TextField
            className={styles.textField}
            label="A??ade una fuente"
            variant="outlined"
            color="primary"
            value={form.link}
            name="link"
            onChange={handleChange}
          />
        <hr className={styles.hr}/>
        <div className={styles.div1}>
        <Link href={newQuest ? "/menu/add" : '/menu'}>
            <a>
              <button className={stylesBtn.button}>Regresar</button>
            </a>
            </Link>
          <input
            type="submit"
            className={stylesBtn.button}
            value={newQuest ? "Agregar" : "Editar"}
          />
            
        </div>
        </form>
          {message}
      </div>
    </>
  );
}
