import Card from 'react-bootstrap/Card'

export interface OfferProps {
    name: string,
    imageUrl: string,
    altText: string,
    price: string
}

export default function Offer({name, imageUrl, altText, price}: OfferProps) {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} alt={altText} onError={({ currentTarget }) => {
                const fallbackImage = 'https://via.placeholder.com/500x300.png?text=placeholder+text' // loading only if image doesn't render
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = fallbackImage;
            }}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
            </Card.Body>
        </Card>
    )
}