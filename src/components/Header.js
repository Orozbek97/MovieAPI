import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Header = () => {
    return (
        <div className={"bg-dark"}>
            <div className={"container-xl"}>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <div className={"logo"}>
                        <img src='/images/logo_transparent.png' alt="" width={150} height={115}/>
                    </div>
                    <div className={'HeaderLinks d-flex gap-3 align-items-center text-primary'}>
                        <a href="#"> Главная </a>
                        |
                        <a  href="#"> Фильмы </a>
                        |
                        <a  href="#"> Сериалы </a>
                        |
                        <a  href="#"> Мультфильмы </a>
                    </div>
                    <div className={'searchPart'}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                            />
                            <Button variant="primary" id="button-addon1">
                                Искать
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
          <div className={'container-xxl pb-2'}>
              <div className={'nav-link  d-flex gap-3 text-primary align-items-center'}>
                  <a href="#">  В Тренде </a>
                  <a href="#"> Популярные </a>
                  <a href="#"> Сейчас смотрят.. </a>
              </div>
          </div>

        </div>
    );
};

export default Header;