export class Job {
    id: string;
    title: string;
    zip_code: string;
    city: string;
    thumbnail: string;
    attachments: string[];
    counter: Counter;
    is_awarded: boolean;
    categories: Categories[];
    state: string;
    description: string;
    end_date: string;
    created_at: string;
}

class Counter {
    messages_total: number;
    messages_unread: number;
}

class Categories  {
    id: string;
}
