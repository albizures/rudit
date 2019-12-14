import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тушить: PerfectVerb = {
  name: Word('тушить', 3),
  singular1stPerson: Word('тушу', 3),
  singular2ndPerson: Word('тушишь', 1),
  singular3rdPerson: Word('тушит', 1),
  plural1stPerson: Word('тушим', 1),
  plural2ndPerson: Word('тушите', 1),
  plural3rdPerson: Word('тушат', 1),
  masculinePast: Word('тушил', 3),
  femininePast: Word('тушила', 3),
  neuterPast: Word('тушило', 3),
  pluralPast: Word('тушили', 3),
  imperativeInformal: Word('туши', 3),
  imperativeFormal: Word('тушите', 3),
  imperfect: [],
};

perfectVerbs.set(тушить.name.text, тушить);

export { тушить };