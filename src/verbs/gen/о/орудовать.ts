import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const орудовать: PerfectVerb = {
  name: Word('орудовать', 2),
  singular1stPerson: Word('орудую', 2),
  singular2ndPerson: Word('орудуешь', 2),
  singular3rdPerson: Word('орудует', 2),
  plural1stPerson: Word('орудуем', 2),
  plural2ndPerson: Word('орудуете', 2),
  plural3rdPerson: Word('орудуют', 2),
  masculinePast: Word('орудовал', 2),
  femininePast: Word('орудовала', 2),
  neuterPast: Word('орудовало', 2),
  pluralPast: Word('орудовали', 2),
  imperativeInformal: Word('орудуй', 2),
  imperativeFormal: Word('орудуйте', 2),
  imperfect: [],
};

perfectVerbs.set(орудовать.name.text, орудовать);

export { орудовать };