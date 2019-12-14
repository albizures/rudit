import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осушить: PerfectVerb = {
  name: Word('осушить', 4),
  singular1stPerson: Word('осушу', 4),
  singular2ndPerson: Word('осушишь', 2),
  singular3rdPerson: Word('осушит', 2),
  plural1stPerson: Word('осушим', 2),
  plural2ndPerson: Word('осушите', 2),
  plural3rdPerson: Word('осушат', 2),
  masculinePast: Word('осушил', 4),
  femininePast: Word('осушила', 4),
  neuterPast: Word('осушило', 4),
  pluralPast: Word('осушили', 4),
  imperativeInformal: Word('осуши', 4),
  imperativeFormal: Word('осушите', 4),
  imperfect: [],
};

perfectVerbs.set(осушить.name.text, осушить);

export { осушить };