
import styled from 'styled-components';
import Spiner from './Spiner';

function Loader() {
  return (
    <Conatiner>
        <Spiner/>
    </Conatiner>
  )
}

export default Loader



const Conatiner = styled.div`
    width: 100% ;
    height: calc( 100vh - 81.11px );
    display: flex;
    justify-content: center;
    align-items: center;



`