import {
	Component,
	ViewEncapsulation,
	ElementRef,
	Input,
	OnInit,
	OnDestroy,
} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
	@Input() id: string;
	@Input() city: any = null;

	private element: any;
	modalTitle = 'Create Record';

	constructor(private modalService: ModalService, private el: ElementRef) {
		this.element = el.nativeElement;
	}

	ngOnInit(): void {
		if (this.city?.id) {
			this.modalTitle = 'Edit Record';
		}

		if (!this.id) {
			console.error('modal must have an id');
			return;
		}

		document.body.appendChild(this.element);

		this.element.addEventListener('click', (el) => {
			if (el.target.className === 'app-modal') {
				this.close();
			}
		});
		this.modalService.add(this);
	}

	open(): void {
		this.element.style.display = 'block';
		document.body.classList.add('app-modal-open');
	}

	close(): void {
		this.element.style.display = 'none';
		document.body.classList.remove('app-modal-open');
	}

	ngOnDestroy(): void {
		this.modalService.remove(this.id);
		this.element.remove();
	}
}
