FROM python:3.11.9

WORKDIR /app

COPY . .

RUN python -m venv venv
RUN . venv/bin/activate && pip install -r requirements.txt

CMD ["/bin/bash", "-c", ". venv/bin/activate && uvicorn app:app --reload"]