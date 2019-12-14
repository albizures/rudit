import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повянуть: PerfectVerb = {
  name: Word('повянуть', 3),
  singular1stPerson: Word('повяну', 3),
  singular2ndPerson: Word('повянешь', 3),
  singular3rdPerson: Word('повянет', 3),
  plural1stPerson: Word('повянем', 3),
  plural2ndPerson: Word('повянете', 3),
  plural3rdPerson: Word('повянут', 3),
  masculinePast: Word('повял', 3),
  femininePast: Word('повяла', 3),
  neuterPast: Word('повяло', 3),
  pluralPast: Word('повяли', 3),
  imperativeInformal: Word('повянь', 3),
  imperativeFormal: Word('повяньте', 3),
  imperfect: [],
};

perfectVerbs.set(повянуть.name.text, повянуть);

export { повянуть };