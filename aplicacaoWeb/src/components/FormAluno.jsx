
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
} from "@mui/material";

export default function FormAluno({
  aluno,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          name="nome"
          value={aluno.nome}
          onChange={onChange}
          required
        />
        <TextField
          label="Turma"
          name="turma"
          value={aluno.turma}
          onChange={onChange}
          required
        />
        <TextField
          label="Curso"
          name="curso"
          value={aluno.curso}
          onChange={onChange}
          required
        />
        <TextField
          label="Matrícula"
          name="matricula"
          value={aluno.matricula}
          onChange={onChange}
          required
        />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Salvar"}
          </Button>
          <Button onClick={onCancel} variant="outlined" color="secondary">
            Cancelar
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
