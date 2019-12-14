import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лечь: PerfectVerb = {
  name: Word('лечь', 1),
  singular1stPerson: Word('лягу', 1),
  singular2ndPerson: Word('ляжешь', 1),
  singular3rdPerson: Word('ляжет', 1),
  plural1stPerson: Word('ляжем', 1),
  plural2ndPerson: Word('ляжете', 1),
  plural3rdPerson: Word('лягут', 1),
  masculinePast: Word('лёг', 1),
  femininePast: Word('легла', 4),
  neuterPast: Word('легло', 4),
  pluralPast: Word('легли', 4),
  imperativeInformal: Word('ляг', 1),
  imperativeFormal: Word('лягте', 1),
  imperfect: ['ложиться'],
};

perfectVerbs.set(лечь.name.text, лечь);

export { лечь };