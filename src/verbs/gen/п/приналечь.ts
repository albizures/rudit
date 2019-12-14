import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приналечь: PerfectVerb = {
  name: Word('приналечь', 6),
  singular1stPerson: Word('приналягу', 6),
  singular2ndPerson: Word('приналяжешь', 6),
  singular3rdPerson: Word('приналяжет', 6),
  plural1stPerson: Word('приналяжем', 6),
  plural2ndPerson: Word('приналяжете', 6),
  plural3rdPerson: Word('приналягут', 6),
  masculinePast: Word('приналёг', 6),
  femininePast: Word('приналегла', 9),
  neuterPast: Word('приналегло', 9),
  pluralPast: Word('приналегли', 9),
  imperativeInformal: Word('приналяг', 6),
  imperativeFormal: Word('приналягте', 6),
  imperfect: [],
};

perfectVerbs.set(приналечь.name.text, приналечь);

export { приналечь };