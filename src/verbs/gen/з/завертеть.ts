import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завертеть: PerfectVerb = {
  name: Word('завертеть', 6),
  singular1stPerson: Word('заверчу', 6),
  singular2ndPerson: Word('завертишь', 3),
  singular3rdPerson: Word('завертит', 3),
  plural1stPerson: Word('завертим', 3),
  plural2ndPerson: Word('завертите', 3),
  plural3rdPerson: Word('завертят', 3),
  masculinePast: Word('завертел', 6),
  femininePast: Word('завертела', 6),
  neuterPast: Word('завертело', 6),
  pluralPast: Word('завертели', 6),
  imperativeInformal: Word('заверти', 6),
  imperativeFormal: Word('завертите', 6),
  imperfect: [],
};

perfectVerbs.set(завертеть.name.text, завертеть);

export { завертеть };