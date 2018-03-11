import React from 'react';
import { Button, Card, Form, Dropdown, Icon } from 'semantic-ui-react'

class Conversion1 extends React.Component  {
    render() {
        const currencies = [
            {
                text: 'Chinese Yuan',
                value: 'CNY',
                flag: 'china'
            },
            {
                text: 'Philippines Piso',
                value: 'PHP',
                flag: 'philippines'
            },
            {
                text: 'US Dollar',
                value: 'USD',
                flag: 'us'
            }
        ];


        return (
            <Form>
                <Card centered="true" raised="true">
                    <Card.Content>
                        <div className="center aligned header">Conversion</div>
                        <div className="center aligned description">
                            <Form.Field>
                                <label>From</label>
                                <Dropdown placeholder='Select Currency' fluid selection options={currencies} />
                                <input type="text" name="amount" placeholder="0.00"/>
                            </Form.Field>
                            <Form.Field>
                                <label>To</label>
                                <Dropdown placeholder='Select Currency' fluid selection options={currencies} />
                                <input type="text" name="amount" placeholder="0.00"/>
                            </Form.Field>
                        </div>
                    </Card.Content>
                    <div className="extra content">
                        <div className="center aligned author">
                            <Button icon labelPosition="left" type="submit">
                                <Icon name="paper plane" />
                                Submit
                            </Button>
                        </div>
                    </div>
                </Card>
            </Form>
        );
    }
};

export default Conversion1;