# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "index"
      location: "example#index" # Supersonic module#view type navigation
    }
    {
      title: "Compare"
      id: "settings"
      location: "example#compare"
    }
    {
      title: "Add"
      id: "internet"
      location: "example#add" # URLs are supported!
    }
    {
        title: "Symptoms"
        id: "Symptoms"
        location: "example#symptoms"
      }
      {
        title: "Hospitals"
        id: "Hospitals"
        location: "example#hospitals"
      }
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  initialView:
     id: "initialView"
     location: "example#login"
