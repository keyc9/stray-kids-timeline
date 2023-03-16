const Footer = () => {
  return (
    <footer className='footer_wrapper'>
      <div className='footer-container_left'>
        <p className='footer_text'>
          Проект русскоязычной фанбазы Stray Kids к 5 годовщине дебюта группы
          <br/>
          2023 год
        </p>
      </div>
      <div className='footer-container_center'>

        <div className='references'>
        <div className='logo_container'>
          <img
            className='logo'
            src={require("..//Pictures/logos/vk_ico.png")}
            alt='VK png logo'
          />
        </div>
        <div className='link_container'>
            <a className="link" href="https://vk.com/skd_jyp">Информационное сообщество</a>
        </div>
      </div>


    <div className='references'>
        <div className='logo_container'>
          <img
            className='logo'
            src={require("..//Pictures/logos/twitter_ico.png")}
            alt='VK png logo'
          />
        </div>
        <div className='link_container'>
            <a className="link" href="https://vk.com/skd_jyp">Мы в Twitter</a>
        </div>
      </div>
</div>

<div className="footer-container_right">
      <div className='references'>
        <div className='logo_container'>
          <img
            className='logo'
            src={require("..//Pictures/logos/vk_ico.png")}
            alt='VK png logo'
          />
        </div>
        <div className='link_container'>
            <a className="link" href="https://vk.com/skd_jyp">Саппорт в ВК</a>
        </div>
      </div>


      <div className='references'>
        <div className='logo_container'>
          <img
            className='logo'
            src={require("..//Pictures/logos/twitter_ico.png")}
            alt='VK png logo'
          />
        </div>
        <div className='link_container'>
            <a className="link" href="https://vk.com/skd_jyp">Саппорт в Twitter</a>
        </div>
      </div>


      <div className='references'>
        <div className='logo_container'>
          <img
            className='logo'
            src={require("..//Pictures/logos/telegram_ico.png")}
            alt='VK png logo'
          />
        </div>
        <div className='link_container'>
            <a className="link" href="https://vk.com/skd_jyp">Саппорт в Telegram</a>
        </div>
      </div>
      </div>




    </footer>
  );
};

export default Footer;
