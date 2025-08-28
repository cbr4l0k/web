export interface Reference {
    title: string;
    description: string;
    reference: string;
    url?: string;
    category?: string;
}

export const references: Reference[] = [
    {
        title: "Dialectics After Derrida",
        description: "En este articulo se hace una reflexión sobre la relevancia de Derrrida, más allá de las frases de cajón que se le atribuyen. Una de las cuestiones más interesantes que se mencionan, es cómo la ",
        reference: "A talk by Geoff Boucher... I should look up that guy.",
        url: "https://www.marxists.org/reference/archive/hegel/txt/gb2000_3.htm",
            category: "philosophy"
    },
    {
        title: "How To Ask Questions The Smart Way",
        description: "Y aunque este artículo está diseñado para la comunidad hacker, creo que refleja la desconexión generalizada entre el público general y la tecnología. Me recuerda cuando era monitor en la universidad, y alguno de mis estudiantes llegaba con preguntas por el grupo de WhatsApp y que la respuesta era literalmente el equivalente de copiar y pegar la pregunta en el buscador de Google, y responder en el chat con el link al primer resultado que frecuentemente era un post de Stack Overflow. Debería poner en mi hoja de vida que sé googlear como Dios manda.",
        reference: "Por Eric Steven Raymond",
        url: "http://www.catb.org/~esr/faqs/smart-questions.html",
            category: "misc",
    }
]

