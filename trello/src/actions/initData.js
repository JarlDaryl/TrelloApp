export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id:'column-1',
                    boardId: 'board-1',     
                    title: 'Todo 1',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1', boardId: 'board-1', columnId: 'column-1',
                            title: 'Title of Card 1',
                            image: 'https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png',
                        },
                        {
                            id: 'card-2', boardId: 'board-1', columnId: 'column-1',
                            title: 'Title of Card 2',
                            image: null,
                        },
                        {
                            id: 'card-3', boardId: 'board-1', columnId: 'column-1',
                            title: 'Title of Card 3',
                            image: null,
                        },
                        {
                            id: 'card-4', boardId: 'board-1', columnId: 'column-1',
                            title: 'Title of Card 4',
                            image: null,
                        },
                        {
                            id: 'card-5', boardId: 'board-1', columnId: 'column-1',
                            title: 'Title of Card 5',
                            image: null,
                        },
                        {
                            id: 'card-6', boardId: 'board-1', columnId: 'column-1',
                            title: 'Title of Card 6',
                            image: null,
                        },
                        {
                            id: 'card-7', boardId: 'board-1', columnId: 'column-1',
                            title: 'Title of Card 7',
                            image: null,
                        }
                    ]
                },

                {
                    id:'column-2',
                    boardId: 'board-1',     
                    title: 'Todo 2',
                    cardOrder: ['card-8', 'card-9', 'card-10', 'card-11'],
                    cards: [
                        {
                            id: 'card-8', boardId: 'board-1', columnId: 'column-2',
                            title: 'Title of Card 8',
                            image: null,
                        },
                        {
                            id: 'card-9', boardId: 'board-1', columnId: 'column-2',
                            title: 'Title of Card 9',
                            image: null,
                        },
                        {
                            id: 'card-10', boardId: 'board-1', columnId: 'column-2',
                            title: 'Title of Card 10',
                            image: null,
                        },
                        {
                            id: 'card-11', boardId: 'board-1', columnId: 'column-2',
                            title: 'Title of Card 11',
                            image: null,
                        }
                    ]
                },

                {
                    id:'column-3',
                    boardId: 'board-1',     
                    title: 'Todo 3',
                    cardOrder: ['card-12', 'card-13', 'card-14', 'card-15'],
                    cards: [
                        {
                            id: 'card-8', boardId: 'board-1', columnId: 'column-3',
                            title: 'Title of Card 8',
                            image: null,
                        },
                        {
                            id: 'card-13', boardId: 'board-1', columnId: 'column-3',
                            title: 'Title of Card 13',
                            image: null,
                        },
                        {
                            id: 'card-14', boardId: 'board-1', columnId: 'column-3',
                            title: 'Title of Card 14',
                            image: null,
                        },
                        {
                            id: 'card-15', boardId: 'board-1', columnId: 'column-3',
                            title: 'Title of Card 15',
                            image: null,
                        }
                    ]
                }
            ]
        }
    ]
}