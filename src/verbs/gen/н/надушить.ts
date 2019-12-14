import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надушить: PerfectVerb = {
  name: Word('надушить', 5),
  singular1stPerson: Word('надушу', 5),
  singular2ndPerson: Word('надушишь', 3),
  singular3rdPerson: Word('надушит', 3),
  plural1stPerson: Word('надушим', 3),
  plural2ndPerson: Word('надушите', 3),
  plural3rdPerson: Word('надушат', 3),
  masculinePast: Word('надушил', 5),
  femininePast: Word('надушила', 5),
  neuterPast: Word('надушило', 5),
  pluralPast: Word('надушили', 5),
  imperativeInformal: Word('надуши', 5),
  imperativeFormal: Word('надушите', 5),
  imperfect: [],
};

perfectVerbs.set(надушить.name.text, надушить);

export { надушить };