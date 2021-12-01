import { createState, useState } from '@hookstate/core';
import { Tarefa } from '../types/task';

const bancoDeDadosDeTarefas = createState<Tarefa[]>([
    {
        id: '1',
        title: 'Estudar programação',
        completed: false,
    },
    {
        id: '2',
        title: 'Ler livros',
        completed: true,
    },
]);

export function useTarefas() {
    return useState(bancoDeDadosDeTarefas)
}

export function cadastrarTarefa(taskTitle: string) {
    bancoDeDadosDeTarefas.set((tasks) => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
                // id: uuidv4(),
                id: Math.round(Math.random() * 10000).toString(),
                completed: false,
            },
        ];
        return newTasks
    })
}

export function excluirTarefa(taskId: string) {
    bancoDeDadosDeTarefas.set((tasks) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        return newTasks
    })
};

export function inverterTarefaCompleta(taskId: string) {
    bancoDeDadosDeTarefas.set((tasks) => {
        const newsTasks = tasks.map((task) => {
            if (task.id === taskId) return {
                ...task, completed: !task.completed
            }
            return task;
        });
        return newsTasks
    })
}