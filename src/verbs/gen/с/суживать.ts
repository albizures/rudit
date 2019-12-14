import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const суживать: PerfectVerb = {
  name: Word('суживать', 1),
  singular1stPerson: Word('суживаю', 1),
  singular2ndPerson: Word('суживаешь', 1),
  singular3rdPerson: Word('суживает', 1),
  plural1stPerson: Word('суживаем', 1),
  plural2ndPerson: Word('суживаете', 1),
  plural3rdPerson: Word('суживают', 1),
  masculinePast: Word('суживал', 1),
  femininePast: Word('суживала', 1),
  neuterPast: Word('суживало', 1),
  pluralPast: Word('суживали', 1),
  imperativeInformal: Word('суживай', 1),
  imperativeFormal: Word('суживайте', 1),
  imperfect: [],
};

perfectVerbs.set(суживать.name.text, суживать);

export { суживать };