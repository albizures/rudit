import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const располосовать: PerfectVerb = {
  name: Word('располосовать', 10),
  singular1stPerson: Word('располосую', 8),
  singular2ndPerson: Word('располосуешь', 8),
  singular3rdPerson: Word('располосует', 8),
  plural1stPerson: Word('располосуем', 8),
  plural2ndPerson: Word('располосуете', 8),
  plural3rdPerson: Word('располосуют', 8),
  masculinePast: Word('располосовал', 10),
  femininePast: Word('располосовала', 10),
  neuterPast: Word('располосовало', 10),
  pluralPast: Word('располосовали', 10),
  imperativeInformal: Word('располосуй', 8),
  imperativeFormal: Word('располосуйте', 8),
  imperfect: [],
};

perfectVerbs.set(располосовать.name.text, располосовать);

export { располосовать };