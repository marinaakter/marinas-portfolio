import Container from "../components/ui/atoms/Container";
import mock from "../data/mock";

export default function About() {
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-3xl font-bold">{mock.aboutPage.title}</h2>
            </Container>
        </section>
    );
}