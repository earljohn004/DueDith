INSERT INTO
    public.profile (last_name, first_name, created_at)
VALUES
    ('Doe', 'John', NOW()),
    ('Smith', 'Jane', NOW()),
    ('Brown', 'Charlie', NOW()),
    ('Johnson', 'Emily', NOW()),
    ('Williams', 'Michael', NOW());

-- Insert dummy data into the category table
INSERT INTO
    public.category (
        profile_id,
        name,
        description,
        TYPE,
        created_at
    )
VALUES
    (
        501,
        'Groceries',
        'Monthly grocery expenses',
        'EXPENSE',
        NOW()
    ),
    (
        501,
        'Utilities',
        'Monthly utility bills',
        'EXPENSE',
        NOW()
    ),
    (
        502,
        'Salary',
        'Monthly salary income',
        'INCOME',
        NOW()
    ),
    (
        502,
        'Entertainment',
        'Expenses for entertainment',
        'EXPENSE',
        NOW()
    ),
    (
        503,
        'Savings',
        'Monthly savings',
        'EXPENSE',
        NOW()
    );

-- Insert dummy data into the budget table
INSERT INTO
    public.budget (
        category_id,
        profile_id,
        start_date,
        end_date,
        INTERVAL,
        created_at
    )
VALUES
    (
        (
            SELECT
                id
            FROM
                public.category
            WHERE
                name = 'Groceries'
            LIMIT
                1
        ), 501, NOW(),
        NOW() + INTERVAL '1 month',
        1,
        NOW()
    ),
    (
        (
            SELECT
                id
            FROM
                public.category
            WHERE
                name = 'Utilities'
            LIMIT
                1
        ), 501, NOW(),
        NOW() + INTERVAL '1 month',
        1,
        NOW()
    ),
    (
        (
            SELECT
                id
            FROM
                public.category
            WHERE
                name = 'Salary'
            LIMIT
                1
        ), 502, NOW(),
        NOW() + INTERVAL '1 month',
        1,
        NOW()
    ),
    (
        (
            SELECT
                id
            FROM
                public.category
            WHERE
                name = 'Entertainment'
            LIMIT
                1
        ), 502, NOW(),
        NOW() + INTERVAL '1 month',
        1,
        NOW()
    ),
    (
        (
            SELECT
                id
            FROM
                public.category
            WHERE
                name = 'Savings'
            LIMIT
                1
        ), 503, NOW(),
        NOW() + INTERVAL '1 month',
        1,
        NOW()
    );
