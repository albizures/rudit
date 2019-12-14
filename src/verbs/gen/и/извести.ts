import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извести: PerfectVerb = {
  name: Word('извести', 6),
  singular1stPerson: Word('изведу', 5),
  singular2ndPerson: Word('изведёшь', 5),
  singular3rdPerson: Word('изведёт', 5),
  plural1stPerson: Word('изведём', 5),
  plural2ndPerson: Word('изведёте', 5),
  plural3rdPerson: Word('изведут', 5),
  masculinePast: Word('извёл', 3),
  femininePast: Word('извела', 5),
  neuterPast: Word('извело', 5),
  pluralPast: Word('извели', 5),
  imperativeInformal: Word('изведи', 5),
  imperativeFormal: Word('изведите', 5),
  imperfect: ['изводить'],
};

perfectVerbs.set(извести.name.text, извести);

export { извести };