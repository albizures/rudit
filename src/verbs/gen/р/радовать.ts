import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const радовать: PerfectVerb = {
  name: Word('радовать', 1),
  singular1stPerson: Word('радую', 1),
  singular2ndPerson: Word('радуешь', 1),
  singular3rdPerson: Word('радует', 1),
  plural1stPerson: Word('радуем', 1),
  plural2ndPerson: Word('радуете', 1),
  plural3rdPerson: Word('радуют', 1),
  masculinePast: Word('радовал', 1),
  femininePast: Word('радовала', 1),
  neuterPast: Word('радовало', 1),
  pluralPast: Word('радовали', 1),
  imperativeInformal: Word('радуй', 1),
  imperativeFormal: Word('радуйте', 1),
  imperfect: ['обрадовать','порадовать'],
};

perfectVerbs.set(радовать.name.text, радовать);

export { радовать };