declare function G(): string;
declare function Guid(): String;
declare module Arkadium.Connect.Analytics.Tools {
    class DateTime {
        private _date;
        constructor();
        toString(): string;
        format(num: any, count: any): string;
        toDateString(date: Date): string;
        static Now: DateTime;
    }
}
declare module Arkadium.Connect.Analytics.Model {
    class Application {
        AppId: String;
        AppTitle: String;
        AppGroup: String;
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum AudioState {
        Undefined = 0,
        Off = 1,
        On = 2,
        OnCustom = 3,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum DifficultyLevel {
        Undefined = 0,
        Easiest = 1,
        Easier = 2,
        Normal = 3,
        Harder = 4,
        Hardest = 5,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum EndState {
        Undefined = 0,
        Quit = 1,
        Succeeded = 2,
        Failed = 3,
        Replay = 4,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    class EventMessage {
        EventName: String;
        EventId: String;
        AppId: String;
        HostId: String;
        SDK: String;
        EventTime: String;
        SentTime: String;
        Payload: Object;
    }
}
declare module Arkadium.Connect.Analytics.Model {
    class EventMessageBatch {
        EventMessages: EventMessage[];
        SentTime: String;
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum Gender {
        Male = 0,
        Female = 1,
        Undefined = 2,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    class Host {
        HostId: String;
        HostName: String;
        HostType: String;
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum InputState {
        Undefined = 0,
        Mouse = 1,
        Touch = 2,
        Keyboard = 4,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum PaymentType {
        FacebookCredits = 0,
        SocialGold = 1,
        UltimatePay = 2,
        SuperRewards = 3,
        Cash = 4,
        Undefined = 5,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum ScreenOrientation {
        None = 0,
        Landscape = 1,
        Portrait = 2,
        LandscapeFlipped = 3,
        PortraitFlipped = 4,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum TransactionResult {
        Success = 1,
        Cancel = 2,
        FailTechnical = 3,
        FailPayment = 4,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum ViralType {
        Invite = 1,
        Gift = 2,
        AskGift = 3,
        Post = 4,
        Message = 5,
        Request = 6,
        Count = 7,
        News = 8,
        Ticker = 9,
    }
}
declare module Arkadium.Connect.Analytics.Model {
    enum WindowState {
        FullScreenLandscape = 0,
        FullScreenPortrait = 1,
        Filled = 2,
        Snapped = 3,
        Window = 4,
        Undefined = 5,
    }
}
interface Action {
    (): void;
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    /**
         * Represents an interval of time in various units. Use the static factory methods as
         * shortcut to create time spans from different unit-types.
         */
    class TimeSpan {
        static MILLISECONDS_IN_DAY: number;
        static MILLISECONDS_IN_HOUR: number;
        static MILLISECONDS_IN_MINUTE: number;
        static MILLISECONDS_IN_SECOND: number;
        private _totalMilliseconds;
        constructor(milliseconds: Number);
        days: Number;
        /**
         * Gets the number of whole hours (excluding entire days)
         *
         * @example In a TimeSpan created from TimeSpan.fromMinutes(1500),
         *                      totalHours will be 25, but hours will be 1
         * @return A number representing the number of whole hours in the TimeSpan
         */
        hours: Number;
        /**
         * Gets the number of whole minutes (excluding entire hours)
         *
         * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
         *                      totalSeconds will be 65.5, but seconds will be 5
         * @return A number representing the number of whole minutes in the TimeSpan
         */
        minutes: Number;
        /**
         * Gets the number of whole seconds (excluding entire minutes)
         *
         * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
         *                      totalSeconds will be 65.5, but seconds will be 5
         * @return A number representing the number of whole seconds in the TimeSpan
         */
        seconds: Number;
        /**
         * Gets the number of whole milliseconds (excluding entire seconds)
         *
         * @example In a TimeSpan created from TimeSpan.fromMilliseconds(2123),
         *                      totalMilliseconds will be 2001, but milliseconds will be 123
         * @return A number representing the number of whole milliseconds in the TimeSpan
         */
        milliseconds: Number;
        /**
         * Gets the total number of days.
         *
         * @example In a TimeSpan created from TimeSpan.fromHours(25),
         *                      totalHours will be 1.04, but hours will be 1
         * @return A number representing the total number of days in the TimeSpan
         */
        totalDays: Number;
        /**
         * Gets the total number of hours.
         *
         * @example In a TimeSpan created from TimeSpan.fromMinutes(1500),
         *                      totalHours will be 25, but hours will be 1
         * @return A number representing the total number of hours in the TimeSpan
         */
        totalHours: Number;
        /**
         * Gets the total number of minutes.
         *
         * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
         *                      totalSeconds will be 65.5, but seconds will be 5
         * @return A number representing the total number of minutes in the TimeSpan
         */
        totalMinutes: Number;
        /**
         * Gets the total number of seconds.
         *
         * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
         *                      totalSeconds will be 65.5, but seconds will be 5
         * @return A number representing the total number of seconds in the TimeSpan
         */
        totalSeconds: Number;
        /**
         * Gets the total number of milliseconds.
         *
         * @example In a TimeSpan created from TimeSpan.fromMilliseconds(2123),
         *                      totalMilliseconds will be 2001, but milliseconds will be 123
         * @return A number representing the total number of milliseconds in the TimeSpan
         */
        totalMilliseconds: Number;
        /**
         * Factory method for creating a TimeSpan from the difference between two dates
         *
         * Note that start can be after end, but it will result in negative values.
         *
         * @param start The start date of the timespan
         * @param end The end date of the timespan
         * @return A TimeSpan that represents the difference between the dates
         *
         */
        static createFromDates(start: Date, end: Date): TimeSpan;
        /**
         * Factory method for creating a TimeSpan from the specified number of milliseconds
         * @param milliseconds The number of milliseconds in the timespan
         * @return A TimeSpan that represents the specified value
         */
        static createFromMilliseconds(milliseconds: number): TimeSpan;
        /**
         * Factory method for creating a TimeSpan from the specified number of seconds
         * @param seconds The number of seconds in the timespan
         * @return A TimeSpan that represents the specified value
         */
        static createFromSeconds(seconds: number): TimeSpan;
        /**
         * Factory method for creating a TimeSpan from the specified number of minutes
         * @param minutes The number of minutes in the timespan
         * @return A TimeSpan that represents the specified value
         */
        static createFromMinutes(minutes: number): TimeSpan;
        /**
         * Factory method for creating a TimeSpan from the specified number of hours
         * @param hours The number of hours in the timespan
         * @return A TimeSpan that represents the specified value
         */
        static createFromHours(hours: number): TimeSpan;
        /**
         * Factory method for creating a TimeSpan from the specified number of days
         * @param days The number of days in the timespan
         * @return A TimeSpan that represents the specified value
         */
        static createFromDays(days: number): TimeSpan;
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    class GamePlayContext {
        GamePlayId: String;
        GameMode: String;
        GameSubMode: String;
        Stats: Object;
        constructor(gamePlayId: String, gameMode?: String, gameSubMode?: String);
        Clone(): GamePlayContext;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    enum AsyncStatus {
        Started = 0,
        Completed = 1,
        Canceled = 2,
        Error = 3,
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    class FileInfo {
        CreationDate: Date;
        Name: String;
        constructor();
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface IAsyncActionCompletedHandler {
        (asyncInfo: IAsyncAction, asyncStatus: AsyncStatus): void;
    }
    interface IAsyncAction extends IAsyncInfo {
        Completed: IAsyncActionCompletedHandler;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface IAsyncInfo {
        Cancel(): void;
        Close(): void;
        ErrorCode: Error;
        Status: AsyncStatus;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface IComponent {
        Initialize(manager: TrackingManager): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface IDispatcher {
        Invoke(action: () => void): IAsyncAction;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    import WindowState = Arkadium.Connect.Analytics.Model.WindowState;
    import InputState = Arkadium.Connect.Analytics.Model.InputState;
    import ScreenOrientation = Arkadium.Connect.Analytics.Model.ScreenOrientation;
    import GamePlayContext = Arkadium.Connect.Analytics.SDK.GamePlayContext;
    interface IEnvironment {
        WindowState: WindowState;
        InputState: InputState;
        ScreenResolution: String;
        ScreenOrientation: ScreenOrientation;
        Locale: String;
        AppVersion: String;
        DeviceId: String;
        UserId: String;
        SDK: String;
        IsOffline: Boolean;
        AppId: String;
        HostId: String;
        AppInstanceId: String;
        SessionId: String;
        StepNumber: number;
        GamePlayId: String;
        EventNumber: number;
        SilentMode: boolean;
        SetGamePlayContext(gamePlayContext: GamePlayContext): void;
        GetGamePlayContext(gamePlayId: String): GamePlayContext;
        ClearGamePlayContext(gamePlayId: String): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    import EventMessageBatch = Arkadium.Connect.Analytics.Model.EventMessageBatch;
    class SendResult {
        Error: Error;
    }
    interface IEventSender {
        Send(message: EventMessage, callback: (result: SendResult) => void): void;
        SendBatch(eventMessageBatch: EventMessageBatch, callback: (result: SendResult) => void): void;
        IsAvailable(callback: (result: Boolean) => void): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface IFileSystem {
        ListFiles(): FileInfo[];
        Load(fileName: String): String;
        Save(fileName: String, content: String): void;
        Delete(fileName: String): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface ILogger {
        Debug(message: String): void;
        Info(message: String): void;
        Warning(message: String): void;
        Error(message: String): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    interface IPersistentQueue {
        Enqueue(eventMessage: EventMessage): void;
        Dequeue(): EventMessage;
        Take(index: Number): EventMessage;
        RemoveAt(index: Number): void;
        Count: number;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface TimerAction {
        (callback: () => void): void;
    }
    interface ITimer {
        Init(action: TimerAction, period: TimeSpan): any;
        Dispose(): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface ITrackingFactory {
        CreateEventSender(): IEventSender;
        CreateEnvironment(): IEnvironment;
        CreateFileSystem(): IFileSystem;
        CreateDispatcher(): IDispatcher;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    enum LogLevel {
        Debug = 1,
        Info = 2,
        Warning = 4,
        Error = 8,
    }
}
declare module Arkadium.Connect.Analytics.SDK.Core.Api {
    interface IStorage {
        GetKeys(): string[];
        GetItem(key: string): string;
        SetItem(key: string, value: string): void;
        RemoveItem(key: string): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Exceptions {
    class AnalyticsException implements Error {
        name: string;
        message: string;
        constructor(message: string, name: string);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Exceptions {
    class EventCorruptedException extends AnalyticsException {
        private _index;
        Index: Number;
        constructor(message: string, index: Number);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Exceptions {
    class ServerConnectionException extends AnalyticsException {
        constructor();
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Exceptions {
    class ServerProcessingException extends AnalyticsException {
        constructor();
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Exceptions {
    class FileNotFoundException extends AnalyticsException {
        constructor(fileName: string);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Logging {
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class EmptyLogger implements ILogger {
        Debug(message: String): void;
        Info(message: String): void;
        Warning(message: String): void;
        Error(message: String): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Logging {
    import IEventSender = Arkadium.Connect.Analytics.SDK.Core.Api.IEventSender;
    import IFileSystem = Arkadium.Connect.Analytics.SDK.Core.Api.IFileSystem;
    import SendResult = Arkadium.Connect.Analytics.SDK.Core.Api.SendResult;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    import EventMessageBatch = Arkadium.Connect.Analytics.Model.EventMessageBatch;
    class DebugEventLogger implements IEventSender {
        private _eventSender;
        private _fileSystem;
        private _fileName;
        constructor(fileSystem: IFileSystem, fileName: string, eventSender: IEventSender, applyFormating: boolean);
        Send(message: EventMessage, callback: (result: SendResult) => void): void;
        SendBatch(eventMessageBatch: EventMessageBatch, callback: (result: SendResult) => void): void;
        IsAvailable(callback: (result: boolean) => void): void;
        private SaveMessage(message);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Background {
    import IAsyncAction = Arkadium.Connect.Analytics.SDK.Core.Api.IAsyncAction;
    import IAsyncActionCompletedHandler = Arkadium.Connect.Analytics.SDK.Core.Api.IAsyncActionCompletedHandler;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import AsyncStatus = Arkadium.Connect.Analytics.SDK.Core.Api.AsyncStatus;
    class BackgroundAction implements IAsyncAction {
        private _lockObject;
        private _action;
        private _logger;
        private _errorCode;
        private _status;
        private _completed;
        constructor(action: Action, logger: ILogger);
        Run(): void;
        CallCompleted(): void;
        Cancel(): void;
        Close(): void;
        ErrorCode: Error;
        Status: AsyncStatus;
        Completed: IAsyncActionCompletedHandler;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Background {
    import IDispatcher = Arkadium.Connect.Analytics.SDK.Core.Api.IDispatcher;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import IAsyncAction = Arkadium.Connect.Analytics.SDK.Core.Api.IAsyncAction;
    class BackgroundWorker implements IDispatcher {
        private _waitDelay;
        private _actions;
        private _logger;
        private _isDebugMode;
        constructor(isDebugMode: boolean, logger: ILogger);
        IsDebugMode: Boolean;
        private RunProcess();
        private Run(action);
        private GetAction();
        Invoke(action: Action): IAsyncAction;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Background {
    import IAsyncAction = Arkadium.Connect.Analytics.SDK.Core.Api.IAsyncAction;
    import IAsyncActionCompletedHandler = Arkadium.Connect.Analytics.SDK.Core.Api.IAsyncActionCompletedHandler;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import AsyncStatus = Arkadium.Connect.Analytics.SDK.Core.Api.AsyncStatus;
    class SilentModeAction implements IAsyncAction {
        private _logger;
        private _completed;
        constructor(logger: ILogger);
        Cancel(): void;
        Close(): void;
        ErrorCode: Error;
        Status: AsyncStatus;
        Completed: IAsyncActionCompletedHandler;
        private CallCompleted();
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Background {
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import IDispatcher = Arkadium.Connect.Analytics.SDK.Core.Api.IDispatcher;
    import IAsyncAction = Arkadium.Connect.Analytics.SDK.Core.Api.IAsyncAction;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class SilentModeKillSwitch implements IDispatcher {
        private _dispatcher;
        private _environment;
        private _logger;
        constructor(dispatcher: IDispatcher, environment: IEnvironment, logger: ILogger);
        Invoke(action: Action): IAsyncAction;
    }
}
import ITimer = Arkadium.Connect.Analytics.SDK.Core.Api.ITimer;
import TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;
import TimerAction = Arkadium.Connect.Analytics.SDK.Core.Api.TimerAction;
declare module Arkadium.Connect.Analytics.SDK.Impl.Background {
    class Timer implements ITimer {
        private _disposed;
        Init(action: TimerAction, period: TimeSpan): void;
        private NotDisposed();
        Dispose(): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Model {
    class InventoryTransactionInfo {
        Id: String;
        Provider: String;
        Type: String;
        constructor(id: String, provider: String, type: String);
        Clone(): InventoryTransactionInfo;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Model {
    class ItemInfo {
        Key: String;
        Name: String;
        Type: String;
        Quantity: Number;
        constructor(key: String, name: String, type: String, quantity: Number);
        Clone(): ItemInfo;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Model {
    class PriceInfo {
        private static DefaultCurrency;
        Price: Number;
        Amount: Number;
        TaxAmount: Number;
        CurrencyCode: String;
        constructor(price: Number, amount: Number, taxAmount: Number, currencyCode?: String);
        Clone(): PriceInfo;
    }
}
import TransactionResult = Arkadium.Connect.Analytics.Model.TransactionResult;
declare module Arkadium.Connect.Analytics.SDK.Impl.Model {
    class TransactionInfo {
        Id: String;
        Provider: String;
        Result: TransactionResult;
        constructor(id: String, provider: String, result: TransactionResult);
        Clone(): TransactionInfo;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Model {
    class UserIdentity {
        Id: String;
        Provider: String;
        constructor(id: String, provider: String);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Queue {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import IFileSystem = Arkadium.Connect.Analytics.SDK.Core.Api.IFileSystem;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class PersistentQueue implements IPersistentQueue {
        private _logger;
        private _fileSystem;
        private _filesQueue;
        constructor(fileSystem: IFileSystem, logger: ILogger);
        Enqueue(eventMessage: EventMessage): void;
        Take(index: number): EventMessage;
        RemoveAt(index: number): void;
        Dequeue(): EventMessage;
        Count: number;
        private LoadMessage(fileName, fileIndex?);
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    import ITrackingFactory = Arkadium.Connect.Analytics.SDK.Core.Api.ITrackingFactory;
    import IComponent = Arkadium.Connect.Analytics.SDK.Core.Api.IComponent;
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class EventsBase {
        private static _trackingSubsystem;
        static Track: TrackingManager;
        static Environment: IEnvironment;
        static AssertNotInitialized(): void;
        static AssertInitialized(): void;
        static Initialize(factory: ITrackingFactory, settings?: Settings, components?: IComponent[], logger?: ILogger): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Queue {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class PersistentQueueProxy implements IPersistentQueue {
        private _persistentQueue;
        constructor(persistentQueue: IPersistentQueue);
        Enqueue(eventMessage: EventMessage): void;
        Take(index: Number): EventMessage;
        RemoveAt(index: Number): void;
        Dequeue(): EventMessage;
        Count: number;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Queue {
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class LimitedQueue extends PersistentQueueProxy {
        private _logger;
        private _environment;
        private _offlineMessagesCount;
        constructor(persistentQueue: IPersistentQueue, environment: IEnvironment, settings: Settings, logger: ILogger);
        Enqueue(eventMessage: EventMessage): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Queue {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class MemoryQueue implements IPersistentQueue {
        private _eventMessages;
        Enqueue(eventMessage: EventMessage): void;
        Dequeue(): EventMessage;
        Take(index: number): EventMessage;
        RemoveAt(index: number): void;
        Count: number;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Queue {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class MixedQueue implements IPersistentQueue {
        private _persistentMessages;
        private _notImportantMessages;
        constructor(persistentMessages: IPersistentQueue, notImportantMessages: IPersistentQueue);
        Enqueue(eventMessage: EventMessage): void;
        Dequeue(): EventMessage;
        Take(index: number): EventMessage;
        RemoveAt(index: number): void;
        Count: number;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Queue {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class SafeQueue extends PersistentQueueProxy {
        constructor(persistentQueue: IPersistentQueue);
        Enqueue(eventMessage: EventMessage): void;
        Dequeue(): EventMessage;
        Take(index: number): EventMessage;
        RemoveAt(index: number): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Queue {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class TransactionalQueue implements IPersistentQueue {
        private _persistentQueue;
        private _queuedMessages;
        private _dequeueCount;
        constructor(persistentQueue: IPersistentQueue);
        Enqueue(eventMessage: EventMessage): void;
        Take(index: number): EventMessage;
        RemoveAt(index: number): void;
        Dequeue(): EventMessage;
        Count: number;
        Commit(): void;
        private FlushDequeueMessages();
        private FlushEnqueueMessages();
        Rollback(): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl {
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import IEventSender = Arkadium.Connect.Analytics.SDK.Core.Api.IEventSender;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    class QueueWorker {
        private _persistentQueue;
        private _eventSender;
        private _environment;
        private _settings;
        private _logger;
        private _messagesToResend;
        constructor(queue: IPersistentQueue, sender: IEventSender, environment: IEnvironment, settings: Settings, logger?: ILogger);
        SendEvents(callback: () => void): void;
        private TryResendMessages(callback);
        private SendMessage(callback);
        private SendBatch(callback);
        private GetMessagesBatch(transactionalQueue);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Validation {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import PersistentQueueProxy = Arkadium.Connect.Analytics.SDK.Impl.Queue.PersistentQueueProxy;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class ValidatorBase extends PersistentQueueProxy {
        private _settings;
        constructor(persistentQueue: IPersistentQueue, settings: Settings);
        AssertIsValid(message: EventMessage): void;
        private AssertValidPayloadValue(key, value);
        private AssertKeyNotNull(key);
        private AssertKeyLengthLimit(key);
        private AssertValueLengthLimit(key, value);
        private AssertValidPayloadValues(payload);
        private AssertValidEventName(eventName);
        private IsNullOrWhiteSpace(value);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Validation {
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class BreakingValidationQueue extends ValidatorBase {
        constructor(persistentQueue: IPersistentQueue, settings: Settings);
        Enqueue(eventMessage: EventMessage): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Validation {
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class SilentValidationQueue extends ValidatorBase {
        private _logger;
        constructor(persistentQueue: IPersistentQueue, settings: Settings, logger: ILogger);
        Enqueue(eventMessage: EventMessage): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.FileSystem {
    import IFileSystem = Arkadium.Connect.Analytics.SDK.Core.Api.IFileSystem;
    import FileInfo = Arkadium.Connect.Analytics.SDK.Core.Api.FileInfo;
    class FileSystemFilter implements IFileSystem {
        private _fileSystem;
        private _appId;
        constructor(fileSystem: IFileSystem, appId: String);
        ListFiles(): FileInfo[];
        Load(fileName: String): String;
        Save(fileName: String, content: String): void;
        Delete(fileName: String): void;
    }
}
import ValidationOptions = Arkadium.Connect.Analytics.SDK.ValidationOptions;
declare module Arkadium.Connect.Analytics.SDK {
    import TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;
    class Settings {
        private _maxPayloadKeyLength;
        private _maxPayloadValueLength;
        private _maxEventNameLength;
        private _offlineMessagesCount;
        private _batchMessagesCount;
        private _flushTime;
        private _idleTimeout;
        private _validationOptions;
        MaxPayloadKeyLength: number;
        MaxPayloadValueLength: number;
        MaxEventNameLength: number;
        ValidationOptions: ValidationOptions;
        OfflineMessagesCount: number;
        BatchMessagesCount: number;
        FlushTime: TimeSpan;
        IdleTimeout: TimeSpan;
        constructor(offlineMessagesCount: number, batchMessagesCount: number, flushTime: TimeSpan, idleTimeout: TimeSpan, validationOptions: ValidationOptions);
        static Default: Settings;
        toString(): String;
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    import EndState = Arkadium.Connect.Analytics.Model.EndState;
    import Gender = Arkadium.Connect.Analytics.Model.Gender;
    import ViralType = Arkadium.Connect.Analytics.Model.ViralType;
    import InventoryTransactionInfo = Arkadium.Connect.Analytics.SDK.Impl.Model.InventoryTransactionInfo;
    import TransactionInfo = Arkadium.Connect.Analytics.SDK.Impl.Model.TransactionInfo;
    import ItemInfo = Arkadium.Connect.Analytics.SDK.Impl.Model.ItemInfo;
    import PriceInfo = Arkadium.Connect.Analytics.SDK.Impl.Model.PriceInfo;
    import UserIdentity = Arkadium.Connect.Analytics.SDK.Impl.Model.UserIdentity;
    import IAsyncAction = Arkadium.Connect.Analytics.SDK.Core.Api.IAsyncAction;
    import IDispatcher = Arkadium.Connect.Analytics.SDK.Core.Api.IDispatcher;
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import IPersistentQueue = Arkadium.Connect.Analytics.SDK.Core.Api.IPersistentQueue;
    import IEventSender = Arkadium.Connect.Analytics.SDK.Core.Api.IEventSender;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    class TrackingManager {
        private _background;
        private _environment;
        private _persistentQueue;
        private _notImportantQueue;
        private _queueWorker;
        private _settings;
        private _logger;
        private _lastEventTime;
        constructor(environment: IEnvironment, persistentQueue: IPersistentQueue, notImportantQueue: IPersistentQueue, eventSender: IEventSender, dispatcher: IDispatcher, settings: Settings, logger?: ILogger);
        LastEventTime: Date;
        FlushEvents(callback: () => void): void;
        BeginSession(payload?: Object): IAsyncAction;
        EndSession(payload?: Object): IAsyncAction;
        BeginGamePlay(gamePlayId: String, level: String, isReplay: Boolean, gameMode?: String, gameSubMode?: String, payload?: Object): IAsyncAction;
        PauseGamePlay(gamePlayId: String, level: String, score: Number, payload?: Object): IAsyncAction;
        ResumeGamePlay(gamePlayId: String, level: String, gameMode?: String, gameSubMode?: String, payload?: Object): IAsyncAction;
        EndGamePlay(gamePlayId: String, level: String, score: Number, endState: EndState, payload?: Object): IAsyncAction;
        IncreaseCounter(gamePlayId: String, name: String, value?: Number): IAsyncAction;
        Purchase(transaction: TransactionInfo, purchaseItem: ItemInfo, priceInfo: PriceInfo, location?: String, payload?: Object): IAsyncAction;
        PurchaseVirtual(transaction: TransactionInfo, purchaseItem: ItemInfo, paymentItem: ItemInfo, location?: String, payload?: Object): IAsyncAction;
        InventoryUpdate(item: ItemInfo, transaction?: InventoryTransactionInfo, payload?: Object): IAsyncAction;
        UserGender(gender: Gender, payload?: Object): IAsyncAction;
        UserDateOfBirth(dateOfBirth: Date, payload?: Object): IAsyncAction;
        UserLocation(location: String, payload?: Object): IAsyncAction;
        UserLocationByGPS(latitude: Number, longitude: Number, accuracy: Number, payload?: Object): IAsyncAction;
        UserIdentity(userIdentity: UserIdentity, payload?: Object): IAsyncAction;
        Ping(payload?: Object): IAsyncAction;
        Error(message: String, exception: Error, payload?: Object): IAsyncAction;
        CustomEvent(eventName: String, important?: Boolean, payload?: Object): IAsyncAction;
        AwardEarned(award: String, payload?: Object): IAsyncAction;
        AdImpression(adProvider: String, adDimensions: String, ad: String, payload?: Object): IAsyncAction;
        AdClick(adProvider: String, adDimensions: String, ad: String, payload?: Object): IAsyncAction;
        PageView(pageName: String, stepNumber?: Number, payload?: Object): IAsyncAction;
        ViralRequest(requestId: String, type: ViralType, viralItem: String, sentUserInfo?: UserIdentity, payload?: Object): IAsyncAction;
        ViralResponse(requestId: String, type: ViralType, viralItem: string, payload?: Object): IAsyncAction;
        Activity(): IAsyncAction;
        private AssertPositive(stepNumber);
        private CreateGamePlayContext(gamePlayId, gameMode, gameSubMode);
        private GetMessage(exception);
        private CreateEventMessage(eventName, payload?, gamePlayId?);
        FillPayload(message: EventMessage, payload: Object): void;
        private ClonePayload(object);
        private FillGamePlayContext(message, gamePlayId);
        private IsNullOrWhiteSpace(value);
        private AssertNotNull(gamePlayId, message?);
        private AssertUserNotNull(user);
        private AssertValidEnum(type);
        private AssertNotEmpty(requestId);
        private GetCurrentGamePlayId(gamePlayId);
        private IsSpecified(gamePlayId);
        private FillCountersTo(message, currentGamePlayId);
        private IncreaseCounterStats(name, value, gamePlayContext);
        private RemoveCounters(currentGamePlayId);
        private AssertGamePlayContextNotNull(gamePlayContext);
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    import IComponent = Arkadium.Connect.Analytics.SDK.Core.Api.IComponent;
    import ITrackingFactory = Arkadium.Connect.Analytics.SDK.Core.Api.ITrackingFactory;
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class TrackingSubsystem {
        private _logger;
        private _trackingManager;
        private _settings;
        private _environment;
        private _components;
        TrackingManager: TrackingManager;
        Environment: IEnvironment;
        Initialize(factory: ITrackingFactory, settings?: Settings, components?: IComponent[], logger?: ILogger): void;
        private InitializeComponents(components);
        private CreatePersistentQueue(fileSystem, environment, settings);
        private CreateNotImportantQueue(environment, settings);
        private GetValidationQueue(persistentQueue, settings);
        private AssertNotInitialized();
        private AssertInitialized();
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    enum ValidationOptions {
        Silent = 1,
        RaiseErrors = 2,
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Components {
    import IComponent = Arkadium.Connect.Analytics.SDK.Core.Api.IComponent;
    import TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class PropertyInfo {
        Name: string;
        Value: Object;
        constructor(name: string, value: Object);
    }
    class EnvironmentWatcher implements IComponent {
        private STRING_EMPTY;
        private _properties;
        private _period;
        private _environment;
        private _logger;
        private _timer;
        private _track;
        private EnvironmentChanged;
        static InitializedKey: string;
        constructor(environment: IEnvironment, timer: ITimer, checkingPeriod: TimeSpan, watchingProperties: string[], logger: ILogger);
        definePropertiesToTrack(properties: string[]): void;
        Initialize(trackingManager: TrackingManager): void;
        private TrackInitialState();
        private rememberCurrentStateOf(environment);
        private GetValue(environment, propertyKey);
        private StringifyFlag(inputState, enumType);
        private GetProperties(environment);
        private TrackChanges(callback);
        private GetSize(value);
        private GetChangesOf(environment);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Components {
    import IComponent = Arkadium.Connect.Analytics.SDK.Core.Api.IComponent;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class EventsFlushWorker implements IComponent {
        private _track;
        private _settings;
        private _timer;
        private _logger;
        constructor(settings: Settings, timer: ITimer, logger: ILogger);
        Initialize(trackingManager: TrackingManager): void;
        private StartAutoFlushEvents();
        private AutoFlushEvents(callback);
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Components {
    import IComponent = Arkadium.Connect.Analytics.SDK.Core.Api.IComponent;
    import TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class IdleDetectionWorker implements IComponent {
        private _noNeedToWork;
        private _checkingTimeout;
        private _idleTimeout;
        private _timer;
        private _logger;
        private _trackingManager;
        constructor(idleTimeout: TimeSpan, timer: ITimer, logger: ILogger);
        Initialize(trackingManager: TrackingManager): void;
        private Beat(callback);
        Dispose(): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK.Impl.Components {
    import IComponent = Arkadium.Connect.Analytics.SDK.Core.Api.IComponent;
    class UserActivityWatcher implements IComponent {
        private _track;
        private _jqueryInstance;
        constructor(jqueryInstance: JQueryStatic);
        Initialize(trackingManager: TrackingManager): void;
        private TrackActivity();
    }
}
declare module Arkadium.Connect.Analytics.SDK {
}
declare module Arkadium.Connect.Analytics.SDK {
    import IFileSystem = Arkadium.Connect.Analytics.SDK.Core.Api.IFileSystem;
    import FileInfo = Arkadium.Connect.Analytics.SDK.Core.Api.FileInfo;
    import IStorage = Arkadium.Connect.Analytics.SDK.Core.Api.IStorage;
    class BrowserStorage implements IFileSystem {
        private _storage;
        constructor(storage: IStorage);
        ListFiles(): FileInfo[];
        Load(fileName: string): String;
        Save(fileName: string, content: string): void;
        Delete(fileName: string): void;
        private AssertFileExists(fileName);
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    import IEventSender = Arkadium.Connect.Analytics.SDK.Core.Api.IEventSender;
    import SendResult = Arkadium.Connect.Analytics.SDK.Core.Api.SendResult;
    import EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;
    import EventMessageBatch = Arkadium.Connect.Analytics.Model.EventMessageBatch;
    class BrowserEventSender implements IEventSender {
        private MediaType;
        private RequestTrackUri;
        private RequestBatchUri;
        private RequestPingUri;
        private _baseAddress;
        private _jQueryInstance;
        constructor(serverUrl: string, jQueryInstance: JQueryStatic);
        Send(message: EventMessage, callback: (result: SendResult) => void): void;
        SendBatch(eventMessageBatch: EventMessageBatch, callback: (result: SendResult) => void): void;
        IsAvailable(callback: (availability: Boolean) => void): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    interface IOptions {
        expires: string;
    }
    import IStorage = Arkadium.Connect.Analytics.SDK.Core.Api.IStorage;
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import WindowState = Arkadium.Connect.Analytics.Model.WindowState;
    import InputState = Arkadium.Connect.Analytics.Model.InputState;
    import ScreenOrientation = Arkadium.Connect.Analytics.Model.ScreenOrientation;
    import GamePlayContext = Arkadium.Connect.Analytics.SDK.GamePlayContext;
    class BrowserEnvironment implements IEnvironment {
        private _appId;
        private _hostId;
        private _appVersion;
        private _userId;
        private _deviceId;
        private _sdk;
        private _isOffline;
        private _sessionStorage;
        private _persistentStorage;
        constructor(sessionStorage: IStorage, persistentStorage: IStorage, appId: String, hostId: String, appVersion: String);
        private GetPersistentGuid(key);
        WindowState: WindowState;
        InputState: InputState;
        hasKeyboard(): boolean;
        hasMouse(): boolean;
        isAndroid(): boolean;
        getDeviceType(): string;
        hasTouchScreen(): boolean;
        ScreenResolution: String;
        ScreenOrientation: ScreenOrientation;
        Locale: String;
        AppVersion: String;
        DeviceId: String;
        UserId: String;
        SDK: String;
        IsOffline: Boolean;
        AppId: String;
        HostId: String;
        private _appInstanceId;
        AppInstanceId: String;
        SessionId: string;
        StepNumber: number;
        GamePlayId: string;
        EventNumber: number;
        SilentMode: boolean;
        private _gameplays;
        SetGamePlayContext(gamePlayContext: GamePlayContext): void;
        GetGamePlayContext(gamePlayId: string): GamePlayContext;
        private GetGamePlay(currentGamePlay);
        ClearGamePlayContext(gamePlayId: string): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    import ITrackingFactory = Arkadium.Connect.Analytics.SDK.Core.Api.ITrackingFactory;
    import IDispatcher = Arkadium.Connect.Analytics.SDK.Core.Api.IDispatcher;
    import IEventSender = Arkadium.Connect.Analytics.SDK.Core.Api.IEventSender;
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import IFileSystem = Arkadium.Connect.Analytics.SDK.Core.Api.IFileSystem;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class BrowserFactory implements ITrackingFactory {
        private _appId;
        private _hostId;
        private _appVersion;
        private _dispatcher;
        private _serverUrl;
        private _jquery;
        constructor(appId: string, hostId: string, appVersion: string, isDebugMode: boolean, serverUrl: string, jquery: JQueryStatic, logger: ILogger);
        CreateEventSender(): IEventSender;
        CreateEnvironment(): IEnvironment;
        CreateFileSystem(): IFileSystem;
        CreateDispatcher(): IDispatcher;
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    import IEnvironment = Arkadium.Connect.Analytics.SDK.Core.Api.IEnvironment;
    import ILogger = Arkadium.Connect.Analytics.SDK.Core.Api.ILogger;
    class Events {
        static Track: TrackingManager;
        static Environment: IEnvironment;
        static Initialize(appId: string, hostId: string, appVersion: string, serverUrl: string, settings: Settings, jquery: JQueryStatic, logger: ILogger): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    class BrowserLocalStorage implements Core.Api.IStorage {
        GetKeys(): string[];
        GetItem(key: string): string;
        SetItem(key: string, value: string): void;
        RemoveItem(key: string): void;
    }
}
declare module Arkadium.Connect.Analytics.SDK {
    class BrowserSessionStorage implements Core.Api.IStorage {
        GetKeys(): string[];
        GetItem(key: string): string;
        SetItem(key: string, value: string): void;
        RemoveItem(key: string): void;
    }
}
