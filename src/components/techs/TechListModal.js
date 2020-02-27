import React,{useEffect} from 'react'
import TechItem from './TechItem'
import {connect} from 'react-redux'
import {getTechs} from '../../actions/techActions'
import PropTypes from 'prop-types';



const TechListModal = ({tech:{techs,loading},getTechs}) => {

  useEffect(()=>{
    getTechs()

    // eslint-disable-next-line
  },[techs])

 

  // if(loading){
  //   return <Preloader/>
  // }

  if(techs){
    return(
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technician List</h4>
          <ul className="collection">
            {!loading && techs.map(tech=><TechItem tech={tech}  key={tech.id}/>)}
          </ul>
        </div>
        
      </div>
   )
  }else{
    return(
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technician List</h4>
          <div>No Available techs</div>
        </div>
        
      </div>
   )
  }

  
}

TechListModal.propTypes = {
  tech:PropTypes.object.isRequired,
  getTechs:PropTypes.func.isRequired,
}

const mapPropsToState = state => ({
   tech: state.tech
})

export default connect(mapPropsToState,{getTechs}) (TechListModal) 




