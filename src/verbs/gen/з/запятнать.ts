import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запятнать: PerfectVerb = {
  name: Word('запятнать', 6),
  singular1stPerson: Word('запятнаю', 6),
  singular2ndPerson: Word('запятнаешь', 6),
  singular3rdPerson: Word('запятнает', 6),
  plural1stPerson: Word('запятнаем', 6),
  plural2ndPerson: Word('запятнаете', 6),
  plural3rdPerson: Word('запятнают', 6),
  masculinePast: Word('запятнал', 6),
  femininePast: Word('запятнала', 6),
  neuterPast: Word('запятнало', 6),
  pluralPast: Word('запятнали', 6),
  imperativeInformal: Word('запятнай', 6),
  imperativeFormal: Word('запятнайте', 6),
  imperfect: [],
};

perfectVerbs.set(запятнать.name.text, запятнать);

export { запятнать };