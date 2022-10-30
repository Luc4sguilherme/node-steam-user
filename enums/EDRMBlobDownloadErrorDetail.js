/* eslint-disable */
// Auto-generated by generate-enums script on Thu Feb 24 2022 03:38:38 GMT-0500 (Eastern Standard Time)

/**
 * @enum
 * @readonly
 */
const EDRMBlobDownloadErrorDetail = {
	"None": 0,
	"DownloadFailed": 1,
	"TargetLocked": 2,
	"OpenZip": 3,
	"ReadZipDirectory": 4,
	"UnexpectedZipEntry": 5,
	"UnzipFullFile": 6,
	"UnknownBlobType": 7,
	"UnzipStrips": 8,
	"UnzipMergeGuid": 9,
	"UnzipSignature": 10,
	"ApplyStrips": 11,
	"ApplyMergeGuid": 12,
	"ApplySignature": 13,
	"AppIdMismatch": 14,
	"AppIdUnexpected": 15,
	"AppliedSignatureCorrupt": 16,
	"ApplyValveSignatureHeader": 17,
	"UnzipValveSignatureHeader": 18,
	"PathManipulationError": 19,
	"TargetLocked_Base": 65536,
	"TargetLocked_Max": 131071,
	"NextBase": 131072,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "DownloadFailed",
	"2": "TargetLocked",
	"3": "OpenZip",
	"4": "ReadZipDirectory",
	"5": "UnexpectedZipEntry",
	"6": "UnzipFullFile",
	"7": "UnknownBlobType",
	"8": "UnzipStrips",
	"9": "UnzipMergeGuid",
	"10": "UnzipSignature",
	"11": "ApplyStrips",
	"12": "ApplyMergeGuid",
	"13": "ApplySignature",
	"14": "AppIdMismatch",
	"15": "AppIdUnexpected",
	"16": "AppliedSignatureCorrupt",
	"17": "ApplyValveSignatureHeader",
	"18": "UnzipValveSignatureHeader",
	"19": "PathManipulationError",
	"65536": "TargetLocked_Base",
	"131071": "TargetLocked_Max",
	"131072": "NextBase",
};

module.exports = EDRMBlobDownloadErrorDetail;
