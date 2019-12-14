import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вертеть: PerfectVerb = {
  name: Word('вертеть', 4),
  singular1stPerson: Word('верчу', 4),
  singular2ndPerson: Word('вертишь', 1),
  singular3rdPerson: Word('вертит', 1),
  plural1stPerson: Word('вертим', 1),
  plural2ndPerson: Word('вертите', 1),
  plural3rdPerson: Word('вертят', 1),
  masculinePast: Word('вертел', 4),
  femininePast: Word('вертела', 4),
  neuterPast: Word('вертело', 4),
  pluralPast: Word('вертели', 4),
  imperativeInformal: Word('верти', 4),
  imperativeFormal: Word('вертите', 4),
  imperfect: ['повертеть'],
};

perfectVerbs.set(вертеть.name.text, вертеть);

export { вертеть };