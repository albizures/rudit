import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навести: PerfectVerb = {
  name: Word('навести', 6),
  singular1stPerson: Word('наведу', 5),
  singular2ndPerson: Word('наведёшь', 1),
  singular3rdPerson: Word('наведёт', 1),
  plural1stPerson: Word('наведём', 1),
  plural2ndPerson: Word('наведёте', 1),
  plural3rdPerson: Word('наведут', 5),
  masculinePast: Word('навёл', 1),
  femininePast: Word('навела', 5),
  neuterPast: Word('навело', 5),
  pluralPast: Word('навели', 5),
  imperativeInformal: Word('наведи', 5),
  imperativeFormal: Word('наведите', 5),
  imperfect: ['наводить'],
};

perfectVerbs.set(навести.name.text, навести);

export { навести };