import LiveVisitor from "./Components/LiveVistor"
import Chatrooms from "./Components/Chatrooms"

export default [
    {path: '/', exact: true, Component: LiveVisitor}, 
    {path: '/chatrooms', Component: Chatrooms}
]