import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улучать: PerfectVerb = {
  name: Word('улучать', 4),
  singular1stPerson: Word('улучаю', 4),
  singular2ndPerson: Word('улучаешь', 4),
  singular3rdPerson: Word('улучает', 4),
  plural1stPerson: Word('улучаем', 4),
  plural2ndPerson: Word('улучаете', 4),
  plural3rdPerson: Word('улучают', 4),
  masculinePast: Word('улучал', 4),
  femininePast: Word('улучала', 4),
  neuterPast: Word('улучало', 4),
  pluralPast: Word('улучали', 4),
  imperativeInformal: Word('улучай', 4),
  imperativeFormal: Word('улучайте', 4),
  imperfect: [],
};

perfectVerbs.set(улучать.name.text, улучать);

export { улучать };