import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const говорить: PerfectVerb = {
  name: Word('говорить', 5),
  singular1stPerson: Word('говорю', 5),
  singular2ndPerson: Word('говоришь', 5),
  singular3rdPerson: Word('говорит', 5),
  plural1stPerson: Word('говорим', 5),
  plural2ndPerson: Word('говорите', 5),
  plural3rdPerson: Word('говорят', 5),
  masculinePast: Word('говорил', 5),
  femininePast: Word('говорила', 5),
  neuterPast: Word('говорило', 5),
  pluralPast: Word('говорили', 5),
  imperativeInformal: Word('говори', 5),
  imperativeFormal: Word('говорите', 5),
  imperfect: ['сказать'],
};

perfectVerbs.set(говорить.name.text, говорить);

export { говорить };