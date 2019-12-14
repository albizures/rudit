import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посулить: PerfectVerb = {
  name: Word('посулить', 5),
  singular1stPerson: Word('посулю', 5),
  singular2ndPerson: Word('посулишь', 5),
  singular3rdPerson: Word('посулит', 5),
  plural1stPerson: Word('посулим', 5),
  plural2ndPerson: Word('посулите', 5),
  plural3rdPerson: Word('посулят', 5),
  masculinePast: Word('посулил', 5),
  femininePast: Word('посулила', 5),
  neuterPast: Word('посулило', 5),
  pluralPast: Word('посулили', 5),
  imperativeInformal: Word('посули', 5),
  imperativeFormal: Word('посулите', 5),
  imperfect: [],
};

perfectVerbs.set(посулить.name.text, посулить);

export { посулить };