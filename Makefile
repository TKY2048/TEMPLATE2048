bundleRelease = ./gradlew bundleRelease
bundleReleaseWin = gradlew bundleRelease
assembleRelease = ./gradlew assembleRelease
assembleReleaseWin = gradlew assembleRelease
runAndroid = react-native run-android

staging: ##Build the .aab file with the release keystore for Staging environment
	@echo "Building the .aab file with the release keystore for Staging environment"
	cd android && ENVFILE=./environments/.env.staging $(bundleRelease)

assemble-staging: ##Build the apk file with the release keystore for Staging environment
	@echo "Building the apk file with the release keystore for Staging environment"
	cd android && ENVFILE=./environments/.env.staging  $(assembleRelease)

develop: ##Build the .aab file with the release keystore for Develop environment
	@echo "Building the .aab file with the release keystore for Develop environment"
	cd android && ENVFILE=./environments/.env $(bundleRelease)

assemble-develop: ##Build the apk file with the release keystore for Develop environment
	@echo "Building the apk file with the release keystore for Develop environment"
	cd android && ENVFILE=./environments/.env $(assembleRelease)

prod: ##Build the .aab file with the release keystore for Production environment
	@echo "Building the .aab file with the release keystore for Production environment"
	cd android && ENVFILE=./environments/.env.production  $(bundleRelease)

assemble-prod: ##Build the apk file with the release keystore for Production environment
	@echo "Building the apk file with the release keystore for Production environment"
	cd android && ENVFILE=./environments/.env.production $(assembleRelease)

run-android-staging: ##Runs the app with debug keystore for Staging environment
	@echo "Running the app with debug keystore for Staging environment"
	ENVFILE=./environments/.env.staging $(runAndroid)

run-android-develop: ##Runs the app with debug keystore for Develop environment
	@echo "Running the app with debug keystore for Develop environment"
	ENVFILE=./environments/.env $(runAndroid)

run-android-prod: ##Runs the app with debug keystore for Production environment
	@echo "Running the app with debug keystore for Production environment"
	ENVFILE=./environments/.env.production $(runAndroid)

help: ##Display the help screen
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36mmake %-15s\033[0m %s\n", $$1, $$2}'

staging-win: ##Build the .aab file with the release keystore for Staging environment
	@echo "Building the .aab file with the release keystore for Staging environment"
	cd android && SET ENVFILE=./environments/.env.staging && $(bundleRelease)

assemble-staging-win: ##Build the apk file with the release keystore for Staging environment
	@echo "Building the apk file with the release keystore for Staging environment"
	cd android && SET ENVFILE=./environments/.env.staging &&  $(assembleReleaseWin)

develop-win: ##Build the .aab file with the release keystore for Develop environment
	@echo "Building the .aab file with the release keystore for Develop environment"
	cd android && SET ENVFILE=./environments/.env && $(bundleReleaseWin)

assemble-develop-win: ##Build the apk file with the release keystore for Develop environment
	@echo "Building the apk file with the release keystore for Develop environment"
	cd android && SET ENVFILE=./environments/.env && $(assembleReleaseWin)

prod-win: ##Build the .aab file with the release keystore for Production environment
	@echo "Building the .aab file with the release keystore for Production environment"
	cd android && SET ENVFILE=./environments/.env.production && $(bundleReleaseWin)

assemble-prod-win: ##Build the apk file with the release keystore for Production environment
	@echo "Building the apk file with the release keystore for Production environment"
	cd android && SET ENVFILE=./environments/.env.production && $(assembleReleaseWin)

run-android-staging-win: ##Runs the app with debug keystore for Staging environment
	@echo "Running the app with debug keystore for Staging environment"
	SET ENVFILE=./environments/.env.staging && $(runAndroid)

run-android-develop-win: ##Runs the app with debug keystore for Develop environment
	@echo "Running the app with debug keystore for Develop environment"
	SET ENVFILE=./environments/.env && $(runAndroid)

run-android-prod-win: ##Runs the app with debug keystore for Production environment
	@echo "Running the app with debug keystore for Production environment"
	SET ENVFILE=./environments/.env.production && $(runAndroid)
