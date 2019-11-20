const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');

// fetch all blogs files
const [blogs] = generateFileList(join(__dirname, 'content')).nodes;

//fetch all project files
const portfolio = generateFileList(__dirname+ '/content/projet');

module.exports = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: '/assets/profile.jpg'
			}
		},
		{ url: '/contact/' },
		{ url: '/contact/success' }
	];

	// adding blogs list posts page
	pages.push({
		url: '/blogs/',
		data: blogs
	});

	pages.push({
		url: '/portfolio/',
		data: portfolio
	});

	// adding all blog pages
	pages.push(...blogs.edges.map(blog => {
		const data = fs.readFileSync(join('content', 'blog', blog.id), 'utf-8').replace(/---(.*\n)*---/, '');
		return {
			url: `/blog/${blog.id}`,
			seo: blog.details,
			data: {
				details: blog.details,
				content: data
			}
		};
	}));

	return pages;
};
