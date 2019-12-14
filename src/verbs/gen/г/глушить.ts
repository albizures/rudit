import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глушить: PerfectVerb = {
  name: Word('глушить', 4),
  singular1stPerson: Word('глушу', 4),
  singular2ndPerson: Word('глушишь', 4),
  singular3rdPerson: Word('глушит', 4),
  plural1stPerson: Word('глушим', 4),
  plural2ndPerson: Word('глушите', 4),
  plural3rdPerson: Word('глушат', 4),
  masculinePast: Word('глушил', 4),
  femininePast: Word('глушила', 4),
  neuterPast: Word('глушило', 4),
  pluralPast: Word('глушили', 4),
  imperativeInformal: Word('глуши', 4),
  imperativeFormal: Word('глушите', 4),
  imperfect: [],
};

perfectVerbs.set(глушить.name.text, глушить);

export { глушить };