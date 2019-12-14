import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлечь: PerfectVerb = {
  name: Word('отлечь', 3),
  singular1stPerson: Word('отлягу', 3),
  singular2ndPerson: Word('отляжешь', 3),
  singular3rdPerson: Word('отляжет', 3),
  plural1stPerson: Word('отляжем', 3),
  plural2ndPerson: Word('отляжете', 3),
  plural3rdPerson: Word('отлягут', 3),
  masculinePast: Word('отлёг', 0),
  femininePast: Word('отлегла', 6),
  neuterPast: Word('отлегло', 6),
  pluralPast: Word('отлегли', 6),
  imperativeInformal: Word('отляг', 3),
  imperativeFormal: Word('отлягте', 3),
  imperfect: [],
};

perfectVerbs.set(отлечь.name.text, отлечь);

export { отлечь };