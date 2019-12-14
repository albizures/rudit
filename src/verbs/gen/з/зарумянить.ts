import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарумянить: PerfectVerb = {
  name: Word('зарумянить', 5),
  singular1stPerson: Word('зарумяню', 5),
  singular2ndPerson: Word('зарумянишь', 5),
  singular3rdPerson: Word('зарумянит', 5),
  plural1stPerson: Word('зарумяним', 5),
  plural2ndPerson: Word('зарумяните', 5),
  plural3rdPerson: Word('зарумянят', 5),
  masculinePast: Word('зарумянил', 5),
  femininePast: Word('зарумянила', 5),
  neuterPast: Word('зарумянило', 5),
  pluralPast: Word('зарумянили', 5),
  imperativeInformal: Word('зарумянь', 5),
  imperativeFormal: Word('зарумяньте', 5),
  imperfect: [],
};

perfectVerbs.set(зарумянить.name.text, зарумянить);

export { зарумянить };