import puppeteer from 'puppeteer';
import assert from 'assert';

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

		const animation = 'fade-out'
		const duration = 'duration-500'

		// Fill and submit login form
		await page.evaluate( ( animation, duration ) => {

			document.querySelector( '#js-control' ).value = animation;
			document.querySelector( '#js-speed' ).value = duration;
			document.querySelector( '#js-animation-form [type="submit"]' ).click();

		}, animation, duration );

		const animationDuration = await page.evaluate(() => {

			const demoBlock = document.getElementById( 'js-demo-block' );
			const demoBlockStyles = window.getComputedStyle( demoBlock );
			const animationDemoBlockDuration = demoBlockStyles.getPropertyValue( 'animation-duration' );
			return animationDemoBlockDuration;

		});

		assert.equal( animationDuration, '0.001s' );

	} );

} );

afterAll( () => {
	browser.close();
} );
