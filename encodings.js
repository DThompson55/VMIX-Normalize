function compareRate(r1, r2){
//    console.log (r1.toFixed(2), r2.toFixed(2),(r1.toFixed(2) == r2.toFixed(2)))
    return (r1.toFixed(2) == r2.toFixed(2))
}

function get(w,h,r,os){
    for (i in encodings){
        if (w == encodings[i].w)
            if (h == encodings[i].h)
                if (compareRate(r, encodings[i].rate))
                    if (os == "MacOS"){
                        console.log("Match MacOs Encoding",w,h,r,os)
                        return encodings[i].macOsCoding || "NA"
                    }
                    else {
                        console.log("Match ffmpeg Encoding",w,h,r,os)
                        return encodings[i].ffmpegCoding || "NA"
                    }
    }
    console.log ("GET FAILED",w,h,r,os)
    //throw (new Exception("Failed to find matching encoding"))
    return "---"
}


encodings = [{"example": "back/1 short interlude 1min  Mary Fall 9-22-22 - 22 September 2022 - 01-38-33 PM.mp4",
"w": 1920, "h":1080, "clock": "2997/100", "rate":  29.97,
    "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAgAcAADgEAACPwu9BAQAAAF8AAAAAAA==",
     "ffmpegCoding": "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAACPwu9BAAAAAF8AAAAAAA=="},

{"example": "back/Get Together Youngbloods.mov",
 "w": 568 , "h": 320 , "clock":"30000/1001", "rate": 29.97002997002997 ,
   "ffmpegCoding":"UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAOAIAAEABAACPwu9BAAAAAF8AAAAAAA=="},

{"example": "back/8 I can't get started 45s.mov",
"w": 1280, "h":720, "clock": "2997/100", "rate":  29.97,
    "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAAAUAANACAACPwu9BAQAAAF8AAAAAAA==",
     "ffmpegCoding": "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAAAUAANACAACPwu9BAAAAAF8AAAAAAA=="},


{"example": "back/Chris and Shoshana.mov",
"w": 960, "h":540, "clock": "30000/1001", "rate":  29.97002997002997,
     "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAHAIAAMADAACPwu9BAQAAAF8AAAAAAA==",
     "ffmpegCoding": "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAHAIAAMADAACPwu9BAAAAAF8AAAAAAA=="},


{"example": "back/IMG_3655.MOV",
"w": 1334, "h":1080, "clock": "30/1", "rate":  30,
     "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAOAQAADYFAAAAAPBBAQAAAF8AAAAAAA==",
     "ffmpegCoding": "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAOAQAAIAHAACPwu9BAAAAAF8AAAAAAA=="},



{"example": "back/IMG_4068.MOV",
"w": 1920, "h":1080, "clock": "30000/1001", "rate":  29.97002997002997,
     "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAOAQAAIAHAACPwu9BAQAAAF8AAAAAAA==",
     "ffmpegCoding": "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAOAQAAIAHAACPwu9BAAAAAF8AAAAAAA=="},

{"example": "back/Love. Because.....mp4",
"w": 1280, "h":720, "clock": "30/1", "rate":  30,
     "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAAAUAANACAAA9CrVBAQAAAF8AAAAAAA==",
     "ffmpegCoding": "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAAAUAANACAAA9CrVBAAAAAF8AAAAAAA=="},


{"example": "back/PULPIT SLIDESHOW FINAL 2017 480p.mov",
"w": 640, "h":360, "clock": "359/12", "rate":  29.916666666666668,
     "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAgAIAAGgBAAApXO9BAQAAAF8AAAAAAA==",
     "ffmpegCoding": "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAIAAGgBAAApXO9BAAAAAF8AAAAAAA=="},


{"example": "back/Test.mp4",
"w": 1728, "h":1080, "clock": "30/1", "rate":  30,
    "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAAgAIAAGgBAAApXO9BAQAAAF8AAAAAAA==",
    "ffmpegCoding":"UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAwAYAADgEAAAAAPBBAAAAAF8AAAAAAA=="},

{"example": "back/casey at the bat.MOV",
"w": 1278, "h":838, "clock": "30/1", "rate":  30,
    "macOsCoding":"RlZBWAAAAAAAAAAAAAgAAAAAAACAAAAARgMAAP4EAAAAAPBBAQAAAF8AAAAAAA==",
    "ffmpegCoding_old":"UE1GRgMAAAACAAAAAAgAAAIAAACAAAAARgMAAP4EAAAAAPBBAQAAAF8AAAAAAA==",
    "ffmpegCoding":    "UE1GRgMAAAACAAAAAAgAAAIAAACAAAAARgMAAP4EAAAAAPBBAAAAAF8AAAAAAA=="}
    ]

module.exports = {get: get}

