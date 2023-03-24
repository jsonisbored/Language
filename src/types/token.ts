import {
    Span,
} from "./mod.ts";


export enum TokenKind {
    Colon           = "Colon",
    ColonColon      = "ColonColon",
    Semicolon       = "Semicolon",
    Arrow           = "Arrow",
    FatArrow        = "FatArrow",
    Comma           = "Comma",
    Dot             = "Dot",
    DotDot          = "DotDot",
    DotDotEqual     = "DotDotEqual",

    LeftParen       = "LeftParen",
    RightParen      = "RightParen",
    LeftCurlyBrace  = "LeftCurlyBrace",
    RightCurlyBrace = "RightCurlyBrace",
    LeftBracket     = "LeftBracket",
    RightBracket    = "RightBracket",

    Minus           = "Minus",
    Plus            = "Plus",
    Slash           = "Slash",
    Modulus         = "Modulus",
    Asterisk        = "Asterisk",

    Greater         = "Greater",
    GreaterEqual    = "GreaterEqual",
    Less            = "Less",
    LessEqual       = "LessEqual",

    Bang            = "Bang",
    BangEqual       = "BangEqual",
    Equal           = "Equal",
    EqualEqual      = "EqualEqual",

    PlusEqual       = "PlusEqual",
    MinusEqual      = "MinusEqual",
    AsteriskEqual   = "AsteriskEqual",
    SlashEqual      = "SlashEqual",
    ModulusEqual    = "ModulusEqual",

    LogicAnd        = "LogicAnd",
    LogicOr         = "LogicOr",

    BitwiseAnd      = "BitwiseAnd",
    BitwiseOr       = "BitwiseOr",
    BitwiseXor      = "BitwiseXor",

    BitwiseAndEqual = "BitwiseAndEqual",
    BitwiseOrEqual  = "BitwiseOrEqual",
    BitwiseXorEqual = "BitwiseXorEqual",

    As              = "As",

    Identifier      = "Identifier",
    String          = "String",
    Number          = "Number",

    Num             = "Num",
    Str             = "Str",
    Bool            = "Bool",
    Any             = "Any",

    While           = "While",
    For             = "For",
    In              = "In",

    Match           = "Match",
    If              = "If",
    Else            = "Else",

    Let             = "Let",
    Mut             = "Mut",
    Const           = "Const",

    Enum            = "Enum",
    Function        = "Function",
    Impl            = "Impl",
    Trait           = "Trait",
    Struct          = "Struct",

    Import          = "Import",
    Export          = "Export",

    Return          = "Return",
    Continue        = "Continue",
    Break           = "Break",

    False           = "False",
    True            = "True",

    QuestMark       = "QuestMark",
}

export interface Token {
    kind: TokenKind;
    value: string;
    span: Span;
}