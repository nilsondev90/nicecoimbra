import { useState } from 'react';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";

interface IconProps {
    id: number;
    open: number;
}

function Icon({ id, open }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const FAQ = () => {
    const [open, setOpen] = useState<number>(0);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Typography  variant="h2" className="mb-4 mt-4">
                Perguntas Frequentes
            </Typography>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>Pergunta 01?</AccordionHeader>
                <AccordionBody>
                    Resposta 01
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    Pergunta 02?
                </AccordionHeader>
                <AccordionBody>
                    Resposta 02
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    Pergunta 03?
                </AccordionHeader>
                <AccordionBody>
                    Resposta 03
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default FAQ;
