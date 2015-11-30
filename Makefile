PROJECT =  datascience-app
REGISTRY = repo.trinity-tech.io
# Insert your company
COMPANY = trinity-tech

build:
	docker build -t $(REGISTRY)/$(COMPANY)/$(PROJECT) .

run:
	docker run -p 4567:4567 $(REGISTRY)/$(COMPANY)/$(PROJECT)
	# docker pull postgres

push:
	docker push $(REGISTRY)/$(COMPANY)/$(PROJECT)
