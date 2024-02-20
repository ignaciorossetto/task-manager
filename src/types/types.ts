export type Task = {
    id: `${string}-${string}-${string}-${string}-${string}`
    title: string,
    description?: string,
    completed: boolean,
    timeStamp: Date,
    completedTimeStamp?: Date | null
}


export enum ETaskList {
    Completed = 'completed',
    Incomplete = 'incomplete',
    All = 'all'
}

export type TaskListPropsType = {
    type: ETaskList;
};

export type TaskFormPropsType = {
    redirect?: boolean;
};

