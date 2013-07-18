window.AR = Ember.Application.create()

require "router/router.js"

require "models/Client.js"
require "models/Policy.js"
require "models/Quote.js"
require "models/Flow.js"
require "models/Insurancetype.js"

require "models/FIXTURES.js"

require "views/search/SearchView.js"
require "views/search/SearchItemView.js"

require "views/modal/ModalView.js"

require "views/dropdown/DropdownView.js"

require "controllers/ClientsController.js"
require "controllers/QuotesController.js"
require "controllers/PolicysController.js"
require "controllers/FlowsController.js"
require "controllers/HomeController.js"

require "utils/HandlebarsHelpers.js"
