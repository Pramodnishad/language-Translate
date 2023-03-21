import React from "react"
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation();

    return (
        <div style={{ marginTop: '50px' }}>

            <h1>{t("Hello")}, <br /> </h1>
            <div className='intro'>
                <h3>{t("Myself")} {t("Pramod")} {t("Kumar")} {t("Nishad")}</h3>
                <span> {t("Il")} {t("belong")} {t("to")} {t("Azamgarh")} {t("Uttar")} {t("Pradesh.")}
                    {t(" I ")} {t("have")} {t("done")} {t("my")} {t("Graduation")} {t("from")} {t("Avadh")} {t("University")}
                    <br /> </span>
                <span>{t("Right")} {t("I")} {t("am")} {t("doing")} {t("an")} {t("intership")} {t(" with ")}
                    {t("SkillZamp")} {t("Gurugram")} </span>
            </div>
        </div>

    )
}
export default Home