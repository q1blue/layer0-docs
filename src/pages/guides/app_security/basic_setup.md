---
title: Basic Setup
---

Set up {{ PRODUCT_SECURITY }} by defining security rules and then creating a Security Application
configuration that enforces them. After which, perform
near-real-time threat monitoring through the dashboard.

![](/images/app_security/setup_overview.png)

Additional information on each of the above steps is provided below.

-   **Step 1 - Create Security Rules:** Create modular rules (i.e., Access Rules, Rate Rules, Bot Rules, Custom Rules, and Managed Rules) through which you may define security policies for inbound HTTP/HTTPS traffic. These rules identify legitimate traffic or threats through:
    - Access controls (e.g., IP address, country, URL, etc.).
    - Rate limits.
    - Browser challenges.
    - Custom threat detection rules. 
    - Threat detection policies.
-   **Step 2 - Create a Security Application Configuration:** Create a Security Application Configuration that identifies the type of traffic to which your security rules will be applied and how threats will be handled. You may also use it to test new security rules through an audit mode that generates alerts on flagged traffic.
-   **Step 3 - Monitor Threats:** Use the dashboard to:  
    - Visualize threat frequency and timing.  
    - Analyze threats and ensure that legitimate traffic is not impacted.

<Callout type="tip">

  Different applications and types of requests may require varying levels
  of protection. Create security rules and Security Application
  configurations for each use case that requires a unique level of
  protection.

</Callout>


## Threat Detection {/*threat-detection*/}

A Security Application configuration contains security rules that define
the criteria that determine whether traffic is legitimate or a threat.
{{ PRODUCT_SECURITY }} leverages this security configuration and performs a sequential
check for each criterion. An overview of this security check is provided
below.

1.  Does the request meet a whitelist criterion? If so, it is
    considered legitimate and no further checks will be performed.
    
    <Callout type="info">

      A whitelist identifies traffic that should always be considered safe. Traffic may be
      whitelisted by ASN, country, IP address, referrer, URL, user agent,
      HTTP method, media type, and/or file extension.

    </Callout>

2.  Proceed to the next step if the access rule does not contain at
    least one acceslist.

    Does the request satisfy at least one criterion in each defined
    accesslist? If not, then the
    request is identified as a threat and no further checks will be
    performed.

    <Callout type="info">

      An accesslist identifies traffic that may access your
      content upon passing a threat assessment. Traffic may be
      accesslisted by ASN, country, IP address, referrer, URL, user agent,
      HTTP method, media type, and/or file extension.

    </Callout>

3.  Does the request meet a blacklist criterion? If so, it is
    identified as a threat and no further checks will be performed.

    <Callout type="info">

      A blacklist identifies
      traffic that should always be considered malicious. Traffic may be
      blacklisted by ASN, country, IP address, referrer, URL, user agent,
      HTTP method, media type, and/or file extension.

    </Callout>

4.  Has the rate limit been exceeded? If so, then the request is
    identified as a threat and no further checks will be performed.

5.  Was the client able to solve a browser challenge? If not, then the
    request is identified as a threat and no further checks will be
    performed.

6.  The request will undergo threat detection analysis if the 
    Security Application configuration has been assigned a custom rule set. Was a
    rule in the custom rule set satisfied? If so, then the request is
    identified as a threat and no further checks will be performed.

7.  Will the request be served from cache instead of being forwarded to
    an origin server? If so, it is considered legitimate and no further
    checks will be performed.

8.  The request will undergo additional threat detection analysis if the 
    Security Application configuration has been assigned a managed rule set. A
    request will be classified as a threat when the severity and
    frequency of rule violations exceeds the configured threshold.

The above threat detection workflow is illustrated below.

![](/images/app_security/request_screening_workflow.png)

[View image.](/images/app_security/request_screening_workflow.png)

### Managed Rule Violations {/*managed-rule-violations*/}

If other security rules cannot identify whether a
request is legitimate or a threat, then it is up to the Security
Application Manager configuration's managed rule to make that
determination. The request will be evaluated according to a managed
rule's enabled rules and its definition of a valid HTTP request. A
request will not be considered a threat until a threshold of violations
is met. The score assigned to a request is determined according to the
severity and frequency of the violations.

-   **Severity:** Each rule is assigned a severity. Each severity
    is assigned an anomaly score from 2 to 5.

    | Severity | Anomaly Score | Description                                                                   |
    |----------|---------------|-------------------------------------------------------------------------------|
    | Critical | 5             | This severity level is triggered by web attack violations.                    |
    | Error    | 4             | This severity level is reserved for future use.                               |
    | Warning  | 3             | This severity level is triggered by malicious client violations.              |
    | Notice   | 2             | This severity level is generally used to indicate protocol policy violations. |

-   **Frequency:** A threat is identified when the aggregate score
    for all violations meets or exceeds the configured threshold value.
    This allows {{ PRODUCT_SECURITY }} to account for minor violations without forcing it
    to take action for a single offense.

A managed rule may be assigned a threshold value from 2 to 20. However,
the recommended value is 5. A threshold value of 5 triggers threat
identification after a single severe violation or multiple minor
violations. This balanced approach identifies questionable requests
without impacting legitimate traffic.

## Best Practices {/*best-practices*/}

Best practices for setting up {{ PRODUCT_SECURITY }} vary by organization due to a variety
of factors, such as those listed below.

-   **Web Applications:** The type of web applications running on the origin server may affect the level of protection that may be applied through {{ PRODUCT_SECURITY }}.
-   **Traffic Delivery Profile:** The level of security that should be applied to site traffic may vary for a variety of reasons, such as:
    - Public vs. private content that requires authentication
    - Type of application (e.g., CMS vs. non-CMS traffic)  

    Additionally, there may be multiple traffic delivery profiles that are specific to an application, role, or the action being performed.  

    **Sample scenario:** 
 
    Both country and referrer access controls may potentially be applied to a site that requires authentication and only caters to customers in the United States. However, this configuration would be too restrictive for a site that has worldwide users from various traffic sources.
-   **Acceptable Risk:** {{ PRODUCT_SECURITY }} allows the flexibility to determine the degree to which a site will be protected. A balance must be found between security and allowing the flow of legitimate traffic. A major factor in this balancing act is the degree to which an organization is able to cope with risk.

As a result of the above factors, it may make sense to tailor {{ PRODUCT_SECURITY }} by
request type. This may require a Security Application
configuration and security rules for each custom set of security requirements.

## Recommended Setup {/*recommended-setup*/}

The recommended approach for setting up {{ PRODUCT_SECURITY }} is described below.

1.  Create an access rule with a minimal set of whitelisted access
    controls.

2.  Create a managed rule according to [these recommendations](#threat-detection-through-managed-rules).

3.  Create a Security Application configuration that only
    screens traffic for your application. Add the above managed rule and
    access rule. Set their production action to **Alert only**.

4.  Repeat steps 1 - 3 as needed.

5.  After an acceptable period of time has passed (e.g., 24 to 48
    hours), review the alerts logged in the dashboard. Assess whether
    your security policy is too permissive, generates too many false
    positives, or strikes a balance between the two.

    Use the following tips to adjust your configuration:

    -   **Too Permissive:** Close any security loopholes by
        defining additional restrictions within your access rule(s) and
        managed rule(s). If your security policy is still too permisive, 
        define custom threat detection critieria through a custom rule set.

    -   **False Positives:** If you detect that legitimate traffic is 
        being flagged within the dashboard, then you should filter for the alert
        in question, switch to Event Log, expand the alert, and then
        take a look at the **Rule Tags** field to determine
        whether a rule, access control, or a setting was violated. Take
        the following action:

        -   **Managed Rule:** The recommended approach is to avoid
            disabling relevant policies and rules whenever possible. Assess the
            rule that was violated and consider whether the web
            application should be updated to conform to that rule. If
            careful analysis indicates that the security profile must be
            changed, then you should either create a rule exception (recommended) or 
            disable the rule in question.

            Identify a rule through the **Rule Tags**
            and **Rule ID** fields. The **Rule Tags**
            field identifies a policy, while the **Rule ID**
            field provides the identification number for the rule that
            triggered the alert.

            Each policy contains a search feature that finds all rules
            within that policy whose name contains the specified term or
            that are an exact match for the specified ID.

        -   **Delivery Profile:** Consider modifying the delivery
            profile defined within your access rule or managed rule to account for the
            set of traffic being blocked.

    -   **Balanced:** If the current security policy balances security with
        risk tolerance without causing too many false positives, then you should update the 
        Security Application configuration's production action for the access rule and
        managed rule to **Block request**. This will cause {{ PRODUCT_SECURITY }}
        to deny requests that are identified as threats.

### Threat Detection through Managed Rules {/*threat-detection-through-managed-rules*/}

The recommended approach to setting up a profile's rule set is to:

-   Set the detection threshold to a level that balances security with
    risk tolerance. The appropriate value for this threshold will vary
    according to the set of enabled policies/rules and your traffic
    profile.

    <Callout type="tip">

      The detection threshold fine tunes threat detection to balance
      security requirements with risk tolerance. For example, this
      detection threshold may need to be increased if a significant number
      of false positives are detected upon activating an instance
      associated with this profile.

    </Callout>

-   Enable as many relevant policies and rules as possible.

-   Disable all policies and rules that are inapplicable. This step is
    crucial for performance.

    <Callout type="tip">

      One way to deal with false positive alerts is to check to see whether
      the corresponding web application or the site's source code may be
      modified to bring it into compliance with the offending rule.

    </Callout>

### Access Controls {/*access-controls*/}

Use an access rule to define access controls for URLs, countries, IP addresses, etc.

-   **Whitelist:** Use a whitelist sparingly to always allow traffic from a trusted source.

    <Callout type="tip">

      Whitelisting traffic should only be performed after careful consideration and with extreme caution. Whitelisted traffic will not be screened and therefore creates a launching point for a potential attack on your applications and web servers.

    </Callout>

-   **Accesslist:** The recommended approach for traffic from trusted sources is 
    to identify it through an accesslist. This approach allows that trafic after 
    it passes a threat assessment.
-   **Blacklist:** The recommended approach for unwanted traffic is to identify 
    it through a blacklist. Traffic identified through a blacklist can be blocked
    through your Security Application configuration.