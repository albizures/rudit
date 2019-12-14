import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрумянить: PerfectVerb = {
  name: Word('подрумянить', 6),
  singular1stPerson: Word('подрумяню', 6),
  singular2ndPerson: Word('подрумянишь', 6),
  singular3rdPerson: Word('подрумянит', 6),
  plural1stPerson: Word('подрумяним', 6),
  plural2ndPerson: Word('подрумяните', 6),
  plural3rdPerson: Word('подрумянят', 6),
  masculinePast: Word('подрумянил', 6),
  femininePast: Word('подрумянила', 6),
  neuterPast: Word('подрумянило', 6),
  pluralPast: Word('подрумянили', 6),
  imperativeInformal: Word('подрумянь', 6),
  imperativeFormal: Word('подрумяньте', 6),
  imperfect: [],
};

perfectVerbs.set(подрумянить.name.text, подрумянить);

export { подрумянить };