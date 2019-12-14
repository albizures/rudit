import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залечь: PerfectVerb = {
  name: Word('залечь', 3),
  singular1stPerson: Word('залягу', 3),
  singular2ndPerson: Word('заляжешь', 3),
  singular3rdPerson: Word('заляжет', 3),
  plural1stPerson: Word('заляжем', 3),
  plural2ndPerson: Word('заляжете', 3),
  plural3rdPerson: Word('залягут', 3),
  masculinePast: Word('залёг', 3),
  femininePast: Word('залегла', 6),
  neuterPast: Word('залегло', 6),
  pluralPast: Word('залегли', 6),
  imperativeInformal: Word('заляг', 3),
  imperativeFormal: Word('залягте', 3),
  imperfect: [],
};

perfectVerbs.set(залечь.name.text, залечь);

export { залечь };