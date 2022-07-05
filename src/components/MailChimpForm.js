import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Background = styled.div`
  color: white;
  padding: 20px 0;
  & button {
    background-color: #1976d2;
    color: white;
    border-radius: 10px;
    border: none;
    padding: 8px;
    margin: 5px 0;
    font-size: 0.9em;
  }
  & input {
    padding: 7px;
    margin: 0 5px 0 0;
    border-radius: 10px;
    border: 1px black solid;
    font-size: 0.9em;
  }
`;

const SubscribeText = styled(Typography)`
  color: black;
`;

const url = `https://gmail.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_U}&id=${process.env.REACT_APP_ID}`;

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

// use the render prop and your custom form
const CustomForm = () => (
  <Background>
    <>
      <SubscribeText>Receive weekly junior job emails: </SubscribeText>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
            {status === 'sending' && (
              <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === 'success' && (
              <div style={{ color: 'green' }}>Subscribed!</div>
            )}
          </div>
        )}
      />
    </>
  </Background>
);

export default CustomForm;
