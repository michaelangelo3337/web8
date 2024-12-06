
export default function BackToTop({ scroll }) {
    return (
        <>
            {scroll && (
                <a id="scroll-top" className="show" />
            )}
        </>
    )
}
