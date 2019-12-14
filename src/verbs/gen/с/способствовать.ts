import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const способствовать: PerfectVerb = {
  name: Word('способствовать', 4),
  singular1stPerson: Word('способствую', 4),
  singular2ndPerson: Word('способствуешь', 4),
  singular3rdPerson: Word('способствует', 4),
  plural1stPerson: Word('способствуем', 4),
  plural2ndPerson: Word('способствуете', 4),
  plural3rdPerson: Word('способствуют', 4),
  masculinePast: Word('способствовал', 4),
  femininePast: Word('способствовала', 4),
  neuterPast: Word('способствовало', 4),
  pluralPast: Word('способствовали', 4),
  imperativeInformal: Word('способствуй', 4),
  imperativeFormal: Word('способствуйте', 4),
  imperfect: ['поспособствовать'],
};

perfectVerbs.set(способствовать.name.text, способствовать);

export { способствовать };