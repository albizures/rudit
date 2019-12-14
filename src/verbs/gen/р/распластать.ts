import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распластать: PerfectVerb = {
  name: Word('распластать', 8),
  singular1stPerson: Word('распластаю', 8),
  singular2ndPerson: Word('распластаешь', 8),
  singular3rdPerson: Word('распластает', 8),
  plural1stPerson: Word('распластаем', 8),
  plural2ndPerson: Word('распластаете', 8),
  plural3rdPerson: Word('распластают', 8),
  masculinePast: Word('распластал', 8),
  femininePast: Word('распластала', 8),
  neuterPast: Word('распластало', 8),
  pluralPast: Word('распластали', 8),
  imperativeInformal: Word('распластай', 8),
  imperativeFormal: Word('распластайте', 8),
  imperfect: [],
};

perfectVerbs.set(распластать.name.text, распластать);

export { распластать };