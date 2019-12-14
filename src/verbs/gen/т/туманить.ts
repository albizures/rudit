import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const туманить: PerfectVerb = {
  name: Word('туманить', 3),
  singular1stPerson: Word('туманю', 3),
  singular2ndPerson: Word('туманишь', 3),
  singular3rdPerson: Word('туманит', 3),
  plural1stPerson: Word('туманим', 3),
  plural2ndPerson: Word('туманите', 3),
  plural3rdPerson: Word('туманят', 3),
  masculinePast: Word('туманил', 3),
  femininePast: Word('туманила', 3),
  neuterPast: Word('туманило', 3),
  pluralPast: Word('туманили', 3),
  imperativeInformal: Word('тумань', 3),
  imperativeFormal: Word('туманьте', 3),
  imperfect: [],
};

perfectVerbs.set(туманить.name.text, туманить);

export { туманить };