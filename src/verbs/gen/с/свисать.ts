import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свисать: PerfectVerb = {
  name: Word('свисать', 4),
  singular1stPerson: Word('свисаю', 4),
  singular2ndPerson: Word('свисаешь', 4),
  singular3rdPerson: Word('свисает', 4),
  plural1stPerson: Word('свисаем', 4),
  plural2ndPerson: Word('свисаете', 4),
  plural3rdPerson: Word('свисают', 4),
  masculinePast: Word('свисал', 4),
  femininePast: Word('свисала', 4),
  neuterPast: Word('свисало', 4),
  pluralPast: Word('свисали', 4),
  imperativeInformal: Word('свисай', 4),
  imperativeFormal: Word('свисайте', 4),
  imperfect: [],
};

perfectVerbs.set(свисать.name.text, свисать);

export { свисать };