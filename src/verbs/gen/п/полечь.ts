import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полечь: PerfectVerb = {
  name: Word('полечь', 3),
  singular1stPerson: Word('полягу', 3),
  singular2ndPerson: Word('поляжешь', 3),
  singular3rdPerson: Word('поляжет', 3),
  plural1stPerson: Word('поляжем', 3),
  plural2ndPerson: Word('поляжете', 3),
  plural3rdPerson: Word('полягут', 3),
  masculinePast: Word('полёг', 3),
  femininePast: Word('полегла', 6),
  neuterPast: Word('полегло', 6),
  pluralPast: Word('полегли', 6),
  imperativeInformal: Word('поляг', 3),
  imperativeFormal: Word('полягте', 3),
  imperfect: [],
};

perfectVerbs.set(полечь.name.text, полечь);

export { полечь };