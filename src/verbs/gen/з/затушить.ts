import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затушить: PerfectVerb = {
  name: Word('затушить', 5),
  singular1stPerson: Word('затушу', 5),
  singular2ndPerson: Word('затушишь', 3),
  singular3rdPerson: Word('затушит', 3),
  plural1stPerson: Word('затушим', 3),
  plural2ndPerson: Word('затушите', 3),
  plural3rdPerson: Word('затушат', 3),
  masculinePast: Word('затушил', 5),
  femininePast: Word('затушила', 5),
  neuterPast: Word('затушило', 5),
  pluralPast: Word('затушили', 5),
  imperativeInformal: Word('затуши', 5),
  imperativeFormal: Word('затушите', 5),
  imperfect: [],
};

perfectVerbs.set(затушить.name.text, затушить);

export { затушить };