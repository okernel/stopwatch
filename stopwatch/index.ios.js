var React = require('react-native');
var formatTime = require('minutes-seconds-milliseconds');
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
            timeElapsed:null,
            running:false,
            startTime:null
        }
    },
    render: function() {
        return <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timer}>
                        {formatTime(this.state.timeElapsed)}
                    </Text>
                </View>
                <View style={styles.buttonWrapper}>
                    {this.startStopFunction()}
                    {this.lapButton()}
                </View>
            </View>
            <View style={styles.footer}>
                <Text>
                    I am a list of Laps
                </Text>
            </View>

        </View>
    },
    startStopFunction:function(){
        var style = this.state.running ? styles.stopButton : styles.startButton;

        return <TouchableHighlight
            underlayColor='gray'
            onPress={this.handleStartPress}
            style={[styles.button,style]}
            >
            <Text>
                {this.state.running ? 'Stop' : 'Start'}
            </Text>
        </TouchableHighlight>
    },
    handleStartPress:function(){

        if(this.state.running) {
            //is the timer running?
            clearInterval(this.interval);
            this.setState({
                running: false
            });
            return
        }

        this.setState({startTime:new Date()});

        this.interval = setInterval(
            () => {
                this.setState({
                    timeElapsed:new Date() - this.state.startTime,
                    running:true
                });
            },1
        );

    },
    lapButton:function(){
        return <TouchableHighlight
            underlayColor='gray'
            style={styles.button}
            >
            <Text>
                Lap
            </Text>
        </TouchableHighlight>
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
        flex:1,
        alignItems: 'flex-start',

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
    },
    timer: {
        fontSize:60
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        borderColor: '#00cc00'
    },
    stopButton: {
        borderColor: '#cc0000'
    }

});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
