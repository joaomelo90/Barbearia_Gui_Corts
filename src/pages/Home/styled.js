import styled from 'styled-components';



export const Containder = styled.div`
width:100%;
height:100%;

`
export const List = styled.div`
display:flex;
background: #303036;
justify-content: space-evenly;
white-space: nowrap;

.listMenu > ul:first-child {
  font-family: "Berkshire Swash", serif;
  font-weight: 400;
  font-style: normal;
    
}

.listMenu{
    display:flex;
    gap:20%;
    margin-right: 45%;

    color:#ffffff;
   
}
.boxButton{
    display:flex;

}
`
export const  MainImage = styled.div `

.nevImg{
    position:relative;
    width:100%;
    height:100vh;

    filter: brightness(50%) contrast(70%) saturate(0%);
}
.paragraph{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    text-align:center;
    
}
.textParagraph{
 color:#ffffff;
font-size:50px;
font-weight:bold;
white-space: nowrap;


 
}
.operation{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

}
.textOperation{
    color:#ffffff;
    margin-top:13vw;
    white-space:nowrap;
}
.buttonMain{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    margin-top:10vw;
}
`
export const ContainderHeader = styled.div`
display:flex;
background-color:#303036;
margin-top: -4px;
width:100%;
height:100vh;
justify-content: center;
`
export const Img = styled.div`
     display: flex;
    margin-top:5%;
    
    .containerOne {
        display: flex;
        padding:1%;
        gap:1%;
        
        
    }
.imgOne,
.imgTwo,
.imgThree{
    width: 13rem;
    height: 13rem;
}
`
export const Sobre = styled.div`

`