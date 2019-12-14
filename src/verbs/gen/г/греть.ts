import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const греть: PerfectVerb = {
  name: Word('греть', 2),
  singular1stPerson: Word('грею', 2),
  singular2ndPerson: Word('греешь', 2),
  singular3rdPerson: Word('греет', 2),
  plural1stPerson: Word('греем', 2),
  plural2ndPerson: Word('греете', 2),
  plural3rdPerson: Word('греют', 2),
  masculinePast: Word('грел', 2),
  femininePast: Word('грела', 2),
  neuterPast: Word('грело', 2),
  pluralPast: Word('грели', 2),
  imperativeInformal: Word('грей', 2),
  imperativeFormal: Word('грейте', 2),
  imperfect: ['нагреть','согреть'],
};

perfectVerbs.set(греть.name.text, греть);

export { греть };