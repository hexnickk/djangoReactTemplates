## Installation

Order of installation can be any.

### Django

You will need [pipenv](https://pipenv.pypa.io/en/latest/).

```shell
pipenv install
```

### React

You will need [yarn](https://yarnpkg.com/).

```shell
cd assets
yarn
```

## Usage

You need to build React first, so Django can serve built files.

### React

First terminal tab:

```shell
cd assets
yarn parcel watch src/index.tsx
```

### Django

Second terminal tab:

```shell
pipenv run python manage.py runserver
```