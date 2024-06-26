import { Typography, Card, CardBody } from "@material-tailwind/react";

const Sobre = () => {
    return (
        <div className="mt-5">
            <Card className="mt-6 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <CardBody>
                    <Typography variant="h2">Sobre o Método VFP</Typography>
                    <Typography variant="lead">
                        O Autoconhecimento Liberta!
                    </Typography>
                    <Typography variant="paragraph">
                        Foi pensando nisso que desenvolvi o
                        Método VFP para libertar sua vida.
                    </Typography>
                    <Typography variant="h3">Quem somos? Já pararam para pensar nisso?</Typography>
                    <Typography variant="paragraph">
                        Quem somos ou estamos está relacionado às nossas experiências desde a vida intrauterina até o momento atual. Todos passamos por experiências positivas (funcionais) e negativas (disfuncionais). As interpretações dessas experiências modulam nossa forma de pensar, sentir e agir no mundo (modelo cognitivo-comportamental).

                        Muitas vezes somos invadidos por certos padrões de pensamentos. Esses pensamentos são denominados pensamentos automáticos. Ou seja, não controlamos sua entrada e somos invadidos por eles. Em grande maioria, esses pensamentos são disfuncionais, irracionais e nos trazem consequências que são mal adaptativas na infância, na adolescência e na vida adulta.

                        Sendo assim, muitas vezes tendemos a agir no “piloto automático”. E isso acaba por criar padrões rígidos na forma de pensar, sentir e agir relacionados a crenças centrais de desamor, desamparo, desvalor, fracasso, incapacidade, entre outras.
                    </Typography>
                </CardBody>
            </Card>
        </div>
    )
}

export default Sobre