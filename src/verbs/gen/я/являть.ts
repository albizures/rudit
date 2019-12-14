import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const являть: PerfectVerb = {
  name: Word('являть', 3),
  singular1stPerson: Word('являю', 3),
  singular2ndPerson: Word('являешь', 3),
  singular3rdPerson: Word('являет', 3),
  plural1stPerson: Word('являем', 3),
  plural2ndPerson: Word('являете', 3),
  plural3rdPerson: Word('являют', 3),
  masculinePast: Word('являл', 3),
  femininePast: Word('являла', 3),
  neuterPast: Word('являло', 3),
  pluralPast: Word('являли', 3),
  imperativeInformal: Word('являй', 3),
  imperativeFormal: Word('являйте', 3),
  imperfect: [],
};

perfectVerbs.set(являть.name.text, являть);

export { являть };