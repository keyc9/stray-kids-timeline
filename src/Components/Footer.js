const Footer = () => {
  //   <a className="link" href="https://vk.com/skd_jyp">Саппорт в Telegram</a>

  return (
    <footer className='footer_wrapper'>
      <div className='footer-container_left'>
        <p className='footer_text'>
          Проект русскоязычной фанбазы Stray Kids к 5 годовщине дебюта группы
          </p>
          <p className='footer_text project-date'>
          2023 год
        </p>
      </div>
      <div className='footer-container_center'>
        <div className='group-container'>
          <div className='link_container footer_text'>Информационное сообщество</div>
          <div className='logo_wrapper-1'>
            <div className='logo_container'>
            <a className="link" href="https://vk.com/skd_jyp" target="_blank" rel="noopener noreferrer">
              <img
                className='logo'
                src={require("..//Pictures/logos/vk_ico.png")}
                alt='VK png logo'
              />
              </a>
            </div>

            <div className='logo_container'>
            <a className="link" href="https://twitter.com/straykidsrussia" target="_blank" rel="noopener noreferrer">

              <img
                className='logo'
                src={require("..//Pictures/logos/twitter_ico.png")}
                alt='Twitter png logo'
              />
                </a>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-container_right'>
        <div className='group-container'>
          <div className='link_container footer_text' id="support">Саппорт</div>
          <div className='logo_wrapper-2'>
            <div className='logo_container'>
            <a className="link" href="https://vk.com/straykids_sup" target="_blank" rel="noopener noreferrer">

              <img
                className='logo'
                src={require("..//Pictures/logos/vk_ico.png")}
                alt='VK png logo'
              />
              </a>
            </div>

            <div className='logo_container'>
            <a className="link" href="https://twitter.com/skzrussup" target="_blank" rel="noopener noreferrer">

              <img
                className='logo'
                src={require("..//Pictures/logos/twitter_ico.png")}
                alt='Twitter png logo'
              />
              </a>
            </div>

            <div className='logo_container'>
            <a className="link" href="https://t.me/skzrussiasup" target="_blank" rel="noopener noreferrer">

              <img
                className='logo'
                src={require("..//Pictures/logos/telegram_ico.png")}
                alt='Telegram png logo'
              />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
