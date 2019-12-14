import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насесть: PerfectVerb = {
  name: Word('насесть', 3),
  singular1stPerson: Word('насяду', 3),
  singular2ndPerson: Word('насядешь', 3),
  singular3rdPerson: Word('насядет', 3),
  plural1stPerson: Word('насядем', 3),
  plural2ndPerson: Word('насядете', 3),
  plural3rdPerson: Word('насядут', 3),
  masculinePast: Word('насел', 3),
  femininePast: Word('насела', 3),
  neuterPast: Word('насело', 3),
  pluralPast: Word('насели', 3),
  imperativeInformal: Word('насядь', 3),
  imperativeFormal: Word('насядьте', 3),
  imperfect: [],
};

perfectVerbs.set(насесть.name.text, насесть);

export { насесть };