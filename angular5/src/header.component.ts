import { OnInit, OnDestroy, EventEmitter, Component } from "@angular/core";
import { UniversalService } from "./universal.service";
import { UniversalModel } from "./universal.model";

@Component({
    selector: 'head',
    templateUrl: './header.component.html'
  })
export class HeaderTemplateComponent implements OnInit, OnDestroy {
    public universalModel: UniversalModel;
    private subscriber: EventEmitter<UniversalModel>;

    // Inject UniversalService with @param universalService
    constructor(private universalService: UniversalService) {}

    // Instantiate an empty model to populate and subscribe to universalService
    public ngOnInit() {
        this.universalModel = new UniversalModel();
        this.subscriber = this.universalService.eventEmitter.subscribe((universalModel) => {
            this.universalModel = universalModel;
        });
    }

    // unsubscribe from universalService
    public ngOnDestroy() { this.subscriber.unsubscribe() }
}
