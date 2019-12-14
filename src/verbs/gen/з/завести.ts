import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завести: PerfectVerb = {
  name: Word('завести', 6),
  singular1stPerson: Word('заведу', 1),
  singular2ndPerson: Word('заведёшь', 1),
  singular3rdPerson: Word('заведёт', 1),
  plural1stPerson: Word('заведём', 1),
  plural2ndPerson: Word('заведёте', 1),
  plural3rdPerson: Word('заведут', 1),
  masculinePast: Word('завёл', 1),
  femininePast: Word('завела', 1),
  neuterPast: Word('завело', 1),
  pluralPast: Word('завели', 1),
  imperativeInformal: Word('заведи', 1),
  imperativeFormal: Word('заведите', 1),
  imperfect: ['заводить'],
};

perfectVerbs.set(завести.name.text, завести);

export { завести };