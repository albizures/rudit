import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завести: PerfectVerb = {
  name: Word('завести', 6),
  singular1stPerson: Word('заведу', 1),
  singular2ndPerson: Word('заведёшь', 5),
  singular3rdPerson: Word('заведёт', 5),
  plural1stPerson: Word('заведём', 5),
  plural2ndPerson: Word('заведёте', 5),
  plural3rdPerson: Word('заведут', 1),
  masculinePast: Word('завёл', 3),
  femininePast: Word('завела', 1),
  neuterPast: Word('завело', 1),
  pluralPast: Word('завели', 1),
  imperativeInformal: Word('заведи', 1),
  imperativeFormal: Word('заведите', 1),
  imperfect: ['заводить'],
};

perfectVerbs.set(завести.name.text, завести);

export { завести };