import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слезть: PerfectVerb = {
  name: Word('слезть', 2),
  singular1stPerson: Word('слезу', 2),
  singular2ndPerson: Word('слезешь', 2),
  singular3rdPerson: Word('слезет', 2),
  plural1stPerson: Word('слезем', 2),
  plural2ndPerson: Word('слезете', 2),
  plural3rdPerson: Word('слезут', 2),
  masculinePast: Word('слез', 2),
  femininePast: Word('слезла', 2),
  neuterPast: Word('слезло', 2),
  pluralPast: Word('слезли', 2),
  imperativeInformal: Word('слезь', 2),
  imperativeFormal: Word('слезьте', 2),
  imperfect: [],
};

perfectVerbs.set(слезть.name.text, слезть);

export { слезть };