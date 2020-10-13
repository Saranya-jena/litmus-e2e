describe("Testing the Teaming section", () => {
  before("Clearing local storage", () => {
    cy.clearCookie("token");
    indexedDB.deleteDatabase("localforage");
    cy.server();
    cy.visit("/login");
    cy.route("POST", Cypress.env("authURL") + "/login").as("loginResponse"); //Alias for Login Route
    cy.login("admin", "litmus");
    cy.wait("@loginResponse").its("status").should("eq", 200); //Request Done.
    cy.wait(3000);
    cy.get("[data-cy=headerComponent]").should("be.visible");
    cy.get("[data-cy=sidebarComponent]").should("be.visible");
    cy.get("[data-cy=quickActionCardComponent]").should("be.visible");
  });
  it("Checking the accessibility of the Settings", () => {
    cy.wait(3000);
    cy.contains("Settings").click();
    cy.contains("Settings").should("be.visible");
  });
  it("Checking the accessibility of Team Tab", () => {
    cy.wait(3000);
    cy.get("[data-cy=teaming]").click();
    cy.get("[data-cy=toolBarComponent]").should("be.visible");
  });
  //Invitation Button + Modal access check
  it("Checking the accessibility of the Invitation section", () => {
    cy.get("[data-cy=invitationButton]").click();
    cy.get("[data-cy=invitationModal]").should("be.visible");
    cy.get("[data-cy=receivedTab]").should("be.visible");
    cy.get("[data-cy=sentTab]").click();
    cy.get("[data-cy=invitationModal]").should("be.visible");
    cy.get("[data-cy=sentTab]").should("be.visible");
    cy.get("[data-cy=modal]").within(() => {
      cy.get("button").first().click();
    });
  });
  it("Checking the accessibility of the Invite new member section", () => {
    cy.get("[data-cy=inviteNewMemberButton]").click();
    cy.get("[data-cy=inviteNewMemberModal]").should("be.visible");
    cy.get("[data-cy=modal]").within(() => {
      cy.get("button").first().click();
    });
  });
  it("Creating new User and testing invite functionality", () => {
    //Create a new user
    cy.get("[data-cy=user-management]").click();
    cy.get("[data-cy=createUser]").click();
    cy.server();
    cy.route("POST", Cypress.env("authURL") + "/create").as("createResponse");
    cy.createUser("R", "vansh@gmail.com", "vansh", "litmus");
    cy.get("[data-cy=createNewUserButton]").click();
    cy.wait("@createResponse"); //Request Done.
    cy.get("[data-cy=newUserDoneButton]").click();
    //Logout
    cy.logout();
    //Login as the new user
    cy.url().should("include", "/login");
    cy.server();
    cy.route("POST", Cypress.env("authURL") + "/login").as("loginResponse"); //Alias for Login Route
    cy.login("vansh", "litmus"); //CHANGE NAME HERE
    cy.wait("@loginResponse").its("status").should("eq", 200);
    //Fill welcome modal!
    cy.welcomeModalInputs("Project_01", "vansh", "litmus", "vansh@gmail.com"); //CHANGE MODAL DATA HERE
    cy.wait(8000);
    cy.contains("Congratulations").should("be.visible");
    //Assert Login success
    cy.wait(3000);
    cy.get("[data-cy=headerComponent]").should("be.visible");
    cy.get("[data-cy=sidebarComponent]").should("be.visible");
    cy.get("[data-cy=quickActionCardComponent]").should("be.visible");
    //Logout again
    cy.logout();
    //Login now as admin
    cy.server();
    cy.route("POST", Cypress.env("authURL") + "/login").as("loginResponse"); //Alias for Login Route
    cy.login("admin", "litmus");
    cy.wait("@loginResponse").its("status").should("eq", 200); //Request Done.
    //Assert Login success
    cy.wait(3000);
    cy.get("[data-cy=headerComponent]").should("be.visible");
    cy.get("[data-cy=sidebarComponent]").should("be.visible");
    cy.get("[data-cy=quickActionCardComponent]").should("be.visible");
    //Visit the teaming section and go to "invite a new member"
    cy.contains("Settings").click();
    cy.wait(3000);
    cy.contains("My Account").should("be.visible");
    cy.get("[data-cy=teaming]").click();
    cy.get("[data-cy=toolBarComponent]").should("be.visible");
    cy.get("[data-cy=teaming]").click();
    cy.get("[data-cy=inviteNewMemberButton]").click();
    cy.get("[data-cy=inviteNewMemberModal]").should("be.visible");
    //Test if new invite got sent
    cy.get("[data-cy=modal]").within(() => {
      cy.contains("No users available.").should("not.be.visible");
    });
  });
  it("Search the new Member and invite them as Viewer", () => {
    //Search and send the invite
    cy.get("[data-cy=inviteNewMemberSearch]").within(() => {
      cy.get("input").clear().type("vansh"); //Search invite HERE
    });
    cy.get("[data-cy=modal]").within(() => {
      cy.get("[data-cy=inviteNewMemberTable]").within(() => {
        cy.get("[data-cy=inviteNewMemberCheckBox]").get("span").first().click(); //Get first button to get the dropdown for Viewer/Editor
      });
      cy.get("[data-cy=inviteNewMemberSendInviteButton]").click();
      cy.get("[data-cy=inviteNewMemberSuccessModal]").within(() => {
        cy.get(
          "[data-cy=inviteNewMemberSuccessModalDoneButton] button"
        ).click();
      });
    });
    //Check if invitation got sent in the "Sent Tab"
    cy.get("[data-cy=teamTabPanel]").within(() => {
      cy.get("[data-cy=toolBarComponent]").within(() => {
        cy.get("[data-cy=invitationButton] button").click();
      });
    });
    cy.get("[data-cy=sentTab]").click();
    cy.contains("There is no one waiting for your invitation.").should(
      "not.be.visible"
    );
    // Frontend checking of Resend Invite and Cancel Invite buttons
    cy.get("[data-cy=resendInviteDoneButton] button").should("be.visible");
    cy.get("[data-cy=cancelInviteDoneButton] button").should("be.visible");
    cy.get("[data-cy=modal]").within(() => {
      cy.get("button").first().click();
    });
    cy.logout();
    //Login again as the intivation receipent
    cy.server();
    cy.route("POST", Cypress.env("authURL") + "/login").as("loginResponse"); //Alias for Login Route
    cy.login("vansh", "litmus");
    cy.wait("@loginResponse").its("status").should("eq", 200); //Request Done.
    //Assert success
    cy.wait(3000);
    cy.get("[data-cy=headerComponent]").should("be.visible");
    cy.get("[data-cy=sidebarComponent]").should("be.visible");
    cy.get("[data-cy=quickActionCardComponent]").should("be.visible");
    //Go to Settings/Team section
    cy.contains("Settings").click();
    cy.wait(3000);
    cy.contains("My Account").should("be.visible");
    cy.get("[data-cy=teaming]").click();
    cy.get("[data-cy=toolBarComponent]").should("be.visible");
    cy.wait(3000); // CHECK
    cy.get("[data-cy=teaming]").click(); // CHECK
    cy.get("[data-cy=invitationButton]").click();
    cy.get("[data-cy=receivedInvitationAccept] button").click();
    cy.wait(3000);
    //ADD SNACKBAR ASSERTION HERE
    cy.get("[data-cy=modal]").within(() => {
      cy.get("button").first().click();
    });
    //Logout
    cy.logout();
    //Login again as Admin to confirm that member has been added.
    cy.server();
    cy.route("POST", Cypress.env("authURL") + "/login").as("loginResponse"); //Alias for Login Route
    cy.login("admin", "litmus");
    cy.wait("@loginResponse").its("status").should("eq", 200); //Request Done.
    //Assert Login success
    cy.wait(3000);
    cy.get("[data-cy=headerComponent]").should("be.visible");
    cy.get("[data-cy=sidebarComponent]").should("be.visible");
    cy.get("[data-cy=quickActionCardComponent]").should("be.visible");
    //Visit the teaming section and go to "invite a new member"
    cy.contains("Settings").click();
    cy.wait(3000);
    cy.contains("My Account").should("be.visible");
    cy.get("[data-cy=teaming]").click();
    cy.get("[data-cy=toolBarComponent]").should("be.visible");
    cy.get("[data-cy=teamingSearch] input").clear().type("vansh"); //Search teamMember "X" HERE
    cy.get("[data-cy=teamingTableRow]")
      .contains("vansh@gmail.com") //ASSERT HERE
      .should("be.visible");
  });
});
