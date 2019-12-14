import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одурманить: PerfectVerb = {
  name: Word('одурманить', 5),
  singular1stPerson: Word('одурманю', 5),
  singular2ndPerson: Word('одурманишь', 5),
  singular3rdPerson: Word('одурманит', 5),
  plural1stPerson: Word('одурманим', 5),
  plural2ndPerson: Word('одурманите', 5),
  plural3rdPerson: Word('одурманят', 5),
  masculinePast: Word('одурманил', 5),
  femininePast: Word('одурманила', 5),
  neuterPast: Word('одурманило', 5),
  pluralPast: Word('одурманили', 5),
  imperativeInformal: Word('одурмань', 5),
  imperativeFormal: Word('одурманьте', 5),
  imperfect: [],
};

perfectVerbs.set(одурманить.name.text, одурманить);

export { одурманить };