import { Global } from '@emotion/react'

const Fonts = () => {
    return (
        <Global
         styles={`<style>
         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Sarabun:wght@700&display=swap');
       </style>`}
    />
    )
}

export default Fonts