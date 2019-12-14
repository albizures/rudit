import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздействовать: PerfectVerb = {
  name: Word('воздействовать', 4),
  singular1stPerson: Word('воздействую', 4),
  singular2ndPerson: Word('воздействуешь', 4),
  singular3rdPerson: Word('воздействует', 4),
  plural1stPerson: Word('воздействуем', 4),
  plural2ndPerson: Word('воздействуете', 4),
  plural3rdPerson: Word('воздействуют', 4),
  masculinePast: Word('воздействовал', 4),
  femininePast: Word('воздействовала', 4),
  neuterPast: Word('воздействовало', 4),
  pluralPast: Word('воздействовали', 4),
  imperativeInformal: Word('воздействуй', 4),
  imperativeFormal: Word('воздействуйте', 4),
  imperfect: [],
};

perfectVerbs.set(воздействовать.name.text, воздействовать);

export { воздействовать };