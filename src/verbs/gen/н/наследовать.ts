import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наследовать: PerfectVerb = {
  name: Word('наследовать', 4),
  singular1stPerson: Word('наследую', 4),
  singular2ndPerson: Word('наследуешь', 4),
  singular3rdPerson: Word('наследует', 4),
  plural1stPerson: Word('наследуем', 4),
  plural2ndPerson: Word('наследуете', 4),
  plural3rdPerson: Word('наследуют', 4),
  masculinePast: Word('наследовал', 4),
  femininePast: Word('наследовала', 4),
  neuterPast: Word('наследовало', 4),
  pluralPast: Word('наследовали', 4),
  imperativeInformal: Word('наследуй', 4),
  imperativeFormal: Word('наследуйте', 4),
  imperfect: ['унаследовать'],
};

perfectVerbs.set(наследовать.name.text, наследовать);

export { наследовать };