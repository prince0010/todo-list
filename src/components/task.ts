import { action, computed, makeObservable, observable } from "mobx";
import { TaskInterface } from "../interfaces";

const STORAGE_KEY = '@tasks';

export class Task {
    [x: string]: any;
    constructor() {
        this.fetchs();
        makeObservable(this);
    }

    protected fetchs() {
        try {
            const storedTasks = localStorage.getItem(STORAGE_KEY);
            this._tasks = storedTasks ? JSON.parse(storedTasks) : [];
            if (!Array.isArray(this._tasks)) {
                this._tasks = [];
            }
        } catch (error) {
            console.error("Failed to parse tasks from localStorage:", error);
            this._tasks = [];
        }
    }

    protected sync() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._tasks));
    }

    @observable
    protected _tasks: TaskInterface[] = [];

    @observable
    protected _tasksEdit?: TaskInterface;

    @computed
    get taskEdit() {
        return this._tasksEdit;
    }

    @computed
    get tasks() {
        return this._tasks
            .filter((task) => !task.isDone)
            .sort((a, b) => b.updatedAt - a.updatedAt);
    }

    @computed
    get completedTasks() {
        return this._tasks
            .filter((task) => task.isDone)
            .sort((a, b) => b.updatedAt - a.updatedAt);
    }

    // editing and Updating
    @action
    edit(task: TaskInterface) {
        this._tasksEdit = task;
    }

    protected generateId(): number {
        let rand = Math.random();
        while (this._tasks.find(task => task.id === rand)) {
            rand = Math.random();
        }

        return rand;
    }

    protected find(id: TaskInterface['id'], callback: (task: TaskInterface, index: number) => void) {
        const index = this._tasks.findIndex((task) => task.id === id);
        if (index !== -1) {
            callback(this._tasks[index], index);
        }
    }

    @action
    add(title: string) {
        this._tasks.push({
            title,
            id: this.generateId(),
            isDone: false,
            updatedAt: new Date().getTime()
        });
        this.sync();
    }

    @action
    update(id: TaskInterface['id'], title: string) {
        this.find(id, (task, i) => {
            this._tasks[i] = {
                ...task,
                title
            };
            this._tasksEdit = undefined;
            this.sync();
        });
    }

    @action
    remove(id: TaskInterface['id']) {
        this.find(id, (_, i) => {
            this._tasks.splice(i, 1);
            this.sync();
        });
    }

    @action
    toggleDone(id: TaskInterface['id']) {
        this.find(id, (task, i) => {
            this._tasks[i] = {
                ...task,
                isDone: !task.isDone,
                // Update when it is completed only, show tasks show in first
                updatedAt: !task.isDone ? new Date().getTime() : task.updatedAt
            };
            this.sync();
        });
    }
}
