import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удушить: PerfectVerb = {
  name: Word('удушить', 4),
  singular1stPerson: Word('удушу', 4),
  singular2ndPerson: Word('удушишь', 2),
  singular3rdPerson: Word('удушит', 2),
  plural1stPerson: Word('удушим', 2),
  plural2ndPerson: Word('удушите', 2),
  plural3rdPerson: Word('удушат', 2),
  masculinePast: Word('удушил', 4),
  femininePast: Word('удушила', 4),
  neuterPast: Word('удушило', 4),
  pluralPast: Word('удушили', 4),
  imperativeInformal: Word('удуши', 4),
  imperativeFormal: Word('удушите', 4),
  imperfect: [],
};

perfectVerbs.set(удушить.name.text, удушить);

export { удушить };