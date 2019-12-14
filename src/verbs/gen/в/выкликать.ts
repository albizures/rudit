import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкликать: PerfectVerb = {
  name: Word('выкликать', 1),
  singular1stPerson: Word('выкличу', 1),
  singular2ndPerson: Word('выкличешь', 1),
  singular3rdPerson: Word('выкличет', 1),
  plural1stPerson: Word('выкличем', 1),
  plural2ndPerson: Word('выкличете', 1),
  plural3rdPerson: Word('выкличут', 1),
  masculinePast: Word('выкликал', 1),
  femininePast: Word('выкликала', 1),
  neuterPast: Word('выкликало', 1),
  pluralPast: Word('выкликали', 1),
  imperativeInformal: Word('выкличь', 1),
  imperativeFormal: Word('выкличьте', 1),
  imperfect: [],
};

perfectVerbs.set(выкликать.name.text, выкликать);

export { выкликать };