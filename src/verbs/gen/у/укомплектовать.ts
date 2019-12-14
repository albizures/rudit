import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укомплектовать: PerfectVerb = {
  name: Word('укомплектовать', 11),
  singular1stPerson: Word('укомплектую', 9),
  singular2ndPerson: Word('укомплектуешь', 9),
  singular3rdPerson: Word('укомплектует', 9),
  plural1stPerson: Word('укомплектуем', 9),
  plural2ndPerson: Word('укомплектуете', 9),
  plural3rdPerson: Word('укомплектуют', 9),
  masculinePast: Word('укомплектовал', 11),
  femininePast: Word('укомплектовала', 11),
  neuterPast: Word('укомплектовало', 11),
  pluralPast: Word('укомплектовали', 11),
  imperativeInformal: Word('укомплектуй', 9),
  imperativeFormal: Word('укомплектуйте', 9),
  imperfect: [],
};

perfectVerbs.set(укомплектовать.name.text, укомплектовать);

export { укомплектовать };