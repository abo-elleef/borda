import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChapterDetails} from '../chapter-details/chapter-details';
import {NativeStorage} from "@ionic-native/native-storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[NativeStorage]
})
export class HomePage {
  chapters: any = [{lines:[{}]}];
  prefixer: number = 0;
  fontSizeClass: string = 'font-16';
  fontFaceClass: string = 'kufi';

  constructor(public navCtrl: NavController, private _nativeStorage: NativeStorage) {
  }

  ionViewDidEnter(){
    this._nativeStorage.getItem('fontSize').then(data =>{
      this.fontSizeClass = data ?  'font-'+data : this.fontSizeClass;
      console.log(this.fontSizeClass);
    });
    this._nativeStorage.getItem('fontFace').then(data => {
      this.fontFaceClass = data ? data: this.fontFaceClass
      console.log(this.fontFaceClass);
    });
  };
  ionViewWillEnter() {
    this.chapters = [
      {
        id: '1',
        name: 'الفصل الأول',
        desc: 'في الغزل وشكوى الغرام.',
        lines: [
          {
            right: 'أمن تذكــــــر جيــــــرانٍ بذى ســــــلم',
            left: 'مزجت دمعا جَرَى من مقلةٍ بـــــدم'
          },

          {
            right: 'أمْ هبَّــــت الريـــــحُ مِنْ تلقاءِ كاظمــةٍ',
            left: 'وأَومض البرق في الظَّلْماءِ من إِضم'
          },

          {
            right: 'فما لعينيك إن قلت اكْفُفا همتــــــــــا',
            left: 'وما لقلبك إن قلت استفق يهـــــــــم'
          },

          {
            right: 'أيحسب الصب أن الحب منكتـــــــــــم',
            left: 'ما بين منسجم منه ومضطــــــــرم'
          },

          {
            right: 'لولا الهوى لم ترق دمعاً على طـــــللٍ',
            left: 'ولا أرقت لذكر البانِ والعلــــــــــمِ'
          },

          {
            right: 'فكيف تنكر حباً بعد ما شـــــــــــــهدت',
            left: 'به عليك عدول الدمع والســـــــــقمِ'
          },

          {
            right: ' وأثبت الوجد خطَّيْ عبرةٍ وضــــــــنى',
            left: 'مثل البهار على خديك والعنــــــــم'
          },

          {
            right: ' نعم سرى طيف من أهوى فأرقنـــــــي',
            left: 'والحب يعترض اللذات بالألــــــــمِ'
          },

          {
            right: 'يا لائمي في الهوى العذري معـــــذرة',
            left: 'مني إليك ولو أنصفت لم تلــــــــــمِ'
          },

          {
            right: 'عدتك حالي لا سري بمســــــــــــــتتر ',
            left: 'عن الوشاة ولا دائي بمنحســـــــــم'
          },

          {
            right: 'محضتني النصح لكن لست أســـــمعهُ',
            left: 'إن المحب عن العذال في صــــــممِ'
          },

          {
            right: 'إنى اتهمت نصيح الشيب في عـــذلي',
            left: 'والشيب أبعد في نصح عن التهـــتـمِ'
          },

        ]
      },
      {
        id: '2',
        name: 'الفصل الثاني',
        desc: 'في التحذير من هوى النفس.',
        lines: [

          {
            right: 'فإن أمارتي بالسوءِ ما أتعظــــــــــــــت',
            left: 'من جهلها بنذير الشيب والهــــرم'
          },

          {
            right: 'ولا أعدت من الفعل الجميل قــــــــــرى',
            left: 'ضيف ألم برأسي غير محتشــــــم'
          },

          {
            right: ' لو كنت أعلم أني ما أوقــــــــــــــــره',
            left: 'كتمت سراً بدا لي منه بالكتــــــــمِ'
          },

          {
            right: 'من لي برِّد جماحٍ من غوايتهــــــــــــا',
            left: 'كما يردُّ جماح الخيلِ باللُّجـــــــــُم'
          },

          {
            right: 'فلا ترم بالمعاصي كسر شهوتهــــــــــا',
            left: 'إن الطعام يقوي شهوة النَّهـــــــــم'
          },

          {
            right: 'والنفس كالطفل إن تهملهُ شبَّ علــــى',
            left: 'حب الرضاعِ وإن تفطمهُ ينفطــــم'
          },

          {
            right: 'فاصرف هواها وحاذر أن توليــــــــــه',
            left: 'إن الهوى ما تولى يصم أو يصـــــم'
          },

          {
            right: 'وراعها وهي في الأعمالِ ســــــــائمةٌ',
            left: 'وإن هي استحلت المرعى فلا تسم'
          },

          {
            right: 'كم حسنت لذةً للمرءِ قاتلــــــــــــــة',
            left: 'من حيث لم يدرِ أن السم فى الدسم'
          },

          {
            right: 'واخش الدسائس من جوعٍ ومن شبع',
            left: 'فرب مخمصةٍ شر من التخـــــــــــم'
          },

          {
            right: 'واستفرغ الدمع من عين قد امتـــلأت',
            left: 'من المحارم والزم حمية النـــــــدمِ'
          },

          {
            right: 'وخالف النفس والشيطان واعصهمــا',
            left: 'وإن هما محضاك النصح فاتَّهِـــــم'
          },

          {
            right: 'ولا تطع منهما خصماً ولا حكمـــــــــاً',
            left: 'فأنت تعرف كيد الخصم والحكـــــم'
          },

          {
            right: 'أستغفر الله من قولٍ بلا عمـــــــــــــلٍ',
            left: 'لقد نسبتُ به نسلاً لذي عُقــــــــــُم'
          },

          {
            right: 'أمْرتُك الخير لكن ما ائتمرت بــــــــــه',
            left: 'وما اســـــتقمت فما قولى لك استقمِ'
          },

          {
            right: 'ولا تزودت قبل الموت نافلــــــــــــــةً ',
            left: 'ولم أصل سوى فرض ولم اصـــــم'
          },
        ]
      },
      {
        id: '3',
        name: 'الفصل الثالث',
        desc: 'في مدح سيد المرسلين.',
        lines: [
          {
            right: 'ظلمت سنة من أحيا الظلام إلــــــــــى',
            left: 'أن اشتكت قدماه الضر مــــــن ورم'
          },

          {
            right: 'وشدَّ من سغب أحشاءه وطــــــــــوى',
            left: 'تحت الحجارة كشحاً متـــــرف الأدم'
          },

          {
            right: 'وراودته الجبال الشم من ذهــــــــبٍ',
            left: 'عن نفسه فأراها أيما شــــــــــــمم'
          },

          {
            right: ' وأكدت زهده فيها ضرورتـــــــــه',
            left: 'إن الضرورة لا تعدو على العصــــم'
          },

          {
            right: 'وكيف تدعو إلى الدنيا ضرورة مـــن',
            left: 'لولاه لم تخرج الدنيا من العـــــدمِ'
          },

          {
            right: 'محمد ســـــيد الكونين والثقليـن',
            left: ' والفريقين من عرب ومن عجـــــمِ'
          },

          {
            right: 'نبينا الآمرُ الناهي فلا أحـــــــــــــد ٌ',
            left: 'أبر في قولِ لا منه ولا نعــــــــــــــم '
          },

          {
            right: 'هو الحبيب الذي ترجى شــــــــفاعته',
            left: 'لكل هولٍ من الأهوال مقتحـــــــــــــــم '
          },

          {
            right: 'دعا إلى الله فالمستسكون بــــــــــــه',
            left: 'مستمسكون بحبلٍ غير منفصـــــــــــم'
          },

          {
            right: 'فاق النبيين في خلقٍ وفي خُلــــــــُقٍ',
            left: 'ولم يدانوه في علمٍ ولا كـــــــــــــــرم'
          },

          {
            right: 'وكلهم من رسول الله ملتمـــــــــــسٌ',
            left: 'غرفاً من البحر أو رشفاً من الديـــــمِ'
          },

          {
            right: 'وواقفون لديه عند حدهــــــــــــــــم',
            left: 'من نقطة العلم أو من شكلة الحكـــــم'
          },

          {
            right: ' فهو الذي تـــــم معناه وصورتـــــــه',
            left: 'ثم اصطفاه حبيباً بارئُ النســــــــــــم'
          },

          {
            right: 'منزهٌ عن شريكٍ في محاســـــــــــنه',
            left: 'فجوهر الحسن فيه غير منقســـــــــم'
          },

          {
            right: 'دع ما ادعثه النصارى في نبيهـــــم',
            left: 'واحكم بماشئت مدحاً فيه واحتكــــــم'
          },

          {
            right: 'وانسب إلى ذاته ما شئت من شــرف',
            left: 'وانسب إلى قدره ما شئت من عظــــم'
          },

          {
            right: 'فإن فضل رسول الله ليس لـــــــــــه',
            left: 'حدٌّ فيعرب عنه ناطقٌ بفــــــــــــــــم'
          },

          {
            right: 'لو ناسبت قدره آياته عظمـــــــــــــاً',
            left: 'أحيا اسمه حين يدعى دارس الرمــم'
          },

          {
            right: 'لم يمتحنا بما تعيا العقول بــــــــــــه',
            left: 'حرصاً علينا فلم نرتب ولم نهــــــــمِ'
          },

          {
            right: 'أعيا الورى فهم معناه فليس يـــــرى',
            left: 'في القرب والبعد فيه غير منفحـــــم'
          },

          {
            right: 'كالشمس تظهر للعينين من بعُـــــــدٍ',
            left: 'صغيرةً وتكل الطرف من أمـــــــــــم'
          },

          {
            right: 'وكيف يدرك في الدنيا حقيقتــــــــــه',
            left: 'قومٌ نيامٌ تسلوا عنه بالحلــــــــــــــِم'
          },

          {
            right: 'فمبلغ العلم فيه أنه بشـــــــــــــــرٌ',
            left: 'وأنه خير خلق الله كلهـــــــــــــــمِ'
          },

          {
            right: 'وكل آيٍ أتى الرسل الكرام بهـــــــــا',
            left: 'فإنما اتصلت من نوره بهـــــــــــــم'
          },

          {
            right: 'فإنه شمس فضلٍ هم كواكبهـــــــــــا',
            left: 'يظهرن أنوارها للناس في الظلـــــم'
          },

          {
            right: 'أكرم بخلق نبيّ زانه خلــــــــــــــــقٌ ',
            left: 'بالحسن مشتمل بالبشر متســـــــــم'
          },

          {
            right: 'كالزهر في ترفٍ والبدر في شــــرفٍ',
            left: 'والبحر في كرمٍ والدهر في همــــــم'
          },

          {
            right: 'كانه وهو فردٌ من جلالتــــــــه',
            left: 'في عسكر حين تلقاه وفي حشــــــم'
          },

          {
            right: 'كأنما اللؤلؤ المكنون فى صـــــدفٍ',
            left: 'من معدني منطق منه ومبتســــــــم'
          },

          {
            right: 'لا طيب يعدل تُرباً ضم أعظمــــــــــهُ',
            left: 'طوبى لمنتشقٍ منه وملتثــــــــــــــم ِ'
          }
        ]
      },
      {
        id: '4',
        name: 'الفصل الرابع',
        desc: 'في مدح مولــده.',
        lines: [

          {
            right: 'أبان مولده عن طيب عنصـــــــــره',
            left: 'يا طيب مبتدأ منه ومختتــــــــــــــم '
          },

          {
            right: 'يومٌ تفرَّس فيه الفرس أنهـــــــــــــم',
            left: 'قد أنذروا بحلول البؤْس والنقـــــــم'
          },

          {
            right: 'وبات إيوان كسرى وهو منصــــدعٌ',
            left: 'كشمل أصحاب كسرى غير ملتئـــم'
          },

          {
            right: 'والنار خامدة الأنفاس من أســــــفٍ',
            left: 'عليه والنهر ساهي العين من سـدم'
          },

          {
            right: ' وساءَ ساوة أن غاضت بحيرتهـــــا',
            left: 'ورُد واردها بالغيظ حين ظمــــــــي'
          },

          {
            right: 'كأن بالنار ما بالماء من بــــــــــــلل',
            left: 'حزناً وبالماء ما بالنار من ضــــرمِ'
          },

          {
            right: 'والجن تهتف والأنوار ساطعـــــــــةٌ',
            left: 'والحق يظهر من معنى ومن كلــــم'
          },

          {
            right: 'عموا وصموا فإعلان البشائر لـــــم',
            left: 'يسمع وبارقة الإنذار لم تُشــــــــــَم'
          },

          {
            right: 'من بعد ما أخبر الأقوام كاهِنُهُـــــــمْ',
            left: 'بأن دينهم المعوجَّ لم يقــــــــــــمِ '
          },

          {
            right: 'وبعد ما عاينوا في الأفق من شهـب',
            left: 'منقضةٍ وفق ما في الأرض من صنم'
          },

          {
            right: ' حتى غدا عن طريق الوحى منهــزمٌ',
            left: 'من الشياطين يقفو إثر منــــــهزم'
          },

          {
            right: 'كأنهم هرباً أبطال أبرهــــــــــةٍ',
            left: 'أو عسكرٌ بالحصى من راحتيه رمـى'
          },

          {
            right: 'نبذاً به بعد تسبيحٍ ببطنهمــــــا',
            left: 'نبذ المسبِّح من أحشاءِ ملتقـــــم'
          }
        ]
      },
      {
        id: '5',
        name: 'الفصل الخامس',
        desc: 'في معجزاته.',
        lines: [
          {
            right: 'جاءت لدعوته الأشجار ســــــاجدة',
            left: 'تمشى إليه على ساقٍ بلا قــــــــــدم'
          },

          {
            right: 'كأنَّما سطرت سطراً لما كتــــــــــبت',
            left: 'فروعها من بديع الخطِّ في اللقـــــم'
          },

          {
            right: 'مثل الغمامة أنَّى سار سائـــــــــــرة',
            left: 'تقيه حر وطيسٍ للهجير حَـــــــــــم'
          },

          {
            right: 'أقسمت بالقمر المنشق إن لــــــــــه',
            left: 'من قلبه نسبةً مبرورة القســــــــــمِ'
          },

          {
            right: 'وما حوى الغار من خير ومن كــرم',
            left: 'وكل طرفٍ من الكفار عنه عــــــــم'
          },

          {
            right: 'فالصِّدْقُ في الغار والصِّدِّيقُ لم يرما',
            left: 'وهم يقولون ما بالغار مــــــــن أرم'
          },

          {
            right: 'ظنوا الحمام وظنوا العنكبوت علــى',
            left: 'خير البرية لم تنسج ولم تحــــــــــم'
          },

          {
            right: 'وقاية الله أغنت عن مضاعفـــــــــةٍ',
            left: 'من الدروع وعن عالٍ من الأطـــــُم'
          },

          {
            right: 'ما سامنى الدهر ضيماً واستجرت به',
            left: 'إلا ونلت جواراً منه لم يضـــــــــــم'
          },

          {
            right: 'ولا التمست غنى الدارين من يــــده',
            left: 'إلا استلمت الندى من خير مســـتلم'
          },

          {
            right: 'لا تنكر الوحي من رؤياه إن لـــــــه',
            left: 'قلباً إذا نامت العينان لم ينــــــــــــم'
          },

          {
            right: 'وذاك حين بلوغٍ من نبوتــــــــــــــه',
            left: 'فليس ينكر فيه حال محتلـــــــــــــم'
          },

          {
            right: 'تبارك الله ما وحيٌ بمكتســــــــــــبٍ',
            left: 'ولا نبيٌّ على غيبٍ بمتهـــــــــــــــم '
          },

          {
            right: 'كم أبرأت وصباً باللمس راحتــــــــه',
            left: 'وأطلقت أرباً من ربقة اللمـــــــــــم'
          },

          {
            right: 'وأحيتِ السنةَ الشهباء دعوتـــــــــه',
            left: 'حتى حكت غرة في الأعصر الدهـم'
          },

          {
            right: 'بعارضٍ جاد أو خلت البطاح بهـــــا',
            left: 'سيبٌ من اليم أو سيلٌ من العــــرمِ'
          }
        ]
      },
      {
        id: '6',
        name: 'الفصل السادس',
        desc: 'في شـرف القرآن ومدحه.',
        lines: [
          {
            right: 'دعني ووصفي آيات له ظهـــــــرت',
            left: 'ظهور نار القرى ليلاً على علـــــم'
          },

          {
            right: 'فالدُّرُّ يزداد حسناً وهو منتظــــــــــمٌ',
            left: 'وليس ينقص قدراً غير منتظــــــم'
          },

          {
            right: 'فما تطاول آمال المديح إلــــــــــــى',
            left: 'ما فيه من كرم الأخلاق والشِّيـــــم'
          },

          {
            right: 'آيات حق من الرحمن محدثــــــــــةٌ',
            left: 'قديمةٌ صفة الموصوف بالقــــــدم'
          },

          {
            right: 'لم تقترن بزمانٍ وهي تخبرنــــــــــا',
            left: 'عن المعادِ وعن عادٍ وعــــن إِرَم'
          },

          {
            right: 'دامت لدينا ففاقت كلَّ معجــــــــــزةٍ',
            left: 'من النبيين إذ جاءت ولم تـــــــدمِ'
          },

          {
            right: 'محكّماتٌ فما تبقين من شبــــــــــــهٍ',
            left: 'لذى شقاقٍ وما تبغين من حكــــم'
          },

          {
            right: 'ما حوربت قط إلا عاد من حَـــــــرَبٍ',
            left: 'أعدى الأعادي إليها ملقي الســلمِ'
          },

          {
            right: 'ردَّتْ بلاغتها دعوى معارضهــــــــا',
            left: 'ردَّ الغيور يد الجاني عن الحـــرم'
          },

          {
            right: 'لها معانٍ كموج البحر في مــــــــددٍ',
            left: 'وفوق جوهره في الحسن والقيـمِ'
          },

          {
            right: 'فما تعدُّ ولا تحصى عجائبهــــــــــــا',
            left: 'ولا تسام على الإكثار بالســـــــأمِ'
          },

          {
            right: 'قرَّتْ بها عين قاريها فقلت لـــــــــه',
            left: 'لقد ظفرت بحبل الله فاعتصـــــــم'
          },

          {
            right: 'إن تتلها خيفةً من حر نار لظـــــــى',
            left: 'أطفأت حر لظى من وردها الشــم'
          },

          {
            right: 'كأنها الحوض تبيض الوجوه بـــــه',
            left: 'من العصاة وقد جاؤوه كالحمـــــم'
          },

          {
            right: 'وكالصراط وكالميزان معدلـــــــــــةً',
            left: 'فالقسط من غيرها في الناس لم يقم'
          },

          {
            right: 'لا تعجبن لحسودٍ راح ينكرهــــــــــا',
            left: 'تجاهلاً وهو عين الحاذق الفهـــــم'
          },

          {
            right: 'قد تنكر العين ضوء الشمس من رمد',
            left: 'وينكر الفم طعم الماءِ من ســــــقم'
          }
        ]
      },
      {
        id: '7',
        name: 'الفصل السابع',
        desc: 'في إسرائه ومعراجه.',
        lines: [
          {
            right: 'يا خير من يمم العافون ســــــــاحته',
            left: 'سعياً وفوق متون الأينق الرســــم'
          },

          {
            right: 'ومن هو الآية الكبرى لمعتبــــــــــرٍ',
            left: 'ومن هو النعمةُ العظمى لمغتنـــــم'
          },

          {
            right: 'سريت من حرمٍ ليلاً إلى حــــــــــرمٍ',
            left: 'كما سرى البدر في داجٍ من الظـلم'
          },

          {
            right: 'وبت ترقى إلى أن نلت منزلــــــــــةً',
            left: 'من قاب قوسين لم تدرك ولم تــرم'
          },

          {
            right: 'وقدمتك جميع الأنبياء بهـــــــــــــــا',
            left: 'والرسل تقديم مخدومٍ على خـــــدم'
          },

          {
            right: 'وأنت تخترق السبع الطباق بهــــــم',
            left: 'في مركب كنت فيه صاحب العلــــم'
          },

          {
            right: 'حتى إذا لم تدع شأواً لمســـــــــتبقٍ',
            left: 'من الدنوِّ ولا مرقى لمســــــــــــتنم'
          },

          {
            right: 'خفضت كل مقامٍ بالإضـــــــــــافة إذ',
            left: 'نوديت بالرفع مثل المفردِ العلــــــم'
          },

          {
            right: 'كيما تفوز بوصلٍ أي مســـــــــــتترٍ',
            left: 'عن العيون وسرٍ أي مكتتــــــــــــم'
          },

          {
            right: 'فحزت كل فخارٍ غير مشـــــــــــتركٍ',
            left: 'وجزت كل مقامٍ غير مزدحــــــــــم'
          },

          {
            right: 'وجل مقدار ما وليت من رتــــــــــبٍ',
            left: 'وعز إدراك ما أوليت من نعــــــــمِ'
          },

          {
            right: 'بشرى لنا معشر الإسلام إن لنـــــــا',
            left: 'من العناية ركناً غير منهــــــــــدم'
          },

          {
            right: 'لما دعا الله داعينا لطاعتــــــــــــــه ',
            left: 'بأكرم الرسل كنا أكرم الأمــــــــــم'
          },
        ]
      },
      {
        id: '8',
        name: 'الفصل الثامن',
        desc: 'في جهاد النبي.',
        lines: [


          {
            right: 'راعت قلوب العدا أنباء بعثتــــــــــه',
            left: 'كنبأة أجفلت غفلا من الغنــــــــــمِ'
          },

          {
            right: 'ما زال يلقاهمُ في كل معتـــــــــــركٍ',
            left: 'حتى حكوا بالقنا لحماً على وضـم'
          },

          {
            right: 'ودوا الفرار فكادوا يغبطون بــــــــه',
            left: 'أشلاءَ شالت مع العقبان والرخــم'
          },

          {
            right: 'تمضي الليالي ولا يدرون عدتهـــــا',
            left: 'ما لم تكن من ليالي الأشهر الحُرُم'
          },

          {
            right: 'كأنما الدين ضيفٌ حل ســــــــاحتهم',
            left: 'بكل قرمٍ إلى لحم العدا قــــــــــــرم'
          },

          {
            right: 'يجر بحر خميسٍ فوق ســــــــــابحةٍ',
            left: 'يرمى بموجٍ من الأبطال ملتطـــــم'
          },

          {
            right: 'من كل منتدب لله محتســـــــــــــــب ٍ',
            left: 'يسطو بمستأصلٍ للكفر مصــــطلمِ'
          },

          {
            right: 'حتى غدت ملة الإسلام وهي بهــــم',
            left: 'من بعد غربتها موصولة الرحـــم'
          },

          {
            right: 'مكفولةً أبداً منهم بخــــــــــــــير أبٍ',
            left: 'وخير بعلٍ فلم تيتم ولم تئـــــــــــمِ'
          },

          {
            right: 'هم الجبال فسل عنهم مصادمهــــــم',
            left: 'ماذا رأى منهم في كل مصــــطدم'
          },

          {
            right: 'وسل حنيناً وسل بدراً وسل أُحـــــداً',
            left: 'فصول حتفٍ لهم أدهى من الوخم'
          },

          {
            right: 'المصدري البيض حمراً بعد ما وردت',
            left: 'من العدا كل مسودٍ من اللمـــــــمِ'
          },

          {
            right: 'والكاتبين بسمر الخط ما تركـــــــت',
            left: 'أقلامهم حرف جسمٍ غير منعجــمِ'
          },

          {
            right: 'شاكي السلاح لهم سيما تميزهــــــم',
            left: 'والورد يمتاز بالسيما عن الســلم'
          },

          {
            right: 'تهدى إليك رياح النصر نشرهـــــــم',
            left: 'فتحسب الزهر في الأكمام كل كــم'
          },

          {
            right: 'كأنهم في ظهور الخيل نبت ربـــــــاً',
            left: 'من شدة الحَزْمِ لا من شدة الحُزُم'
          },

          {
            right: 'طارت قلوب العدا من بأسهم فرقـــاً',
            left: 'فما تفرق بين الْبَهْمِ وألْبُهــــــــــُمِ '
          },

          {
            right: 'ومن تكن برسول الله نصــــــــــرته',
            left: 'إن تلقه الأسد فى آجامها تجــــــمِ'
          },

          {
            right: 'ولن ترى من وليٍ غير منتصـــــــرٍ',
            left: 'به ولا من عدوّ غير منفصــــــــم'
          },

          {
            right: 'أحل أمته في حرز ملتــــــــــــــه',
            left: 'كالليث حل مع الأشبال في أجـــــم'
          },

          {
            right: 'كم جدلت كلمات الله من جــــــــــدلٍ',
            left: 'فيه وكم خصم البرهان من خصـم'
          },

          {
            right: 'كفاك بالعلم في الأُمِّيِّ معجــــــــــزةً',
            left: 'في الجاهلية والتأديب في اليتـــــم'
          }
        ]
      },
      {
        id: '9',
        name: 'الفصل التاسع',
        desc: 'في التوسل بالنبي .',
        lines: [

          {
            right: 'خدمته بمديحٍ استقيل بـــــــــــــــــه',
            left: 'ذنوب عمرٍ مضى في الشعر والخدم'
          },

          {
            right: 'إذ قلداني ما تخشي عواقبـــــــــــــه',
            left: 'كأنَّني بهما هديٌ من النعـــــــــــــم'
          },

          {
            right: 'أطعت غي الصبا في الحالتين ومـــا',
            left: 'حصلت إلا على الآثام والنــــــــــدم'
          },

          {
            right: 'فياخسارة نفسٍ في تجارتهــــــــــــا',
            left: 'لم تشتر الدين بالدنيا ولم تســـــــم'
          },

          {
            right: 'ومن يبع آجلاً منه بعاجلــــــــــــــــهِ',
            left: 'يَبِنْ له الْغَبْنُ في بيعٍ وفي ســــــلمِ'
          },

          {
            right: 'إن آت ذنباً فما عهدي بمنتقـــــــض',
            left: 'من النبي ولا حبلي بمنصـــــــــرم'
          },

          {
            right: 'فإن لي ذمةً منه بتســــــــــــــــميتي',
            left: 'محمداً وهو أوفى الخلق بالذمـــم'
          },

          {
            right: 'إن لم يكن في معادي آخذاً بيــــــدى',
            left: 'فضلاً وإلا فقل يا زلة القــــــــــــدمِ'
          },

          {
            right: 'حاشاه أن يحرم الراجي مكارمــــــه',
            left: 'أو يرجع الجار منه غير محتــــرمِ'
          },

          {
            right: 'ومنذ ألزمت أفكاري مدائحــــــــــــه',
            left: 'وجدته لخلاصي خير ملتـــــــــــزم'
          },

          {
            right: 'ولن يفوت الغنى منه يداً تربــــــــت',
            left: 'إن الحيا ينبت الأزهار في الأكـــــم'
          },

          {
            right: 'ولم أرد زهرة الدنيا التي اقتطفــــت',
            left: 'يدا زهيرٍ بما أثنى على هــــــــــرمِ'
          }

        ]

      },
      {
        id: '10',
        name: 'الفصل العاشر',
        desc: 'في المناجاة وعرض الحاجات.',
        lines: [
          {
            right: 'يا أكرم الخلق ما لي من ألوذ بــــــه',
            left: 'سواك عند حلول الحادث العمـــــم'
          },

          {
            right: 'ولن يضيق رسول الله جاهك بــــــي',
            left: 'إذا الكريم تحلَّى باسم منتقــــــــــم'
          },

          {
            right: 'فإن من جودك الدنيا وضرتهـــــــــا',
            left: 'ومن علومك علم اللوح والقلـــــم'
          },

          {
            right: 'يا نفس لا تقنطي من زلةٍ عظمـــــت',
            left: 'إن الكبائر في الغفران كاللمـــــــــم'
          },

          {
            right: 'لعل رحمة ربي حين يقســـــــــــمها',
            left: 'تأتي على حسب العصيان في القسم'
          },

          {
            right: 'يارب واجعل رجائي غير منعكـــسٍ',
            left: 'لديك واجعل حسابي غير منخــــرم'
          },

          {
            right: 'والطف بعبدك في الدارين إن لـــــه',
            left: 'صبراً متى تدعه الأهوال ينهــــــزم'
          },

          {
            right: 'وائذن لسحب صلاةٍ منك دائمــــــــةٍ',
            left: 'على النبي بمنهلٍ ومنســـــــــــــجم'
          },

          {
            right: 'ما رنّحت عذبات البان ريح صـــــبا',
            left: 'وأطرب العيس حادي العيس بالنغم'
          },

          {
            right: 'ثم الرضا عن أبي بكرٍ وعن عمــــرٍ',
            left: 'وعن عليٍ وعن عثمان ذي الكــرم'
          },

          {
            right: 'والآلِ وَالصَّحْبِ ثمَّ التَّابعينَ فهُــمْ ',
            left: 'أهل التقى والنَّقا والحِلمِ والكـرمِ'
          },

          {
            right: 'يا ربِّ بالمصطفى بلِّغْ مقاصـدنا',
            left: 'واغفرْ لنا ما مضى يا واسع الكـرم'
          },

          {
            right: 'واغفر إلهى لكل المسلمين بمــا',
            left: 'يتلوه فى المسجد الأقصى وفى الحرم'
          },

          {
            right: 'بجاه من بيْتُهُ فى طيبة حــرمٌ',
            left: 'وإسمُهُ قسمٌ من أعظــم القســم'
          },

          {
            right: 'وهذه بردةُ المختار قد خُتمـتْ',
            left: 'والحمد لله في بدإٍ وفى ختــــم'
          },

          {
            right: 'أبياتها قدْ أتتْ ستينَ معْ مائـةٍ',
            left: 'فرّجْ بها كربنا يا واسع الكـــرم'
          }
        ]
      },
      {
        id: '11',
        name: 'القصيدة المحمدية',
        desc: 'اللهم صلي عليه وعلي اله.',
        lines: [
          {
            right: 'مُحَمَّدٌ أَشْرَفُ الأعْرَابِ والعَجَمِ ',
            left: ' مُحَمَّدٌ خَيْرُ مَنْ يَمْشِي عَلَى قَدَمِ '
          }, {
            right: 'ًمحمدٌ باسطُ المَعْرُوف جَامَعَهٌ  ',
            left: 'محمدٌ صاحبُ الإحسانِ والكرمِ'
          }, {
            right: 'محمدٌ تاجُ رُسْلِ الله قاطِبَةً ',
            left: 'محمدٌ صادقُ الأقوالِ والكلمٍِ'
          }, {
            right: 'محمدٌ ثابِتُ المِيثاقِ حافِظُهُ',
            left: ' محمدٌ طيبُ الأخلاقِ والشيمِ'
          }, {
            right: 'محمدٌ روِيَتْ بالنُّورِ طِينَتُهُ ',
            left: 'محمدٌ لم يزل نوراً من القدمِ'
          }, {
            right: 'محمدٌ حاكِمٌ بالْعَدْلِ ذُو شَرَفٍ',
            left: ' محمدٌ معدنُ الإنعامِ والحكمِ'
          }, {
            right: 'محمدٌ خَيْرُ خَلْقِ الله مِنْ مُضَرٍ ',
            left: 'محمَّدٌ خَيْرُ رُسْلِ الله كُلِّهِمِ'
          }, {
            right: 'محمدٌ دِينُهُ حَقَّ نَدِينٌ بِهِ ',
            left: 'محمدٌ مجملاً حقاً على علمِ'
          }, {
            right: 'محمدٌ ذكرهُ روحٌ لأنفسنا ',
            left: 'محمدٌ شكرهُ فرضٌ على الأممِ'
          }, {
            right: 'محمدٌ زينة ُ الدنيا وبهجتها',
            left: '  محمدٌ كاشفُ الغُمَّاتِ والظلمِ'
          }, {
            right: 'محمدٌ سيدٌ طابتْ مناقبهُ ',
            left: 'محمدٌ صاغهُ الرحمنُ بالنعمِ'
          }, {
            right: 'محمدٌ صفوة ُ الباري وخيرتهُ',
            left: ' محمد طاهرٌ من سائرُ التهمِ'
          },
          {
            right: 'محمد ضاحكٌ للضيفِ مكرمة ً ',
            left: 'محمَّدٌ جارُهُ والله لَمْ يُضَمِ'
          },
          {
            right: 'محمدٌ طابتِ الدنيا ببعثتهِ ',
            left: 'محمَّدٌ جاء بالآياتِ والحِكَمِ'
          }, {
            right: 'محمدٌ يومَ بعثِ الناسِ شافعنا',
            left: 'محمدٌ نورهُ الهادي من الظلمِ'
          }, {
            right: 'محمدٌ قائمٌ للهِ ذو هممٍ ',
            left: 'محمَّدٌ خاتِمٌ لِلرُّسُلِ كُلِّهمِ'
          }
        ]
      }
    ];
  }
  openChapter(chapter, index) {
    this.prefixer = 0;
    for(var i =0; i < index; i++){
      this.prefixer += this.chapters[i].lines.length;
    }
    this.navCtrl.push(ChapterDetails, {
      chapter: chapter,
      prefixer: this.prefixer
    })

  }

}
