function status(request, response) {
  response.status(200).json({ texto: "alunos do curso.dev são legais" });
}

export default status;
