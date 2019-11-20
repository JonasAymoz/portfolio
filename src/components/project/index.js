import { Fragment, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';


const Project = (props) => (
	<Fragment>
		<div>
			<h1> Title :  {props.value.title}</h1>
			<h4> subtitle :  {props.value.subtitle}</h4>
			<div>
				{props.value.role} // <br/> {props.value.date} //  <br/>
				<img src={props.value.cover} alt="cover_img" className={style.projectCover} />
				<p>{props.value.tags}</p>
			</div>
		</div>
	</Fragment>
	
);

export default Project;
