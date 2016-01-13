var React = require('react-native');
var {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet
} = React;

var StopWatch = React.createClass({
    getInitialState:function() {
        return {
            timeElapsed:null
        }
    },
    render: function() {
        return <View style={styles.container}>

            <View style={[styles.header,this.border('yellow')]}>
                <View style={[styles.timerWrapper,this.border('red')]}>
                    <Text >
                        00:00:00
                    </Text>
                </View>
                <View style={[this.border('green'),styles.buttonWrapper]}>
                    {this.startStopFunction()}
                    {this.lapButton()}
                </View>
            </View>
            <View style={[styles.footer,this.border('blue')]}>
                <Text>
                    I am a list of Laps
                </Text>
            </View>

        </View>
    },
    startStopFunction:function(){
        return <TouchableHighlight
            underlayColor='gray'
            onPress={this.handleStartPress}
            >
            <Text>
                Start
            </Text>
        </TouchableHighlight>
    },
    handleStartPress:function(){
        var startTime = new Date();
        setInterval(() => {
            this.setState({
                timeElapsed: new Date() - startTime
            },30);
        }

    },
    lapButton:function(){
        return <View>
            <Text>
                Lap
            </Text>
        </View>
    },
    border:function(color){
        return {
            borderColor: color,
            borderWidth:4
        }
    }

});

// AppRegistry.registerComponent('stopwatch',function(){
//     return StopWatch;
// });

var styles = StyleSheet.create({
    container: {
        flex:1, // Fill the entire the screen
        alignItems:'stretch'
    },
    header: { // Yellow
        flex:1
    },
    footer: { //Blue
        flex:1
    },
    timerWrapper: {
        flex:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex:3,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
