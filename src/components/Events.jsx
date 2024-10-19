import { Button, Card, Col, Row } from 'antd';
import '../css/Events.css';
import CardImg from '../img/event.jpg';

const events = [
  {
    title: 'React Conference 2024',
    date: 'March 20, 2024',
    description: 'A conference for React enthusiasts to discuss the latest trends and developments in React.A conference for React enthusiasts to discuss the latest trends and developments in React.A conference for React enthusiasts to discuss the latest trends and developments in React.',
  },
  {
    title: 'JavaScript Workshop',
    date: 'April 15, 2024',
    description: 'A hands-on workshop to enhance your JavaScript skills.A conference for React enthusiasts to discuss the latest trends and developments in React.A conference for React enthusiasts to discuss the latest trends and developments in React.',
  },
  {
    title: 'Web Development Meetup',
    date: 'May 10, 2024',
    description: 'Network with other web developers and share your experiences.A conference for React enthusiasts to discuss the latest trends and developments in React.A conference for React enthusiasts to discuss the latest trends and developments in React.',
  },
];

const Events = () => {
  return (
    <div style={{ padding: '20px' }}>
        <h1>Events</h1>
        <Button type='primary' style={{marginBottom:'20px'}}>See Previous Events</Button>
        <div className='event_next_container'>
            <h1 style={{color:'red'}}>Next Event </h1>
            <div className='events_next'>
                <img src={CardImg} height={300} width={400} alt="Card Image"  />
                <Card>
                    <h2>Date: November 15, 2024</h2>
                    <h1>Web Development Meetup</h1>
                    <p>A hands-on workshop to enhance your JavaScript skills.A conference for React enthusiasts to discuss the latest trends and developments in React.A conference for React enthusiasts to discuss the latest trends and developments in React.</p>
                </Card>
            </div>
        </div>
        <div>
            <h1 style={{color: 'red'}}>Upcoming Events</h1>
            <Row gutter={16}>
                {events.map((event, index) => (
                <Col span={8} key={index}>
                    <Card
                    title={event.title}
                    bordered={false}
                    hoverable
                    style={{ marginBottom: '16px' }}
                    >
                    <p><strong>Date:</strong> {event.date}</p>
                    <p>{event.description}</p>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
      
    </div>
  );
};

export default Events;
