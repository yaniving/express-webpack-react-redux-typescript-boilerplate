// Code snippets
export const PARALLAX_CODE = `
<div className='white'>
  <h1 className='page-title'>Parallax</h1>
</div>
<div className='parallax-container'>
  <div className='parallax'>
    <img className='parallax-img' src={require('../images/parallax1.jpg')} alt='parallax-img' />
  </div>
</div>
<div className='section white'>
  <div className='row container'>
    <h2 className='parallax-header'>Parallax</h2>
    <p className='grey-text text-darken-3'>Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
  </div>
  <div className='row container'>
    <h4 className='light'>Parallax Demo HTML</h4>
    <PrismCodes language='language-markup'>
      {PARALLAX_CODE}
    </PrismCodes>
  </div>
</div>
<div className='parallax-container'>
  <div className='parallax'>
    <img className='parallax-img' src={require('../images/parallax2.jpg')} alt='parallax-img' />
  </div>
</div>
`;
