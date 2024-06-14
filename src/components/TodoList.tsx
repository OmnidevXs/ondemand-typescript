import { List, Avatar, Menu, Dropdown, Modal } from "antd";
import { DownOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Todo, getUserById, todoListData } from "../utils/data";
import { ClickParam } from "antd/lib/menu";

const { confirm } = Modal

interface ActionProps {
    onClick: (key: "complete" | "delete") => void;
    isCompleted: boolean;
}


function Action({ onClick, isCompleted }: ActionProps) {
    const handleActionClick = ({ key }: ClickParam) => {
        if (key === "complete") {
            onClick("complete");
        } else if (key === "delete") {
            onClick("delete");
        }
    };

    return (
        <Menu onClick={handleActionClick}>
            <Menu.Item key="complete">{isCompleted ? "重做" : "完成"}</Menu.Item>
            <Menu.Item key="delete">删除</Menu.Item>
        </Menu>
    );
}


const menu = (
    <Menu>
        <Menu.Item>完成</Menu.Item>
        <Menu.Item>删除</Menu.Item>
    </Menu>
);


interface TodoListProps {
    todoList: Todo[];
    onClick: (todoId: string, key: "complete" | "delete") => void;
}

function TodoList({ todoList, onClick }: TodoListProps) {
    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={todoListData}
            renderItem={item => (
                <List.Item
                    actions={[
                        <Dropdown overlay={() => (
                            <Action
                                isCompleted={item.isCompleted}
                                onClick={(key: "complete" | "delete") =>
                                    onClick(item.id, key)
                                }
                            />
                        )}>
                            <a key="list-loadmore-more">
                                操作 <DownOutlined />
                            </a>
                        </Dropdown>
                    ]}
                >
                    <List.Item.Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.user}</a>}
                        description={item.date}
                    />
                    <div>{item.content}</div>
                </List.Item>
            )}
        />
    );
}

export default TodoList;