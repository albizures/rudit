import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увести: PerfectVerb = {
  name: Word('увести', 5),
  singular1stPerson: Word('уведу', 4),
  singular2ndPerson: Word('уведёшь', 4),
  singular3rdPerson: Word('уведёт', 4),
  plural1stPerson: Word('уведём', 4),
  plural2ndPerson: Word('уведёте', 4),
  plural3rdPerson: Word('уведут', 4),
  masculinePast: Word('увёл', 2),
  femininePast: Word('увела', 4),
  neuterPast: Word('увело', 4),
  pluralPast: Word('увели', 4),
  imperativeInformal: Word('уведи', 4),
  imperativeFormal: Word('уведите', 4),
  imperfect: ['уводить'],
};

perfectVerbs.set(увести.name.text, увести);

export { увести };