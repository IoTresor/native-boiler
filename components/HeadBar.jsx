import * as React from 'react';
import { Header, Left, Body, Right, Button, Icon, } from 'native-base';
import { Text } from 'react-native'

export function HeadBar(props)
{
    return (
        <Header>
            <Left>
                <Button transparent onPress={ () => { this.props.navigation.goBack()}}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>

            <Body>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}> Tresor LLC</Text>
            </Body>

            <Right>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
    )
}
