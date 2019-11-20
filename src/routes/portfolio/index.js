import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style.scss';
import Project from '../../components/project';

const portfolio = (props) => {
	const [data, isLoading, error] = usePrerenderData(props);
	return (
		<div class={style.pageBlogs}>
			<h1 class={style.pageTitle}>Portfolio</h1>
			{ getProjetsListing(data, isLoading) }
		</div>
	);
};

function getProjetsListing(data, isLoading, error) {
	if (error){
		return (<div>There is an error dude  : {error} </div>);
	}
	if (isLoading) {
		return (
			<article class={style.loadingPlaceholder}>
				<h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
			</article>
		);
	}
	if (data && data.data) {
		const { data: portfolio } = data;
		return (
			<>
				<div>{JSON.stringify(data)}</div>
				<Project value={data.data.edges[0].details}/>
			</>
		);
	}
}

export default portfolio;
