import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const царствовать: PerfectVerb = {
  name: Word('царствовать', 1),
  singular1stPerson: Word('царствую', 1),
  singular2ndPerson: Word('царствуешь', 1),
  singular3rdPerson: Word('царствует', 1),
  plural1stPerson: Word('царствуем', 1),
  plural2ndPerson: Word('царствуете', 1),
  plural3rdPerson: Word('царствуют', 1),
  masculinePast: Word('царствовал', 1),
  femininePast: Word('царствовала', 1),
  neuterPast: Word('царствовало', 1),
  pluralPast: Word('царствовали', 1),
  imperativeInformal: Word('царствуй', 1),
  imperativeFormal: Word('царствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(царствовать.name.text, царствовать);

export { царствовать };