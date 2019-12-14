import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полюбопытствовать: PerfectVerb = {
  name: Word('полюбопытствовать', 7),
  singular1stPerson: Word('полюбопытствую', 7),
  singular2ndPerson: Word('полюбопытствуешь', 7),
  singular3rdPerson: Word('полюбопытствует', 7),
  plural1stPerson: Word('полюбопытствуем', 7),
  plural2ndPerson: Word('полюбопытствуете', 7),
  plural3rdPerson: Word('полюбопытствуют', 7),
  masculinePast: Word('полюбопытствовал', 7),
  femininePast: Word('полюбопытствовала', 7),
  neuterPast: Word('полюбопытствовало', 7),
  pluralPast: Word('полюбопытствовали', 7),
  imperativeInformal: Word('полюбопытствуй', 7),
  imperativeFormal: Word('полюбопытствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(полюбопытствовать.name.text, полюбопытствовать);

export { полюбопытствовать };