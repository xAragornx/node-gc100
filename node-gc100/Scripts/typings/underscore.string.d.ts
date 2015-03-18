


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>typescript-node-definitions/underscore.string.d.ts at master · Diullei/typescript-node-definitions</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Diullei/typescript-node-definitions" name="twitter:title" /><meta content="typescript-node-definitions - TypeScript&amp;#39;s typings for some popular node.js modules" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/373936?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/373936?v=3&amp;s=400" property="og:image" /><meta content="Diullei/typescript-node-definitions" property="og:title" /><meta content="https://github.com/Diullei/typescript-node-definitions" property="og:url" /><meta content="typescript-node-definitions - TypeScript&#39;s typings for some popular node.js modules" property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="2F1073DA:730C:796B311:55078623" name="octolytics-dimension-request_id" /><meta content="2362972" name="octolytics-actor-id" /><meta content="xAragornx" name="octolytics-actor-login" /><meta content="35fabbb2f759b7bbc598a10d0a95d03bef24c3fcba6c016775d1e5c267347c71" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="4i0tciX6wMgAfyUXQqW4W6Q5WxagkElLFpFWSA1mx59yEBw5Og3gJLzQwoQuwiqcGBCfsd6OuUTXeI8zVKaRxw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-bb40a9aebece4c9c4c663b86dcbdfa070b4fb344f46e953335ac78df8770e3de.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-58a463b2bc974b96204515f0ee8119f425ef37ad82a71625ed391d994c8d92a5.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="468afcfdb5498790724eb756256558e2">

      
  <meta name="description" content="typescript-node-definitions - TypeScript&#39;s typings for some popular node.js modules">
  <meta name="go-import" content="github.com/Diullei/typescript-node-definitions git https://github.com/Diullei/typescript-node-definitions.git">

  <meta content="373936" name="octolytics-dimension-user_id" /><meta content="Diullei" name="octolytics-dimension-user_login" /><meta content="7370280" name="octolytics-dimension-repository_id" /><meta content="Diullei/typescript-node-definitions" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="6069843" name="octolytics-dimension-repository_parent_id" /><meta content="soywiz/typescript-node-definitions" name="octolytics-dimension-repository_parent_nwo" /><meta content="6069843" name="octolytics-dimension-repository_network_root_id" /><meta content="soywiz/typescript-node-definitions" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Diullei/typescript-node-definitions/commits/master.atom" rel="alternate" title="Recent Commits to typescript-node-definitions:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public fork page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/Diullei/typescript-node-definitions/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/Diullei/typescript-node-definitions/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/xAragornx" data-ga-click="Header, go to profile, text:username">
      <img alt="xAragornx" class="avatar" data-user="2362972" height="20" src="https://avatars3.githubusercontent.com/u/2362972?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">xAragornx</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ii8AgUUJBSB6aRfZn9xqNDivcafScYUmfB9wP4RJwAy4vnnYVuWggNxunHKYIgDgTHPMZ6F+FIkTfXi/56QdnA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SEkI7F+IFgvzvMs+IQ/vw9WEnsGXS8iP/eZXhpcEMX3Mxxn+/gRESYLA89P+1ePxPTlcuuy3LsozPsB408nUzQ==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="7370280" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/Diullei/typescript-node-definitions/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/Diullei/typescript-node-definitions/watchers">
          1
        </a>
        
        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/Diullei/typescript-node-definitions/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="M2iwFt5ql2AFshWjw+ZGIT2/iiyuhlVcY7at2GWBNaS+56Q47Qvm/YW7XQ5QMZVp/oY/YZXLpnzU/XmCYAjPaw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Diullei/typescript-node-definitions"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Diullei/typescript-node-definitions/stargazers">
          0
        </a>
</form>
    <form accept-charset="UTF-8" action="/Diullei/typescript-node-definitions/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Wwr9NhcWd5ZpTRacjAERLkyXZr1UH488h1cCypj4CakqtOOBO0th/+QqNm2S/DwjwWK25FgxyR82TKyh3wVxew==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star Diullei/typescript-node-definitions"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Diullei/typescript-node-definitions/stargazers">
          0
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/Diullei/typescript-node-definitions/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gpkLmTDOakr08TLsCrtO81V/42yZB7KJhjEzU+jn5Ob6vAFm3n1LUH63B1uZIhmRu2B94i6LLkCqHU8xpUsU+Q==" /></div>
            <button
                type="submit"
                class="minibutton with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Diullei/typescript-node-definitions to your account"
                aria-label="Fork your own copy of Diullei/typescript-node-definitions to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/Diullei/typescript-node-definitions/network" class="social-count">82</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author"><a href="/Diullei" class="url fn" itemprop="url" rel="author"><span itemprop="title">Diullei</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/Diullei/typescript-node-definitions" class="js-current-repository" data-pjax="#js-repo-pjax-container">typescript-node-definitions</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/soywiz/typescript-node-definitions">soywiz/typescript-node-definitions</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/Diullei/typescript-node-definitions/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/Diullei/typescript-node-definitions" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Diullei/typescript-node-definitions">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/Diullei/typescript-node-definitions/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /Diullei/typescript-node-definitions/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/Diullei/typescript-node-definitions/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /Diullei/typescript-node-definitions/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/Diullei/typescript-node-definitions/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /Diullei/typescript-node-definitions/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/Diullei/typescript-node-definitions/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /Diullei/typescript-node-definitions/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Diullei/typescript-node-definitions.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:Diullei/typescript-node-definitions.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Diullei/typescript-node-definitions" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="https://windows.github.com" class="minibutton sidebar-button" title="Save Diullei/typescript-node-definitions to your computer and use it in GitHub Desktop." aria-label="Save Diullei/typescript-node-definitions to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/Diullei/typescript-node-definitions/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of Diullei/typescript-node-definitions as a zip file"
                   title="Download the contents of Diullei/typescript-node-definitions as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/Diullei/typescript-node-definitions/blob/9ecb63e4d76bcbc65dddc188a668fbffa510aba9/underscore.string.d.ts" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cb15043f635209d2152ea906ff237c50 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Diullei/typescript-node-definitions/blob/master/underscore.string.d.ts"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/Diullei/typescript-node-definitions/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Diullei/typescript-node-definitions" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">typescript-node-definitions</span></a></span></span><span class="separator">/</span><strong class="final-path">underscore.string.d.ts</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Carlos Ballesteros Velasco" class="avatar" data-user="570848" height="24" src="https://avatars1.githubusercontent.com/u/570848?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/soywiz" rel="contributor">soywiz</a></span>
        <time datetime="2012-10-18T10:58:31Z" is="relative-time">Oct 18, 2012</time>
        <div class="commit-title">
            <a href="/Diullei/typescript-node-definitions/commit/ff6d87ccc773d490d4734b689c6b531de7420b90" class="message" data-pjax="true" title="- Added underscore.string.d.ts from https://github.com/alvivi/typescript-underscore-string/blob/master/underscore.string.d.ts">- Added underscore.string.d.ts from</a> <a href="https://github.com/alvivi/typescript-underscore-string/blob/master/underscore.string.d.ts">https://github.com/alvivi/typescr…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Carlos Ballesteros Velasco" data-user="570848" height="24" src="https://avatars1.githubusercontent.com/u/570848?v=3&amp;s=48" width="24" />
            <a href="/soywiz">soywiz</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">
      <div class="button-group">
        <a href="/Diullei/typescript-node-definitions/raw/master/underscore.string.d.ts" class="minibutton " id="raw-url">Raw</a>
          <a href="/Diullei/typescript-node-definitions/blame/master/underscore.string.d.ts" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/Diullei/typescript-node-definitions/commits/master/underscore.string.d.ts" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw"
           href="https://windows.github.com" aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/Diullei/typescript-node-definitions/edit/master/underscore.string.d.ts" aria-label="Clicking this button will fork this project so you can edit the file" class="tooltipped tooltipped-s inline-form edit-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="XzoTMXJqvtRW1lsx5/XbDUEW3auxnaYNVXOd0bmc01MtHCaVyjBeynlIJ06sr8tNmVjsPVNL25/b8Bjn8rwZ4A==" /></div>
              <button class="web-edit-button"
                      type="submit"
                      data-hotkey="e"
                      data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/Diullei/typescript-node-definitions/delete/master/underscore.string.d.ts" aria-label="Fork this project and delete file" class="tooltipped tooltipped-s inline-form delete-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="miaMZWQcwec6Y2b7LvHzn7FhHPDeC6/iJp1JGYrmIeej47MUd5HhvXrcinHIoJXM6nyPb6lWF2BLJW9hECbuvw==" /></div>
            <button class="web-edit-button"
                    type="submit"
                    data-disable-with>
              <span class="octicon octicon-trashcan "></span>
            </button>
</form>      </a>
    </div><!-- /.actions -->
    <div class="file-info">
        67 lines (65 sloc)
        <span class="file-info-divider"></span>
      4.392 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-typescript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">// https://github.com/epeli/underscore.string</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c">// types grabbed from: https://github.com/alvivi/typescript-underscore-string</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c">   Typescipt Underscore.String 2.3.0-0.1</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c">   (c) 2012 Álvaro Vilanova Vidal</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c">   Typescipt-Underscore-String may be freely distributed under the MIT license.</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-k">declare</span> <span class="pl-st">module</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>underscore.string<span class="pl-pds">&quot;</span></span> {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">numberFormat</span> (<span class="pl-vpf">n</span> : <span class="pl-st">number</span>, <span class="pl-vpf">decimals</span>? : <span class="pl-st">number</span>, <span class="pl-vpf">decimalSeparator</span>? : <span class="pl-st">string</span>, <span class="pl-vpf">orderSeparator</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">levenshtein</span> (<span class="pl-vpf">str1</span> : <span class="pl-st">string</span>, <span class="pl-vpf">str2</span> : <span class="pl-st">string</span>) : <span class="pl-st">number</span>;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">capitalize</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">chop</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">step</span> : <span class="pl-st">number</span>) : <span class="pl-st">string</span>[];</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">clean</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">chars</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>[];</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">swapCase</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">include</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">substr</span> : <span class="pl-st">string</span>) : bool;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">count</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">substr</span> : <span class="pl-st">string</span>) : <span class="pl-st">number</span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">escapeHTML</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">unescapeHTML</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">insert</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">index</span> : <span class="pl-st">number</span>, <span class="pl-vpf">substr</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">isBlank</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : bool;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">join</span> (<span class="pl-vpf">separator</span> : <span class="pl-st">string</span>, ...<span class="pl-vpf">strs</span> : <span class="pl-st">string</span>[]) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">lines</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>[];</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">	<span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">reverse</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">splice</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">index</span> : <span class="pl-st">number</span>, <span class="pl-vpf">howmany</span> : <span class="pl-st">number</span>, <span class="pl-vpf">substr</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">startsWith</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">starts</span> : <span class="pl-st">string</span>) : bool;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">endsWith</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">ends</span> : <span class="pl-st">string</span>) : bool;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">succ</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">titleize</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">camelize</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">classify</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">underscored</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">dasherize</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">humanize</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">trim</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">characters</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">strip</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">characters</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">ltrim</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">characters</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">lstrip</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">characters</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">rtrim</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">characters</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">rstrip</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">characters</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">truncate</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">truncateString</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">prune</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">pruneString</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">words</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">delimiter</span> : <span class="pl-s3">RegExp</span>) : <span class="pl-st">string</span>[];</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">sprintf</span> (<span class="pl-vpf">format</span> : <span class="pl-st">string</span>, ...<span class="pl-vpf">args</span> : any[]) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">pad</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">padStr</span>? : <span class="pl-st">string</span>, <span class="pl-vpf">type</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">lpad</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">padStr</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">rjust</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">padStr</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">rpad</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">padStr</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">ljust</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">padStr</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">lrpad</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">padStr</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">center</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">length</span> : <span class="pl-st">number</span>, <span class="pl-vpf">padStr</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">toNumber</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">decimals</span>? : <span class="pl-st">number</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">strRight</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">pattern</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">strRightBack</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">pattern</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">strLeft</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">pattern</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">strLeftBack</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">pattern</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">stripTags</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">toSentence</span> (<span class="pl-vpf">array</span> : any[], <span class="pl-vpf">delimiter</span>? : <span class="pl-st">string</span>, <span class="pl-vpf">lastDelimiter</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">toSentenceSerial</span> (<span class="pl-vpf">array</span> : any[], <span class="pl-vpf">delimiter</span>? : <span class="pl-st">string</span>, <span class="pl-vpf">lastDelimiter</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">repeat</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">count</span> : <span class="pl-st">number</span>, <span class="pl-vpf">separator</span>? : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">surround</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>, <span class="pl-vpf">wrap</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">quote</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">q</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">    <span class="pl-s">export</span> <span class="pl-st">function</span> <span class="pl-en">slugify</span> (<span class="pl-vpf">str</span> : <span class="pl-st">string</span>) : <span class="pl-st">string</span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">}</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06323s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d2f4f76d6a05f07ed67ef9f94d3823b34f98232770518bc7f8f40de8846ec511.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-91ece02a84d5c082fd9e33151224c3da0d2604a68dade3703dfedf44d75decd4.js"></script>
      
      

  </body>
</html>

