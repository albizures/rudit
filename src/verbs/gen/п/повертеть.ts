import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повертеть: PerfectVerb = {
  name: Word('повертеть', 6),
  singular1stPerson: Word('поверчу', 6),
  singular2ndPerson: Word('повертишь', 3),
  singular3rdPerson: Word('повертит', 3),
  plural1stPerson: Word('повертим', 3),
  plural2ndPerson: Word('повертите', 3),
  plural3rdPerson: Word('повертят', 3),
  masculinePast: Word('повертел', 6),
  femininePast: Word('повертела', 6),
  neuterPast: Word('повертело', 6),
  pluralPast: Word('повертели', 6),
  imperativeInformal: Word('поверти', 6),
  imperativeFormal: Word('повертите', 6),
  imperfect: [],
};

perfectVerbs.set(повертеть.name.text, повертеть);

export { повертеть };