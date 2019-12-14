import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забрызгать: PerfectVerb = {
  name: Word('забрызгать', 4),
  singular1stPerson: Word('забрызжу', 4),
  singular2ndPerson: Word('забрызжешь', 4),
  singular3rdPerson: Word('забрызжет', 4),
  plural1stPerson: Word('забрызжем', 4),
  plural2ndPerson: Word('забрызжете', 4),
  plural3rdPerson: Word('забрызжут', 4),
  masculinePast: Word('забрызгал', 4),
  femininePast: Word('забрызгала', 4),
  neuterPast: Word('забрызгало', 4),
  pluralPast: Word('забрызгали', 4),
  imperativeInformal: Word('забрызжи', 4),
  imperativeFormal: Word('забрызжите', 4),
  imperfect: [],
};

perfectVerbs.set(забрызгать.name.text, забрызгать);

export { забрызгать };