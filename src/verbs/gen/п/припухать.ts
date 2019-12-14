import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припухать: PerfectVerb = {
  name: Word('припухать', 6),
  singular1stPerson: Word('припухаю', 6),
  singular2ndPerson: Word('припухаешь', 6),
  singular3rdPerson: Word('припухает', 6),
  plural1stPerson: Word('припухаем', 6),
  plural2ndPerson: Word('припухаете', 6),
  plural3rdPerson: Word('припухают', 6),
  masculinePast: Word('припухал', 6),
  femininePast: Word('припухала', 6),
  neuterPast: Word('припухало', 6),
  pluralPast: Word('припухали', 6),
  imperativeInformal: Word('припухай', 6),
  imperativeFormal: Word('припухайте', 6),
  imperfect: [],
};

perfectVerbs.set(припухать.name.text, припухать);

export { припухать };