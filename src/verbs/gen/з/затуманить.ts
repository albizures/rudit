import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затуманить: PerfectVerb = {
  name: Word('затуманить', 5),
  singular1stPerson: Word('затуманю', 5),
  singular2ndPerson: Word('затуманишь', 5),
  singular3rdPerson: Word('затуманит', 5),
  plural1stPerson: Word('затуманим', 5),
  plural2ndPerson: Word('затуманите', 5),
  plural3rdPerson: Word('затуманят', 5),
  masculinePast: Word('затуманил', 5),
  femininePast: Word('затуманила', 5),
  neuterPast: Word('затуманило', 5),
  pluralPast: Word('затуманили', 5),
  imperativeInformal: Word('затумань', 5),
  imperativeFormal: Word('затуманьте', 5),
  imperfect: [],
};

perfectVerbs.set(затуманить.name.text, затуманить);

export { затуманить };