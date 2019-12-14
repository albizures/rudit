import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насушить: PerfectVerb = {
  name: Word('насушить', 5),
  singular1stPerson: Word('насушу', 5),
  singular2ndPerson: Word('насушишь', 3),
  singular3rdPerson: Word('насушит', 3),
  plural1stPerson: Word('насушим', 3),
  plural2ndPerson: Word('насушите', 3),
  plural3rdPerson: Word('насушат', 3),
  masculinePast: Word('насушил', 5),
  femininePast: Word('насушила', 5),
  neuterPast: Word('насушило', 5),
  pluralPast: Word('насушили', 5),
  imperativeInformal: Word('насуши', 5),
  imperativeFormal: Word('насушите', 5),
  imperfect: [],
};

perfectVerbs.set(насушить.name.text, насушить);

export { насушить };