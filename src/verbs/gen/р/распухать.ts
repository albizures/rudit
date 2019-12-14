import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распухать: PerfectVerb = {
  name: Word('распухать', 6),
  singular1stPerson: Word('распухаю', 6),
  singular2ndPerson: Word('распухаешь', 6),
  singular3rdPerson: Word('распухает', 6),
  plural1stPerson: Word('распухаем', 6),
  plural2ndPerson: Word('распухаете', 6),
  plural3rdPerson: Word('распухают', 6),
  masculinePast: Word('распухал', 6),
  femininePast: Word('распухала', 6),
  neuterPast: Word('распухало', 6),
  pluralPast: Word('распухали', 6),
  imperativeInformal: Word('распухай', 6),
  imperativeFormal: Word('распухайте', 6),
  imperfect: [],
};

perfectVerbs.set(распухать.name.text, распухать);

export { распухать };