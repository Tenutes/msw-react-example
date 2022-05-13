import React, { useEffect, useState } from 'react';
import Api from '../api/api';

const styles = {
    marginBottom: 5
}

export default function List() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const list = await Api.getList();

            setItems(list);
        })();
    }, []);

    const list = items.map(item => <div key={item._id} style={styles}>{item.text.substring(0, 10)}</div>);

    if (!list) {
        return null;
    }

    return <div data-testid='list'>{list}</div>
}