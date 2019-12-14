import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захрустеть: PerfectVerb = {
  name: Word('захрустеть', 7),
  singular1stPerson: Word('захрущу', 6),
  singular2ndPerson: Word('захрустишь', 7),
  singular3rdPerson: Word('захрустит', 7),
  plural1stPerson: Word('захрустим', 7),
  plural2ndPerson: Word('захрустите', 7),
  plural3rdPerson: Word('захрустят', 7),
  masculinePast: Word('захрустел', 7),
  femininePast: Word('захрустела', 7),
  neuterPast: Word('захрустело', 7),
  pluralPast: Word('захрустели', 7),
  imperativeInformal: Word('захрусти', 7),
  imperativeFormal: Word('захрустите', 7),
  imperfect: [],
};

perfectVerbs.set(захрустеть.name.text, захрустеть);

export { захрустеть };