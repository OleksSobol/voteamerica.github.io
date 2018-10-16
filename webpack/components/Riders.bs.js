// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Table$VoteUSReason = require("./Table.bs.js");
var Utils$VoteUSReason = require("./Utils.bs.js");
var Defaults$VoteUSReason = require("./Defaults.bs.js");
var LeftPaddedButton$VoteUSReason = require("./ui/LeftPaddedButton.bs.js");

var component = ReasonReact.statelessComponent("Riders");

var tableType = "riders";

var riderTableColumns = /* array */[
  Utils$VoteUSReason.thcCreator("uuid", "UUID"),
  Utils$VoteUSReason.thcCreator("First Name", "RiderFirstName"),
  Utils$VoteUSReason.thcCreator("Last Name", "RiderLastName"),
  Utils$VoteUSReason.thcCreator("Email", "RiderEmail"),
  Utils$VoteUSReason.thcCreator("Phone", "RiderPhone"),
  Utils$VoteUSReason.thcCreator("Collection ZIP", "RiderCollectionZIP"),
  Utils$VoteUSReason.thcCreator("City", "city"),
  Utils$VoteUSReason.thcCreator("State", "full_state"),
  Utils$VoteUSReason.thcCreator("Dropoff ZIP", "RiderDropOffZIP"),
  Utils$VoteUSReason.thcCreator("Created", "created_ts"),
  Utils$VoteUSReason.thcCreator("Updated", "last_updated_ts"),
  Utils$VoteUSReason.thcCreator("Status", "status"),
  Utils$VoteUSReason.thcCreator("Status Info", "status_info"),
  Utils$VoteUSReason.thcCreator("Org ID", "uuid_organization"),
  Utils$VoteUSReason.thcCreator("Org Name", "OrganizationName"),
  Utils$VoteUSReason.thcCreator("Collection Street Number", "RiderCollectionStreetNumber"),
  Utils$VoteUSReason.thcCreator("Collection Address", "RiderCollectionAddress"),
  Utils$VoteUSReason.thcCreator("Destination Address", "RiderDestinationAddress"),
  Utils$VoteUSReason.thcCreator("Ride Times Local", "AvailableRideTimesLocal"),
  Utils$VoteUSReason.thcCreator("Party Size", "TotalPartySize"),
  Utils$VoteUSReason.thcCreatorBool("Two Way Trip", "TwoWayTripNeeded"),
  Utils$VoteUSReason.thcCreatorBool("Is Vulnerable", "RiderIsVulnerable"),
  Utils$VoteUSReason.thcCreatorBool("No Politics Talk", "RiderWillNotTalkPolitics"),
  Utils$VoteUSReason.thcCreatorBool("Stay In Touch", "PleaseStayInTouch"),
  Utils$VoteUSReason.thcCreatorBool("Need Wheelchair", "NeedWheelchair"),
  Utils$VoteUSReason.thcCreator("Contact Method", "RiderPreferredContact"),
  Utils$VoteUSReason.thcCreator("Rider Notes", "RiderAccommodationNotes"),
  Utils$VoteUSReason.thcCreatorBool("Legal Consent", "RiderLegalConsent"),
  Utils$VoteUSReason.thcCreatorBool("Ready To Match", "ReadyToMatch"),
  Utils$VoteUSReason.thcCreatorBool("Will Be Safe", "RiderWillBeSafe"),
  Utils$VoteUSReason.thcCreator("Time zone", "timezone")
];

function tableRider(itemDetails) {
  return {
          UUID: itemDetails.UUID,
          RiderFirstName: itemDetails.RiderFirstName,
          RiderEmail: itemDetails.RiderEmail,
          RiderLastName: itemDetails.RiderLastName,
          RiderPhone: itemDetails.RiderPhone,
          RiderCollectionZIP: itemDetails.RiderCollectionZIP,
          city: itemDetails.city,
          full_state: itemDetails.full_state,
          RiderDropOffZIP: itemDetails.RiderDropOffZIP,
          AvailableRideTimesLocal: itemDetails.AvailableRideTimesLocal,
          TotalPartySize: itemDetails.TotalPartySize,
          TwoWayTripNeeded: itemDetails.TwoWayTripNeeded,
          RiderIsVulnerable: itemDetails.RiderIsVulnerable,
          RiderWillNotTalkPolitics: itemDetails.RiderWillNotTalkPolitics,
          PleaseStayInTouch: itemDetails.PleaseStayInTouch,
          NeedWheelchair: itemDetails.NeedWheelchair,
          RiderPreferredContact: itemDetails.RiderPreferredContact,
          RiderAccommodationNotes: itemDetails.RiderAccommodationNotes,
          RiderLegalConsent: itemDetails.RiderLegalConsent,
          ReadyToMatch: itemDetails.ReadyToMatch,
          created_ts: itemDetails.created_ts,
          last_updated_ts: itemDetails.last_updated_ts,
          status_info: itemDetails.status_info,
          RiderWillBeSafe: itemDetails.RiderWillBeSafe,
          RiderCollectionStreetNumber: itemDetails.RiderCollectionStreetNumber,
          RiderCollectionAddress: itemDetails.RiderCollectionAddress,
          RiderDestinationAddress: itemDetails.RiderDestinationAddress,
          status: itemDetails.status,
          uuid_organization: itemDetails.uuid_organization,
          OrganizationName: itemDetails.OrganizationName,
          timezone: itemDetails.timezone
        };
}

function make(loginInfo, apiInfo, ridersInfo, matchesInfo, getRidersList, hideRidersList, setInfoRidersList, hideExpiredRidersList, showCurrentRider, hideCurrentRider, _) {
  var ridersTableOnPageChangeHandler = function (pageIndex) {
    console.log(pageIndex);
    return /* () */0;
  };
  var ridersTableOnPageChangeSizeHandler = function (size, _) {
    console.log(size);
    var pageIndex = ridersInfo.listPageIndex;
    var f = function (fx,index,size){{ fx(index, size); return 0; }};
    return f(setInfoRidersList, pageIndex, size);
  };
  var ridersTdPropsHandler = function (_, rowInfoOption, _$1, _$2) {
    var itemUuid = rowInfoOption !== undefined ? Js_primitive.valFromOption(rowInfoOption).original.UUID : "";
    var tableClickHandler = function (_, handleOriginalOption) {
      if (rowInfoOption !== undefined) {
        var rowInfo = Js_primitive.valFromOption(rowInfoOption);
        console.log(rowInfo);
        var sr = function (fx,itemDetails){{ fx(itemDetails); return 0; }};
        var itemDetails = rowInfo.original;
        var currentRider = tableRider(itemDetails);
        sr(showCurrentRider, Js_primitive.some(currentRider));
      } else {
        Curry._1(hideCurrentRider, /* () */0);
      }
      if (handleOriginalOption !== undefined) {
        Curry._1(handleOriginalOption, /* () */0);
      }
      return /* () */0;
    };
    var getRowBkgColour = function () {
      if (itemUuid === matchesInfo.currentMatch.uuid_rider) {
        return Defaults$VoteUSReason.highlightMatchedRowBackgroundColour;
      } else if (itemUuid === ridersInfo.currentRider.UUID) {
        return Defaults$VoteUSReason.highlightSelectedRowBackgroundColour;
      } else {
        return Defaults$VoteUSReason.defaultRowBackgroundColour;
      }
    };
    var getRowTextColour = function () {
      if (itemUuid === ridersInfo.currentRider.UUID) {
        return Defaults$VoteUSReason.highlightSelectedRowForegroundColour;
      } else {
        return Defaults$VoteUSReason.defaultRowForegroundColour;
      }
    };
    var bkgStyle = {
      background: getRowBkgColour(/* () */0),
      color: getRowTextColour(/* () */0)
    };
    return {
            onClick: tableClickHandler,
            style: bkgStyle
          };
  };
  var ridersTableHideExpiredHandler = function () {
    return Curry._1(hideExpiredRidersList, /* () */0);
  };
  var handleGetRiderListClick = function () {
    var token = loginInfo.token;
    var url = apiInfo.apiUrl;
    var gl = function (fx,url,token){{ fx(url, token); return 0; }};
    gl(getRidersList, url, token);
    return /* () */0;
  };
  var handleHideRiderListClick = function () {
    Curry._1(hideRidersList, /* () */0);
    return /* () */0;
  };
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var tableRiders = $$Array.map(tableRider, ridersInfo.riders);
              var tableDivStyle = {
                marginTop: "20px",
                marginBottom: "10px"
              };
              var currentRiderInfo = function (currentRider) {
                var uriPhone = encodeURI(currentRider.RiderPhone);
                var selfServiceUrl = "../self-service/?type=rider&uuid=" + (currentRider.UUID + ("&code=0&info&phone=" + uriPhone));
                return React.createElement("div", undefined, React.createElement("h3", undefined, "Current rider info:"), React.createElement("div", undefined, currentRider.RiderFirstName + (" " + currentRider.RiderLastName)), React.createElement("div", undefined, currentRider.RiderEmail), React.createElement("div", undefined, React.createElement("a", {
                                    href: selfServiceUrl
                                  }, "Self Service Page")));
              };
              var tableRidersJSX;
              if (ridersInfo.showRiderList) {
                var match = ridersInfo.showCurrentRiderDetails;
                tableRidersJSX = React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("button", {
                              className: "button button--large",
                              id: "hideRidersListButton",
                              onClick: handleHideRiderListClick
                            }, "Hide List"), ReasonReact.element(undefined, undefined, LeftPaddedButton$VoteUSReason.make((function (prim, prim$1, prim$2) {
                                    return {
                                            className: prim,
                                            id: prim$1,
                                            onClick: prim$2
                                          };
                                  }), "button button--large", "refreshRidersListButton", handleGetRiderListClick, /* array */["Refresh List"]))), React.createElement("div", undefined, React.createElement("label", {
                              className: "",
                              htmlFor: "hideExpired"
                            }, "Hide Expired/Cancelled"), React.createElement("input", {
                              className: "",
                              id: "hideExpired",
                              checked: ridersInfo.hideExpiredCanceled,
                              type: "checkbox",
                              onChange: ridersTableHideExpiredHandler
                            })), React.createElement("div", {
                          style: tableDivStyle
                        }, ReasonReact.element(undefined, undefined, Table$VoteUSReason.make((function (prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6, prim$7, prim$8) {
                                    return {
                                            className: prim,
                                            type: prim$1,
                                            columns: prim$2,
                                            defaultPageSize: prim$3,
                                            pageSize: prim$4,
                                            data: prim$5,
                                            onPageChange: prim$6,
                                            onPageSizeChange: prim$7,
                                            getTdProps: prim$8
                                          };
                                  }), "basicRiderTable", tableType, 5, ridersInfo.listPageSize, riderTableColumns, tableRiders, ridersTableOnPageChangeHandler, ridersTableOnPageChangeSizeHandler, ridersTdPropsHandler, /* array */[]))), match ? currentRiderInfo(ridersInfo.currentRider) : React.createElement("div", undefined, "No rider selected"));
              } else {
                tableRidersJSX = React.createElement("div", undefined, React.createElement("button", {
                          className: "button button--large",
                          id: "showGetRidersList",
                          onClick: handleGetRiderListClick
                        }, "Show Riders List"));
              }
              var ridersInfoArea = loginInfo.loggedIn ? React.createElement("div", undefined, React.createElement("h2", {
                          className: "operator-page-heading"
                        }, "Rider Info"), React.createElement("div", undefined, tableRidersJSX)) : null;
              return React.createElement("div", undefined, ridersInfoArea);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.loginInfo, jsProps.apiInfo, jsProps.ridersInfo, jsProps.matchesInfo, jsProps.getRidersList, jsProps.hideRidersList, jsProps.setInfoRidersList, jsProps.hideExpiredRidersList, jsProps.showCurrentRider, jsProps.hideCurrentRider, /* array */[]);
      }));

exports.component = component;
exports.tableType = tableType;
exports.riderTableColumns = riderTableColumns;
exports.tableRider = tableRider;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
