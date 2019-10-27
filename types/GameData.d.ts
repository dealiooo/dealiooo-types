export enum Color {
  'transparent',
  'red',
  'lightGreen',
  'darkBlue',
  'lightBlue',
  'utility',
  'yellow',
  'orange',
  'brown',
  'purple',
  'black' 
}

export interface Card {
  id: number;
  name: string;
  value: number;
  type:
    | 'property'
    | 'action'
    | 'building'
    | 'propertyWildcard'
    | 'rent'
    | 'rentWildcard'
    | 'money';
  mainColor: Color;
  colors: Color[];
}

export interface Player {
  id: number;
  username: string;
  hand: Card[] | number;
  field: {
    actionCards: Card[];
    propertyCards: Card[];
    bankCards: Card[];
    buildingCards: Card[];
  };
}

export interface GameGlobals {
  winner?: string;
  turnCount: number;
  currentPlayerId: number;
  currentPlayerUsername: string;
  currentPlayerIndex: number;
  cardsPlayed: number;
  deckCount: number;
  discard: Card[];
  tick: number;
}

export interface PromptsInfo {
  promptPlayerId?: number;
  promptPlayerUsername?: string;
  promptMessage?: string;
  options: number[] | string[];
}

export interface GameInfo {
  gameGlobals: GameGlobals;
  players: Player[];
  promptsInfo: PromptsInfo;
}

export enum EventName {
  'EndTurn',
  'ForcePlayerEndTurn',
  'Forfeit',
  'MoveCardAround',
  'PlayDealBreaker',
  'PlayDebtCollecter',
  'PlayDoubleTheRent',
  'PlayForcedDeal',
  'PlayItsMyBirthday',
  'PlayJustSayNo',
  'PlayPassGo',
  'PlaySlyDeal',
  'PlayBuildingCard',
  'PlayDualColorRentCard',
  'PlayMoneyCard',
  'PlayPropertyCard',
  'PlayPropertyWildCard',
  'PlayRentWildCard',
  'StartGame',
  'StartTurn',
  'ShufflePile'
}

export enum EventMessage {
  'Do you want to move a card around?',
  'Do you want to play a hand card?',
  'Do you want to play just say no?',
  'Picking a color',
  'Picking a destination',
  'Picking a hand card',
  'Picking a hand card to discard',
  'Picking a field card',
  'Picking a field pile',
  'Picking a property set to rent',
  'Picking a target player',
  'Play as money or action?',
  'Play as money or property?',
  'Selecting a property set',
  'Waiting for player action'
}

export interface Pending {
  eventName: EventName;
  message: EventMessage;
  arguments: {
    cancelled?: boolean;
    forced?: boolean;
    payees?: Player[];
    payeesDebts?: number[];
    pendingPlayer: Player;
    player?: Player;
    userInput?: number;
    userInputOptions?: string[];
  };
}

export interface GameData {
  turnCount: number;
  cardsPlayed: number;
  cardsPlayedList: Card[];
  deck: Card[];
  discard: Card[];
  playerCount: number;
  players: Player[];
  currentPlayerIndex: number;
  currentPlayer: Player;
  pendingForUserInput?: Pending;
  userInput?: number;
  winner?: Player;
  ticks: number[];
}
