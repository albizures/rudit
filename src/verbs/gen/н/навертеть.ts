import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навертеть: PerfectVerb = {
  name: Word('навертеть', 6),
  singular1stPerson: Word('наверчу', 6),
  singular2ndPerson: Word('навертишь', 3),
  singular3rdPerson: Word('навертит', 3),
  plural1stPerson: Word('навертим', 3),
  plural2ndPerson: Word('навертите', 3),
  plural3rdPerson: Word('навертят', 3),
  masculinePast: Word('навертел', 6),
  femininePast: Word('навертела', 6),
  neuterPast: Word('навертело', 6),
  pluralPast: Word('навертели', 6),
  imperativeInformal: Word('наверти', 6),
  imperativeFormal: Word('навертите', 6),
  imperfect: [],
};

perfectVerbs.set(навертеть.name.text, навертеть);

export { навертеть };