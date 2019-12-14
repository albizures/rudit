import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарумянить: PerfectVerb = {
  name: Word('нарумянить', 5),
  singular1stPerson: Word('нарумяню', 5),
  singular2ndPerson: Word('нарумянишь', 5),
  singular3rdPerson: Word('нарумянит', 5),
  plural1stPerson: Word('нарумяним', 5),
  plural2ndPerson: Word('нарумяните', 5),
  plural3rdPerson: Word('нарумянят', 5),
  masculinePast: Word('нарумянил', 5),
  femininePast: Word('нарумянила', 5),
  neuterPast: Word('нарумянило', 5),
  pluralPast: Word('нарумянили', 5),
  imperativeInformal: Word('нарумянь', 5),
  imperativeFormal: Word('нарумяньте', 5),
  imperfect: [],
};

perfectVerbs.set(нарумянить.name.text, нарумянить);

export { нарумянить };