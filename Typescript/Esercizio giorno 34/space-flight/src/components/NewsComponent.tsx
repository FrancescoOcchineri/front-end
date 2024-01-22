import { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCol,
    MDBIcon,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
    MDBRipple,
    MDBRow,
} from "mdb-react-ui-kit";
import axios from 'axios'
import IArticle from '../interfaces/IArticle';
import { Link, useNavigate } from 'react-router-dom';

export default function NewsComponent() {

    const [article, setArticles] = useState<IArticle[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v4/articles')
            .then(response => setArticles(response.data.results))
    }, [])



    return (
        <MDBContainer className="py-5">
            <MDBRow className="gx-5 border-bottom pb-4 mb-5">
                <MDBCol md="6" className="mb-4">
                    <MDBRipple
                        className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                        rippleTag="div"
                        rippleColor="light"
                    >
                        <img
                            src={article.length > 0 ? article[0].image_url : ''}
                            className="w-100"
                        />
                        <a href="#!">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                        </a>
                    </MDBRipple>
                </MDBCol>
                <MDBCol md="6" className="mb-4">
                    <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                        News of the day
                    </span>
                    <h4>
                        <strong>{article.length > 0 ? article[0].title : ''}</strong>
                    </h4>
                    <p className="text-muted">
                        {article.length > 0 ? article[0].summary : ''}
                    </p>
                    <MDBBtn onClick={() => navigate('/articles/' + article[0].id)}>Read More</MDBBtn>
                </MDBCol>
            </MDBRow>
            <MDBRow className="gx-lg-5">
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div>
                        <MDBRipple
                            className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src={article.length > 0 ? article[1].image_url : ''}
                                style={{ width: '25rem', height: '14rem' }}
                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                        <MDBRow className="mb-3">
                            <MDBCol col="6">
                                <a href="" className="text-info">
                                    <MDBIcon fas icon="plane" className="me-1" />
                                    Technology
                                </a>
                            </MDBCol>
                            <MDBCol col="6" className="text-end">
                                <u>{article.length > 0 ? article[1].published_at : ''}</u>
                            </MDBCol>
                        </MDBRow>
                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/articles/' + article[1].id)} className="text-dark">
                            <h5>{article.length > 0 ? article[1].title : ''}</h5>
                            <p>
                                {article.length > 0 ? article[1].summary : ''}
                            </p>
                        </a>
                        <hr />
                        {article.slice(2, 6).map((n) => (
                            <a key={n.id} href="#!" className="text-dark">
                                <MDBRow className="mb-4 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src={n.image_url}
                                            className="shadow-1-strong rounded"
                                            style={{ width: '6rem', height: '4rem' }}
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/articles/' + n.id)} className="mb-2 text-black">
                                            <strong>{n.title}</strong>
                                        </a>
                                        <p className='mt-2'>
                                            {n.published_at}
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </a>
                        ))}
                    </div>
                </MDBCol>
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div>
                        <MDBRipple
                            className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src={article.length > 0 ? article[7].image_url : ''}
                                style={{ width: '25rem' }}
                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                        <MDBRow className="mb-3">
                            <MDBCol col="6">
                                <a href="" className="text-danger">
                                    <MDBIcon fas icon="chart-pie" className="me-1" />
                                    Technology
                                </a>
                            </MDBCol>
                            <MDBCol col="6" className="text-end">
                                <u>{article.length > 0 ? article[7].published_at : ''}</u>
                            </MDBCol>
                        </MDBRow>
                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/articles/' + article[7].id)} className="text-dark">
                            <h5>{article.length > 0 ? article[7].title : ''}</h5>
                            <p>
                                {article.length > 0 ? article[7].summary : ''}
                            </p>
                        </a>
                        <hr />
                        {article.slice(6, 10).map((n) => (
                            <a key={n.id} href="#!" className="text-dark">
                                <MDBRow className="mb-4 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src={n.image_url}
                                            className="shadow-1-strong rounded"
                                            style={{ width: '6rem', height: '4rem' }}
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/articles/' + n.id)} className="mb-2 text-black">
                                            <strong>{n.title}</strong>
                                        </a>
                                        <p className='mt-2'>
                                            {n.published_at}
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </a>
                        ))}
                    </div>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-4 mb-lg-0">
                    <div>
                        <MDBRipple
                            className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img
                                src={article.length > 0 ? article[8].image_url : ''}
                                style={{ width: '25rem', height: '14rem' }}
                            />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                        <MDBRow className="mb-3">
                            <MDBCol col="6">
                                <a href="" className="text-warning">
                                    <MDBIcon fas icon="code" className="me-1" />
                                    Technology
                                </a>
                            </MDBCol>
                            <MDBCol col="6" className="text-end">
                                <u>{article.length > 0 ? article[8].published_at : ''}</u>
                            </MDBCol>
                        </MDBRow>
                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/articles/' + article[8].id)} className="text-dark">
                            <h5>{article.length > 0 ? article[8].title : ''}</h5>
                            <p>
                                {article.length > 0 ? article[8].summary : ''}
                            </p>
                        </a>
                        <hr />
                        {article.slice(3, 7).map((n) => (
                            <a key={n.id} href="#!" className="text-dark">
                                <MDBRow className="mb-4 border-bottom pb-2">
                                    <MDBCol size="3">
                                        <img
                                            src={n.image_url}
                                            className="shadow-1-strong rounded"
                                            style={{ width: '6rem', height: '4rem' }}
                                            alt="Hollywood Sign on The Hill"
                                        />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/articles/' + n.id)} className="mb-2 text-black">
                                            <strong>{n.title}</strong>
                                        </a>
                                        <p className='mt-2'>
                                            {n.published_at}
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </a>
                        ))}
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

