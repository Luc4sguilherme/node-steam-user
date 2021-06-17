/// <reference types="node" />

import { EventEmitter } from "events";
import * as SteamID from "steamid";

declare namespace SteamUser {
	enum E_STAR_GlyphWriteResult {
		_Success = 0,
		_InvalidMessage = 1,
		_InvalidJSON = 2,
		_SQLError = 3,
	}

	enum EAccountFlags {
		NormalUser = 0,
		PersonaNameSet = 1,
		Unbannable = 2,
		PasswordSet = 4,
		Support = 8,
		Admin = 16,
		Supervisor = 32,
		AppEditor = 64,
		HWIDSet = 128,
		PersonalQASet = 256,
		VacBeta = 512,
		Debug = 1024,
		Disabled = 2048,
		LimitedUser = 4096,
		LimitedUserForce = 8192,
		EmailValidated = 16384,
		MarketingTreatment = 32768,
		OGGInviteOptOut = 65536,
		ForcePasswordChange = 131072,
		ForceEmailVerification = 262144,
		LogonExtraSecurity = 524288,
		LogonExtraSecurityDisabled = 1048576,
		Steam2MigrationComplete = 2097152,
		NeedLogs = 4194304,
		Lockdown = 8388608,
		MasterAppEditor = 16777216,
		BannedFromWebAPI = 33554432,
		ClansOnlyFromFriends = 67108864,
		GlobalModerator = 134217728,
		ParentalSettings = 268435456,
		ThirdPartySupport = 536870912,
		NeedsSSANextSteamLogon = 1073741824,
	}

	enum EAccountType {
		Invalid = 0,
		Individual = 1,
		Multiseat = 2,
		GameServer = 3,
		AnonGameServer = 4,
		Pending = 5,
		ContentServer = 6,
		Clan = 7,
		Chat = 8,
		ConsoleUser = 9,
		AnonUser = 10,
	}

	enum EActivationCodeClass {
		WonCDKey = 0,
		ValveCDKey = 1,
		Doom3CDKey = 2,
		DBLookup = 3,
		Steam2010Key = 4,
		Max = 5,
		Test = 2147483647,
		Invalid = 4294967295,
	}

	enum EAppAssociationType {
		Invalid = 0,
		Publisher = 1,
		Developer = 2,
		Franchise = 3,
	}

	enum EAppControllerSupportLevel {
		None = 0,
		Partial = 1,
		Full = 2,
	}

	enum EAppInfoSection {
		Unknown = 0,
		All = 1,
		First = 2,
		Common = 2,
		Extended = 3,
		Config = 4,
		Stats = 5,
		Install = 6,
		Depots = 7,
		VAC = 8,
		DRM = 9,
		UFS = 10,
		OGG = 11,
		Items = 12,
		Policies = 13,
		SysReqs = 14,
		Community = 15,
		Store = 16,
		Localization = 17,
		Broadcastgamedata = 18,
		Computed = 19,
		Albummetadata = 20,
	}

	enum EAppType {
		Invalid = 0,
		Game = 1,
		Application = 2,
		Tool = 4,
		Demo = 8,
		Deprected = 16,
		DLC = 32,
		Guide = 64,
		Driver = 128,
		Config = 256,
		Hardware = 512,
		Franchise = 1024,
		Video = 2048,
		Plugin = 4096,
		Music = 8192,
		Series = 16384,
		Comic = 32768,
		Beta = 65536,
		Shortcut = 1073741824,
		DepotOnly = -2147483648,
	}

	enum EAppUsageEvent {
		GameLaunch = 1,
		GameLaunchTrial = 2,
		Media = 3,
		PreloadStart = 4,
		PreloadFinish = 5,
		MarketingMessageView = 6,
		InGameAdViewed = 7,
		GameLaunchFreeWeekend = 8,
	}

	enum EAudioFormat {
		"None" = 0,
		"16BitLittleEndian" = 1,
		"Float" = 2,
	}

	enum EAuthSessionResponse {
		OK = 0,
		UserNotConnectedToSteam = 1,
		NoLicenseOrExpired = 2,
		VACBanned = 3,
		LoggedInElseWhere = 4,
		VACCheckTimedOut = 5,
		AuthTicketCanceled = 6,
		AuthTicketInvalidAlreadyUsed = 7,
		AuthTicketInvalid = 8,
		PublisherIssuedBan = 9,
	}

	enum EBillingType {
		NoCost = 0,
		BillOnceOnly = 1,
		BillMonthly = 2,
		ProofOfPrepurchaseOnly = 3,
		GuestPass = 4,
		HardwarePromo = 5,
		Gift = 6,
		AutoGrant = 7,
		OEMTicket = 8,
		RecurringOption = 9,
		BillOnceOrCDKey = 10,
		Repurchaseable = 11,
		FreeOnDemand = 12,
		Rental = 13,
		CommercialLicense = 14,
		FreeCommercialLicense = 15,
		NumBillingTypes = 16,
	}

	enum EBroadcastChatPermission {
		Public = 0,
		OwnsApp = 1,
	}

	enum EBroadcastWatchLocation {
		Invalid = 0,
		SteamTV_Tab = 1,
		SteamTV_WatchParty = 2,
		Chat_Tab = 3,
		Chat_WatchParty = 4,
		CommunityPage = 5,
		StoreAppPage = 6,
		InGame = 7,
		BigPicture = 8,
		SalesPage = 9,
		CuratorPage = 10,
		DeveloperPage = 11,
		Chat_Friends = 12,
		SteamTV_Web = 13,
	}

	enum EChatAction {
		InviteChat = 1,
		Kick = 2,
		Ban = 3,
		UnBan = 4,
		StartVoiceSpeak = 5,
		EndVoiceSpeak = 6,
		LockChat = 7,
		UnlockChat = 8,
		CloseChat = 9,
		SetJoinable = 10,
		SetUnjoinable = 11,
		SetOwner = 12,
		SetInvisibleToFriends = 13,
		SetVisibleToFriends = 14,
		SetModerated = 15,
		SetUnmoderated = 16,
	}

	enum EChatActionResult {
		Success = 1,
		Error = 2,
		NotPermitted = 3,
		NotAllowedOnClanMember = 4,
		NotAllowedOnBannedUser = 5,
		NotAllowedOnChatOwner = 6,
		NotAllowedOnSelf = 7,
		ChatDoesntExist = 8,
		ChatFull = 9,
		VoiceSlotsFull = 10,
	}

	enum EChatEntryType {
		Invalid = 0,
		ChatMsg = 1,
		Typing = 2,
		InviteGame = 3,
		Emote = 4,
		LobbyGameStart = 5,
		LeftConversation = 6,
		Entered = 7,
		WasKicked = 8,
		WasBanned = 9,
		Disconnected = 10,
		HistoricalChat = 11,
		Reserved1 = 12,
		Reserved2 = 13,
		LinkBlocked = 14,
	}

	enum EChatFlags {
		Locked = 1,
		InvisibleToFriends = 2,
		Moderated = 4,
		Unjoinable = 8,
	}

	enum EChatInfoType {
		StateChange = 1,
		InfoUpdate = 2,
		MemberLimitChange = 3,
	}

	enum EChatMemberStateChange {
		Entered = 1,
		Left = 2,
		Disconnected = 4,
		Kicked = 8,
		Banned = 16,
		VoiceSpeaking = 4096,
		VoiceDoneSpeaking = 8192,
	}

	enum EChatPermission {
		Close = 1,
		Invite = 2,
		Talk = 8,
		Kick = 16,
		Mute = 32,
		SetMetadata = 64,
		ChangePermissions = 128,
		Ban = 256,
		ChangeAccess = 512,
		Mask = 1019,
	}

	enum EChatRoomEnterResponse {
		Success = 1,
		DoesntExist = 2,
		NotAllowed = 3,
		Full = 4,
		Error = 5,
		Banned = 6,
		Limited = 7,
		ClanDisabled = 8,
		CommunityBan = 9,
		MemberBlockedYou = 10,
		YouBlockedMember = 11,
		NoRankingDataLobby = 12,
		NoRankingDataUser = 13,
		RankOutOfRange = 14,
	}

	enum EChatRoomGroupAction {
		Default = 0,
		CreateRenameDeleteChannel = 1,
		Kick = 2,
		Ban = 3,
		Invite = 4,
		ChangeTaglineAvatarName = 5,
		Chat = 6,
		ViewHistory = 7,
		ChangeGroupRoles = 8,
		ChangeUserRoles = 9,
		MentionAll = 10,
		SetWatchingBroadcast = 11,
	}

	enum EChatRoomGroupPermissions {
		Default = 0,
		Valid = 1,
		CanInvite = 2,
		CanKick = 4,
		CanBan = 8,
		CanAdminChannel = 16,
	}

	enum EChatRoomGroupRank {
		Default = 0,
		Viewer = 10,
		Guest = 15,
		Member = 20,
		Moderator = 30,
		Officer = 40,
		Owner = 50,
	}

	enum EChatRoomGroupType {
		Default = 0,
		Unmoderated = 1,
	}

	enum EChatRoomJoinState {
		Default = 0,
		None = 1,
		Joined = 2,
	}

	enum EChatRoomMemberStateChange {
		Invalid = 0,
		Joined = 1,
		Parted = 2,
		Kicked = 3,
		Invited = 4,
		RankChanged = 7,
		InviteDismissed = 8,
		Muted = 9,
		Banned = 10,
		RolesChanged = 12,
	}

	enum EChatRoomNotificationLevel {
		Invalid = 0,
		None = 1,
		MentionMe = 2,
		MentionAll = 3,
		AllMessages = 4,
	}

	enum EChatRoomServerMessage {
		Invalid = 0,
		RenameChatRoom = 1,
		Joined = 2,
		Parted = 3,
		Kicked = 4,
		Invited = 5,
		InviteDismissed = 8,
		ChatRoomTaglineChanged = 9,
		ChatRoomAvatarChanged = 10,
		AppCustom = 11,
	}

	enum EChatRoomServerMsg {
		Invalid = 0,
		RenameChatRoom = 1,
		Joined = 2,
		Parted = 3,
		Kicked = 4,
		Invited = 5,
		InviteDismissed = 8,
		ChatRoomTaglineChanged = 9,
		ChatRoomAvatarChanged = 10,
		AppCustom = 11,
	}

	enum EChatRoomType {
		Friend = 1,
		MUC = 2,
		Lobby = 3,
	}

	enum EClanPermission {
		Nobody = 0,
		Owner = 1,
		Officer = 2,
		OwnerAndOfficer = 3,
		Member = 4,
		Moderator = 8,
		OGGGameOwner = 16,
		NonMember = 128,
	}

	enum EClanRank {
		None = 0,
		Owner = 1,
		Officer = 2,
		Member = 3,
		Moderator = 4,
	}

	enum EClanRelationship {
		None = 0,
		Blocked = 1,
		Invited = 2,
		Member = 3,
		Kicked = 4,
		KickAcknowledged = 5,
		PendingApproval = 6,
		RequestDenied = 7,
	}

	enum EClientPersonaStateFlag {
		Status = 1,
		PlayerName = 2,
		QueryPort = 4,
		SourceID = 8,
		Presence = 16,
		Metadata = 32,
		LastSeen = 64,
		UserClanRank = 128,
		GameExtraInfo = 256,
		GameDataBlob = 512,
		ClanData = 1024,
		Facebook = 2048,
		RichPresence = 4096,
		Broadcast = 8192,
		Watching = 16384,
	}

	enum EClientStat {
		P2PConnectionsUDP = 0,
		P2PConnectionsRelay = 1,
		P2PGameConnections = 2,
		P2PVoiceConnections = 3,
		BytesDownloaded = 4,
	}

	enum EClientStatAggregateMethod {
		LatestOnly = 0,
		Sum = 1,
		Event = 2,
		Scalar = 3,
	}

	enum EContentDeltaChunkDataLocation {
		InProtobuf = 0,
		AfterProtobuf = 1,
	}

	enum EContentDownloadSourceType {
		Invalid = 0,
		CS = 1,
		CDN = 2,
		LCS = 3,
		ProxyCache = 4,
		LANPeer = 5,
		SLS = 6,
		SteamCache = 7,
		OpenCache = 8,
		LANCache = 9,
	}

	enum EControllerElementType {
		None = -1,
		Thumb = 0,
		ButtonSteam = 1,
		JoystickLeft = 2,
		ButtonJoystickLeft = 3,
		JoystickRight = 4,
		ButtonJoystickRight = 5,
		DPad = 6,
		ButtonA = 7,
		ButtonB = 8,
		ButtonX = 9,
		ButtonY = 10,
		ButtonSelect = 11,
		ButtonStart = 12,
		ButtonTriggerLeft = 13,
		ButtonTriggerRight = 14,
		ButtonBumperLeft = 15,
		ButtonBumperRight = 16,
		ButtonMacro0 = 17,
		ButtonMacro1 = 18,
		ButtonMacro2 = 19,
		ButtonMacro3 = 20,
		ButtonMacro4 = 21,
		ButtonMacro5 = 22,
		ButtonMacro6 = 23,
		ButtonMacro7 = 24,
		TrackpadCenter = 25,
		TrackpadLeft = 26,
		TrackpadRight = 27,
		Keyboard = 28,
		MagnifyingGlass = 29,
		ButtonMacro1Finger = 30,
		ButtonMacro2Finger = 31,
		RecordInput = 32,
		PlaybackInput = 33,
		Paste = 34,
		Max = 35,
	}

	enum EControllerLayoutType {
		Phone = 0,
		Tablet = 1,
	}

	enum EDenyReason {
		InvalidVersion = 1,
		Generic = 2,
		NotLoggedOn = 3,
		NoLicense = 4,
		Cheater = 5,
		LoggedInElseWhere = 6,
		UnknownText = 7,
		IncompatibleAnticheat = 8,
		MemoryCorruption = 9,
		IncompatibleSoftware = 10,
		SteamConnectionLost = 11,
		SteamConnectionError = 12,
		SteamResponseTimedOut = 13,
		SteamValidationStalled = 14,
		SteamOwnerLeftGuestUser = 15,
	}

	enum EDepotFileFlag {
		UserConfig = 1,
		VersionedUserConfig = 2,
		Encrypted = 4,
		ReadOnly = 8,
		Hidden = 16,
		Executable = 32,
		Directory = 64,
		CustomExecutable = 128,
		InstallScript = 256,
		Symlink = 512,
	}

	enum EDisplayStatus {
		Invalid = 0,
		Launching = 1,
		Uninstalling = 2,
		Installing = 3,
		Running = 4,
		Validating = 5,
		Updating = 6,
		Downloading = 7,
		Synchronizing = 8,
		ReadyToInstall = 9,
		ReadyToPreload = 10,
		ReadyToLaunch = 11,
		RegionRestricted = 12,
		PresaleOnly = 13,
		InvalidPlatform = 14,
		ParentalBlocked = 15,
		PreloadOnly = 16,
		BorrowerLocked = 17,
		UpdatePaused = 18,
		UpdateQueued = 19,
		UpdateRequired = 20,
		UpdateDisabled = 21,
		DownloadPaused = 22,
		DownloadQueued = 23,
		DownloadRequired = 24,
		DownloadDisabled = 25,
		LicensePending = 26,
		LicenseExpired = 27,
		AvailForFree = 28,
		AvailToBorrow = 29,
		AvailGuestPass = 30,
		Purchase = 31,
	}

	enum EDRMBlobDownloadErrorDetail {
		None = 0,
		DownloadFailed = 1,
		TargetLocked = 2,
		OpenZip = 3,
		ReadZipDirectory = 4,
		UnexpectedZipEntry = 5,
		UnzipFullFile = 6,
		UnknownBlobType = 7,
		UnzipStrips = 8,
		UnzipMergeGuid = 9,
		UnzipSignature = 10,
		ApplyStrips = 11,
		ApplyMergeGuid = 12,
		ApplySignature = 13,
		AppIdMismatch = 14,
		AppIdUnexpected = 15,
		AppliedSignatureCorrupt = 16,
		ApplyValveSignatureHeader = 17,
		UnzipValveSignatureHeader = 18,
		PathManipulationError = 19,
		TargetLocked_Base = 65536,
		TargetLocked_Max = 131071,
		NextBase = 131072,
	}

	enum EDRMBlobDownloadType {
		Error = 0,
		File = 1,
		Parts = 2,
		Compressed = 4,
		AllMask = 7,
		IsJob = 8,
		HighPriority = 16,
		AddTimestamp = 32,
		LowPriority = 64,
	}

	enum EEconTradeResponse {
		Accepted = 0,
		Declined = 1,
		TradeBannedInitiator = 2,
		TradeBannedTarget = 3,
		TargetAlreadyTrading = 4,
		Disabled = 5,
		NotLoggedIn = 6,
		Cancel = 7,
		TooSoon = 8,
		TooSoonPenalty = 9,
		ConnectionFailed = 10,
		AlreadyTrading = 11,
		AlreadyHasTradeRequest = 12,
		NoResponse = 13,
		CyberCafeInitiator = 14,
		CyberCafeTarget = 15,
		SchoolLabInitiator = 16,
		SchoolLabTarget = 16,
		InitiatorBlockedTarget = 18,
		InitiatorNeedsVerifiedEmail = 20,
		InitiatorNeedsSteamGuard = 21,
		TargetAccountCannotTrade = 22,
		InitiatorSteamGuardDuration = 23,
		InitiatorPasswordResetProbation = 24,
		InitiatorNewDeviceCooldown = 25,
		InitiatorSentInvalidCookie = 26,
		NeedsEmailConfirmation = 27,
		InitiatorRecentEmailChange = 28,
		NeedsMobileConfirmation = 29,
		TradingHoldForClearedTradeOffersInitiator = 30,
		WouldExceedMaxAssetCount = 31,
		DisabledInRegion = 32,
		DisabledInPartnerRegion = 33,
		OKToDeliver = 50,
	}

	enum EExternalAccountType {
		k_EExternalNone = 0,
		k_EExternalSteamAccount = 1,
		k_EExternalGoogleAccount = 2,
		k_EExternalFacebookAccount = 3,
		k_EExternalTwitterAccount = 4,
		k_EExternalTwitchAccount = 5,
		k_EExternalYouTubeChannelAccount = 6,
		k_EExternalFacebookPage = 7,
	}

	enum EFrameAccumulatedStat {
		FPS = 0,
		CaptureDurationMS = 1,
		ConvertDurationMS = 2,
		EncodeDurationMS = 3,
		SteamDurationMS = 4,
		ServerDurationMS = 5,
		NetworkDurationMS = 6,
		DecodeDurationMS = 7,
		DisplayDurationMS = 8,
		ClientDurationMS = 9,
		FrameDurationMS = 10,
		InputLatencyMS = 11,
		GameLatencyMS = 12,
		RoundTripLatencyMS = 13,
		PingTimeMS = 14,
		ServerBitrateKbitPerSec = 15,
		ClientBitrateKbitPerSec = 16,
		LinkBandwidthKbitPerSec = 17,
		PacketLossPercentage = 18,
	}

	enum EFriendFlags {
		None = 0,
		Blocked = 1,
		FriendshipRequested = 2,
		Immediate = 4,
		ClanMember = 8,
		OnGameServer = 16,
		RequestingFriendship = 128,
		RequestingInfo = 256,
		Ignored = 512,
		IgnoredFriend = 1024,
		Suggested = 2048,
		ChatMember = 4096,
		FlagAll = 65535,
	}

	enum EFriendRelationship {
		None = 0,
		Blocked = 1,
		RequestRecipient = 2,
		Friend = 3,
		RequestInitiator = 4,
		Ignored = 5,
		IgnoredFriend = 6,
		SuggestedFriend = 7,
	}

	enum EGameSearchAction {
		None = 0,
		Accept = 1,
		Decline = 2,
		Cancel = 3,
	}

	enum EGameSearchResult {
		Invalid = 0,
		SearchInProgress = 1,
		SearchFailedNoHosts = 2,
		SearchGameFound = 3,
		SearchCompleteAccepted = 4,
		SearchCompleteDeclined = 5,
		SearchCanceled = 6,
	}

	enum EHIDDeviceDisconnectMethod {
		Unknown = 0,
		Bluetooth = 1,
		FeatureReport = 2,
		OutputReport = 3,
	}

	enum EHIDDeviceLocation {
		Local = 0,
		Remote = 2,
		Any = 3,
	}

	enum EInputMode {
		Unknown = 0,
		Mouse = 1,
		Controller = 2,
		MouseAndController = 3,
	}

	enum EInternalAccountType {
		k_EInternalSteamAccountType = 1,
		k_EInternalClanType = 2,
		k_EInternalAppType = 3,
		k_EInternalBroadcastChannelType = 4,
	}

	enum EIntroducerRouting {
		FileShare = 0,
		P2PVoiceChat = 1,
		P2PNetworking = 2,
	}

	enum EJSRegisterMethodType {
		Invalid = 0,
		Function = 1,
		Callback = 2,
		Promise = 3,
	}

	enum EKeyEscrowUsage {
		StreamingDevice = 0,
	}

	enum ELauncherType {
		Default = 0,
		PerfectWorld = 1,
		Nexon = 2,
		CmdLine = 3,
		CSGO = 4,
		ClientUI = 5,
		Headless = 6,
		SteamChina = 7,
		SingleApp = 8,
	}

	enum ELeaderboardDataRequest {
		Global = 0,
		GlobalAroundUser = 1,
		Friends = 2,
		Users = 3,
	}

	enum ELeaderboardDisplayType {
		None = 0,
		Numeric = 1,
		TimeSeconds = 2,
		TimeMilliSeconds = 3,
	}

	enum ELeaderboardSortMethod {
		None = 0,
		Ascending = 1,
		Descending = 2,
	}

	enum ELeaderboardUploadScoreMethod {
		None = 0,
		KeepBest = 1,
		ForceUpdate = 2,
	}

	enum ELicenseFlags {
		None = 0,
		Renew = 1,
		RenewalFailed = 2,
		Pending = 4,
		Expired = 8,
		CancelledByUser = 16,
		CancelledByAdmin = 32,
		LowViolenceContent = 64,
		ImportedFromSteam2 = 128,
		ForceRunRestriction = 256,
		RegionRestrictionExpired = 512,
		CancelledByFriendlyFraudLock = 1024,
		NotActivated = 2048,
	}

	enum ELicenseType {
		NoLicense = 0,
		SinglePurchase = 1,
		SinglePurchaseLimitedUse = 2,
		RecurringCharge = 3,
		RecurringChargeLimitedUse = 4,
		RecurringChargeLimitedUseWithOverages = 5,
		RecurringOption = 6,
		LimitedUseDelayedActivation = 7,
	}

	enum ELobbyComparison {
		EqualToOrLessThan = -2,
		LessThan = -1,
		Equal = 0,
		GreaterThan = 1,
		EqualToOrGreaterThan = 2,
		NotEqual = 3,
	}

	enum ELobbyFilterType {
		String = 0,
		Numerical = 1,
		SlotsAvailable = 2,
		NearValue = 3,
		Distance = 4,
	}

	enum ELobbyStatus {
		Invalid = 0,
		Exists = 1,
		DoesNotExist = 2,
		NotAMember = 3,
	}

	enum ELobbyType {
		Private = 0,
		FriendsOnly = 1,
		Public = 2,
		Invisible = 3,
		PrivateUnique = 4,
	}

	enum ELogFileType {
		SystemBoot = 0,
		SystemReset = 1,
		SystemDebug = 2,
	}

	enum EMarketingMessageFlags {
		None = 0,
		HighPriority = 1,
		PlatformWindows = 2,
		PlatformMac = 4,
		PlatformLinux = 8,
	}

	enum EMMSLobbyStatus {
		Invalid = 0,
		Exists = 1,
		DoesNotExist = 2,
		NotAMember = 3,
	}

	enum EMouseMode {
		Unknown = 0,
		RelativeCursor = 1,
		AbsoluteCursor = 2,
		Touch = 3,
		Relative = 4,
	}

	enum EMsg {
		Invalid = 0,
		Multi = 1,
		ProtobufWrapped = 2,
		BaseGeneral = 100,
		GenericReply = 100,
		DestJobFailed = 113,
		Alert = 115,
		SCIDRequest = 120,
		SCIDResponse = 121,
		JobHeartbeat = 123,
		HubConnect = 124,
		Subscribe = 126,
		RouteMessage = 127,
		WGRequest = 130,
		WGResponse = 131,
		KeepAlive = 132,
		WebAPIJobRequest = 133,
		WebAPIJobResponse = 134,
		ClientSessionStart = 135,
		ClientSessionEnd = 136,
		ClientSessionUpdate = 137,
		Ping = 139,
		PingResponse = 140,
		Stats = 141,
		RequestFullStatsBlock = 142,
		LoadDBOCacheItem = 143,
		LoadDBOCacheItemResponse = 144,
		InvalidateDBOCacheItems = 145,
		ServiceMethod = 146,
		ServiceMethodResponse = 147,
		ClientPackageVersions = 148,
		TimestampRequest = 149,
		TimestampResponse = 150,
		ServiceMethodCallFromClient = 151,
		ServiceMethodSendToClient = 152,
		BaseShell = 200,
		AssignSysID = 200,
		Exit = 201,
		DirRequest = 202,
		DirResponse = 203,
		ZipRequest = 204,
		ZipResponse = 205,
		UpdateRecordResponse = 215,
		UpdateCreditCardRequest = 221,
		UpdateUserBanResponse = 225,
		PrepareToExit = 226,
		ContentDescriptionUpdate = 227,
		TestResetServer = 228,
		UniverseChanged = 229,
		ShellConfigInfoUpdate = 230,
		RequestWindowsEventLogEntries = 233,
		ProvideWindowsEventLogEntries = 234,
		ShellSearchLogs = 235,
		ShellSearchLogsResponse = 236,
		ShellCheckWindowsUpdates = 237,
		ShellCheckWindowsUpdatesResponse = 238,
		TestFlushDelayedSQL = 240,
		TestFlushDelayedSQLResponse = 241,
		EnsureExecuteScheduledTask_TEST = 242,
		EnsureExecuteScheduledTaskResponse_TEST = 243,
		UpdateScheduledTaskEnableState_TEST = 244,
		UpdateScheduledTaskEnableStateResponse_TEST = 245,
		ContentDescriptionDeltaUpdate = 246,
		BaseGM = 300,
		Heartbeat = 300,
		ShellFailed = 301,
		ExitShells = 307,
		ExitShell = 308,
		GracefulExitShell = 309,
		LicenseProcessingComplete = 316,
		SetTestFlag = 317,
		QueuedEmailsComplete = 318,
		GMReportPHPError = 319,
		GMDRMSync = 320,
		PhysicalBoxInventory = 321,
		UpdateConfigFile = 322,
		TestInitDB = 323,
		GMWriteConfigToSQL = 324,
		GMLoadActivationCodes = 325,
		GMQueueForFBS = 326,
		GMSchemaConversionResults = 327,
		GMWriteShellFailureToSQL = 329,
		GMWriteStatsToSOS = 330,
		GMGetServiceMethodRouting = 331,
		GMGetServiceMethodRoutingResponse = 332,
		GMConvertUserWallets = 333,
		GMTestNextBuildSchemaConversion = 334,
		GMTestNextBuildSchemaConversionResponse = 335,
		ExpectShellRestart = 336,
		HotFixProgress = 337,
		BaseAIS = 400,
		AISRequestContentDescription = 402,
		AISUpdateAppInfo = 403,
		AISGetPackageChangeNumber = 405,
		AISGetPackageChangeNumberResponse = 406,
		AIGetAppGCFlags = 423,
		AIGetAppGCFlagsResponse = 424,
		AIGetAppList = 425,
		AIGetAppListResponse = 426,
		AISGetCouponDefinition = 429,
		AISGetCouponDefinitionResponse = 430,
		AISUpdateSlaveContentDescription = 431,
		AISUpdateSlaveContentDescriptionResponse = 432,
		AISTestEnableGC = 433,
		BaseAM = 500,
		AMUpdateUserBanRequest = 504,
		AMAddLicense = 505,
		AMSendSystemIMToUser = 508,
		AMExtendLicense = 509,
		AMAddMinutesToLicense = 510,
		AMCancelLicense = 511,
		AMInitPurchase = 512,
		AMPurchaseResponse = 513,
		AMGetFinalPrice = 514,
		AMGetFinalPriceResponse = 515,
		AMGetLegacyGameKey = 516,
		AMGetLegacyGameKeyResponse = 517,
		AMFindHungTransactions = 518,
		AMSetAccountTrustedRequest = 519,
		AMCancelPurchase = 522,
		AMNewChallenge = 523,
		AMLoadOEMTickets = 524,
		AMFixPendingPurchase = 525,
		AMFixPendingPurchaseResponse = 526,
		AMIsUserBanned = 527,
		AMRegisterKey = 528,
		AMLoadActivationCodes = 529,
		AMLoadActivationCodesResponse = 530,
		AMLookupKeyResponse = 531,
		AMLookupKey = 532,
		AMChatCleanup = 533,
		AMClanCleanup = 534,
		AMFixPendingRefund = 535,
		AMReverseChargeback = 536,
		AMReverseChargebackResponse = 537,
		AMClanCleanupList = 538,
		AMGetLicenses = 539,
		AMGetLicensesResponse = 540,
		AMSendCartRepurchase = 541,
		AMSendCartRepurchaseResponse = 542,
		AllowUserToPlayQuery = 550,
		AllowUserToPlayResponse = 551,
		AMVerfiyUser = 552,
		AMClientNotPlaying = 553,
		AMClientRequestFriendship = 554,
		AMRelayPublishStatus = 555,
		AMInitPurchaseResponse = 560,
		AMRevokePurchaseResponse = 561,
		AMRefreshGuestPasses = 563,
		AMGrantGuestPasses = 566,
		AMClanDataUpdated = 567,
		AMReloadAccount = 568,
		AMClientChatMsgRelay = 569,
		AMChatMulti = 570,
		AMClientChatInviteRelay = 571,
		AMChatInvite = 572,
		AMClientJoinChatRelay = 573,
		AMClientChatMemberInfoRelay = 574,
		AMPublishChatMemberInfo = 575,
		AMClientAcceptFriendInvite = 576,
		AMChatEnter = 577,
		AMClientPublishRemovalFromSource = 578,
		AMChatActionResult = 579,
		AMFindAccounts = 580,
		AMFindAccountsResponse = 581,
		AMRequestAccountData = 582,
		AMRequestAccountDataResponse = 583,
		AMSetAccountFlags = 584,
		AMCreateClan = 586,
		AMCreateClanResponse = 587,
		AMGetClanDetails = 588,
		AMGetClanDetailsResponse = 589,
		AMSetPersonaName = 590,
		AMSetAvatar = 591,
		AMAuthenticateUser = 592,
		AMAuthenticateUserResponse = 593,
		AMP2PIntroducerMessage = 596,
		ClientChatAction = 597,
		AMClientChatActionRelay = 598,
		BaseVS = 600,
		ReqChallenge = 600,
		VACResponse = 601,
		ReqChallengeTest = 602,
		VSMarkCheat = 604,
		VSAddCheat = 605,
		VSPurgeCodeModDB = 606,
		VSGetChallengeResults = 607,
		VSChallengeResultText = 608,
		VSReportLingerer = 609,
		VSRequestManagedChallenge = 610,
		VSLoadDBFinished = 611,
		BaseDRMS = 625,
		DRMBuildBlobRequest = 628,
		DRMBuildBlobResponse = 629,
		DRMResolveGuidRequest = 630,
		DRMResolveGuidResponse = 631,
		DRMVariabilityReport = 633,
		DRMVariabilityReportResponse = 634,
		DRMStabilityReport = 635,
		DRMStabilityReportResponse = 636,
		DRMDetailsReportRequest = 637,
		DRMDetailsReportResponse = 638,
		DRMProcessFile = 639,
		DRMAdminUpdate = 640,
		DRMAdminUpdateResponse = 641,
		DRMSync = 642,
		DRMSyncResponse = 643,
		DRMProcessFileResponse = 644,
		DRMEmptyGuidCache = 645,
		DRMEmptyGuidCacheResponse = 646,
		BaseCS = 650,
		BaseClient = 700,
		ClientHeartBeat = 703,
		ClientVACResponse = 704,
		ClientLogOff = 706,
		ClientNoUDPConnectivity = 707,
		ClientConnectionStats = 710,
		ClientPingResponse = 712,
		ClientRemoveFriend = 714,
		ClientGamesPlayedNoDataBlob = 715,
		ClientChangeStatus = 716,
		ClientVacStatusResponse = 717,
		ClientFriendMsg = 718,
		ClientSystemIM = 726,
		ClientSystemIMAck = 727,
		ClientGetLicenses = 728,
		ClientGetLegacyGameKey = 730,
		ClientAckVACBan2 = 732,
		ClientGetPurchaseReceipts = 736,
		ClientAckGuestPass = 740,
		ClientRedeemGuestPass = 741,
		ClientGamesPlayed = 742,
		ClientRegisterKey = 743,
		ClientInviteUserToClan = 744,
		ClientAcknowledgeClanInvite = 745,
		ClientPurchaseWithMachineID = 746,
		ClientAppUsageEvent = 747,
		ClientLogOnResponse = 751,
		ClientSetHeartbeatRate = 755,
		ClientLoggedOff = 757,
		GSApprove = 758,
		GSDeny = 759,
		GSKick = 760,
		ClientCreateAcctResponse = 761,
		ClientPurchaseResponse = 763,
		ClientPing = 764,
		ClientNOP = 765,
		ClientPersonaState = 766,
		ClientFriendsList = 767,
		ClientAccountInfo = 768,
		ClientNewsUpdate = 771,
		ClientGameConnectDeny = 773,
		GSStatusReply = 774,
		ClientGameConnectTokens = 779,
		ClientLicenseList = 780,
		ClientVACBanStatus = 782,
		ClientCMList = 783,
		ClientEncryptPct = 784,
		ClientGetLegacyGameKeyResponse = 785,
		ClientAddFriend = 791,
		ClientAddFriendResponse = 792,
		ClientAckGuestPassResponse = 796,
		ClientRedeemGuestPassResponse = 797,
		ClientUpdateGuestPassesList = 798,
		ClientChatMsg = 799,
		ClientChatInvite = 800,
		ClientJoinChat = 801,
		ClientChatMemberInfo = 802,
		ClientPasswordChangeResponse = 805,
		ClientChatEnter = 807,
		ClientFriendRemovedFromSource = 808,
		ClientCreateChat = 809,
		ClientCreateChatResponse = 810,
		ClientP2PIntroducerMessage = 813,
		ClientChatActionResult = 814,
		ClientRequestFriendData = 815,
		ClientGetUserStats = 818,
		ClientGetUserStatsResponse = 819,
		ClientStoreUserStats = 820,
		ClientStoreUserStatsResponse = 821,
		ClientClanState = 822,
		ClientServiceModule = 830,
		ClientServiceCall = 831,
		ClientServiceCallResponse = 832,
		ClientNatTraversalStatEvent = 839,
		ClientSteamUsageEvent = 842,
		ClientCheckPassword = 845,
		ClientResetPassword = 846,
		ClientCheckPasswordResponse = 848,
		ClientResetPasswordResponse = 849,
		ClientSessionToken = 850,
		ClientDRMProblemReport = 851,
		ClientSetIgnoreFriend = 855,
		ClientSetIgnoreFriendResponse = 856,
		ClientGetAppOwnershipTicket = 857,
		ClientGetAppOwnershipTicketResponse = 858,
		ClientGetLobbyListResponse = 860,
		ClientServerList = 880,
		ClientEmailChangeResponse = 891,
		ClientSecretQAChangeResponse = 892,
		ClientDRMBlobRequest = 896,
		ClientDRMBlobResponse = 897,
		BaseGameServer = 900,
		GSDisconnectNotice = 901,
		GSStatus = 903,
		GSUserPlaying = 905,
		GSStatus2 = 906,
		GSStatusUpdate_Unused = 907,
		GSServerType = 908,
		GSPlayerList = 909,
		GSGetUserAchievementStatus = 910,
		GSGetUserAchievementStatusResponse = 911,
		GSGetPlayStats = 918,
		GSGetPlayStatsResponse = 919,
		GSGetUserGroupStatus = 920,
		AMGetUserGroupStatus = 921,
		AMGetUserGroupStatusResponse = 922,
		GSGetUserGroupStatusResponse = 923,
		GSGetReputation = 936,
		GSGetReputationResponse = 937,
		GSAssociateWithClan = 938,
		GSAssociateWithClanResponse = 939,
		GSComputeNewPlayerCompatibility = 940,
		GSComputeNewPlayerCompatibilityResponse = 941,
		BaseAdmin = 1000,
		AdminCmd = 1000,
		AdminCmdResponse = 1004,
		AdminLogListenRequest = 1005,
		AdminLogEvent = 1006,
		UniverseData = 1010,
		AdminSpew = 1019,
		AdminConsoleTitle = 1020,
		AdminGCSpew = 1023,
		AdminGCCommand = 1024,
		AdminGCGetCommandList = 1025,
		AdminGCGetCommandListResponse = 1026,
		FBSConnectionData = 1027,
		AdminMsgSpew = 1028,
		BaseFBS = 1100,
		FBSReqVersion = 1100,
		FBSVersionInfo = 1101,
		FBSForceRefresh = 1102,
		FBSForceBounce = 1103,
		FBSDeployPackage = 1104,
		FBSDeployResponse = 1105,
		FBSUpdateBootstrapper = 1106,
		FBSSetState = 1107,
		FBSApplyOSUpdates = 1108,
		FBSRunCMDScript = 1109,
		FBSRebootBox = 1110,
		FBSSetBigBrotherMode = 1111,
		FBSMinidumpServer = 1112,
		FBSDeployHotFixPackage = 1114,
		FBSDeployHotFixResponse = 1115,
		FBSDownloadHotFix = 1116,
		FBSDownloadHotFixResponse = 1117,
		FBSUpdateTargetConfigFile = 1118,
		FBSApplyAccountCred = 1119,
		FBSApplyAccountCredResponse = 1120,
		FBSSetShellCount = 1121,
		FBSTerminateShell = 1122,
		FBSQueryGMForRequest = 1123,
		FBSQueryGMResponse = 1124,
		FBSTerminateZombies = 1125,
		FBSInfoFromBootstrapper = 1126,
		FBSRebootBoxResponse = 1127,
		FBSBootstrapperPackageRequest = 1128,
		FBSBootstrapperPackageResponse = 1129,
		FBSBootstrapperGetPackageChunk = 1130,
		FBSBootstrapperGetPackageChunkResponse = 1131,
		FBSBootstrapperPackageTransferProgress = 1132,
		FBSRestartBootstrapper = 1133,
		FBSPauseFrozenDumps = 1134,
		BaseFileXfer = 1200,
		FileXferRequest = 1200,
		FileXferResponse = 1201,
		FileXferData = 1202,
		FileXferEnd = 1203,
		FileXferDataAck = 1204,
		BaseChannelAuth = 1300,
		ChannelAuthChallenge = 1300,
		ChannelAuthResponse = 1301,
		ChannelAuthResult = 1302,
		ChannelEncryptRequest = 1303,
		ChannelEncryptResponse = 1304,
		ChannelEncryptResult = 1305,
		BaseBS = 1400,
		BSPurchaseStart = 1401,
		BSPurchaseResponse = 1402,
		BSAuthenticateCCTrans = 1403,
		BSAuthenticateCCTransResponse = 1404,
		BSSettleComplete = 1406,
		BSInitPayPalTxn = 1408,
		BSInitPayPalTxnResponse = 1409,
		BSGetPayPalUserInfo = 1410,
		BSGetPayPalUserInfoResponse = 1411,
		BSPaymentInstrBan = 1417,
		BSPaymentInstrBanResponse = 1418,
		BSInitGCBankXferTxn = 1421,
		BSInitGCBankXferTxnResponse = 1422,
		BSCommitGCTxn = 1425,
		BSQueryTransactionStatus = 1426,
		BSQueryTransactionStatusResponse = 1427,
		BSQueryPaymentInstUsage = 1431,
		BSQueryPaymentInstResponse = 1432,
		BSQueryTxnExtendedInfo = 1433,
		BSQueryTxnExtendedInfoResponse = 1434,
		BSUpdateConversionRates = 1435,
		BSPurchaseRunFraudChecks = 1437,
		BSPurchaseRunFraudChecksResponse = 1438,
		BSQueryBankInformation = 1440,
		BSQueryBankInformationResponse = 1441,
		BSValidateXsollaSignature = 1445,
		BSValidateXsollaSignatureResponse = 1446,
		BSQiwiWalletInvoice = 1448,
		BSQiwiWalletInvoiceResponse = 1449,
		BSUpdateInventoryFromProPack = 1450,
		BSUpdateInventoryFromProPackResponse = 1451,
		BSSendShippingRequest = 1452,
		BSSendShippingRequestResponse = 1453,
		BSGetProPackOrderStatus = 1454,
		BSGetProPackOrderStatusResponse = 1455,
		BSCheckJobRunning = 1456,
		BSCheckJobRunningResponse = 1457,
		BSResetPackagePurchaseRateLimit = 1458,
		BSResetPackagePurchaseRateLimitResponse = 1459,
		BSUpdatePaymentData = 1460,
		BSUpdatePaymentDataResponse = 1461,
		BSGetBillingAddress = 1462,
		BSGetBillingAddressResponse = 1463,
		BSGetCreditCardInfo = 1464,
		BSGetCreditCardInfoResponse = 1465,
		BSRemoveExpiredPaymentData = 1468,
		BSRemoveExpiredPaymentDataResponse = 1469,
		BSConvertToCurrentKeys = 1470,
		BSConvertToCurrentKeysResponse = 1471,
		BSInitPurchase = 1472,
		BSInitPurchaseResponse = 1473,
		BSCompletePurchase = 1474,
		BSCompletePurchaseResponse = 1475,
		BSPruneCardUsageStats = 1476,
		BSPruneCardUsageStatsResponse = 1477,
		BSStoreBankInformation = 1478,
		BSStoreBankInformationResponse = 1479,
		BSVerifyPOSAKey = 1480,
		BSVerifyPOSAKeyResponse = 1481,
		BSReverseRedeemPOSAKey = 1482,
		BSReverseRedeemPOSAKeyResponse = 1483,
		BSQueryFindCreditCard = 1484,
		BSQueryFindCreditCardResponse = 1485,
		BSStatusInquiryPOSAKey = 1486,
		BSStatusInquiryPOSAKeyResponse = 1487,
		BSBoaCompraConfirmProductDelivery = 1494,
		BSBoaCompraConfirmProductDeliveryResponse = 1495,
		BSGenerateBoaCompraMD5 = 1496,
		BSGenerateBoaCompraMD5Response = 1497,
		BSCommitWPTxn = 1498,
		BSCommitAdyenTxn = 1499,
		BaseATS = 1500,
		ATSStartStressTest = 1501,
		ATSStopStressTest = 1502,
		ATSRunFailServerTest = 1503,
		ATSUFSPerfTestTask = 1504,
		ATSUFSPerfTestResponse = 1505,
		ATSCycleTCM = 1506,
		ATSInitDRMSStressTest = 1507,
		ATSCallTest = 1508,
		ATSCallTestReply = 1509,
		ATSStartExternalStress = 1510,
		ATSExternalStressJobStart = 1511,
		ATSExternalStressJobQueued = 1512,
		ATSExternalStressJobRunning = 1513,
		ATSExternalStressJobStopped = 1514,
		ATSExternalStressJobStopAll = 1515,
		ATSExternalStressActionResult = 1516,
		ATSStarted = 1517,
		ATSCSPerfTestTask = 1518,
		ATSCSPerfTestResponse = 1519,
		BaseDP = 1600,
		DPSetPublishingState = 1601,
		DPUniquePlayersStat = 1603,
		DPStreamingUniquePlayersStat = 1604,
		DPBlockingStats = 1607,
		DPNatTraversalStats = 1608,
		DPCloudStats = 1612,
		DPAchievementStats = 1613,
		DPGetPlayerCount = 1615,
		DPGetPlayerCountResponse = 1616,
		DPGameServersPlayersStats = 1617,
		ClientDPCheckSpecialSurvey = 1620,
		ClientDPCheckSpecialSurveyResponse = 1621,
		ClientDPSendSpecialSurveyResponse = 1622,
		ClientDPSendSpecialSurveyResponseReply = 1623,
		DPStoreSaleStatistics = 1624,
		ClientDPUpdateAppJobReport = 1625,
		DPUpdateContentEvent = 1626,
		ClientDPUnsignedInstallScript = 1627,
		DPPartnerMicroTxns = 1628,
		DPPartnerMicroTxnsResponse = 1629,
		ClientDPContentStatsReport = 1630,
		DPVRUniquePlayersStat = 1631,
		BaseCM = 1700,
		CMSetAllowState = 1701,
		CMSpewAllowState = 1702,
		CMSessionRejected = 1703,
		CMSetSecrets = 1704,
		CMGetSecrets = 1705,
		BaseGC = 2200,
		GCCmdRevive = 2203,
		GCCmdDown = 2206,
		GCCmdDeploy = 2207,
		GCCmdDeployResponse = 2208,
		GCCmdSwitch = 2209,
		AMRefreshSessions = 2210,
		GCAchievementAwarded = 2212,
		GCSystemMessage = 2213,
		GCCmdStatus = 2216,
		GCInterAppMessage = 2219,
		GCGetEmailTemplate = 2220,
		GCGetEmailTemplateResponse = 2221,
		GCHRelay = 2222,
		GCHRelayToClient = 2223,
		GCHUpdateSession = 2224,
		GCHRequestUpdateSession = 2225,
		GCHRequestStatus = 2226,
		GCHRequestStatusResponse = 2227,
		GCHAccountVacStatusChange = 2228,
		GCHSpawnGC = 2229,
		GCHSpawnGCResponse = 2230,
		GCHKillGC = 2231,
		GCHKillGCResponse = 2232,
		GCHAccountTradeBanStatusChange = 2233,
		GCHAccountLockStatusChange = 2234,
		GCHVacVerificationChange = 2235,
		GCHAccountPhoneNumberChange = 2236,
		GCHAccountTwoFactorChange = 2237,
		GCHInviteUserToLobby = 2238,
		BaseP2P = 2500,
		P2PIntroducerMessage = 2502,
		BaseSM = 2900,
		SMExpensiveReport = 2902,
		SMHourlyReport = 2903,
		SMPartitionRenames = 2905,
		SMMonitorSpace = 2906,
		SMTestNextBuildSchemaConversion = 2907,
		SMTestNextBuildSchemaConversionResponse = 2908,
		BaseTest = 3000,
		FailServer = 3000,
		JobHeartbeatTest = 3001,
		JobHeartbeatTestResponse = 3002,
		BaseFTSRange = 3100,
		BaseCCSRange = 3150,
		CCSDeleteAllCommentsByAuthor = 3161,
		CCSDeleteAllCommentsByAuthorResponse = 3162,
		BaseLBSRange = 3200,
		LBSSetScore = 3201,
		LBSSetScoreResponse = 3202,
		LBSFindOrCreateLB = 3203,
		LBSFindOrCreateLBResponse = 3204,
		LBSGetLBEntries = 3205,
		LBSGetLBEntriesResponse = 3206,
		LBSGetLBList = 3207,
		LBSGetLBListResponse = 3208,
		LBSSetLBDetails = 3209,
		LBSDeleteLB = 3210,
		LBSDeleteLBEntry = 3211,
		LBSResetLB = 3212,
		LBSResetLBResponse = 3213,
		LBSDeleteLBResponse = 3214,
		BaseOGS = 3400,
		OGSBeginSession = 3401,
		OGSBeginSessionResponse = 3402,
		OGSEndSession = 3403,
		OGSEndSessionResponse = 3404,
		OGSWriteAppSessionRow = 3406,
		BaseBRP = 3600,
		BRPPostTransactionTax = 3629,
		BRPPostTransactionTaxResponse = 3630,
		BaseAMRange2 = 4000,
		AMCreateChat = 4001,
		AMCreateChatResponse = 4002,
		AMSetProfileURL = 4005,
		AMGetAccountEmailAddress = 4006,
		AMGetAccountEmailAddressResponse = 4007,
		AMRequestClanData = 4008,
		AMRouteToClients = 4009,
		AMLeaveClan = 4010,
		AMClanPermissions = 4011,
		AMClanPermissionsResponse = 4012,
		AMCreateClanEventDummyForRateLimiting = 4013,
		AMUpdateClanEventDummyForRateLimiting = 4015,
		AMSetClanPermissionSettings = 4021,
		AMSetClanPermissionSettingsResponse = 4022,
		AMGetClanPermissionSettings = 4023,
		AMGetClanPermissionSettingsResponse = 4024,
		AMPublishChatRoomInfo = 4025,
		ClientChatRoomInfo = 4026,
		AMGetClanHistory = 4039,
		AMGetClanHistoryResponse = 4040,
		AMGetClanPermissionBits = 4041,
		AMGetClanPermissionBitsResponse = 4042,
		AMSetClanPermissionBits = 4043,
		AMSetClanPermissionBitsResponse = 4044,
		AMSessionInfoRequest = 4045,
		AMSessionInfoResponse = 4046,
		AMValidateWGToken = 4047,
		AMGetClanRank = 4050,
		AMGetClanRankResponse = 4051,
		AMSetClanRank = 4052,
		AMSetClanRankResponse = 4053,
		AMGetClanPOTW = 4054,
		AMGetClanPOTWResponse = 4055,
		AMSetClanPOTW = 4056,
		AMSetClanPOTWResponse = 4057,
		AMDumpUser = 4059,
		AMKickUserFromClan = 4060,
		AMAddFounderToClan = 4061,
		AMValidateWGTokenResponse = 4062,
		AMSetAccountDetails = 4064,
		AMGetChatBanList = 4065,
		AMGetChatBanListResponse = 4066,
		AMUnBanFromChat = 4067,
		AMSetClanDetails = 4068,
		AMGetAccountLinks = 4069,
		AMGetAccountLinksResponse = 4070,
		AMSetAccountLinks = 4071,
		AMSetAccountLinksResponse = 4072,
		UGSGetUserGameStats = 4073,
		UGSGetUserGameStatsResponse = 4074,
		AMCheckClanMembership = 4075,
		AMGetClanMembers = 4076,
		AMGetClanMembersResponse = 4077,
		AMNotifyChatOfClanChange = 4079,
		AMResubmitPurchase = 4080,
		AMAddFriend = 4081,
		AMAddFriendResponse = 4082,
		AMRemoveFriend = 4083,
		AMDumpClan = 4084,
		AMChangeClanOwner = 4085,
		AMCancelEasyCollect = 4086,
		AMCancelEasyCollectResponse = 4087,
		AMClansInCommon = 4090,
		AMClansInCommonResponse = 4091,
		AMIsValidAccountID = 4092,
		AMWipeFriendsList = 4095,
		AMSetIgnored = 4096,
		AMClansInCommonCountResponse = 4097,
		AMFriendsList = 4098,
		AMFriendsListResponse = 4099,
		AMFriendsInCommon = 4100,
		AMFriendsInCommonResponse = 4101,
		AMFriendsInCommonCountResponse = 4102,
		AMClansInCommonCount = 4103,
		AMChallengeVerdict = 4104,
		AMChallengeNotification = 4105,
		AMFindGSByIP = 4106,
		AMFoundGSByIP = 4107,
		AMGiftRevoked = 4108,
		AMUserClanList = 4110,
		AMUserClanListResponse = 4111,
		AMGetAccountDetails2 = 4112,
		AMGetAccountDetailsResponse2 = 4113,
		AMSetCommunityProfileSettings = 4114,
		AMSetCommunityProfileSettingsResponse = 4115,
		AMGetCommunityPrivacyState = 4116,
		AMGetCommunityPrivacyStateResponse = 4117,
		AMCheckClanInviteRateLimiting = 4118,
		UGSGetUserAchievementStatus = 4119,
		AMGetIgnored = 4120,
		AMGetIgnoredResponse = 4121,
		AMSetIgnoredResponse = 4122,
		AMSetFriendRelationshipNone = 4123,
		AMGetFriendRelationship = 4124,
		AMGetFriendRelationshipResponse = 4125,
		AMServiceModulesCache = 4126,
		AMServiceModulesCall = 4127,
		AMServiceModulesCallResponse = 4128,
		CommunityAddFriendNews = 4140,
		AMFindClanUser = 4143,
		AMFindClanUserResponse = 4144,
		AMBanFromChat = 4145,
		AMGetUserNewsSubscriptions = 4147,
		AMGetUserNewsSubscriptionsResponse = 4148,
		AMSetUserNewsSubscriptions = 4149,
		AMSendQueuedEmails = 4152,
		AMSetLicenseFlags = 4153,
		CommunityDeleteUserNews = 4155,
		AMAllowUserFilesRequest = 4156,
		AMAllowUserFilesResponse = 4157,
		AMGetAccountStatus = 4158,
		AMGetAccountStatusResponse = 4159,
		AMEditBanReason = 4160,
		AMCheckClanMembershipResponse = 4161,
		AMProbeClanMembershipList = 4162,
		AMProbeClanMembershipListResponse = 4163,
		UGSGetUserAchievementStatusResponse = 4164,
		AMGetFriendsLobbies = 4165,
		AMGetFriendsLobbiesResponse = 4166,
		AMGetUserFriendNewsResponse = 4172,
		CommunityGetUserFriendNews = 4173,
		AMGetUserClansNewsResponse = 4174,
		AMGetUserClansNews = 4175,
		AMGetPreviousCBAccount = 4184,
		AMGetPreviousCBAccountResponse = 4185,
		AMGetUserLicenseHistory = 4190,
		AMGetUserLicenseHistoryResponse = 4191,
		AMSupportChangePassword = 4194,
		AMSupportChangeEmail = 4195,
		AMResetUserVerificationGSByIP = 4197,
		AMUpdateGSPlayStats = 4198,
		AMSupportEnableOrDisable = 4199,
		AMGetPurchaseStatus = 4206,
		AMSupportIsAccountEnabled = 4209,
		AMSupportIsAccountEnabledResponse = 4210,
		UGSGetUserStats = 4211,
		AMSupportKickSession = 4212,
		AMGSSearch = 4213,
		MarketingMessageUpdate = 4216,
		ChatServerRouteFriendMsg = 4219,
		AMTicketAuthRequestOrResponse = 4220,
		AMVerifyDepotManagementRights = 4222,
		AMVerifyDepotManagementRightsResponse = 4223,
		AMAddFreeLicense = 4224,
		AMValidateEmailLink = 4231,
		AMValidateEmailLinkResponse = 4232,
		UGSStoreUserStats = 4236,
		AMDeleteStoredCard = 4241,
		AMRevokeLegacyGameKeys = 4242,
		AMGetWalletDetails = 4244,
		AMGetWalletDetailsResponse = 4245,
		AMDeleteStoredPaymentInfo = 4246,
		AMGetStoredPaymentSummary = 4247,
		AMGetStoredPaymentSummaryResponse = 4248,
		AMGetWalletConversionRate = 4249,
		AMGetWalletConversionRateResponse = 4250,
		AMConvertWallet = 4251,
		AMConvertWalletResponse = 4252,
		AMSetPreApproval = 4255,
		AMSetPreApprovalResponse = 4256,
		AMCreateRefund = 4258,
		AMCreateChargeback = 4260,
		AMCreateDispute = 4262,
		AMClearDispute = 4264,
		AMCreateFinancialAdjustment = 4265,
		AMPlayerNicknameList = 4266,
		AMPlayerNicknameListResponse = 4267,
		AMSetDRMTestConfig = 4268,
		AMGetUserCurrentGameInfo = 4269,
		AMGetUserCurrentGameInfoResponse = 4270,
		AMGetGSPlayerList = 4271,
		AMGetGSPlayerListResponse = 4272,
		AMGetGameMembers = 4276,
		AMGetGameMembersResponse = 4277,
		AMGetSteamIDForMicroTxn = 4278,
		AMGetSteamIDForMicroTxnResponse = 4279,
		AMSetPartnerMember = 4280,
		AMRemovePublisherUser = 4281,
		AMGetUserLicenseList = 4282,
		AMGetUserLicenseListResponse = 4283,
		AMReloadGameGroupPolicy = 4284,
		AMAddFreeLicenseResponse = 4285,
		AMVACStatusUpdate = 4286,
		AMGetAccountDetails = 4287,
		AMGetAccountDetailsResponse = 4288,
		AMGetPlayerLinkDetails = 4289,
		AMGetPlayerLinkDetailsResponse = 4290,
		AMGetAccountFlagsForWGSpoofing = 4294,
		AMGetAccountFlagsForWGSpoofingResponse = 4295,
		AMGetClanOfficers = 4298,
		AMGetClanOfficersResponse = 4299,
		AMNameChange = 4300,
		AMGetNameHistory = 4301,
		AMGetNameHistoryResponse = 4302,
		AMUpdateProviderStatus = 4305,
		AMSupportRemoveAccountSecurity = 4307,
		AMIsAccountInCaptchaGracePeriod = 4308,
		AMIsAccountInCaptchaGracePeriodResponse = 4309,
		AMAccountPS3Unlink = 4310,
		AMAccountPS3UnlinkResponse = 4311,
		UGSStoreUserStatsResponse = 4312,
		AMGetAccountPSNInfo = 4313,
		AMGetAccountPSNInfoResponse = 4314,
		AMAuthenticatedPlayerList = 4315,
		AMGetUserGifts = 4316,
		AMGetUserGiftsResponse = 4317,
		AMTransferLockedGifts = 4320,
		AMTransferLockedGiftsResponse = 4321,
		AMPlayerHostedOnGameServer = 4322,
		AMGetAccountBanInfo = 4323,
		AMGetAccountBanInfoResponse = 4324,
		AMRecordBanEnforcement = 4325,
		AMRollbackGiftTransfer = 4326,
		AMRollbackGiftTransferResponse = 4327,
		AMHandlePendingTransaction = 4328,
		AMRequestClanDetails = 4329,
		AMDeleteStoredPaypalAgreement = 4330,
		AMGameServerUpdate = 4331,
		AMGameServerRemove = 4332,
		AMGetPaypalAgreements = 4333,
		AMGetPaypalAgreementsResponse = 4334,
		AMGameServerPlayerCompatibilityCheck = 4335,
		AMGameServerPlayerCompatibilityCheckResponse = 4336,
		AMRenewLicense = 4337,
		AMGetAccountCommunityBanInfo = 4338,
		AMGetAccountCommunityBanInfoResponse = 4339,
		AMGameServerAccountChangePassword = 4340,
		AMGameServerAccountDeleteAccount = 4341,
		AMRenewAgreement = 4342,
		AMXsollaPayment = 4344,
		AMXsollaPaymentResponse = 4345,
		AMAcctAllowedToPurchase = 4346,
		AMAcctAllowedToPurchaseResponse = 4347,
		AMSwapKioskDeposit = 4348,
		AMSwapKioskDepositResponse = 4349,
		AMSetUserGiftUnowned = 4350,
		AMSetUserGiftUnownedResponse = 4351,
		AMClaimUnownedUserGift = 4352,
		AMClaimUnownedUserGiftResponse = 4353,
		AMSetClanName = 4354,
		AMSetClanNameResponse = 4355,
		AMGrantCoupon = 4356,
		AMGrantCouponResponse = 4357,
		AMIsPackageRestrictedInUserCountry = 4358,
		AMIsPackageRestrictedInUserCountryResponse = 4359,
		AMHandlePendingTransactionResponse = 4360,
		AMGrantGuestPasses2 = 4361,
		AMGrantGuestPasses2Response = 4362,
		AMGetPlayerBanDetails = 4365,
		AMGetPlayerBanDetailsResponse = 4366,
		AMFinalizePurchase = 4367,
		AMFinalizePurchaseResponse = 4368,
		AMPersonaChangeResponse = 4372,
		AMGetClanDetailsForForumCreation = 4373,
		AMGetClanDetailsForForumCreationResponse = 4374,
		AMGetPendingNotificationCount = 4375,
		AMGetPendingNotificationCountResponse = 4376,
		AMPasswordHashUpgrade = 4377,
		AMBoaCompraPayment = 4380,
		AMBoaCompraPaymentResponse = 4381,
		AMCompleteExternalPurchase = 4383,
		AMCompleteExternalPurchaseResponse = 4384,
		AMResolveNegativeWalletCredits = 4385,
		AMResolveNegativeWalletCreditsResponse = 4386,
		AMPlayerGetClanBasicDetails = 4389,
		AMPlayerGetClanBasicDetailsResponse = 4390,
		AMMOLPayment = 4391,
		AMMOLPaymentResponse = 4392,
		GetUserIPCountry = 4393,
		GetUserIPCountryResponse = 4394,
		NotificationOfSuspiciousActivity = 4395,
		AMDegicaPayment = 4396,
		AMDegicaPaymentResponse = 4397,
		AMEClubPayment = 4398,
		AMEClubPaymentResponse = 4399,
		AMPayPalPaymentsHubPayment = 4400,
		AMPayPalPaymentsHubPaymentResponse = 4401,
		AMTwoFactorRecoverAuthenticatorRequest = 4402,
		AMTwoFactorRecoverAuthenticatorResponse = 4403,
		AMSmart2PayPayment = 4404,
		AMSmart2PayPaymentResponse = 4405,
		AMValidatePasswordResetCodeAndSendSmsRequest = 4406,
		AMValidatePasswordResetCodeAndSendSmsResponse = 4407,
		AMGetAccountResetDetailsRequest = 4408,
		AMGetAccountResetDetailsResponse = 4409,
		AMBitPayPayment = 4410,
		AMBitPayPaymentResponse = 4411,
		AMSendAccountInfoUpdate = 4412,
		AMSendScheduledGift = 4413,
		AMNodwinPayment = 4414,
		AMNodwinPaymentResponse = 4415,
		AMResolveWalletRevoke = 4416,
		AMResolveWalletReverseRevoke = 4417,
		AMFundedPayment = 4418,
		AMFundedPaymentResponse = 4419,
		AMRequestPersonaUpdateForChatServer = 4420,
		AMPerfectWorldPayment = 4421,
		AMPerfectWorldPaymentResponse = 4422,
		BasePSRange = 5000,
		PSCreateShoppingCart = 5001,
		PSCreateShoppingCartResponse = 5002,
		PSIsValidShoppingCart = 5003,
		PSIsValidShoppingCartResponse = 5004,
		PSAddPackageToShoppingCart = 5005,
		PSAddPackageToShoppingCartResponse = 5006,
		PSRemoveLineItemFromShoppingCart = 5007,
		PSRemoveLineItemFromShoppingCartResponse = 5008,
		PSGetShoppingCartContents = 5009,
		PSGetShoppingCartContentsResponse = 5010,
		PSAddWalletCreditToShoppingCart = 5011,
		PSAddWalletCreditToShoppingCartResponse = 5012,
		BaseUFSRange = 5200,
		ClientUFSUploadFileRequest = 5202,
		ClientUFSUploadFileResponse = 5203,
		ClientUFSUploadFileChunk = 5204,
		ClientUFSUploadFileFinished = 5205,
		ClientUFSGetFileListForApp = 5206,
		ClientUFSGetFileListForAppResponse = 5207,
		ClientUFSDownloadRequest = 5210,
		ClientUFSDownloadResponse = 5211,
		ClientUFSDownloadChunk = 5212,
		ClientUFSLoginRequest = 5213,
		ClientUFSLoginResponse = 5214,
		UFSReloadPartitionInfo = 5215,
		ClientUFSTransferHeartbeat = 5216,
		UFSSynchronizeFile = 5217,
		UFSSynchronizeFileResponse = 5218,
		ClientUFSDeleteFileRequest = 5219,
		ClientUFSDeleteFileResponse = 5220,
		ClientUFSGetUGCDetails = 5226,
		ClientUFSGetUGCDetailsResponse = 5227,
		UFSUpdateFileFlags = 5228,
		UFSUpdateFileFlagsResponse = 5229,
		ClientUFSGetSingleFileInfo = 5230,
		ClientUFSGetSingleFileInfoResponse = 5231,
		ClientUFSShareFile = 5232,
		ClientUFSShareFileResponse = 5233,
		UFSReloadAccount = 5234,
		UFSReloadAccountResponse = 5235,
		UFSUpdateRecordBatched = 5236,
		UFSUpdateRecordBatchedResponse = 5237,
		UFSMigrateFile = 5238,
		UFSMigrateFileResponse = 5239,
		UFSGetUGCURLs = 5240,
		UFSGetUGCURLsResponse = 5241,
		UFSHttpUploadFileFinishRequest = 5242,
		UFSHttpUploadFileFinishResponse = 5243,
		UFSDownloadStartRequest = 5244,
		UFSDownloadStartResponse = 5245,
		UFSDownloadChunkRequest = 5246,
		UFSDownloadChunkResponse = 5247,
		UFSDownloadFinishRequest = 5248,
		UFSDownloadFinishResponse = 5249,
		UFSFlushURLCache = 5250,
		ClientUFSUploadCommit = 5251,
		ClientUFSUploadCommitResponse = 5252,
		UFSMigrateFileAppID = 5253,
		UFSMigrateFileAppIDResponse = 5254,
		BaseClient2 = 5400,
		ClientRequestForgottenPasswordEmail = 5401,
		ClientRequestForgottenPasswordEmailResponse = 5402,
		ClientCreateAccountResponse = 5403,
		ClientResetForgottenPassword = 5404,
		ClientResetForgottenPasswordResponse = 5405,
		ClientInformOfResetForgottenPassword = 5407,
		ClientInformOfResetForgottenPasswordResponse = 5408,
		ClientGamesPlayedWithDataBlob = 5410,
		ClientUpdateUserGameInfo = 5411,
		ClientFileToDownload = 5412,
		ClientFileToDownloadResponse = 5413,
		ClientLBSSetScore = 5414,
		ClientLBSSetScoreResponse = 5415,
		ClientLBSFindOrCreateLB = 5416,
		ClientLBSFindOrCreateLBResponse = 5417,
		ClientLBSGetLBEntries = 5418,
		ClientLBSGetLBEntriesResponse = 5419,
		ClientChatDeclined = 5426,
		ClientFriendMsgIncoming = 5427,
		ClientTicketAuthComplete = 5429,
		ClientIsLimitedAccount = 5430,
		ClientRequestAuthList = 5431,
		ClientAuthList = 5432,
		ClientStat = 5433,
		ClientP2PConnectionInfo = 5434,
		ClientP2PConnectionFailInfo = 5435,
		ClientGetDepotDecryptionKey = 5438,
		ClientGetDepotDecryptionKeyResponse = 5439,
		GSPerformHardwareSurvey = 5440,
		ClientEnableTestLicense = 5443,
		ClientEnableTestLicenseResponse = 5444,
		ClientDisableTestLicense = 5445,
		ClientDisableTestLicenseResponse = 5446,
		ClientRequestValidationMail = 5448,
		ClientRequestValidationMailResponse = 5449,
		ClientCheckAppBetaPassword = 5450,
		ClientCheckAppBetaPasswordResponse = 5451,
		ClientToGC = 5452,
		ClientFromGC = 5453,
		ClientRequestChangeMail = 5454,
		ClientRequestChangeMailResponse = 5455,
		ClientEmailAddrInfo = 5456,
		ClientPasswordChange3 = 5457,
		ClientEmailChange3 = 5458,
		ClientPersonalQAChange3 = 5459,
		ClientResetForgottenPassword3 = 5460,
		ClientRequestForgottenPasswordEmail3 = 5461,
		ClientNewLoginKey = 5463,
		ClientNewLoginKeyAccepted = 5464,
		ClientStoreUserStats2 = 5466,
		ClientStatsUpdated = 5467,
		ClientActivateOEMLicense = 5468,
		ClientRegisterOEMMachine = 5469,
		ClientRegisterOEMMachineResponse = 5470,
		ClientRequestedClientStats = 5480,
		ClientStat2Int32 = 5481,
		ClientStat2 = 5482,
		ClientVerifyPassword = 5483,
		ClientVerifyPasswordResponse = 5484,
		ClientDRMDownloadRequest = 5485,
		ClientDRMDownloadResponse = 5486,
		ClientDRMFinalResult = 5487,
		ClientGetFriendsWhoPlayGame = 5488,
		ClientGetFriendsWhoPlayGameResponse = 5489,
		ClientOGSBeginSession = 5490,
		ClientOGSBeginSessionResponse = 5491,
		ClientOGSEndSession = 5492,
		ClientOGSEndSessionResponse = 5493,
		ClientOGSWriteRow = 5494,
		ClientDRMTest = 5495,
		ClientDRMTestResult = 5496,
		ClientServerUnavailable = 5500,
		ClientServersAvailable = 5501,
		ClientRegisterAuthTicketWithCM = 5502,
		ClientGCMsgFailed = 5503,
		ClientMicroTxnAuthRequest = 5504,
		ClientMicroTxnAuthorize = 5505,
		ClientMicroTxnAuthorizeResponse = 5506,
		ClientAppMinutesPlayedData = 5507,
		ClientGetMicroTxnInfo = 5508,
		ClientGetMicroTxnInfoResponse = 5509,
		ClientMarketingMessageUpdate2 = 5510,
		ClientDeregisterWithServer = 5511,
		ClientSubscribeToPersonaFeed = 5512,
		ClientLogon = 5514,
		ClientGetClientDetails = 5515,
		ClientGetClientDetailsResponse = 5516,
		ClientReportOverlayDetourFailure = 5517,
		ClientGetClientAppList = 5518,
		ClientGetClientAppListResponse = 5519,
		ClientInstallClientApp = 5520,
		ClientInstallClientAppResponse = 5521,
		ClientUninstallClientApp = 5522,
		ClientUninstallClientAppResponse = 5523,
		ClientSetClientAppUpdateState = 5524,
		ClientSetClientAppUpdateStateResponse = 5525,
		ClientRequestEncryptedAppTicket = 5526,
		ClientRequestEncryptedAppTicketResponse = 5527,
		ClientWalletInfoUpdate = 5528,
		ClientLBSSetUGC = 5529,
		ClientLBSSetUGCResponse = 5530,
		ClientAMGetClanOfficers = 5531,
		ClientAMGetClanOfficersResponse = 5532,
		ClientFriendProfileInfo = 5535,
		ClientFriendProfileInfoResponse = 5536,
		ClientUpdateMachineAuth = 5537,
		ClientUpdateMachineAuthResponse = 5538,
		ClientReadMachineAuth = 5539,
		ClientReadMachineAuthResponse = 5540,
		ClientRequestMachineAuth = 5541,
		ClientRequestMachineAuthResponse = 5542,
		ClientScreenshotsChanged = 5543,
		ClientGetCDNAuthToken = 5546,
		ClientGetCDNAuthTokenResponse = 5547,
		ClientDownloadRateStatistics = 5548,
		ClientRequestAccountData = 5549,
		ClientRequestAccountDataResponse = 5550,
		ClientResetForgottenPassword4 = 5551,
		ClientHideFriend = 5552,
		ClientFriendsGroupsList = 5553,
		ClientGetClanActivityCounts = 5554,
		ClientGetClanActivityCountsResponse = 5555,
		ClientOGSReportString = 5556,
		ClientOGSReportBug = 5557,
		ClientSentLogs = 5558,
		ClientLogonGameServer = 5559,
		AMClientCreateFriendsGroup = 5560,
		AMClientCreateFriendsGroupResponse = 5561,
		AMClientDeleteFriendsGroup = 5562,
		AMClientDeleteFriendsGroupResponse = 5563,
		AMClientManageFriendsGroup = 5564,
		AMClientManageFriendsGroupResponse = 5565,
		AMClientAddFriendToGroup = 5566,
		AMClientAddFriendToGroupResponse = 5567,
		AMClientRemoveFriendFromGroup = 5568,
		AMClientRemoveFriendFromGroupResponse = 5569,
		ClientAMGetPersonaNameHistory = 5570,
		ClientAMGetPersonaNameHistoryResponse = 5571,
		ClientRequestFreeLicense = 5572,
		ClientRequestFreeLicenseResponse = 5573,
		ClientDRMDownloadRequestWithCrashData = 5574,
		ClientAuthListAck = 5575,
		ClientItemAnnouncements = 5576,
		ClientRequestItemAnnouncements = 5577,
		ClientFriendMsgEchoToSender = 5578,
		ClientOGSGameServerPingSample = 5581,
		ClientCommentNotifications = 5582,
		ClientRequestCommentNotifications = 5583,
		ClientPersonaChangeResponse = 5584,
		ClientRequestWebAPIAuthenticateUserNonce = 5585,
		ClientRequestWebAPIAuthenticateUserNonceResponse = 5586,
		ClientPlayerNicknameList = 5587,
		AMClientSetPlayerNickname = 5588,
		AMClientSetPlayerNicknameResponse = 5589,
		ClientGetNumberOfCurrentPlayersDP = 5592,
		ClientGetNumberOfCurrentPlayersDPResponse = 5593,
		ClientServiceMethodLegacy = 5594,
		ClientServiceMethodLegacyResponse = 5595,
		ClientFriendUserStatusPublished = 5596,
		ClientCurrentUIMode = 5597,
		ClientVanityURLChangedNotification = 5598,
		ClientUserNotifications = 5599,
		BaseDFS = 5600,
		DFSGetFile = 5601,
		DFSInstallLocalFile = 5602,
		DFSConnection = 5603,
		DFSConnectionReply = 5604,
		ClientDFSAuthenticateRequest = 5605,
		ClientDFSAuthenticateResponse = 5606,
		ClientDFSEndSession = 5607,
		DFSPurgeFile = 5608,
		DFSRouteFile = 5609,
		DFSGetFileFromServer = 5610,
		DFSAcceptedResponse = 5611,
		DFSRequestPingback = 5612,
		DFSRecvTransmitFile = 5613,
		DFSSendTransmitFile = 5614,
		DFSRequestPingback2 = 5615,
		DFSResponsePingback2 = 5616,
		ClientDFSDownloadStatus = 5617,
		DFSStartTransfer = 5618,
		DFSTransferComplete = 5619,
		DFSRouteFileResponse = 5620,
		ClientNetworkingCertRequest = 5621,
		ClientNetworkingCertRequestResponse = 5622,
		ClientChallengeRequest = 5623,
		ClientChallengeResponse = 5624,
		BadgeCraftedNotification = 5625,
		ClientNetworkingMobileCertRequest = 5626,
		ClientNetworkingMobileCertRequestResponse = 5627,
		BaseMDS = 5800,
		AMToMDSGetDepotDecryptionKey = 5812,
		MDSToAMGetDepotDecryptionKeyResponse = 5813,
		MDSContentServerConfigRequest = 5827,
		MDSContentServerConfig = 5828,
		MDSGetDepotManifest = 5829,
		MDSGetDepotManifestResponse = 5830,
		MDSGetDepotManifestChunk = 5831,
		MDSGetDepotChunk = 5832,
		MDSGetDepotChunkResponse = 5833,
		MDSGetDepotChunkChunk = 5834,
		MDSToCSFlushChunk = 5844,
		MDSMigrateChunk = 5847,
		MDSMigrateChunkResponse = 5848,
		MDSToCSFlushManifest = 5849,
		CSBase = 6200,
		CSPing = 6201,
		CSPingResponse = 6202,
		GMSBase = 6400,
		GMSGameServerReplicate = 6401,
		ClientGMSServerQuery = 6403,
		GMSClientServerQueryResponse = 6404,
		AMGMSGameServerUpdate = 6405,
		AMGMSGameServerRemove = 6406,
		GameServerOutOfDate = 6407,
		DeviceAuthorizationBase = 6500,
		ClientAuthorizeLocalDeviceRequest = 6501,
		ClientAuthorizeLocalDeviceResponse = 6502,
		ClientDeauthorizeDeviceRequest = 6503,
		ClientDeauthorizeDevice = 6504,
		ClientUseLocalDeviceAuthorizations = 6505,
		ClientGetAuthorizedDevices = 6506,
		ClientGetAuthorizedDevicesResponse = 6507,
		AMNotifySessionDeviceAuthorized = 6508,
		ClientAuthorizeLocalDeviceNotification = 6509,
		MMSBase = 6600,
		ClientMMSCreateLobby = 6601,
		ClientMMSCreateLobbyResponse = 6602,
		ClientMMSJoinLobby = 6603,
		ClientMMSJoinLobbyResponse = 6604,
		ClientMMSLeaveLobby = 6605,
		ClientMMSLeaveLobbyResponse = 6606,
		ClientMMSGetLobbyList = 6607,
		ClientMMSGetLobbyListResponse = 6608,
		ClientMMSSetLobbyData = 6609,
		ClientMMSSetLobbyDataResponse = 6610,
		ClientMMSGetLobbyData = 6611,
		ClientMMSLobbyData = 6612,
		ClientMMSSendLobbyChatMsg = 6613,
		ClientMMSLobbyChatMsg = 6614,
		ClientMMSSetLobbyOwner = 6615,
		ClientMMSSetLobbyOwnerResponse = 6616,
		ClientMMSSetLobbyGameServer = 6617,
		ClientMMSLobbyGameServerSet = 6618,
		ClientMMSUserJoinedLobby = 6619,
		ClientMMSUserLeftLobby = 6620,
		ClientMMSInviteToLobby = 6621,
		ClientMMSFlushFrenemyListCache = 6622,
		ClientMMSFlushFrenemyListCacheResponse = 6623,
		ClientMMSSetLobbyLinked = 6624,
		ClientMMSSetRatelimitPolicyOnClient = 6625,
		ClientMMSGetLobbyStatus = 6626,
		ClientMMSGetLobbyStatusResponse = 6627,
		MMSGetLobbyList = 6628,
		MMSGetLobbyListResponse = 6629,
		NonStdMsgBase = 6800,
		NonStdMsgMemcached = 6801,
		NonStdMsgHTTPServer = 6802,
		NonStdMsgHTTPClient = 6803,
		NonStdMsgWGResponse = 6804,
		NonStdMsgPHPSimulator = 6805,
		NonStdMsgChase = 6806,
		NonStdMsgDFSTransfer = 6807,
		NonStdMsgTests = 6808,
		NonStdMsgUMQpipeAAPL = 6809,
		NonStdMsgSyslog = 6810,
		NonStdMsgLogsink = 6811,
		NonStdMsgSteam2Emulator = 6812,
		NonStdMsgRTMPServer = 6813,
		NonStdMsgWebSocket = 6814,
		NonStdMsgRedis = 6815,
		UDSBase = 7000,
		ClientUDSP2PSessionStarted = 7001,
		ClientUDSP2PSessionEnded = 7002,
		UDSRenderUserAuth = 7003,
		UDSRenderUserAuthResponse = 7004,
		ClientInviteToGame = 7005,
		UDSHasSession = 7006,
		UDSHasSessionResponse = 7007,
		MPASBase = 7100,
		MPASVacBanReset = 7101,
		KGSBase = 7200,
		UCMBase = 7300,
		ClientUCMAddScreenshot = 7301,
		ClientUCMAddScreenshotResponse = 7302,
		UCMResetCommunityContent = 7307,
		UCMResetCommunityContentResponse = 7308,
		ClientUCMDeleteScreenshot = 7309,
		ClientUCMDeleteScreenshotResponse = 7310,
		ClientUCMPublishFile = 7311,
		ClientUCMPublishFileResponse = 7312,
		ClientUCMDeletePublishedFile = 7315,
		ClientUCMDeletePublishedFileResponse = 7316,
		ClientUCMEnumerateUserPublishedFiles = 7317,
		ClientUCMEnumerateUserPublishedFilesResponse = 7318,
		ClientUCMEnumerateUserSubscribedFiles = 7321,
		ClientUCMEnumerateUserSubscribedFilesResponse = 7322,
		ClientUCMUpdatePublishedFile = 7325,
		ClientUCMUpdatePublishedFileResponse = 7326,
		UCMUpdatePublishedFile = 7327,
		UCMUpdatePublishedFileResponse = 7328,
		UCMDeletePublishedFile = 7329,
		UCMDeletePublishedFileResponse = 7330,
		UCMUpdatePublishedFileStat = 7331,
		UCMReloadPublishedFile = 7337,
		UCMReloadUserFileListCaches = 7338,
		UCMPublishedFileReported = 7339,
		UCMPublishedFilePreviewAdd = 7341,
		UCMPublishedFilePreviewAddResponse = 7342,
		UCMPublishedFilePreviewRemove = 7343,
		UCMPublishedFilePreviewRemoveResponse = 7344,
		ClientUCMPublishedFileSubscribed = 7347,
		ClientUCMPublishedFileUnsubscribed = 7348,
		UCMPublishedFileSubscribed = 7349,
		UCMPublishedFileUnsubscribed = 7350,
		UCMPublishFile = 7351,
		UCMPublishFileResponse = 7352,
		UCMPublishedFileChildAdd = 7353,
		UCMPublishedFileChildAddResponse = 7354,
		UCMPublishedFileChildRemove = 7355,
		UCMPublishedFileChildRemoveResponse = 7356,
		UCMPublishedFileParentChanged = 7359,
		ClientUCMGetPublishedFilesForUser = 7360,
		ClientUCMGetPublishedFilesForUserResponse = 7361,
		ClientUCMSetUserPublishedFileAction = 7364,
		ClientUCMSetUserPublishedFileActionResponse = 7365,
		ClientUCMEnumeratePublishedFilesByUserAction = 7366,
		ClientUCMEnumeratePublishedFilesByUserActionResponse = 7367,
		ClientUCMPublishedFileDeleted = 7368,
		UCMGetUserSubscribedFiles = 7369,
		UCMGetUserSubscribedFilesResponse = 7370,
		UCMFixStatsPublishedFile = 7371,
		ClientUCMEnumerateUserSubscribedFilesWithUpdates = 7378,
		ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse = 7379,
		UCMPublishedFileContentUpdated = 7380,
		ClientUCMPublishedFileUpdated = 7381,
		ClientWorkshopItemChangesRequest = 7382,
		ClientWorkshopItemChangesResponse = 7383,
		ClientWorkshopItemInfoRequest = 7384,
		ClientWorkshopItemInfoResponse = 7385,
		FSBase = 7500,
		ClientRichPresenceUpload = 7501,
		ClientRichPresenceRequest = 7502,
		ClientRichPresenceInfo = 7503,
		FSRichPresenceRequest = 7504,
		FSRichPresenceResponse = 7505,
		FSComputeFrenematrix = 7506,
		FSComputeFrenematrixResponse = 7507,
		FSPlayStatusNotification = 7508,
		FSAddOrRemoveFollower = 7510,
		FSAddOrRemoveFollowerResponse = 7511,
		FSUpdateFollowingList = 7512,
		FSCommentNotification = 7513,
		FSCommentNotificationViewed = 7514,
		ClientFSGetFollowerCount = 7515,
		ClientFSGetFollowerCountResponse = 7516,
		ClientFSGetIsFollowing = 7517,
		ClientFSGetIsFollowingResponse = 7518,
		ClientFSEnumerateFollowingList = 7519,
		ClientFSEnumerateFollowingListResponse = 7520,
		FSGetPendingNotificationCount = 7521,
		FSGetPendingNotificationCountResponse = 7522,
		ClientChatOfflineMessageNotification = 7523,
		ClientChatRequestOfflineMessageCount = 7524,
		ClientChatGetFriendMessageHistory = 7525,
		ClientChatGetFriendMessageHistoryResponse = 7526,
		ClientChatGetFriendMessageHistoryForOfflineMessages = 7527,
		ClientFSGetFriendsSteamLevels = 7528,
		ClientFSGetFriendsSteamLevelsResponse = 7529,
		AMRequestFriendData = 7530,
		DRMRange2 = 7600,
		CEGVersionSetEnableDisableRequest = 7600,
		CEGVersionSetEnableDisableResponse = 7601,
		CEGPropStatusDRMSRequest = 7602,
		CEGPropStatusDRMSResponse = 7603,
		CEGWhackFailureReportRequest = 7604,
		CEGWhackFailureReportResponse = 7605,
		DRMSFetchVersionSet = 7606,
		DRMSFetchVersionSetResponse = 7607,
		EconBase = 7700,
		EconTrading_InitiateTradeRequest = 7701,
		EconTrading_InitiateTradeProposed = 7702,
		EconTrading_InitiateTradeResponse = 7703,
		EconTrading_InitiateTradeResult = 7704,
		EconTrading_StartSession = 7705,
		EconTrading_CancelTradeRequest = 7706,
		EconFlushInventoryCache = 7707,
		EconFlushInventoryCacheResponse = 7708,
		EconCDKeyProcessTransaction = 7711,
		EconCDKeyProcessTransactionResponse = 7712,
		EconGetErrorLogs = 7713,
		EconGetErrorLogsResponse = 7714,
		RMRange = 7800,
		RMTestVerisignOTP = 7800,
		RMTestVerisignOTPResponse = 7801,
		RMDeleteMemcachedKeys = 7803,
		RMRemoteInvoke = 7804,
		BadLoginIPList = 7805,
		RMMsgTraceAddTrigger = 7806,
		RMMsgTraceRemoveTrigger = 7807,
		RMMsgTraceEvent = 7808,
		UGSBase = 7900,
		UGSUpdateGlobalStats = 7900,
		ClientUGSGetGlobalStats = 7901,
		ClientUGSGetGlobalStatsResponse = 7902,
		StoreBase = 8000,
		UMQBase = 8100,
		UMQLogonRequest = 8100,
		UMQLogonResponse = 8101,
		UMQLogoffRequest = 8102,
		UMQLogoffResponse = 8103,
		UMQSendChatMessage = 8104,
		UMQIncomingChatMessage = 8105,
		UMQPoll = 8106,
		UMQPollResults = 8107,
		UMQ2AM_ClientMsgBatch = 8108,
		WorkshopBase = 8200,
		WebAPIBase = 8300,
		WebAPIValidateOAuth2Token = 8300,
		WebAPIValidateOAuth2TokenResponse = 8301,
		WebAPIRegisterGCInterfaces = 8303,
		WebAPIInvalidateOAuthClientCache = 8304,
		WebAPIInvalidateOAuthTokenCache = 8305,
		WebAPISetSecrets = 8306,
		BackpackBase = 8400,
		BackpackAddToCurrency = 8401,
		BackpackAddToCurrencyResponse = 8402,
		CREBase = 8500,
		CREItemVoteSummary = 8503,
		CREItemVoteSummaryResponse = 8504,
		CREUpdateUserPublishedItemVote = 8507,
		CREUpdateUserPublishedItemVoteResponse = 8508,
		CREGetUserPublishedItemVoteDetails = 8509,
		CREGetUserPublishedItemVoteDetailsResponse = 8510,
		CREEnumeratePublishedFiles = 8511,
		CREEnumeratePublishedFilesResponse = 8512,
		CREPublishedFileVoteAdded = 8513,
		SecretsBase = 8600,
		SecretsRequestCredentialPair = 8600,
		SecretsCredentialPairResponse = 8601,
		BoxMonitorBase = 8700,
		BoxMonitorReportRequest = 8700,
		BoxMonitorReportResponse = 8701,
		LogsinkBase = 8800,
		LogsinkWriteReport = 8800,
		PICSBase = 8900,
		ClientPICSChangesSinceRequest = 8901,
		ClientPICSChangesSinceResponse = 8902,
		ClientPICSProductInfoRequest = 8903,
		ClientPICSProductInfoResponse = 8904,
		ClientPICSAccessTokenRequest = 8905,
		ClientPICSAccessTokenResponse = 8906,
		WorkerProcess = 9000,
		WorkerProcessPingRequest = 9000,
		WorkerProcessPingResponse = 9001,
		WorkerProcessShutdown = 9002,
		DRMWorkerProcess = 9100,
		DRMWorkerProcessDRMAndSign = 9100,
		DRMWorkerProcessDRMAndSignResponse = 9101,
		DRMWorkerProcessSteamworksInfoRequest = 9102,
		DRMWorkerProcessSteamworksInfoResponse = 9103,
		DRMWorkerProcessInstallDRMDLLRequest = 9104,
		DRMWorkerProcessInstallDRMDLLResponse = 9105,
		DRMWorkerProcessSecretIdStringRequest = 9106,
		DRMWorkerProcessSecretIdStringResponse = 9107,
		DRMWorkerProcessInstallProcessedFilesRequest = 9110,
		DRMWorkerProcessInstallProcessedFilesResponse = 9111,
		DRMWorkerProcessExamineBlobRequest = 9112,
		DRMWorkerProcessExamineBlobResponse = 9113,
		DRMWorkerProcessDescribeSecretRequest = 9114,
		DRMWorkerProcessDescribeSecretResponse = 9115,
		DRMWorkerProcessBackfillOriginalRequest = 9116,
		DRMWorkerProcessBackfillOriginalResponse = 9117,
		DRMWorkerProcessValidateDRMDLLRequest = 9118,
		DRMWorkerProcessValidateDRMDLLResponse = 9119,
		DRMWorkerProcessValidateFileRequest = 9120,
		DRMWorkerProcessValidateFileResponse = 9121,
		DRMWorkerProcessSplitAndInstallRequest = 9122,
		DRMWorkerProcessSplitAndInstallResponse = 9123,
		DRMWorkerProcessGetBlobRequest = 9124,
		DRMWorkerProcessGetBlobResponse = 9125,
		DRMWorkerProcessEvaluateCrashRequest = 9126,
		DRMWorkerProcessEvaluateCrashResponse = 9127,
		DRMWorkerProcessAnalyzeFileRequest = 9128,
		DRMWorkerProcessAnalyzeFileResponse = 9129,
		DRMWorkerProcessUnpackBlobRequest = 9130,
		DRMWorkerProcessUnpackBlobResponse = 9131,
		DRMWorkerProcessInstallAllRequest = 9132,
		DRMWorkerProcessInstallAllResponse = 9133,
		TestWorkerProcess = 9200,
		TestWorkerProcessLoadUnloadModuleRequest = 9200,
		TestWorkerProcessLoadUnloadModuleResponse = 9201,
		TestWorkerProcessServiceModuleCallRequest = 9202,
		TestWorkerProcessServiceModuleCallResponse = 9203,
		QuestServerBase = 9300,
		ClientGetEmoticonList = 9330,
		ClientEmoticonList = 9331,
		SLCBase = 9400,
		SLCUserSessionStatus = 9400,
		SLCRequestUserSessionStatus = 9401,
		SLCSharedLicensesLockStatus = 9402,
		ClientSharedLibraryLockStatus = 9405,
		ClientSharedLibraryStopPlaying = 9406,
		SLCOwnerLibraryChanged = 9407,
		SLCSharedLibraryChanged = 9408,
		RemoteClientBase = 9500,
		RemoteClientAppStatus = 9502,
		RemoteClientStartStream = 9503,
		RemoteClientStartStreamResponse = 9504,
		RemoteClientPing = 9505,
		RemoteClientPingResponse = 9506,
		ClientUnlockStreaming = 9507,
		ClientUnlockStreamingResponse = 9508,
		RemoteClientAcceptEULA = 9509,
		RemoteClientGetControllerConfig = 9510,
		RemoteClientGetControllerConfigResponse = 9511,
		RemoteClientStreamingEnabled = 9512,
		ClientUnlockHEVC = 9513,
		ClientUnlockHEVCResponse = 9514,
		RemoteClientStatusRequest = 9515,
		RemoteClientStatusResponse = 9516,
		ClientConcurrentSessionsBase = 9600,
		ClientPlayingSessionState = 9600,
		ClientKickPlayingSession = 9601,
		ClientBroadcastBase = 9700,
		ClientBroadcastInit = 9700,
		ClientBroadcastFrames = 9701,
		ClientBroadcastDisconnect = 9702,
		ClientBroadcastScreenshot = 9703,
		ClientBroadcastUploadConfig = 9704,
		BaseClient3 = 9800,
		ClientVoiceCallPreAuthorize = 9800,
		ClientVoiceCallPreAuthorizeResponse = 9801,
		ClientServerTimestampRequest = 9802,
		ClientServerTimestampResponse = 9803,
		ClientLANP2PBase = 9900,
		ClientLANP2PRequestChunk = 9900,
		ClientLANP2PRequestChunkResponse = 9901,
		ClientLANP2PMax = 9999,
		BaseWatchdogServer = 10000,
		NotifyWatchdog = 10000,
		ClientSiteLicenseBase = 10100,
		ClientSiteLicenseSiteInfoNotification = 10100,
		ClientSiteLicenseCheckout = 10101,
		ClientSiteLicenseCheckoutResponse = 10102,
		ClientSiteLicenseGetAvailableSeats = 10103,
		ClientSiteLicenseGetAvailableSeatsResponse = 10104,
		ClientSiteLicenseGetContentCacheInfo = 10105,
		ClientSiteLicenseGetContentCacheInfoResponse = 10106,
		BaseChatServer = 12000,
		ChatServerGetPendingNotificationCount = 12000,
		ChatServerGetPendingNotificationCountResponse = 12001,
		BaseSecretServer = 12100,
		ServerSecretChanged = 12100,
	}

	enum EMsgClanAccountFlags {
		k_EMsgClanAccountFlagPublic = 1,
		k_EMsgClanAccountFlagLarge = 2,
		k_EMsgClanAccountFlagLocked = 4,
		k_EMsgClanAccountFlagDisabled = 8,
		k_EMsgClanAccountFlagOGG = 16,
	}

	enum ENewsUpdateType {
		AppNews = 0,
		SteamAds = 1,
		SteamNews = 2,
		CDDBUpdate = 3,
		ClientUpdate = 4,
	}

	enum ENotificationSetting {
		NotifyUseDefault = 0,
		Always = 1,
		Never = 2,
	}

	enum EOSType {
		Unknown = -1,
		Web = -700,
		IOSUnknown = -600,
		IOS1 = -599,
		IOS2 = -598,
		IOS3 = -597,
		IOS4 = -596,
		IOS5 = -595,
		IOS6 = -594,
		IOS6_1 = -593,
		IOS7 = -592,
		IOS7_1 = -591,
		IOS8 = -590,
		IOS8_1 = -589,
		IOS8_2 = -588,
		IOS8_3 = -587,
		IOS8_4 = -586,
		IOS9 = -585,
		IOS9_1 = -584,
		IOS9_2 = -583,
		IOS9_3 = -582,
		IOS10 = -581,
		IOS10_1 = -580,
		IOS10_2 = -579,
		IOS10_3 = -578,
		IOS11 = -577,
		IOS11_1 = -576,
		IOS11_2 = -575,
		IOS11_3 = -574,
		IOS11_4 = -573,
		IOS12 = -572,
		IOS12_1 = -571,
		AndroidUnknown = -500,
		Android6 = -499,
		Android7 = -498,
		Android8 = -497,
		Android9 = -496,
		UMQ = -400,
		PS3 = -300,
		MacOSUnknown = -102,
		MacOS104 = -101,
		MacOS105 = -100,
		MacOS1058 = -99,
		MacOS106 = -95,
		MacOS1063 = -94,
		MacOS1064_slgu = -93,
		MacOS1067 = -92,
		MacOS107 = -90,
		MacOS108 = -89,
		MacOS109 = -88,
		MacOS1010 = -87,
		MacOS1011 = -86,
		MacOS1012 = -85,
		Macos1013 = -84,
		Macos1014 = -83,
		Macos1015 = -82,
		MacOS1016 = -81,
		MacOS11 = -80,
		MacOSMax = -1,
		LinuxUnknown = -203,
		Linux22 = -202,
		Linux24 = -201,
		Linux26 = -200,
		Linux32 = -199,
		Linux35 = -198,
		Linux36 = -197,
		Linux310 = -196,
		Linux316 = -195,
		Linux318 = -194,
		Linux3x = -193,
		Linux4x = -192,
		Linux41 = -191,
		Linux44 = -190,
		Linux49 = -189,
		Linux414 = -188,
		Linux419 = -187,
		Linux5x = -186,
		Linux54 = -185,
		Linux6x = -184,
		Linux7x = -183,
		LinuxMax = -101,
		WinUnknown = 0,
		Win311 = 1,
		Win95 = 2,
		Win98 = 3,
		WinME = 4,
		WinNT = 5,
		Win2000 = 6,
		WinXP = 7,
		Win2003 = 8,
		WinVista = 9,
		Windows7 = 10,
		Win2008 = 11,
		Win2012 = 12,
		Windows8 = 13,
		Windows81 = 14,
		Win2012R2 = 15,
		Windows10 = 16,
		Win2016 = 17,
		Win2019 = 18,
		WinMAX = 19,
	}

	enum EPaymentMethod {
		None = 0,
		ActivationCode = 1,
		CreditCard = 2,
		Giropay = 3,
		PayPal = 4,
		Ideal = 5,
		PaySafeCard = 6,
		Sofort = 7,
		GuestPass = 8,
		WebMoney = 9,
		MoneyBookers = 10,
		AliPay = 11,
		Yandex = 12,
		Kiosk = 13,
		Qiwi = 14,
		GameStop = 15,
		HardwarePromo = 16,
		MoPay = 17,
		BoletoBancario = 18,
		BoaCompraGold = 19,
		BancoDoBrasilOnline = 20,
		ItauOnline = 21,
		BradescoOnline = 22,
		Pagseguro = 23,
		VisaBrazil = 24,
		AmexBrazil = 25,
		Aura = 26,
		Hipercard = 27,
		MastercardBrazil = 28,
		DinersCardBrazil = 29,
		AuthorizedDevice = 30,
		MOLPoints = 31,
		ClickAndBuy = 32,
		Beeline = 33,
		Konbini = 34,
		EClubPoints = 35,
		CreditCardJapan = 36,
		BankTransferJapan = 37,
		PayEasy = 38,
		Zong = 39,
		CultureVoucher = 40,
		BookVoucher = 41,
		HappymoneyVoucher = 42,
		ConvenientStoreVoucher = 43,
		GameVoucher = 44,
		Multibanco = 45,
		Payshop = 46,
		MaestroBoaCompra = 47,
		OXXO = 48,
		ToditoCash = 49,
		Carnet = 50,
		SPEI = 51,
		ThreePay = 52,
		IsBank = 53,
		Garanti = 54,
		Akbank = 55,
		YapiKredi = 56,
		Halkbank = 57,
		BankAsya = 58,
		Finansbank = 59,
		DenizBank = 60,
		PTT = 61,
		CashU = 62,
		AutoGrant = 64,
		WebMoneyJapan = 65,
		OneCard = 66,
		PSE = 67,
		Exito = 68,
		Efecty = 69,
		Paloto = 70,
		PinValidda = 71,
		MangirKart = 72,
		BancoCreditoDePeru = 73,
		BBVAContinental = 74,
		SafetyPay = 75,
		PagoEfectivo = 76,
		Trustly = 77,
		UnionPay = 78,
		BitCoin = 79,
		Wallet = 128,
		Valve = 129,
		MasterComp = 130,
		Promotional = 131,
		MasterSubscription = 134,
		Payco = 135,
		MobileWalletJapan = 136,
		OEMTicket = 256,
		Split = 512,
		Complimentary = 1024,
	}

	enum EPersonaStateFlag {
		HasRichPresence = 1,
		InJoinableGame = 2,
		Golden = 4,
		RemotePlayTogether = 8,
		ClientTypeWeb = 256,
		ClientTypeMobile = 512,
		ClientTypeTenfoot = 1024,
		ClientTypeVR = 2048,
		LaunchTypeGamepad = 4096,
		LaunchTypeCompatTool = 8192,
	}

	enum EPlatformType {
		Unknown = 0,
		Win32 = 1,
		Win64 = 2,
		Linux64 = 3,
		OSX = 4,
		PS3 = 5,
		Linux32 = 6,
	}

	enum EProtoAppType {
		k_EAppTypeDepotOnly = -2147483648,
		k_EAppTypeInvalid = 0,
		k_EAppTypeGame = 1,
		k_EAppTypeApplication = 2,
		k_EAppTypeTool = 4,
		k_EAppTypeDemo = 8,
		k_EAppTypeDeprected = 16,
		k_EAppTypeDLC = 32,
		k_EAppTypeGuide = 64,
		k_EAppTypeDriver = 128,
		k_EAppTypeConfig = 256,
		k_EAppTypeHardware = 512,
		k_EAppTypeFranchise = 1024,
		k_EAppTypeVideo = 2048,
		k_EAppTypePlugin = 4096,
		k_EAppTypeMusicAlbum = 8192,
		k_EAppTypeSeries = 16384,
		k_EAppTypeComic = 32768,
		k_EAppTypeBeta = 65536,
		k_EAppTypeShortcut = 1073741824,
	}

	enum EProtoClanEventType {
		k_EClanOtherEvent = 1,
		k_EClanGameEvent = 2,
		k_EClanPartyEvent = 3,
		k_EClanMeetingEvent = 4,
		k_EClanSpecialCauseEvent = 5,
		k_EClanMusicAndArtsEvent = 6,
		k_EClanSportsEvent = 7,
		k_EClanTripEvent = 8,
		k_EClanChatEvent = 9,
		k_EClanGameReleaseEvent = 10,
		k_EClanBroadcastEvent = 11,
		k_EClanSmallUpdateEvent = 12,
		k_EClanPreAnnounceMajorUpdateEvent = 13,
		k_EClanMajorUpdateEvent = 14,
		k_EClanDLCReleaseEvent = 15,
		k_EClanFutureReleaseEvent = 16,
		k_EClanESportTournamentStreamEvent = 17,
		k_EClanDevStreamEvent = 18,
		k_EClanFamousStreamEvent = 19,
		k_EClanGameSalesEvent = 20,
		k_EClanGameItemSalesEvent = 21,
		k_EClanInGameBonusXPEvent = 22,
		k_EClanInGameLootEvent = 23,
		k_EClanInGamePerksEvent = 24,
		k_EClanInGameChallengeEvent = 25,
		k_EClanInGameContestEvent = 26,
		k_EClanIRLEvent = 27,
		k_EClanNewsEvent = 28,
		k_EClanBetaReleaseEvent = 29,
		k_EClanInGameContentReleaseEvent = 30,
		k_EClanFreeTrial = 31,
		k_EClanSeasonRelease = 32,
		k_EClanSeasonUpdate = 33,
		k_EClanCrosspostEvent = 34,
		k_EClanInGameEventGeneral = 35,
	}

	enum EProtoExecutionSite {
		Unknown = 0,
		SteamClient = 2,
	}

	enum EPublishedFileForSaleStatus {
		NotForSale = 0,
		PendingApproval = 1,
		ApprovedForSale = 2,
		RejectedForSale = 3,
		NoLongerForSale = 4,
		TentativeApproval = 5,
	}

	enum EPublishedFileInappropriateProvider {
		Invalid = 0,
		Google = 1,
		Amazon = 2,
	}

	enum EPublishedFileInappropriateResult {
		NotScanned = 0,
		VeryUnlikely = 1,
		Unlikely = 30,
		Possible = 50,
		Likely = 75,
		VeryLikely = 100,
	}

	enum EPublishedFileQueryType {
		RankedByVote = 0,
		RankedByPublicationDate = 1,
		AcceptedForGameRankedByAcceptanceDate = 2,
		RankedByTrend = 3,
		FavoritedByFriendsRankedByPublicationDate = 4,
		CreatedByFriendsRankedByPublicationDate = 5,
		RankedByNumTimesReported = 6,
		CreatedByFollowedUsersRankedByPublicationDate = 7,
		NotYetRated = 8,
		RankedByTotalUniqueSubscriptions = 9,
		RankedByTotalVotesAsc = 10,
		RankedByVotesUp = 11,
		RankedByTextSearch = 12,
		RankedByPlaytimeTrend = 13,
		RankedByTotalPlaytime = 14,
		RankedByAveragePlaytimeTrend = 15,
		RankedByLifetimeAveragePlaytime = 16,
		RankedByPlaytimeSessionsTrend = 17,
		RankedByLifetimePlaytimeSessions = 18,
		RankedByInappropriateContentRating = 19,
	}

	enum EPublishedFileRevision {
		Default = 0,
		Latest = 1,
		ApprovedSnapshot = 2,
		ApprovedSnapshot_China = 3,
		RejectedSnapshot = 4,
		RejectedSnapshot_China = 5,
	}

	enum EPublishedFileVisibility {
		Public = 0,
		FriendsOnly = 1,
		Private = 2,
	}

	enum EPurchaseResultDetail {
		NoDetail = 0,
		AVSFailure = 1,
		InsufficientFunds = 2,
		ContactSupport = 3,
		Timeout = 4,
		InvalidPackage = 5,
		InvalidPaymentMethod = 6,
		InvalidData = 7,
		OthersInProgress = 8,
		AlreadyPurchased = 9,
		WrongPrice = 10,
		FraudCheckFailed = 11,
		CancelledByUser = 12,
		RestrictedCountry = 13,
		BadActivationCode = 14,
		DuplicateActivationCode = 15,
		UseOtherPaymentMethod = 16,
		UseOtherFunctionSource = 17,
		InvalidShippingAddress = 18,
		RegionNotSupported = 19,
		AcctIsBlocked = 20,
		AcctNotVerified = 21,
		InvalidAccount = 22,
		StoreBillingCountryMismatch = 23,
		DoesNotOwnRequiredApp = 24,
		CanceledByNewTransaction = 25,
		ForceCanceledPending = 26,
		FailCurrencyTransProvider = 27,
		FailedCyberCafe = 28,
		NeedsPreApproval = 29,
		PreApprovalDenied = 30,
		WalletCurrencyMismatch = 31,
		EmailNotValidated = 32,
		ExpiredCard = 33,
		TransactionExpired = 34,
		WouldExceedMaxWallet = 35,
		MustLoginPS3AppForPurchase = 36,
		CannotShipToPOBox = 37,
		InsufficientInventory = 38,
		CannotGiftShippedGoods = 39,
		CannotShipInternationally = 40,
		BillingAgreementCancelled = 41,
		InvalidCoupon = 42,
		ExpiredCoupon = 43,
		AccountLocked = 44,
		OtherAbortableInProgress = 45,
		ExceededSteamLimit = 46,
		OverlappingPackagesInCart = 47,
		NoWallet = 48,
		NoCachedPaymentMethod = 49,
		CannotRedeemCodeFromClient = 50,
		PurchaseAmountNoSupportedByProvider = 51,
		OverlappingPackagesInPendingTransaction = 52,
		RateLimited = 53,
		OwnsExcludedApp = 54,
		CreditCardBinMismatchesType = 55,
		CartValueTooHigh = 56,
		BillingAgreementAlreadyExists = 57,
		POSACodeNotActivated = 58,
		CannotShipToCountry = 59,
		HungTransactionCancelled = 60,
		PaypalInternalError = 61,
		UnknownGlobalCollectError = 62,
		InvalidTaxAddress = 63,
		PhysicalProductLimitExceeded = 64,
		PurchaseCannotBeReplayed = 65,
		DelayedCompletion = 66,
		BundleTypeCannotBeGifted = 67,
		BlockedByUSGov = 68,
		ItemsReservedForCommercialUse = 69,
		GiftAlreadyOwned = 70,
		GiftInvalidForRecipientRegion = 71,
		GiftPricingImbalance = 72,
		GiftRecipientNotSpecified = 73,
		ItemsNotAllowedForCommercialUse = 74,
		BusinessStoreCountryCodeMismatch = 75,
		UserAssociatedWithManyCafes = 76,
		UserNotAssociatedWithCafe = 77,
		AddressInvalid = 78,
		CreditCardNumberInvalid = 79,
		CannotShipToMilitaryPostOffice = 80,
		BillingNameInvalidResemblesCreditCard = 81,
		PaymentMethodTemporarilyUnavailable = 82,
		PaymentMethodNotSupportedForProduct = 83,
	}

	enum ERegionCode {
		USEast = 0,
		USWest = 1,
		SouthAmerica = 2,
		Europe = 3,
		Asia = 4,
		Australia = 5,
		MiddleEast = 6,
		Africa = 7,
		World = 255,
	}

	enum ERemoteClientBroadcastMsg {
		Discovery = 0,
		Status = 1,
		Offline = 2,
		AuthorizationRequest = 3,
		AuthorizationResponse = 4,
		StreamingRequest = 5,
		StreamingResponse = 6,
		ProofRequest = 7,
		ProofResponse = 8,
		AuthorizationCancelRequest = 9,
		StreamingCancelRequest = 10,
		ClientIDDeconflict = 11,
		StreamTransportSignal = 12,
		StreamingProgress = 13,
	}

	enum ERemoteClientService {
		None = 0,
		RemoteControl = 1,
		GameStreaming = 2,
		SiteLicense = 4,
		ContentCache = 8,
	}

	enum ERemoteDeviceAuthorizationResult {
		Success = 0,
		Denied = 1,
		NotLoggedIn = 2,
		Offline = 3,
		Busy = 4,
		InProgress = 5,
		TimedOut = 6,
		Failed = 7,
		Canceled = 8,
	}

	enum ERemoteDeviceStreamingResult {
		Success = 0,
		Unauthorized = 1,
		ScreenLocked = 2,
		Failed = 3,
		Busy = 4,
		InProgress = 5,
		Canceled = 6,
		DriversNotInstalled = 7,
		Disabled = 8,
		BroadcastingActive = 9,
		VRActive = 10,
		PINRequired = 11,
		TransportUnavailable = 12,
		Invisible = 13,
		GameLaunchFailed = 14,
	}

	enum ERemoteStoragePlatform {
		None = 0,
		Windows = 1,
		OSX = 2,
		PS3 = 4,
		Linux = 8,
		Switch = 16,
		Android = 32,
		IPhoneOS = 64,
		All = -1,
	}

	enum EResult {
		Invalid = 0,
		OK = 1,
		Fail = 2,
		NoConnection = 3,
		InvalidPassword = 5,
		LoggedInElsewhere = 6,
		InvalidProtocolVer = 7,
		InvalidParam = 8,
		FileNotFound = 9,
		Busy = 10,
		InvalidState = 11,
		InvalidName = 12,
		InvalidEmail = 13,
		DuplicateName = 14,
		AccessDenied = 15,
		Timeout = 16,
		Banned = 17,
		AccountNotFound = 18,
		InvalidSteamID = 19,
		ServiceUnavailable = 20,
		NotLoggedOn = 21,
		Pending = 22,
		EncryptionFailure = 23,
		InsufficientPrivilege = 24,
		LimitExceeded = 25,
		Revoked = 26,
		Expired = 27,
		AlreadyRedeemed = 28,
		DuplicateRequest = 29,
		AlreadyOwned = 30,
		IPNotFound = 31,
		PersistFailed = 32,
		LockingFailed = 33,
		LogonSessionReplaced = 34,
		ConnectFailed = 35,
		HandshakeFailed = 36,
		IOFailure = 37,
		RemoteDisconnect = 38,
		ShoppingCartNotFound = 39,
		Blocked = 40,
		Ignored = 41,
		NoMatch = 42,
		AccountDisabled = 43,
		ServiceReadOnly = 44,
		AccountNotFeatured = 45,
		AdministratorOK = 46,
		ContentVersion = 47,
		TryAnotherCM = 48,
		PasswordRequiredToKickSession = 49,
		AlreadyLoggedInElsewhere = 50,
		Suspended = 51,
		Cancelled = 52,
		DataCorruption = 53,
		DiskFull = 54,
		RemoteCallFailed = 55,
		PasswordUnset = 56,
		ExternalAccountUnlinked = 57,
		PSNTicketInvalid = 58,
		ExternalAccountAlreadyLinked = 59,
		RemoteFileConflict = 60,
		IllegalPassword = 61,
		SameAsPreviousValue = 62,
		AccountLogonDenied = 63,
		CannotUseOldPassword = 64,
		InvalidLoginAuthCode = 65,
		AccountLogonDeniedNoMail = 66,
		HardwareNotCapableOfIPT = 67,
		IPTInitError = 68,
		ParentalControlRestricted = 69,
		FacebookQueryError = 70,
		ExpiredLoginAuthCode = 71,
		IPLoginRestrictionFailed = 72,
		AccountLockedDown = 73,
		AccountLogonDeniedVerifiedEmailRequired = 74,
		NoMatchingURL = 75,
		BadResponse = 76,
		RequirePasswordReEntry = 77,
		ValueOutOfRange = 78,
		UnexpectedError = 79,
		Disabled = 80,
		InvalidCEGSubmission = 81,
		RestrictedDevice = 82,
		RegionLocked = 83,
		RateLimitExceeded = 84,
		AccountLoginDeniedNeedTwoFactor = 85,
		ItemDeleted = 86,
		AccountLoginDeniedThrottle = 87,
		TwoFactorCodeMismatch = 88,
		TwoFactorActivationCodeMismatch = 89,
		AccountAssociatedToMultiplePartners = 90,
		NotModified = 91,
		NoMobileDevice = 92,
		TimeNotSynced = 93,
		SMSCodeFailed = 94,
		AccountLimitExceeded = 95,
		AccountActivityLimitExceeded = 96,
		PhoneActivityLimitExceeded = 97,
		RefundToWallet = 98,
		EmailSendFailure = 99,
		NotSettled = 100,
		NeedCaptcha = 101,
		GSLTDenied = 102,
		GSOwnerDenied = 103,
		InvalidItemType = 104,
		IPBanned = 105,
		GSLTExpired = 106,
		InsufficientFunds = 107,
		TooManyPending = 108,
		NoSiteLicensesFound = 109,
		WGNetworkSendExceeded = 110,
		AccountNotFriends = 111,
		LimitedUserAccount = 112,
		CantRemoveItem = 113,
		AccountHasBeenDeleted = 114,
		AccountHasAnExistingUserCancelledLicense = 115,
		DeniedDueToCommunityCooldown = 116,
		NoLauncherSpecified = 117,
		MustAgreeToSSA = 118,
		ClientNoLongerSupported = 119,
	}

	enum EServerFlags {
		None = 0,
		Active = 1,
		Secure = 2,
		Dedicated = 4,
		Linux = 8,
		Passworded = 16,
		Private = 32,
	}

	enum EServerType {
		Util = -2,
		Client = -3,
		CServer = -4,
		CEconBase = -5,
		Invalid = -1,
		First = 0,
		Shell = 0,
		GM = 1,
		AM = 3,
		BS = 4,
		VS = 5,
		ATS = 6,
		CM = 7,
		FBS = 8,
		BoxMonitor = 9,
		SS = 10,
		DRMS = 11,
		Console = 13,
		PICS = 14,
		ContentStats = 16,
		DP = 17,
		WG = 18,
		SM = 19,
		SLC = 20,
		UFS = 21,
		Community = 24,
		AppInformation = 26,
		Spare = 27,
		FTS = 28,
		SiteLicense = 29,
		PS = 30,
		IS = 31,
		CCS = 32,
		DFS = 33,
		LBS = 34,
		MDS = 35,
		CS = 36,
		GC = 37,
		NS = 38,
		OGS = 39,
		WebAPI = 40,
		UDS = 41,
		MMS = 42,
		GMS = 43,
		KGS = 44,
		UCM = 45,
		RM = 46,
		FS = 47,
		Econ = 48,
		Backpack = 49,
		UGS = 50,
		StoreFeature = 51,
		MoneyStats = 52,
		CRE = 53,
		UMQ = 54,
		Workshop = 55,
		BRP = 56,
		GCH = 57,
		MPAS = 58,
		Trade = 59,
		Secrets = 60,
		Logsink = 61,
		Market = 62,
		Quest = 63,
		WDS = 64,
		ACS = 65,
		PNP = 66,
		TaxForm = 67,
		ExternalMonitor = 68,
		Parental = 69,
		PartnerUpload = 70,
		Partner = 71,
		ES = 72,
		DepotWebContent = 73,
		ExternalConfig = 74,
		GameNotifications = 75,
		MarketRepl = 76,
		MarketSearch = 77,
		Localization = 78,
		Steam2Emulator = 79,
		PublicTest = 80,
		SolrMgr = 81,
		BroadcastRelay = 82,
		BroadcastDirectory = 83,
		VideoManager = 84,
		TradeOffer = 85,
		BroadcastChat = 86,
		Phone = 87,
		AccountScore = 88,
		Support = 89,
		LogRequest = 90,
		LogWorker = 91,
		EmailDelivery = 92,
		InventoryManagement = 93,
		Auth = 94,
		StoreCatalog = 95,
		HLTVRelay = 96,
		IDLS = 97,
		Perf = 98,
		ItemInventory = 99,
		Watchdog = 100,
		AccountHistory = 101,
		Chat = 102,
		Shader = 103,
		AccountHardware = 104,
		WebRTC = 105,
		Giveaway = 106,
		ChatRoom = 107,
		VoiceChat = 108,
		QMS = 109,
		Trust = 110,
		TimeMachine = 111,
		VACDBMaster = 112,
		ContentServerConfig = 113,
		Minigame = 114,
		MLTrain = 115,
		VACTest = 116,
		TaxService = 117,
		MLInference = 118,
		UGSAggregate = 119,
		TURN = 120,
		RemoteClient = 121,
		BroadcastOrigin = 122,
		BroadcastChannel = 123,
		SteamAR = 124,
		China = 125,
		CrashDump = 126,
	}

	enum ESteamDatagramMsgID {
		Invalid = 0,
		RouterPingRequest = 1,
		RouterPingReply = 2,
		GameserverPingRequest = 3,
		LegacyGameserverPingReply = 4,
		GameserverSessionRequest = 5,
		GameserverSessionEstablished = 6,
		NoSession = 7,
		Diagnostic = 8,
		DataClientToRouter = 9,
		DataRouterToServer = 10,
		DataServerToRouter = 11,
		DataRouterToClient = 12,
		Stats = 13,
		ClientPingSampleRequest = 14,
		ClientPingSampleReply = 15,
		ClientToRouterSwitchedPrimary = 16,
		RelayHealth = 17,
		ConnectRequest = 18,
		ConnectOK = 19,
		ConnectionClosed = 20,
		NoConnection = 21,
		RelayToRelayPingRequest = 22,
		RelayToRelayPingReply = 23,
		P2PSessionRequest = 24,
		P2PSessionEstablished = 25,
		P2PStatsClient = 26,
		P2PStatsRelay = 27,
		P2PBadRoute = 28,
		GameserverPingReply = 29,
		GameserverRegistration = 30,
	}

	enum ESteamNetworkingSocketsCipher {
		INVALID = 0,
		NULL = 1,
		AES_256_GCM = 2,
	}

	enum ESteamNetworkingUDPMsgID {
		ChallengeRequest = 32,
		ChallengeReply = 33,
		ConnectRequest = 34,
		ConnectOK = 35,
		ConnectionClosed = 36,
		NoConnection = 37,
	}

	enum ESteamPipeOperationType {
		Invalid = 0,
		DecryptCPU = 1,
		DiskRead = 2,
		DiskWrite = 3,
	}

	enum ESteamPipeWorkType {
		Invalid = 0,
		StageFromChunkStores = 1,
	}

	enum ESteamReviewScore {
		None = 0,
		OverwhelminglyNegative = 1,
		VeryNegative = 2,
		Negative = 3,
		MostlyNegative = 4,
		Mixed = 5,
		MostlyPositive = 6,
		Positive = 7,
		VeryPositive = 8,
		OverwhelminglyPositive = 9,
	}

	enum EStreamActivity {
		Idle = 1,
		Game = 2,
		Desktop = 3,
		SecureDesktop = 4,
	}

	enum EStreamAudioCodec {
		None = 0,
		Raw = 1,
		Vorbis = 2,
		Opus = 3,
		MP3 = 4,
		AAC = 5,
	}

	enum EStreamBitrate {
		Autodetect = -1,
		Unlimited = 0,
	}

	enum EStreamChannel {
		Invalid = -1,
		Discovery = 0,
		Control = 1,
		Stats = 2,
		DataChannelStart = 3,
	}

	enum EStreamControlMessage {
		AuthenticationRequest = 1,
		AuthenticationResponse = 2,
		NegotiationInit = 3,
		NegotiationSetConfig = 4,
		NegotiationComplete = 5,
		ClientHandshake = 6,
		ServerHandshake = 7,
		StartNetworkTest = 8,
		KeepAlive = 9,
		LAST_SETUP_MESSAGE = 15,
		StartAudioData = 50,
		StopAudioData = 51,
		StartVideoData = 52,
		StopVideoData = 53,
		InputMouseMotion = 54,
		InputMouseWheel = 55,
		InputMouseDown = 56,
		InputMouseUp = 57,
		InputKeyDown = 58,
		InputKeyUp = 59,
		ShowCursor = 63,
		HideCursor = 64,
		SetCursor = 65,
		GetCursorImage = 66,
		SetCursorImage = 67,
		DeleteCursor = 68,
		SetTargetFramerate = 69,
		InputLatencyTest = 70,
		OverlayEnabled = 74,
		VideoDecoderInfo = 80,
		SetTitle = 81,
		SetIcon = 82,
		QuitRequest = 83,
		SetQoS = 87,
		SetGammaRamp = 89,
		VideoEncoderInfo = 90,
		SetTargetBitrate = 94,
		SetActivity = 98,
		SetStreamingClientConfig = 99,
		SystemSuspend = 100,
		VirtualHereRequest = 102,
		VirtualHereReady = 103,
		VirtualHereShareDevice = 104,
		SetSpectatorMode = 105,
		RemoteHID = 106,
		StartMicrophoneData = 107,
		StopMicrophoneData = 108,
		InputText = 109,
		TouchConfigActive = 110,
		GetTouchConfigData = 111,
		SetTouchConfigData = 112,
		SaveTouchConfigLayout = 113,
		TouchActionSetActive = 114,
		GetTouchIconData = 115,
		SetTouchIconData = 116,
		InputTouchFingerDown = 117,
		InputTouchFingerMotion = 118,
		InputTouchFingerUp = 119,
		SetCaptureSize = 120,
		SetFlashState = 121,
		Pause = 122,
		Resume = 123,
		EnableHighResCapture = 124,
		DisableHighResCapture = 125,
		ToggleMagnification = 126,
		SetCapslock = 127,
		SetKeymap = 128,
		StopRequest = 129,
		TouchActionSetLayerAdded = 130,
		TouchActionSetLayerRemoved = 131,
	}

	enum EStreamDataMessage {
		DataPacket = 1,
		DataLost = 2,
	}

	enum EStreamDeviceFormFactor {
		Unknown = 0,
		Phone = 1,
		Tablet = 2,
		Computer = 3,
		TV = 4,
	}

	enum EStreamDiscoveryMessage {
		PingRequest = 1,
		PingResponse = 2,
	}

	enum EStreamFrameEvent {
		InputEventStart = 0,
		InputEventSend = 1,
		InputEventRecv = 2,
		InputEventQueued = 3,
		InputEventHandled = 4,
		Start = 5,
		CaptureBegin = 6,
		CaptureEnd = 7,
		ConvertBegin = 8,
		ConvertEnd = 9,
		EncodeBegin = 10,
		EncodeEnd = 11,
		Send = 12,
		Recv = 13,
		DecodeBegin = 14,
		DecodeEnd = 15,
		UploadBegin = 16,
		UploadEnd = 17,
		Complete = 18,
	}

	enum EStreamFramerateLimiter {
		SlowCapture = 1,
		SlowConvert = 2,
		SlowEncode = 4,
		SlowNetwork = 8,
		SlowDecode = 16,
		SlowGame = 32,
		SlowDisplay = 64,
	}

	enum EStreamFrameResult {
		Pending = 0,
		Displayed = 1,
		DroppedNetworkSlow = 2,
		DroppedNetworkLost = 3,
		DroppedDecodeSlow = 4,
		DroppedDecodeCorrupt = 5,
		DroppedLate = 6,
		DroppedReset = 7,
	}

	enum EStreamGamepadInputType {
		Invalid = 0,
		DPadUp = 1,
		DPadDown = 2,
		DPadLeft = 4,
		DPadRight = 8,
		Start = 16,
		Back = 32,
		LeftThumb = 64,
		RightThumb = 128,
		LeftShoulder = 256,
		RightShoulder = 512,
		Guide = 1024,
		A = 4096,
		B = 8192,
		X = 16384,
		Y = 32768,
		LeftThumbX = 65536,
		LeftThumbY = 131072,
		RightThumbX = 262144,
		RightThumbY = 524288,
		LeftTrigger = 1048576,
		RightTrigger = 2097152,
	}

	enum EStreamHostPlayAudioPreference {
		k_EStreamHostPlayAudioDefault = 0,
		k_EStreamHostPlayAudioAlways = 1,
	}

	enum EStreamingDataType {
		AudioData = 0,
		VideoData = 1,
		MicrophoneData = 2,
	}

	enum EStreamInterface {
		Default = 0,
		RecentGames = 1,
		BigPicture = 2,
		Desktop = 3,
	}

	enum EStreamMouseButton {
		Left = 1,
		Right = 2,
		Middle = 16,
		X1 = 32,
		X2 = 64,
		Unknown = 4096,
	}

	enum EStreamMouseWheelDirection {
		Down = -120,
		Left = 3,
		Right = 4,
		Up = 120,
	}

	enum EStreamP2PScope {
		Unknown = 0,
		Disabled = 1,
		OnlyMe = 2,
		Friends = 3,
		Everyone = 4,
	}

	enum EStreamQualityPreference {
		Fast = 1,
		Balanced = 2,
		Beautiful = 3,
	}

	enum EStreamStatsMessage {
		FrameEvents = 1,
		DebugDump = 2,
		LogMessage = 3,
		LogUploadBegin = 4,
		LogUploadData = 5,
		LogUploadComplete = 6,
	}

	enum EStreamTransport {
		None = 0,
		UDP = 1,
		UDPRelay = 2,
		WebRTC = 3,
		SDR = 4,
		SNS = 5,
	}

	enum EStreamVersion {
		None = 0,
		Current = 1,
	}

	enum EStreamVideoCodec {
		None = 0,
		Raw = 1,
		VP8 = 2,
		VP9 = 3,
		H264 = 4,
		HEVC = 5,
		ORBX1 = 6,
		ORBX2 = 7,
	}

	enum ESystemIMType {
		RawText = 0,
		InvalidCard = 1,
		RecurringPurchaseFailed = 2,
		CardWillExpire = 3,
		SubscriptionExpired = 4,
		GuestPassReceived = 5,
		GuestPassGranted = 6,
		GiftRevoked = 7,
		SupportMessage = 8,
		SupportMessageClearAlert = 9,
	}

	enum ETradeOfferConfirmationMethod {
		Invalid = 0,
		Email = 1,
		MobileApp = 2,
	}

	enum ETradeOfferState {
		Invalid = 1,
		Active = 2,
		Accepted = 3,
		Countered = 4,
		Expired = 5,
		Canceled = 6,
		Declined = 7,
		InvalidItems = 8,
		CreatedNeedsConfirmation = 9,
		CanceledBySecondFactor = 10,
		InEscrow = 11,
	}

	enum EUCMFilePrivacyState {
		Invalid = -1,
		Private = 2,
		FriendsOnly = 4,
		Public = 8,
	}

	enum EUdpPacketType {
		Invalid = 0,
		ChallengeReq = 1,
		Challenge = 2,
		Connect = 3,
		Accept = 4,
		Disconnect = 5,
		Data = 6,
		Datagram = 7,
		Max = 8,
	}

	enum EUniverse {
		Invalid = 0,
		Public = 1,
		Beta = 2,
		Internal = 3,
		Dev = 4,
	}

	enum EUserReviewScorePreference {
		Unset = 0,
		IncludeAll = 1,
		ExcludeBombs = 2,
	}

	enum EValveIndexComponent {
		Unknown = 0,
		HMD = 1,
		LeftKnuckle = 2,
		RightKnuckle = 3,
	}

	enum EVideoFormat {
		None = 0,
		YV12 = 1,
		Accel = 2,
	}

	enum EVoiceCallState {
		None = 0,
		ScheduledInitiate = 1,
		RequestedMicAccess = 2,
		LocalMicOnly = 3,
		CreatePeerConnection = 4,
		InitatedWebRTCSession = 5,
		WebRTCConnectedWaitingOnIceConnected = 6,
		RequestedPermission = 7,
		NotifyingVoiceChatOfWebRTCSession = 8,
		Connected = 9,
	}

	enum EWorkshopEnumerationType {
		RankedByVote = 0,
		Recent = 1,
		Trending = 2,
		FavoriteOfFriends = 3,
		VotedByFriends = 4,
		ContentByFriends = 5,
		RecentFromFollowedUsers = 6,
	}

	enum EWorkshopFileAction {
		Played = 0,
		Completed = 1,
	}

	enum EWorkshopFileType {
		First = 0,
		SteamworksAccessInvite = 13,
		SteamVideo = 14,
		GameManagedItem = 15,
	}

	enum EClientUIMode {
		None = 0,
		BigPicture = 1,
		Mobile = 2,
		Web = 3,
	}

	enum EConnectionProtocol {
		Auto = 0,
		TCP = 1,
		WebSocket = 2,
	}

	enum EPurchaseResult {
		Unknown = -1,
		OK = 0,
		AlreadyOwned = 9,
		RegionLockedKey = 13,
		InvalidKey = 14,
		DuplicatedKey = 15,
		BaseGameRequired = 24,
		OnCooldown = 53,
	}

	enum EPrivacyState {
		Private = 1,
		FriendsOnly = 2,
		Public = 3,
	}

	enum ECurrencyCode {
		"Invalid" = 0,
		"USD" = 1,
		"GBP" = 2,
		"EUR" = 3,
		"CHF" = 4,
		"RUB" = 5,
		"PLN" = 6,
		"BRL" = 7,
		"JPY" = 8,
		"NOK" = 9,
		"IDR" = 10,
		"MYR" = 11,
		"PHP" = 12,
		"SGD" = 13,
		"THB" = 14,
		"VND" = 15,
		"KRW" = 16,
		"TRY" = 17,
		"UAH" = 18,
		"MXN" = 19,
		"CAD" = 20,
		"AUD" = 21,
		"NZD" = 22,
		"CNY" = 23,
		"INR" = 24,
		"CLP" = 25,
		"PEN" = 26,
		"COP" = 27,
		"ZAR" = 28,
		"HKD" = 29,
		"TWD" = 30,
		"SAR" = 31,
		"AED" = 32,
		"ARS" = 34,
		"ILS" = 35,
		"BYN" = 36,
		"KZT" = 37,
		"KWD" = 38,
		"QAR" = 39,
		"CRC" = 40,
		"UYU" = 41,
	}

	enum EMachineIDType {
		"None" = 1,
		"AlwaysRandom" = 2,
		"AccountNameGenerated" = 3,
		"PersistentRandom" = 4,
	}

	enum EPersonaState {
		Offline = 0,
		Online = 1,
		Busy = 2,
		Away = 3,
		Snooze = 4,
		LookingToTrade = 5,
		LookingToPlay = 6,
		Invisible = 7,
		Max = 8,
	}

	enum ESteamUserEvents {
		ERROR = "error",
		LOGGED_ON = "loggedOn",
		DISCONNECTED = "disconnected",
		STEAM_GUARD = "steamGuard",
		WEB_SESSION = "webSession",
		PLAYING_STATE = "playingState",
	}

	interface LogOnParams {
		accountName: string;
		password: string;
		authCode?: string;
		twoFactorCode?: string;
		loginKey?: string;
		rememberPassword?: boolean;
		logonID?: string;
		machineName?: string;
		clientOS?: number;
		identity_secret?: string;
		dontRememberMachine?: boolean;
		shared_secret?: string;
	}

	interface SteamPartner {
		getSteamID64(): string;
	}

	interface Options {
		localAddress?: string;
		dataDirectory?: string;
		autoRelogin?: boolean;
		singleSentryfile?: boolean;
		promptSteamGuardCode?: boolean;
		machineIdType?: EMachineIDType;
		machineIdFormat?: string[];
		enablePicsCache?: boolean;
		picsCacheAll?: boolean;

		changelistUpdateInterval?: number;

		additionalHeaders?: object;
	}

	interface PersonaStateKeys {
		readonly Offline: 0;
		readonly Online: 1;
		readonly Busy: 2;
		readonly Away: 3;
		readonly Snooze: 4;
		readonly LookingToTrade: 5;
		readonly LookingToPlay: 6;
		readonly Invisible: 7;
		readonly Max: 8;
	}

	interface CreateQuickInviteLinkOptions {
		inviteLimit?: number;
		inviteDuration?: number | null;
	}

	interface AccountLimitations {
		limited: boolean;
		communityBanned: boolean;
		locked: boolean;
		canInviteFriends: boolean;
	}

	interface Chat {
		name: string | null;
		private: boolean;
		invisibleToFriends: boolean;
		officersOnlyChat: boolean;
		unjoinable: boolean;
		members: {
			rank: EClanRank;
			permissions: EChatPermission;
		};
	}

	interface FriendMessage {
		steamid_friend: SteamID;
		chat_entry_type: EChatEntryType;
		from_limited_account: boolean;
		message: string;
		message_no_bbcode: string;
		message_bbcode_parsed: string;
		server_timestamp: Date;
		ordinal: number;
		local_echo: boolean;
		low_priority: boolean;
	}

	interface ChatMentions {
		mention_all: boolean;
		mention_here: boolean;
		mention_steamids: SteamID[];
	}

	interface ServerMessage {
		message: EChatRoomServerMessage;
		string_param?: string;
		steamid_param?: SteamID;
	}

	interface ChatMessage {
		chat_group_id: number;
		chat_id: number;
		steamid_sender: SteamID;
		message: string;
		message_no_bbcode: string;
		server_timestamp: number;
		ordinal: number;
		mentions: ChatMentions | null;
		server_message: ServerMessage | null;
		chat_name: string;
	}

	interface ChatMessagesModifiedDetails {
		chat_group_id: number;
		chat_id: number;
		messages: any[];
	}

	interface ChatRoomState {
		chat_id: string;
		chat_name: string;
		voice_allowed: boolean;
		members_in_voice: SteamID[];
		time_last_message: Date;
		sort_order: number;
		last_message: string;
		steamid_last_message: SteamID;
	}

	interface ChatRoomGroupRoomsChangeDetails {
		chat_group_id: number;
		chat_id: number;
		chat_rooms: ChatRoomState[];
	}

	interface AccountInfo {
		name: string;
		country: string;
		authedMachines: number;
		flags: EAccountFlags;
		facebookID: number;
		facebookName: string;
	}

	interface QuickInviteLink {
		invite_link: string;
		invite_token: string;
		invite_limit: number;
		invite_duration: number | null;
		time_created: Date;
		valid: boolean;
	}

	interface Gift {
		gid: number;
		packageid: number;
		TimeCreated: Date;
		TimeExpiration: Date;
		TimeSent: Date;
		TimeAcked: Date;
		TimeRedeemed: any;
		RecipientAddress: string;
		SenderAddress: string;
		SenderName: string;
	}

	interface AppInfo {
		changenumber: number;
		missingToken: boolean;
		appinfo: Record<string, any>;
	}

	interface PackageInfo {
		changenumber: number;
		missingToken: boolean;
		packageinfo: Record<string, any>;
	}

	interface ProductInfo {
		apps: AppInfo;
		packages: PackageInfo;
		unknownApps: number[];
		unknownPackages: number[];
	}

	interface UserChatRoomState {
		chat_id: string;
		time_joined: Date;
		time_last_ack: Date | null;
		desktop_notification_level: EChatRoomNotificationLevel;
		mobile_notification_level: EChatRoomNotificationLevel;
		time_last_mention: Date | null;
		unread_indicator_muted: boolean;
		time_first_unread: Date;
	}

	interface UserChatRoomGroupState {
		chat_group_id: string;
		time_joined: Date;
		user_chat_room_state: UserChatRoomState[];
		desktop_notification_level: EChatRoomNotificationLevel;
		mobile_notification_level: EChatRoomNotificationLevel;
		time_last_group_ack: Date | null;
		unread_indicator_muted: boolean;
	}

	interface SteamChatRoomEventListerner {
		friendMessage: (message: FriendMessage) => void;
		friendMessageEcho: (message: FriendMessage) => void;
		friendTyping: (message: FriendMessage) => void;
		friendTypingEcho: (message: FriendMessage) => void;
		friendLeftConversation: (message: FriendMessage) => void;
		friendLeftConversationEcho: (message: FriendMessage) => void;
		chatMessage: (message: ChatMessage) => void;
		chatMessagesModified: (details: ChatMessagesModifiedDetails) => void;
		chatRoomGroupRoomsChange: (
			details: ChatRoomGroupRoomsChangeDetails
		) => void;
	}

	interface TradeRestrictions {
		steamguardRequiredDays?: number;
		newDeviceCooldownDays?: number;
		defaultPasswordResetProbationDays?: number;
		passwordResetProbationDays?: number;
		defaultEmailChangeProbationDays?: number;
		emailChangeProbationDays?: number;
	}

	interface EventListener {
		loggedOn: (details: object, parental: object) => void;
		steamGuard: (
			domain: string | null,
			lastCodeWrong: boolean,
			callback: (code: number) => void
		) => void;
		error: (err: Error) => void;
		disconnected: (eresult: EResult, msg: string) => void;
		sentry: (sentry: Buffer) => void;
		webSession: (sessionID: any, cookies: string[]) => void;
		loginKey: (key: string) => void;
		newItems: (count: number) => void;
		newComments: (
			count: number,
			myItems: number,
			discussions: number
		) => void;
		tradeOffers: (count: number) => void;
		communityMessages: (count: number) => void;
		offlineMessages: (count: number, friends: SteamID[]) => void;
		vanityURL: (url: string) => void;
		accountInfo: (
			name: string,
			country: string,
			authedMachines: number,
			flags: EAccountFlags,
			facebookID: number,
			facebookName: string
		) => void;
		emailInfo: (address: string, validated: boolean) => void;
		accountLimitations: (
			limited: boolean,
			communityBanned: boolean,
			locked: boolean,
			canInviteFriends: boolean
		) => void;
		vacBans: (numBans: number, appids: number[]) => void;
		wallet: (
			hasWallet: boolean,
			currency: ECurrencyCode,
			balance: number
		) => void;
		licenses: (licenses: any[]) => void;
		gifts: (gifts: Gift[]) => void;
		appOwnershipCached: () => void;
		changelist: (
			changenumber: number,
			apps: number[],
			packages: number[]
		) => void;
		appUpdate: (appid: number, data: ProductInfo) => void;
		packageUpdate: (appid: number, data: ProductInfo) => void;
		marketingMessages: (
			timestamp: Date,
			messages: Array<{ id: string; url: string; flags: number }>
		) => void;
		tradeRequest: (
			steamID: SteamID,
			respond: (accept: boolean) => void
		) => void;
		tradeResponse: (
			steamID: SteamID,
			response: EEconTradeResponse,
			restrictions: TradeRestrictions
		) => void;
		tradeStarted: (steamID: SteamID) => void;
		playingState: (blocked: boolean, playingApp: number) => void;
		user: (sid: SteamID, user: Record<string, any>) => void;
		group: (sid: SteamID, group: Record<string, any>) => void;
		groupEvent: (
			sid: SteamID,
			headline: string,
			date: Date,
			gid: number | string,
			gameID: number
		) => void;
		groupAnnouncement: (
			sid: SteamID,
			headline: string,
			gid: number | string
		) => void;
		friendRelationship: (
			sid: SteamID,
			relationship: EFriendRelationship
		) => void;
		groupRelationship: (
			sid: SteamID,
			relationship: EClanRelationship
		) => void;
		friendsList: () => void;
		friendPersonasLoaded: () => void;
		groupList: () => void;
		friendsGroupList: (
			groups: Record<string, { name: string; members: SteamID[] }>
		) => void;
		nicknameList: () => void;
		nickname: (steamID: SteamID, newNickname: string | null) => void;
		friendOrChatMessage: () => void;
		friendMessage: (senderID: SteamID, message: string) => void;
		friendTyping: (recipientID: SteamID) => void;
		friendLeftConversation: (senderID: SteamID) => void;
		friendMessageEcho: (recipientID: SteamID, message: string) => void;
		friendTypingEcho: (recipientID: SteamID) => void;
		chatMessage: (room: SteamID, chatter: SteamID, message: string) => void;
		chatHistory: (
			steamID: SteamID,
			success: EResult,
			messages: string[]
		) => void;
		chatInvite: (
			inviterID: SteamID,
			chatID: SteamID,
			chatName: string
		) => void;
		chatCreated: (
			friendID: SteamID,
			eresult: EResult,
			chatID: SteamID
		) => void;
		chatEnter: (chatID: SteamID, response: EChatRoomEnterResponse) => void;
		chatLeft: (chatID: SteamID) => void;
		chatUserJoined: (chatID: SteamID, userID: SteamID) => void;
		chatUserLeft: (chatID: SteamID, userID: SteamID) => void;
		chatUserDisconnected: (chatID: SteamID, userID: SteamID) => void;
		chatUserKicked: (
			chatID: SteamID,
			userID: SteamID,
			actor: SteamID
		) => void;
		chatUserBanned: (
			chatID: SteamID,
			userID: SteamID,
			actor: SteamID
		) => void;
		chatUserSpeaking: (chatID: SteamID, userID: SteamID) => void;
		chatUserDoneSpeaking: (chatID: SteamID, userID: SteamID) => void;
		chatSetPublic: (chatID: SteamID, actor: SteamID) => void;
		chatSetPrivate: (chatID: SteamID, actor: SteamID) => void;
		chatSetOfficersOnly: (chatID: SteamID, actor: SteamID) => void;
		lobbyInvite: (inviterID: SteamID, lobbyID: SteamID) => void;
		appLaunched: (appid: number) => void;
		appQuit: (appid: number) => void;
		receivedFromGC: (appid: number, msgType: any, payload: any) => void;
	}

	interface SteamGuardDetails {
		canTrade: boolean;
		isSteamGuardEnabled: boolean;
		timestampSteamGuardEnabled: boolean;
		timestampMachineSteamGuardEnabled: boolean;
		isTwoFactorEnabled: boolean;
		timestampTwoFactorEnabled: boolean;
		isPhoneVerified: boolean;
	}

	interface CredentialChangeTimes {
		timestampLastPasswordChange: Date | null;
		timestampLastPasswordReset: Date | null;
		timestampLastEmailChange: Date | null;
	}

	interface AuthSecret {
		secretID: string;
		key: string;
	}

	interface PrivacySettings {
		privacy_state: number;
		privacy_state_inventory: number;
		privacy_state_gifts: number;
		privacy_state_ownedgames: number;
		privacy_state_playtime: number;
		privacy_state_friendslist: number;
	}

	interface AppChange {
		appid: number;
		change_number: number;
		needs_token: boolean;
	}

	interface App {
		appid: number;
		access_token: string;
	}

	interface Package {
		packageid: number;
		access_token: string;
	}

	interface PackageChange {
		packageid: number;
		change_number: number;
		needs_token: boolean;
	}

	interface ProductChanges {
		currentChangeNumber: number;
		appChanges: AppChange[];
		packageChanges: PackageChange[];
	}

	interface QuickInviteLinkValidity {
		valid: boolean;
		steamid: SteamID;
		invite_duration: number | null;
	}

	interface UserType {
		persona_state?: EPersonaState;
	}

	interface UsersType {
		[index: string]: UserType;
	}

	interface AssetClass {
		classid: number;
		instanceid?: number;
	}

	interface Server {
		addr: string;
		specport: number | null;
		steamid: SteamID;
		name: string;
		appid: number;
		gamedir: string;
		version: string;
		product: string;
		region: RegionCode;
		players: number;
		max_players: number;
		bots: number;
		map: string;
		secure: boolean;
		dedicated: boolean;
		os: "w" | "l";
		gametype: string;
	}

	interface ChatRoomGroupSummary {
		chat_rooms: ChatRoomState[];
		top_members: SteamID[];
		chat_group_id: string;
		chat_group_name: string;
		active_member_count: number;
		active_voice_member_count: number;
		default_chat_id: string;
		chat_group_tagline: string;
		appid: number | null;
		steamid_owner: SteamID;
		watching_broadcast_steamid?: SteamID | null;
		chat_group_avatar_sha: Buffer | null;
		chat_group_avatar_url: string | null;
	}

	interface ChatRoomGroup {
		group_summary: ChatRoomGroupSummary;
	}

	interface ChatRole {
		role_id: string;
		name: string;
		ordinal: number;
	}

	interface ProfileItem {
		communityitemid: number;
		image_small: string | null;
		image_large: string | null;
		name: string;
		item_title: string;
		item_description: string;
		appid: number;
		item_type: unknown;
		item_class: unknown;
		movie_webm: string;
		movie_mp4: string;
		equipped_flags: unknown;
	}

	interface ProfileItems {
		profile_backgrounds: ProfileItem[];
		mini_profile_backgrounds: ProfileItem[];
		avatar_frames: ProfileItem[];
		animated_avatars: ProfileItem[];
		profile_modifiers: ProfileItem[];
	}

	interface ServerQueryResponse {
		ip: string;
		port: number;
		players: number;
		gameport: number;
	}

	interface ChatRoleActions {
		role_id: string;
		can_create_rename_delete_channel: boolean;
		can_kick: boolean;
		can_ban: boolean;
		can_invite: boolean;
		can_change_tagline_avatar_name: boolean;
		can_chat: boolean;
		can_view_history: boolean;
		can_change_group_roles: boolean;
		can_change_user_roles: boolean;
		can_mention_all: boolean;
		can_set_watching_broadcast: boolean;
	}

	interface ChatRoomGroupHeaderState {
		chat_group_id: string;
		chat_name: string;
		clanid: SteamID | null;
		steamid_owner: SteamID;
		appid: number | null;
		tagline: string;
		avatar_sha: Buffer | null;
		avatar_url: string | null;
		default_role_id: string;
		roles: ChatRole[];
		role_actions: ChatRoleActions[];
		watching_broadcast_steamid?: SteamID | null;
	}

	interface ChatRoomMember {
		steamid: SteamID;
		state: EChatRoomJoinState;
		rank: EChatRoomGroupRank;
		time_kick_expire: Date | null;
		role_ids: string[];
	}

	interface ChatRoomGroupState {
		members: ChatRoomMember[];
		chat_rooms: ChatRoomState[];
		kicked: ChatRoomMember[];
		default_chat_id: string;
		header_state: ChatRoomGroupHeaderState;
	}

	interface InviteLinkInfo {
		invite_code: string;
		steamid_sender: SteamID;
		time_expires: Date | null;
		group_summary: ChatRoomGroupSummary;
		time_kick_expire: Date | null;
		banned: boolean;
	}

	interface ServerQueryConditions {
		app_id?: number;
		geo_location_ip?: string;
		region_code?: RegionCode;
		filter_text?: string;
		max_servers?: number;
	}

	interface Borrowers {
		steamid: SteamID;
		isPending: boolean;
		isCanceled: boolean;
		timeCreated: Date;
	}

	interface Device {
		deviceToken: string;
		deviceName: string;
		isPending: boolean;
		isCanceled: boolean;
		isLimited: boolean;
		lastTimeUsed: Date | null;
		lastBorrower: SteamID | null;
		lastAppPlayed: Date | null;
	}

	interface GroupInviteLinks {
		invite_code: string;
		invite_url: string;
		steamid_creator: SteamID;
		time_expires: Date | null;
		chat_id: string;
	}

	interface SentMessage {
		modified_message: string;
		server_timestamp: Date;
		ordinal: number;
	}

	interface ActiveFriendMessageSession {
		steamid_friend: SteamID;
		time_last_message: Date;
		time_last_view: Date;
		unread_message_count: number;
	}

	interface GetMessageHistoryOptions {
		maxCount?: number;
		wantBbcode?: boolean;
		startTime?: Date | number;
		startOrdinal?: number;
		lastTime?: Date | number;
		lastOrdinal?: number;
	}

	interface MessageToDelete1 {
		server_timestamp: Date;
		ordinal?: number;
	}

	interface MessageToDelete2 {
		timestamp: Date;
		ordinal?: number;
	}

	interface Ban {
		steamid: SteamID;
		steamid_actor: SteamID;
		time_banned: Date;
		ban_reason: "";
	}

	interface ProductAccessTokens {
		appTokens: Record<string, string>;
		packageTokens: Record<string, string>;
		appDeniedTokens: number[];
		packageDeniedTokens: number[];
	}

	interface RichPresence {
		status: string;
		version: string;
		time?: string;
		"game:state": string;
		steam_display: string;
		connect: string;
	}

	interface GetUserOwnedAppsOptions {
		includePlayedFreeGames?: boolean;
		filterAppids?: number[];
		includeFreeSub?: boolean;
	}

	interface OwnedApp {
		appid: number;
		name: string;
		playtime_2weeks: number | null;
		playtime_forever: number;
		img_icon_url: string;
		img_logo_url: string;
		has_community_visible_stats: boolean;
		playtime_windows_forever: number;
		playtime_mac_forever: number;
		playtime_linux_forever: number;
	}

	interface UserOwnedApps {
		game_count: number;
		games: OwnedApp[];
	}

	interface TradeURL {
		token: string;
		url: string;
	}

	interface Message {
		steamID: SteamID;
		timestamp: Date;
		message: string;
		unread: boolean;
	}

	interface TwoFactorResponse {
		status: EResult;
		shared_secret: string;
		identity_secret: string;
		revocation_code: string;
	}

	interface Emoticon {
		name: string;
		count: number;
		time_last_used: Date | null;
		use_count: number;
		time_received: Date | null;
	}

	type RegionCode =
		| 0x00
		| 0x01
		| 0x02
		| 0x03
		| 0x04
		| 0x05
		| 0x06
		| 0x07
		| 0xff;
	type StoreTagNames = Record<string, { name: string; englishName: string }>;
	type PublishedFileDetails = Record<string, Record<string, any>>;

	class SteamChatRoomClient extends EventEmitter {
		user: SteamUser;

		constructor(user: SteamUser);

		on<T extends keyof SteamChatRoomEventListerner>(
			event: T,
			listener: SteamChatRoomEventListerner[T]
		): any;

		getGroups(
			callback?: (
				err: Error | null,
				response: { chat_room_groups: Record<string, ChatRoomGroup> }
			) => void
		): Promise<{ chat_room_groups: Record<string, ChatRoomGroup> }>;

		setSessionActiveGroups(
			groupIDs: number[] | string[] | number | string,
			callback?: (
				err: Error | null,
				response: {
					chat_room_groups: Record<string, ChatRoomGroupState>;
				}
			) => void
		): Promise<{ chat_room_groups: Record<string, ChatRoomGroupState> }>;

		getInviteLinkInfo(
			linkUrl: string,
			callback?: (err: Error | null, response: InviteLinkInfo) => void
		): Promise<InviteLinkInfo>;

		getClanChatGroupInfo(
			clanSteamID: SteamID | string,
			callback?: (
				err: Error | null,
				response: { chat_group_summary: ChatRoomGroupSummary }
			) => void
		): Promise<{ chat_group_summary: ChatRoomGroupSummary }>;

		joinGroup(
			groupId: number | string,
			inviteCode?: string,
			callback?: (
				err: Error | null,
				response: {
					state: ChatRoomGroupState;
					user_chat_state: UserChatRoomGroupState;
				}
			) => void
		): Promise<{
			state: ChatRoomGroupState;
			user_chat_state: UserChatRoomGroupState;
		}>;

		inviteUserToGroup(
			groupId: number,
			steamId: SteamID | string,
			callback?: (err: Error | null) => void
		): Promise<void>;

		createInviteLink(
			groupId: number,
			options?: { secondsValid?: number; voiceChatId?: number },
			callback?: (
				err: Error | null,
				response: {
					invite_code: string;
					invite_url: string;
					seconds_valid: number;
				}
			) => void
		): Promise<{
			invite_code: string;
			invite_url: string;
			seconds_valid: number;
		}>;

		getGroupInviteLinks(
			groupId: number,
			callback?: (
				err: Error | null,
				response: { invite_links: GroupInviteLinks[] }
			) => void
		): Promise<{ invite_links: GroupInviteLinks[] }>;

		deleteInviteLink(
			linkUrl: string,
			callback?: (err: Error | null) => void
		): Promise<void>;

		sendFriendMessage(
			steamId: SteamID | string,
			message: string,
			options?: {
				chatEntryType?: EChatEntryType;
				containsBbCode?: boolean;
			},
			callback?: (err: Error | null, response: SentMessage) => void
		): Promise<SentMessage>;

		sendFriendTyping(
			steamId: SteamID | string,
			callback?: (err: Error | null) => void
		): Promise<void>;

		sendChatMessage(
			groupId: number | string,
			chatId: number | string,
			message: string,
			callback?: (err: Error | null, response: SentMessage) => void
		): Promise<SentMessage>;

		getActiveFriendMessageSessions(
			options?: { conversationsSince: Date | number },
			callback?: (
				err: Error | null,
				response: {
					sessions: ActiveFriendMessageSession[];
					timestamp: Date;
				}
			) => void
		): Promise<any>;

		getFriendMessageHistory(
			friendSteamId: SteamID | string,
			options?: GetMessageHistoryOptions,
			callback?: (
				err: Error | null,
				response: { messages: FriendMessage[]; more_available: boolean }
			) => void
		): Promise<{ messages: FriendMessage[]; more_available: boolean }>;

		getChatMessageHistory(
			groupId: number | string,
			chatId: number | string,
			options?: GetMessageHistoryOptions,
			callback?: (
				err: Error | null,
				response: { message: ChatMessage[]; more_available: boolean }
			) => void
		): Promise<{ message: ChatMessage[]; more_available: boolean }>;

		ackFriendMessage(
			friendSteamId: SteamID | string,
			timestamp: Date | number
		): void;

		ackChatMessage(
			chatGroupId: number,
			chatId: number,
			timestamp: Date | number
		): void;

		deleteChatMessages(
			groupId: number | string,
			chatId: number | string,
			messages: Array<MessageToDelete1 | MessageToDelete2>,
			callback?: (err: Error | null) => void
		): Promise<void>;

		createChatRoom(
			groupId: number | string,
			name: string,
			options?: { isVoiceRoom: boolean },
			callback?: (
				err: Error | null,
				response: { chat_room: ChatRoomState }
			) => void
		): Promise<{ chat_room: ChatRoomState }>;

		renameChatRoom(
			groupId: number | string,
			chatId: number | string,
			newChatRoomName: string,
			callback?: (err: Error | null) => void
		): Promise<void>;

		deleteChatRoom(
			groupId: number | string,
			chatId: number | string,
			callback?: (err: Error | null) => void
		): Promise<void>;

		kickUserFromGroup(
			groupId: number | string,
			steamId: SteamID | string,
			expireTime?: Date | number,
			callback?: (err: Error | null) => void
		): Promise<void>;

		getGroupBanList(
			groupId?: number | string,
			callback?: (err: Error | null, response: { bans: Ban[] }) => void
		): Promise<{ bans: Ban[] }>;

		setGroupUserBanState(
			groupId: number | string,
			userSteamId: SteamID | string,
			banState: boolean,
			callback?: (err: Error | null) => void
		): Promise<void>;
	}
}

declare class SteamUser extends EventEmitter {
	constructor(options?: SteamUser.Options);

	readonly options: SteamUser.Options;

	steamID: SteamID | null;
	publicIp: string | null;
	chat: SteamUser.SteamChatRoomClient;
	cellID: number;
	vanityURL: string | null;
	accountInfo: SteamUser.AccountInfo | null;
	emailInfo: { adress: string; validated: boolean } | null;
	limitations: SteamUser.AccountLimitations | null;
	vac: { numBans: number; appids: number[] } | null;
	wallet: {
		hasWallet: boolean;
		currency: SteamUser.ECurrencyCode;
		balance: number;
	} | null;
	licenses: Array<Record<string, any>>;
	gifts: SteamUser.Gift[];
	users: Record<string, any>;
	groups: Record<string, any>;
	chats: Record<string, SteamUser.Chat>;
	myFriends: Record<string, SteamUser.EFriendRelationship>;
	myGroups: Record<string, SteamUser.EClanRelationship>;
	myFriendGroups: Record<string, { name: string; members: SteamID[] }>;
	myNicknames: Record<string, string>;
	picsCache: {
		changenumber: number;
		apps: Record<string, any>;
		packages: Record<string, any>;
	};
	packageName: "steam-user";
	geVersion: string;

	setOption<T extends keyof SteamUser.Options>(
		option: T,
		value: NonNullable<SteamUser.Options[T]>
	): void;

	setOptions(options: SteamUser.Options): void;

	on<T extends keyof EventListener>(
		event: T,
		listener: EventListener[T]
	): any;

	requestValidationEmail(
		callback?: (err: Error | null) => void
	): Promise<void>;

	getSteamGuardDetails(
		callback?: (
			err: Error | null,
			canTrade: boolean,
			isSteamGuardEnabled: boolean,
			timestampSteamGuardEnabled: boolean,
			timestampMachineSteamGuardEnabled: boolean,
			timestampTwoFactorEnabled: boolean,
			isPhoneVerified: boolean
		) => void
	): Promise<SteamUser.SteamGuardDetails>;

	getCredentialChangeTimes(
		callback?: (
			err: Error | null,
			timestampLastPasswordChange: Date | null,
			timestampLastPasswordReset: Date | null,
			timestampLastEmailChange: Date | null
		) => void
	): Promise<SteamUser.CredentialChangeTimes>;

	getAuthSecret(
		callback?: (err: Error | null, secretID: string, key: string) => void
	): Promise<SteamUser.AuthSecret>;

	getPrivacySettings(
		callback?: (
			err: Error | null,
			response: SteamUser.PrivacySettings
		) => void
	): Promise<SteamUser.PrivacySettings>;

	getEncryptedAppTicket(
		appid: number,
		userData?: Buffer,
		callback?: (err: Error | null, encryptedAppTicket: Buffer) => void
	): Promise<{ encryptedAppTicket: Buffer }>;

	getAuthSessionTicket(
		appid: number,
		callback?: (err: Error | null, ticker: Buffer) => void
	): Promise<{ appTicket: Buffer }>;

	getAppOwnershipTicket(
		appid: number,
		callback?: (err: Error | null, ticker: Buffer) => void
	): Promise<{ appOwnershipTicket: Buffer }>;

	validateAuthTickets(
		appid: number,
		tickets: Buffer,
		callback?: (err: Error | null) => void
	): Promise<void>;

	cancelAuthTicket(
		appid: number,
		callback?: (err: Error | null) => void
	): Promise<void>;

	gamesPlayed(apps: Array<string | number | object>, force?: boolean): void;

	kickPlayingSession(callback?: (err: Error | null) => void): Promise<void>;

	getPlayerCount(
		appid: number,
		callback?: (err: Error | null, playerCount: number) => void
	): Promise<{ playerCount: number }>;

	getProductChanges(
		sinceChangenumber: number,
		callback?: (
			err: Error | null,
			currentChangenumber: number,
			appChanges: SteamUser.AppChange[],
			packageChanges: SteamUser.PackageChange[]
		) => void
	): Promise<SteamUser.ProductChanges>;

	getProductInfo(
		apps: Array<number | SteamUser.App>,
		packages: Array<number | SteamUser.Package>,
		inclTokens?: boolean,
		callback?: (
			err: Error | null,
			apps: SteamUser.AppInfo,
			packages: SteamUser.PackageInfo,
			unknownApps: number[],
			unknownPackages: number[]
		) => void
	): Promise<SteamUser.ProductInfo>;

	getProductAccessToken(
		apps: number[],
		packages: number[],
		callback?: (
			err: Error | null,
			appTokens: Record<string, string>,
			packageTokens: Record<string, string>,
			appDeniedTokens: number[],
			packageDeniedTokens: number[]
		) => void
	): Promise<SteamUser.ProductAccessTokens>;

	getOwnedApps(excludeSharedLicenses?: boolean): number;

	ownsApp(appid: number, excludeSharedLicenses?: boolean): boolean;

	getOwnedDepots(excludeSharedLicenses?: boolean): number[];

	ownsDepot(depotid: number, excludeSharedLicenses?: boolean): boolean;

	getOwnedPackages(excludeSharedLicenses?: boolean): number[];

	ownsPackage(
		packageid: number | string,
		excludeSharedLicenses?: boolean
	): boolean;

	redeemKey(
		key: string,
		callback?: (
			err: Error | null,
			purchaseResultDetails: SteamUser.EPurchaseResult,
			packageList: Record<string, string>
		) => void
	): Promise<{
		purchaseResultDetails: SteamUser.EPurchaseResult;
		packageList: Record<string, string>;
	}>;

	requestFreeLicense(
		appIDs: number[],
		callback?: (
			err: Error | null,
			grantedPackageIds: number[],
			grantedAppIds: number[]
		) => void
	): Promise<{ grantedPackageIds: number[]; grantedAppIds: number[] }>;

	getContentServers(
		appid: number,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	getDepotDecryptionKey(
		appID: number,
		depotID: number,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	getCDNAuthToken(
		appID: number,
		depotID: number,
		hostname: string,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	getManifest(
		appID: number,
		depotID: number,
		manifestID: string,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	getRawManifest(
		appID: number,
		depotID: number,
		manifestID: string,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	downloadChunk(
		appID: number,
		depotID: number,
		chunkSha1: string,
		contentServer: object,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	downloadFile(
		appID: number,
		depotID: number,
		fileManifest: object,
		outputFilePath: string,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	getAppBetaDecryptionKeys(
		appID: number,
		password: string,
		callback?: (err: Error | null) => void
	): Promise<unknown>;

	chatMessage(
		recipient: SteamID | string,
		message: string,
		type?: SteamUser.EChatEntryType
	): void;

	chatMsg(
		recipient: SteamID | string,
		message: string,
		type?: SteamUser.EChatEntryType
	): void;

	chatTyping(recipient: SteamID | string): void;

	getChatHistory(
		steamID: SteamID | string,
		callback?: (err: Error | null, messages: SteamUser.Message[]) => void
	): Promise<SteamUser.Message[]>;

	joinChat(
		steamID: SteamID | string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	leaveChat(steamID: SteamID | string): void;

	setChatPrivate(steamID: SteamID | string): void;

	setChatPublic(steamID: SteamID | string): void;

	setChatOfficersOnly(steamID: SteamID | string): void;

	unsetChatOfficersOnly(steamID: SteamID | string): void;

	kickFromChat(chatID: SteamID | string, userID: SteamID | string): void;

	banFromChat(chatID: SteamID | string, userID: SteamID | string): void;

	unbanFromChat(chatID: SteamID | string, userID: SteamID | string): void;

	inviteToChat(chatID: SteamID | string, userID: SteamID | string): void;

	createChatRoom(
		convertUserID?: SteamID,
		inviteUserID?: SteamID,
		callback?: (err: Error | null, chatID: SteamID) => void
	): Promise<{ chatID: SteamID }>;

	getAssetClassInfo(
		language: string,
		appid: number,
		classes: Array<{ classid: number; instanceid?: number }>,
		callback?: (
			err: Error | null,
			descriptions: Array<Record<string, any>>
		) => void
	): Promise<{ descriptions: Array<Record<string, any>> }>;

	getTradeURL(
		callback?: (err: Error | null, response: SteamUser.TradeURL) => void
	): Promise<SteamUser.TradeURL>;

	changeTradeURL(
		callback?: (err: Error | null, response: SteamUser.TradeURL) => void
	): Promise<SteamUser.TradeURL>;

	getEmoticonList(
		callback?: (
			err: Error | null,
			response: { emoticons: Record<string, SteamUser.Emoticon> }
		) => void
	): Promise<{ emoticons: Record<string, SteamUser.Emoticon> }>;

	getOwnedProfileItems(
		options?: { language: string },
		callback?: (err: Error | null, response: SteamUser.ProfileItems) => void
	): Promise<SteamUser.ProfileItems>;

	getEquippedProfileItems(
		steamID: SteamID | string,
		options?: { language: string },
		callback?: (err: Error | null, response: SteamUser.ProfileItems) => void
	): Promise<SteamUser.ProfileItems>;

	setProfileBackground(
		backgroundAssetID: number,
		callback?: (err: Error | null) => void
	): Promise<void>;

	addAuthorizedBorrowers(
		borrowersSteamID: Array<SteamID | string> | SteamID | string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	removeAuthorizedBorrowers(
		borrowerssteamID: Array<SteamID | string>,
		callback?: (err: Error | null) => void
	): Promise<void>;

	getAuthorizedBorrowers(
		options?: { includeCanceled?: boolean; includePending?: boolean },
		callback?: (
			err: Error | null,
			response: { borrowers: SteamUser.Borrowers[] }
		) => void
	): Promise<{ borrowers: SteamUser.Borrowers[] }>;

	getAuthorizedSharingDevices(
		options?: { includeCancelled?: boolean },
		callback?: (
			err: Error | null,
			response: { devices: SteamUser.Device[] }
		) => void
	): Promise<{ devices: SteamUser.Device[] }>;

	authorizeLocalSharingDevice(
		deviceName: string,
		callback?: (
			err: Error | null,
			response: { deviceToken: string }
		) => void
	): Promise<{ deviceToken: string }>;
	deauthorizeSharingDevice(
		deviceToken: string | { deviceToken: string },
		callback?: (err: Error | null) => void
	): Promise<void>;

	activateSharingAuthorization(
		ownerSteamID: SteamID | string,
		deviceToken: string | { deviceToken: string }
	): void;

	deactivateSharingAuthorization(): void;

	setPersona(state: SteamUser.EPersonaState, name?: string): void;

	setUIMode(mode: SteamUser.EClientUIMode): void;

	addFriend(
		steamID: SteamID | string,
		callback?: (err: Error | null, personaName: string) => void
	): Promise<{ personaName: string }>;

	removeFriend(steamID: SteamID | string): void;

	blockUser(
		steamID: SteamID | string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	unblockUser(
		steamID: SteamID | string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	createQuickInviteLink(
		options?: SteamUser.CreateQuickInviteLinkOptions,
		callback?: (
			err: Error | null,
			response: SteamUser.QuickInviteLink
		) => void
	): Promise<SteamUser.QuickInviteLink>;

	listQuickInviteLinks(
		callback?: (
			err: Error | null,
			response: SteamUser.QuickInviteLink[]
		) => void
	): Promise<SteamUser.QuickInviteLink[]>;

	revokeQuickInviteLink(
		linkOrToken: string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	getQuickInviteLinkSteamID(link: string): SteamID | null;

	checkQuickInviteLinkValidity(
		link: string,
		callback?: (
			err: Error | null,
			response: SteamUser.QuickInviteLinkValidity
		) => void
	): Promise<SteamUser.QuickInviteLinkValidity>;

	redeemQuickInviteLink(
		link: string,
		callback?: (err: Error | null) => void
	): Promise<any>;

	getPersonas(
		steamids: Array<SteamID | string>,
		callback?: (err: Error | null, personas: Record<string, any>) => void
	): Promise<{ personas: Record<string, any> }>;

	getSteamLevels(
		steamids: Array<SteamID | string>,
		callback?: (err: Error | null, users: Record<string, number>) => void
	): Promise<Record<string, number>>;

	getGameBadgeLevel(
		appid: number,
		callback?: (
			err: Error | null,
			steamLevel?: number,
			regularBadgeLevel?: number,
			foilBadgeLavel?: number
		) => void
	): Promise<{
		steamLevel: number;
		regularBadgeLevel: number;
		foilBadgeLavel: number;
	}>;

	inviteToGroup(
		userSteamID: SteamID | string,
		groupSteamID: SteamID | string
	): void;

	respondToGroupInvite(groupSteamID: SteamID | string, accept: boolean): void;

	createFriendsGroup(
		groupName: string,
		callback?: (err: Error | null, groupID: number) => void
	): Promise<{ groupID: number }>;

	deleteFriendsGroup(
		groupID: number,
		callback?: (err: Error | null) => void
	): Promise<void>;

	renameFriendsGroup(
		groupID: number,
		newName: string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	addFriendToGroup(
		groupID: number,
		userSteamID: SteamID | string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	removeFriendFromGroup(
		groupID: any,
		usersteamID: SteamID | string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	getAliases(
		userSteamIDs: Array<SteamID | string>,
		callback?: (
			err: Error | null,
			users: Record<string, { name: string; name_since: Date }>
		) => void
	): Promise<Record<string, { name: string; name_since: Date }>>;

	setNickname(
		steamID: SteamID | string,
		nickname: string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	getNicknames(
		callback?: (
			err: Error | null,
			nicknames: Record<string, string>
		) => void
	): Promise<Record<string, string>>;

	getAppRichPresenceLocalization(
		appID: number,
		language: string,
		callback?: (
			err: Error | null,
			response: { tokens: Record<string, string> }
		) => void
	): Promise<{ tokens: Record<string, string> }>;

	uploadRichPresence(
		appid: number,
		richPresence: { steam_display: number; connect?: object }
	): void;

	requestRichPresence(
		appid: number,
		steamIDs: Array<SteamID | string>,
		language: string,
		callback?: (
			err: Error | null,
			response: {
				users: Record<
					string,
					{
						richPresence: SteamUser.RichPresence;
						localizedString: string | null;
					}
				>;
			}
		) => void
	): Promise<{
		users: Record<
			string,
			{
				richPresence: SteamUser.RichPresence;
				localizedString: string | null;
			}
		>;
	}>;

	getUserOwnedApps(
		steamID: SteamID | string,
		options?: SteamUser.GetUserOwnedAppsOptions,
		callback?: (
			err: Error | null,
			response: SteamUser.UserOwnedApps
		) => void
	): Promise<SteamUser.UserOwnedApps>;

	sendToGC(
		appid: number,
		msgType: number,
		protoBufHeader: Record<string, any> | null,
		payload: Buffer | ByteBuffer,
		callback?: (appid: number, msgType: number, payload: Buffer) => void
	): void;

	serverQuery(
		conditions: SteamUser.ServerQueryConditions | string,
		callback?: (
			err: Error | null,
			servers: SteamUser.ServerQueryResponse
		) => void
	): Promise<SteamUser.ServerQueryResponse>;

	getServerList(
		filter: string,
		limit?: number,
		callback?: (err: Error | null, servers: SteamUser.Server) => void
	): Promise<SteamUser.Server>;

	getServerSteamIDsByIP(
		ips: string[],
		callback?: (err: Error | null, servers: Record<string, SteamID>) => void
	): Promise<{ servers: Record<string, SteamID> }>;

	getServerIPsBySteamID(
		steamids: Array<SteamID | string>,
		callback?: (err: Error | null, servers: Record<string, string>) => void
	): Promise<{ servers: Record<string, string> }>;

	logOn(details?: SteamUser.LogOnParams): void;

	logOff(): void;

	relog(): void;

	getPublishedFileDetails(
		ids: number | number[],
		callback?: (
			err: Error | null,
			files: SteamUser.PublishedFileDetails
		) => void
	): Promise<SteamUser.PublishedFileDetails>;

	setSentry(sentry: Buffer | null): void;

	getStoreTagNames(
		language: string,
		tagIDs: number[],
		callback?: (err: Error | null, tags: SteamUser.StoreTagNames) => void
	): Promise<{ tags: SteamUser.StoreTagNames }>;

	trade(steamID: SteamID | string): void;

	cancelTradeRequest(steamID: SteamID | string): void;

	enableTwoFactor(
		callback?: (
			err: Error | null,
			response: SteamUser.TwoFactorResponse
		) => void
	): Promise<SteamUser.TwoFactorResponse>;

	finalizeTwoFactor(
		secret: Buffer,
		activationCode: string,
		callback?: (err: Error | null) => void
	): Promise<void>;

	static formatCurrency(
		amount: number,
		currency: SteamUser.ECurrencyCode
	): string;

	webLogOn(): void;
}

export = SteamUser;
