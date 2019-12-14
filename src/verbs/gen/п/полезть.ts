import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полезть: PerfectVerb = {
  name: Word('полезть', 3),
  singular1stPerson: Word('полезу', 3),
  singular2ndPerson: Word('полезешь', 3),
  singular3rdPerson: Word('полезет', 3),
  plural1stPerson: Word('полезем', 3),
  plural2ndPerson: Word('полезете', 3),
  plural3rdPerson: Word('полезут', 3),
  masculinePast: Word('полез', 3),
  femininePast: Word('полезла', 3),
  neuterPast: Word('полезло', 3),
  pluralPast: Word('полезли', 3),
  imperativeInformal: Word('полезь', 3),
  imperativeFormal: Word('полезьте', 3),
  imperfect: ['лезть','лазить'],
};

perfectVerbs.set(полезть.name.text, полезть);

export { полезть };