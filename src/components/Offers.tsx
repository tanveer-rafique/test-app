//bootstrap imports
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

//components
import Offer, { OfferProps } from './Offer'
import { Container } from 'react-bootstrap'

interface Amount {
    display: string
    currency: string
}

interface OfferList extends OfferProps {
    id: string,
    headlines: {
        description: string
    },
    vehicleGroupInfo: {
        modelExample: {
            name: string,
            imageUrl: string
        }
    },
    images: {
        medium: string
    },
    prices: {
        totalPrice: {
            amount: Amount
        }
    }
}
interface OfferListProps {
    isLoading: Boolean
    offers: OfferList[]
}

function createOffer(offer: OfferList): JSX.Element {
    const {
        id: key,
        // headlines: { description: name }, 
        vehicleGroupInfo: { modelExample: { name, imageUrl } },
        // images: { medium: imageUrl },
        prices: { totalPrice: { amount } } 
    } = offer

    const localisedPrice: string = `${amount.currency} ${amount.display}`
    const altText: string = `The image of ${name}`
    const offerProps: OfferProps = { name, imageUrl, price: localisedPrice, altText }

    return <Col><Offer key={key} {...offerProps}></Offer></Col>
}

export default function Offers(props: OfferListProps) {
    const list = 
        <Row xs={1} md={3} className="g-4">
            {props.offers.map(offer => createOffer(offer))}
        </Row>
    const loader = 
        <Container>
            <Spinner animation="border" role="status"/> Loading...
        </Container> 
    return (
        <div>
            <h2>Offers</h2>
            {props.isLoading ? loader : list}
            
        </div>
    )
}