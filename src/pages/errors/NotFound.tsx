import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";

export default function NotFound() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 2000)
    }, [])

    return (
        <Container maxWidth="max-w-8xl h-screen">
            <h1>Not found</h1>
        </Container>
    )
}