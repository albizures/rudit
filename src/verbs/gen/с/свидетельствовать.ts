import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свидетельствовать: PerfectVerb = {
  name: Word('свидетельствовать', 4),
  singular1stPerson: Word('свидетельствую', 4),
  singular2ndPerson: Word('свидетельствуешь', 4),
  singular3rdPerson: Word('свидетельствует', 4),
  plural1stPerson: Word('свидетельствуем', 4),
  plural2ndPerson: Word('свидетельствуете', 4),
  plural3rdPerson: Word('свидетельствуют', 4),
  masculinePast: Word('свидетельствовал', 4),
  femininePast: Word('свидетельствовала', 4),
  neuterPast: Word('свидетельствовало', 4),
  pluralPast: Word('свидетельствовали', 4),
  imperativeInformal: Word('свидетельствуй', 4),
  imperativeFormal: Word('свидетельствуйте', 4),
  imperfect: ['освидетельствовать','засвидетельствовать'],
};

perfectVerbs.set(свидетельствовать.name.text, свидетельствовать);

export { свидетельствовать };