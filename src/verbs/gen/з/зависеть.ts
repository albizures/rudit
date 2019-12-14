import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зависеть: PerfectVerb = {
  name: Word('зависеть', 3),
  singular1stPerson: Word('завишу', 3),
  singular2ndPerson: Word('зависишь', 3),
  singular3rdPerson: Word('зависит', 3),
  plural1stPerson: Word('зависим', 3),
  plural2ndPerson: Word('зависите', 3),
  plural3rdPerson: Word('зависят', 3),
  masculinePast: Word('зависел', 3),
  femininePast: Word('зависела', 3),
  neuterPast: Word('зависело', 3),
  pluralPast: Word('зависели', 3),
  imperativeInformal: Word('завись', 3),
  imperativeFormal: Word('зависьте', 3),
  imperfect: [],
};

perfectVerbs.set(зависеть.name.text, зависеть);

export { зависеть };