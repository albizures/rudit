import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извести: PerfectVerb = {
  name: Word('извести', 6),
  singular1stPerson: Word('изведу', 5),
  singular2ndPerson: Word('изведёшь', 3),
  singular3rdPerson: Word('изведёт', 3),
  plural1stPerson: Word('изведём', 3),
  plural2ndPerson: Word('изведёте', 3),
  plural3rdPerson: Word('изведут', 5),
  masculinePast: Word('извёл', 0),
  femininePast: Word('извела', 5),
  neuterPast: Word('извело', 5),
  pluralPast: Word('извели', 5),
  imperativeInformal: Word('изведи', 5),
  imperativeFormal: Word('изведите', 5),
  imperfect: ['изводить'],
};

perfectVerbs.set(извести.name.text, извести);

export { извести };