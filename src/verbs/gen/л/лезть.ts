import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лезть: PerfectVerb = {
  name: Word('лезть', 1),
  singular1stPerson: Word('лезу', 1),
  singular2ndPerson: Word('лезешь', 1),
  singular3rdPerson: Word('лезет', 1),
  plural1stPerson: Word('лезем', 1),
  plural2ndPerson: Word('лезете', 1),
  plural3rdPerson: Word('лезут', 1),
  masculinePast: Word('лез', 1),
  femininePast: Word('лезла', 1),
  neuterPast: Word('лезло', 1),
  pluralPast: Word('лезли', 1),
  imperativeInformal: Word('лезь', 1),
  imperativeFormal: Word('лезьте', 1),
  imperfect: ['залезть','влезть','полезть'],
};

perfectVerbs.set(лезть.name.text, лезть);

export { лезть };