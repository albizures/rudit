import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилечь: PerfectVerb = {
  name: Word('прилечь', 4),
  singular1stPerson: Word('прилягу', 4),
  singular2ndPerson: Word('приляжешь', 4),
  singular3rdPerson: Word('приляжет', 4),
  plural1stPerson: Word('приляжем', 4),
  plural2ndPerson: Word('приляжете', 4),
  plural3rdPerson: Word('прилягут', 4),
  masculinePast: Word('прилёг', 2),
  femininePast: Word('прилегла', 7),
  neuterPast: Word('прилегло', 7),
  pluralPast: Word('прилегли', 7),
  imperativeInformal: Word('приляг', 4),
  imperativeFormal: Word('прилягте', 4),
  imperfect: [],
};

perfectVerbs.set(прилечь.name.text, прилечь);

export { прилечь };