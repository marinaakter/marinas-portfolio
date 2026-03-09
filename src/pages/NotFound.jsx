import mock from "../data/mock";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center text-2xl font-semibold">
            {mock.notFoundPage.title}
        </div>
    );
}