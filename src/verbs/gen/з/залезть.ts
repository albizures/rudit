import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залезть: PerfectVerb = {
  name: Word('залезть', 3),
  singular1stPerson: Word('залезу', 3),
  singular2ndPerson: Word('залезешь', 3),
  singular3rdPerson: Word('залезет', 3),
  plural1stPerson: Word('залезем', 3),
  plural2ndPerson: Word('залезете', 3),
  plural3rdPerson: Word('залезут', 3),
  masculinePast: Word('залез', 3),
  femininePast: Word('залезла', 3),
  neuterPast: Word('залезло', 3),
  pluralPast: Word('залезли', 3),
  imperativeInformal: Word('залезь', 3),
  imperativeFormal: Word('залезьте', 3),
  imperfect: ['лезть','залезать'],
};

perfectVerbs.set(залезть.name.text, залезть);

export { залезть };