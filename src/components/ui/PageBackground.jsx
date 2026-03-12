export default function PageBackground({ children, className = "" }) {
    return (
        <div className={`page-background text-white ${className}`}>
            <div className="page-background__grid" />
            <div className="page-background__overlay" />
            <div className="page-background__glow page-background__glow--sky" />
            <div className="page-background__glow page-background__glow--violet" />
            <div className="page-background__glow page-background__glow--blue" />

            <div className="relative z-10">{children}</div>
        </div>
    );
}