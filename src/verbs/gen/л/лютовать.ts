import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лютовать: PerfectVerb = {
  name: Word('лютовать', 5),
  singular1stPerson: Word('лютую', 3),
  singular2ndPerson: Word('лютуешь', 3),
  singular3rdPerson: Word('лютует', 3),
  plural1stPerson: Word('лютуем', 3),
  plural2ndPerson: Word('лютуете', 3),
  plural3rdPerson: Word('лютуют', 3),
  masculinePast: Word('лютовал', 5),
  femininePast: Word('лютовала', 5),
  neuterPast: Word('лютовало', 5),
  pluralPast: Word('лютовали', 5),
  imperativeInformal: Word('лютуй', 3),
  imperativeFormal: Word('лютуйте', 3),
  imperfect: [],
};

perfectVerbs.set(лютовать.name.text, лютовать);

export { лютовать };