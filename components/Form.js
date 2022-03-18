import { Link, TextField } from "@material-ui/core";
import styles from "./Form.module.css";
import stylesBtn from "../pages/menu/Menu.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  textField: {
    color: "#f1f1f1",
  },
}));
const initial = {
  pregunta: "",
  r1: "",
  r2: "",
  r3: "",
  rC: "",
  description: "",
  link: "",
};

export default function Form({ newQuest = true }) {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newQuest) {
        console.log('Algo')
      postData(form);
    } else {
    }
  };
  const postData = async (form) => {
    try {
      const res = await fetch("/api/historia", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) {
        setMessage(data?.error);
      } else {
        router.push("/historia");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.div}>
        <form className={styles.div} onSubmit={handleSubmit}>
          <TextField
            className={styles.textFieldPre}
            label="Pregunta"
            variant="outlined"
            color="secondary"
            multiline
            minRows={2}
            name="pregunta"
            value={form.pregunta}
            onChange={handleChange}
          />
          <div className={styles.grid}>
            <TextField
              className={styles.textField}
              label="R. Incorrecta 1"
              variant="outlined"
              color="primary"
              value={form.r1}
              name="r1"
              onChange={handleChange}
            />
            <TextField
              className={styles.textField}
              label="R. Incorrecta 2"
              variant="outlined"
              color="primary"
              value={form.r2}
              name="r2"
              onChange={handleChange}
            />
            <TextField
              className={styles.textField}
              label="R. Incorrecta 3"
              variant="outlined"
              color="primary"
              value={form.r3}
              name="r3"
              onChange={handleChange}
            />
            <TextField
              className={styles.textField}
              label="Respuesta Correcta"
              variant="outlined"
              color="primary"
              value={form.rC}
              name="rC"
              onChange={handleChange}
            />
          </div>
          <TextField
            className={styles.textFieldPre}
            label="Descripcion Respuesta"
            variant="outlined"
            color="primary"
            multiline
            minRows={3}
            value={form.description}
            name="description"
            onChange={handleChange}
          />
          <TextField
            className={styles.textField}
            label="Añade una fuente"
            variant="outlined"
            color="primary"
            value={form.link}
            name="link"
            onChange={handleChange}
          />
          <input
            type="submit"
            className={stylesBtn.button}
            value={newQuest ? "Agregar" : "Editar"}
          />
            
        </form>
        <hr className={styles.hr}/>

        <div className={styles.div1}>
          

          {message}
          <Link href="/historia">
            <a>
              <button className={stylesBtn.button}>Regresar</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
