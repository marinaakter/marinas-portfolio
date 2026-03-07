import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function Home() {
    return (
        <section className="py-20">
            <Container>
                <div className="max-w-2xl space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Starter Template
                    </p>
                    <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                        Build your next React + Tailwind project faster
                    </h1>
                    <p className="text-lg text-slate-600">
                        Reusable structure, router, UI components, API setup, and clean styling — all ready.
                    </p>
                    <div className="flex gap-4">
                        <Button>Get Started</Button>
                        <Button className="bg-slate-900">View Docs</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}