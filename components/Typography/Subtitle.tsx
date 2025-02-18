 function Subtitle({styleClass, children}:{styleClass: string, children: React.ReactNode}){
    return(
        <div className={`text-xl text-base-content font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle