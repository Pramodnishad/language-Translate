const Languageoption = (props) => {
    return(
        <div style={{marginTop:'50px'}}>
            <select onChange={props.onChange} className="style-language">
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'hi'}>Hindi</option>
                <option value={'sp'}>Spanish</option>
                <option value={'ma'}>Malay</option>
                <option value={'ja'}>Japanese</option>
            </select>
        </div>
    )
}
export default Languageoption;