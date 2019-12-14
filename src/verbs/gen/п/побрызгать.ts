import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побрызгать: PerfectVerb = {
  name: Word('побрызгать', 4),
  singular1stPerson: Word('побрызжу', 4),
  singular2ndPerson: Word('побрызжешь', 4),
  singular3rdPerson: Word('побрызжет', 4),
  plural1stPerson: Word('побрызжем', 4),
  plural2ndPerson: Word('побрызжете', 4),
  plural3rdPerson: Word('побрызжут', 4),
  masculinePast: Word('побрызгал', 4),
  femininePast: Word('побрызгала', 4),
  neuterPast: Word('побрызгало', 4),
  pluralPast: Word('побрызгали', 4),
  imperativeInformal: Word('побрызжи', 4),
  imperativeFormal: Word('побрызжите', 4),
  imperfect: [],
};

perfectVerbs.set(побрызгать.name.text, побрызгать);

export { побрызгать };