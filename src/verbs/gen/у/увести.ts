import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увести: PerfectVerb = {
  name: Word('увести', 5),
  singular1stPerson: Word('уведу', 4),
  singular2ndPerson: Word('уведёшь', 2),
  singular3rdPerson: Word('уведёт', 2),
  plural1stPerson: Word('уведём', 2),
  plural2ndPerson: Word('уведёте', 2),
  plural3rdPerson: Word('уведут', 4),
  masculinePast: Word('увёл', 0),
  femininePast: Word('увела', 4),
  neuterPast: Word('увело', 4),
  pluralPast: Word('увели', 4),
  imperativeInformal: Word('уведи', 4),
  imperativeFormal: Word('уведите', 4),
  imperfect: ['уводить'],
};

perfectVerbs.set(увести.name.text, увести);

export { увести };