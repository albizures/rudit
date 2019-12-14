import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брызгать: PerfectVerb = {
  name: Word('брызгать', 2),
  singular1stPerson: Word('брызжу', 2),
  singular2ndPerson: Word('брызжешь', 2),
  singular3rdPerson: Word('брызжет', 2),
  plural1stPerson: Word('брызжем', 2),
  plural2ndPerson: Word('брызжете', 2),
  plural3rdPerson: Word('брызжут', 2),
  masculinePast: Word('брызгал', 2),
  femininePast: Word('брызгала', 2),
  neuterPast: Word('брызгало', 2),
  pluralPast: Word('брызгали', 2),
  imperativeInformal: Word('брызжи', 2),
  imperativeFormal: Word('брызжите', 2),
  imperfect: [],
};

perfectVerbs.set(брызгать.name.text, брызгать);

export { брызгать };