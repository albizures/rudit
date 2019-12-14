import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злодействовать: PerfectVerb = {
  name: Word('злодействовать', 4),
  singular1stPerson: Word('злодействую', 4),
  singular2ndPerson: Word('злодействуешь', 4),
  singular3rdPerson: Word('злодействует', 4),
  plural1stPerson: Word('злодействуем', 4),
  plural2ndPerson: Word('злодействуете', 4),
  plural3rdPerson: Word('злодействуют', 4),
  masculinePast: Word('злодействовал', 4),
  femininePast: Word('злодействовала', 4),
  neuterPast: Word('злодействовало', 4),
  pluralPast: Word('злодействовали', 4),
  imperativeInformal: Word('злодействуй', 4),
  imperativeFormal: Word('злодействуйте', 4),
  imperfect: [],
};

perfectVerbs.set(злодействовать.name.text, злодействовать);

export { злодействовать };