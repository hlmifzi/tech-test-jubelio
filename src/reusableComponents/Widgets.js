import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import {
    Button,
    Row,
    Col,
    Table,
    CardDeck,
    Card,
    Form
} from 'react-bootstrap'

export const ButtonComponent = ({ color, text, url, onClick }) => {
    return (
        <Link to={url}>
            <Button variant={color} onClick={onClick} >
                {text}
            </Button>
        </Link>
    )
}


export const TableComponent = (props) => {
    let datas = props.data.map((v, k) => {
        return (
            <tr key={k}>
                <td>{k + 1}</td>
                <td><img src={v.prdImg01} alt="eleveneia Produk" width="50%" /></td>
                <td>{v.prdNo}</td>
                <td>{v.prdnm}</td>
                <td>{v.SKU}</td>
                <td> <div dangerouslySetInnerHTML={{ __html: v.htmlDetail }} /></td>
                <td>{v.Selprc}</td>
            </tr>
        )
    })

    return (
        <Row style={{ marginTop: '30px' }}>
            <Col style={{ backgroundColor: '#fff' }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Gambar</th>
                            <th>Nomor Product</th>
                            <th>Nama Product</th>
                            <th>SKU</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

const css = { marginTop: '20px', maxHeight: '450px', minHeight: '450px' }

export const CardComponent = (props) => {
    let data = props.data.map((v, k) => {
        console.log("CardComponent -> v", v)
        let longDesc = v.htmlDetail
        let deskripsi = longDesc.substring(0, 60) + "..."
        let titleDesc = v.prdnm
        let title = titleDesc.substring(0, 20) + "..."
        let url = `/detailProduct/${v.id}`

        return (
            <div class="col-md-3">
                <Link to={url}>
                    <Card key={k} style={css}>
                        {<Card.Img variant="top" src={v.prdImg01} /> || <Skeleton width={100} eight={100} amount={10} />}
                        <Card.Body>
                            <Card.Title>
                                {title}
                                <br /><p style={{ fontSize: '0.8em' }}>{v.Selprc}</p>
                            </Card.Title>
                            <Card.Text style={{ fontSize: '0.6em' }}>
                                SKU : {v.SKU} <br />
                                <div dangerouslySetInnerHTML={{ __html: deskripsi }} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        )
    })

    return (
        <CardDeck style={{ marginTop: '30px', marginBottom: '50px' }}>
            {data}
        </CardDeck>
    )
}

const cssCardHeaderComponent = { marginTop: '20px', marginBottom: '50px' }

export const CardHeaderComponent = ({ data, onClickDelete, onClickEdit }) => {
    return (
        <Card style={cssCardHeaderComponent}>
            <Card.Header>
                Detail Produk SKU :  {data.SKU}
                <div style={{ float: 'right' }}>
                    {ButtonComponent({ color: 'primary', text: 'Edit', onClick: onClickEdit })}&nbsp;
                    {ButtonComponent({ color: 'danger', text: 'Delete', onClick: onClickDelete })}
                </div>

            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        {<Card.Img variant="top" src={data.prdImg01} /> || <Skeleton width={100} eight={100} amount={10} />}

                    </Col>
                    <Col>
                        <Card.Title>
                            {data.prdnm}
                        </Card.Title>
                        <div style={{ backgroundColor: '#f7f7f7', color: '#ffc107', textAlign: 'right', padding: '10px', fontSize: '2em' }} >
                            <Row>
                                <Col>Rp {data.Selprc}</Col>
                            </Row>
                        </div>
                        <Card.Text>
                            <div dangerouslySetInnerHTML={{ __html: data.htmlDetail }} />
                        </Card.Text>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}


export const CardHeaderComponentEdit = ({ data, onClickUpdate, onChange }) => {

    return (
        <Card style={cssCardHeaderComponent}>
            <Card.Header>
                <Row>
                    <Col>
                        Detail Produk SKU :
                    <Form.Control onChange={onChange.SKU} size="sm" type="text" placeholder="Masukkan" value={data.SKU} />
                    </Col>
                </Row>

            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        {<Card.Img variant="top" src={data.prdImg01} /> || <Skeleton width={100} eight={100} amount={10} />}

                    </Col>
                    <Col>
                        <Card.Title>
                            Nama Produk
                            <Form.Control onChange={onChange.prdnm} size="sm" type="text" placeholder="Masukkan SKU" value={data.prdnm} />
                        </Card.Title>
                        <div style={{ backgroundColor: '#f7f7f7', color: '#ffc107', textAlign: 'right', padding: '10px', fontSize: '2em' }} >
                            <Row>
                                <Col>Rp  </Col>
                                <Col><Form.Control onChange={onChange.Selprc} size="sm" type="number" placeholder="Masukkan Harga" value={data.Selprc} />  </Col>
                            </Row>
                        </div>
                        <Card.Text>
                            <Form.Control onChange={onChange.htmlDetail} as="textarea" rows="3" value={data.htmlDetail} />

                        </Card.Text>

                        <div style={{ float: 'right', marginTop: '20px' }}>
                            {ButtonComponent({ color: 'info', text: 'Update', onClick: onClickUpdate })}
                        </div>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}
