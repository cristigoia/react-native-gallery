import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class ImageList extends Component {
    state = {
        data: []
    };

    // I am using "componentWillMount" for invoking immediately before mounting occurs
    componentWillMount() {
        this.fetchData();
    }

    // Fetching our data from JSON
    // I tried to use "axios" library insted "fetch" but it still buggy and ureliable
    fetchData = async () => {
        const response = await fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF');
        const json = await response.json();
        this.setState({ data: json.photos });
    };

    // Rendering list of author's "fullname" and images
    // For quick and nice styling, I have used "react-native-elements"
    // I still have issue with long strings, which is not critical, so I probably
    // fix it later (maybe)
    render() {
        return (
          <View>
            <List>
              <FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                  <ListItem
                    roundAvatar
                    avatar={{ uri: item.image_url }}
                    title={`${item.user.fullname} - ${item.name}`}
                  />
                }
              />
            </List>
          </View>
        );
      }
    }

export default ImageList;
