import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспособствовать: PerfectVerb = {
  name: Word('поспособствовать', 6),
  singular1stPerson: Word('поспособствую', 6),
  singular2ndPerson: Word('поспособствуешь', 6),
  singular3rdPerson: Word('поспособствует', 6),
  plural1stPerson: Word('поспособствуем', 6),
  plural2ndPerson: Word('поспособствуете', 6),
  plural3rdPerson: Word('поспособствуют', 6),
  masculinePast: Word('поспособствовал', 6),
  femininePast: Word('поспособствовала', 6),
  neuterPast: Word('поспособствовало', 6),
  pluralPast: Word('поспособствовали', 6),
  imperativeInformal: Word('поспособствуй', 6),
  imperativeFormal: Word('поспособствуйте', 6),
  imperfect: ['способствовать'],
};

perfectVerbs.set(поспособствовать.name.text, поспособствовать);

export { поспособствовать };