import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хрустеть: PerfectVerb = {
  name: Word('хрустеть', 5),
  singular1stPerson: Word('хрущу', 4),
  singular2ndPerson: Word('хрустишь', 5),
  singular3rdPerson: Word('хрустит', 5),
  plural1stPerson: Word('хрустим', 5),
  plural2ndPerson: Word('хрустите', 5),
  plural3rdPerson: Word('хрустят', 5),
  masculinePast: Word('хрустел', 5),
  femininePast: Word('хрустела', 5),
  neuterPast: Word('хрустело', 5),
  pluralPast: Word('хрустели', 5),
  imperativeInformal: Word('хрусти', 5),
  imperativeFormal: Word('хрустите', 5),
  imperfect: [],
};

perfectVerbs.set(хрустеть.name.text, хрустеть);

export { хрустеть };