interface Props
 extends React.HTMLAttributes<HTMLDivElement>,
    React.DOMAttributes<HTMLDivElement>
{}

export const BaseText = (props: Props) => {
    return(

    // kung mag tawag kag naay gamit na dollar sign sulod sa classname gamiton nimo ni na quote `` before nis number 1 dili ni siya single or double quote search nalang unsay tawag ani
    <div {...props} className={`text-dark dark:text-light text-base ${props.className}`}>
        {props.children}
    </div>

    )

}