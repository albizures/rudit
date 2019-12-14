import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съесть: PerfectVerb = {
  name: Word('съесть', 2),
  singular1stPerson: Word('съем', 2),
  singular2ndPerson: Word('съешь', 2),
  singular3rdPerson: Word('съест', 2),
  plural1stPerson: Word('съедим', 4),
  plural2ndPerson: Word('съедите', 4),
  plural3rdPerson: Word('съедят', 4),
  masculinePast: Word('съел', 2),
  femininePast: Word('съела', 2),
  neuterPast: Word('съело', 2),
  pluralPast: Word('съели', 2),
  imperativeInformal: Word('съешь', 2),
  imperativeFormal: Word('съешьте', 2),
  imperfect: ['есть'],
};

perfectVerbs.set(съесть.name.text, съесть);

export { съесть };