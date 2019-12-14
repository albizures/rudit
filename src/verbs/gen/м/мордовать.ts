import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мордовать: PerfectVerb = {
  name: Word('мордовать', 6),
  singular1stPerson: Word('мордую', 4),
  singular2ndPerson: Word('мордуешь', 4),
  singular3rdPerson: Word('мордует', 4),
  plural1stPerson: Word('мордуем', 4),
  plural2ndPerson: Word('мордуете', 4),
  plural3rdPerson: Word('мордуют', 4),
  masculinePast: Word('мордовал', 6),
  femininePast: Word('мордовала', 6),
  neuterPast: Word('мордовало', 6),
  pluralPast: Word('мордовали', 6),
  imperativeInformal: Word('мордуй', 4),
  imperativeFormal: Word('мордуйте', 4),
  imperfect: [],
};

perfectVerbs.set(мордовать.name.text, мордовать);

export { мордовать };