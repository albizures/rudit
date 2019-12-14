import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проесть: PerfectVerb = {
  name: Word('проесть', 3),
  singular1stPerson: Word('проем', 3),
  singular2ndPerson: Word('проешь', 3),
  singular3rdPerson: Word('проест', 3),
  plural1stPerson: Word('проедим', 5),
  plural2ndPerson: Word('проедите', 5),
  plural3rdPerson: Word('проедят', 5),
  masculinePast: Word('проел', 3),
  femininePast: Word('проела', 3),
  neuterPast: Word('проело', 3),
  pluralPast: Word('проели', 3),
  imperativeInformal: Word('проешь', 3),
  imperativeFormal: Word('проешьте', 3),
  imperfect: [],
};

perfectVerbs.set(проесть.name.text, проесть);

export { проесть };