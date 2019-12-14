import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злорадствовать: PerfectVerb = {
  name: Word('злорадствовать', 4),
  singular1stPerson: Word('злорадствую', 4),
  singular2ndPerson: Word('злорадствуешь', 4),
  singular3rdPerson: Word('злорадствует', 4),
  plural1stPerson: Word('злорадствуем', 4),
  plural2ndPerson: Word('злорадствуете', 4),
  plural3rdPerson: Word('злорадствуют', 4),
  masculinePast: Word('злорадствовал', 4),
  femininePast: Word('злорадствовала', 4),
  neuterPast: Word('злорадствовало', 4),
  pluralPast: Word('злорадствовали', 4),
  imperativeInformal: Word('злорадствуй', 4),
  imperativeFormal: Word('злорадствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(злорадствовать.name.text, злорадствовать);

export { злорадствовать };