import { ChatEngine } from 'react-chat-engine';
import ChatFeed from  './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID="90c805d3-5f87-47b5-ba98-9187b45b730c"
            userName="Peanutedone"
            userSecret="abc123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );

}

export default App;