import puppeteer from 'puppeteer';

const APP = 'https://10up.github.io/component-animate/demo/';
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: false,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

beforeEach( async () => {

	// Emulate reduced motion
	await page.emulateMediaFeatures( [
		{
			name: 'prefers-reduced-motion',
			value: 'reduce'
		}
	] );

} );

describe( 'Accessibility Tests', () => {

	test( 'Test Reduced Motion for: Fade', async () => {

		// Visit the page in headless Chrome
		await page.goto( APP );



	} );

} );

afterAll( () => {
	browser.close();
} );
