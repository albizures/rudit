import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлезть: PerfectVerb = {
  name: Word('подлезть', 4),
  singular1stPerson: Word('подлезу', 4),
  singular2ndPerson: Word('подлезешь', 4),
  singular3rdPerson: Word('подлезет', 4),
  plural1stPerson: Word('подлезем', 4),
  plural2ndPerson: Word('подлезете', 4),
  plural3rdPerson: Word('подлезут', 4),
  masculinePast: Word('подлез', 4),
  femininePast: Word('подлезла', 4),
  neuterPast: Word('подлезло', 4),
  pluralPast: Word('подлезли', 4),
  imperativeInformal: Word('подлезь', 4),
  imperativeFormal: Word('подлезьте', 4),
  imperfect: [],
};

perfectVerbs.set(подлезть.name.text, подлезть);

export { подлезть };