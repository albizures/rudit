import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лицеприятствовать: PerfectVerb = {
  name: Word('лицеприятствовать', 7),
  singular1stPerson: Word('лицеприятствую', 7),
  singular2ndPerson: Word('лицеприятствуешь', 7),
  singular3rdPerson: Word('лицеприятствует', 7),
  plural1stPerson: Word('лицеприятствуем', 7),
  plural2ndPerson: Word('лицеприятствуете', 7),
  plural3rdPerson: Word('лицеприятствуют', 7),
  masculinePast: Word('лицеприятствовал', 7),
  femininePast: Word('лицеприятствовала', 7),
  neuterPast: Word('лицеприятствовало', 7),
  pluralPast: Word('лицеприятствовали', 7),
  imperativeInformal: Word('лицеприятствуй', 7),
  imperativeFormal: Word('лицеприятствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(лицеприятствовать.name.text, лицеприятствовать);

export { лицеприятствовать };