type ResultProps = {
    security: string,
    logic: string
    
}
export default function ReviewResult({security, logic} : ResultProps) {
    return <div>
        <ul>
            <li><div>Security : </div><div>This is security content</div></li>
            <li><div>Logic : </div><div>This is logic content</div></li>
        </ul>
    </div>
}