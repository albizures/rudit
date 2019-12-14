import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просушить: PerfectVerb = {
  name: Word('просушить', 6),
  singular1stPerson: Word('просушу', 6),
  singular2ndPerson: Word('просушишь', 4),
  singular3rdPerson: Word('просушит', 4),
  plural1stPerson: Word('просушим', 4),
  plural2ndPerson: Word('просушите', 4),
  plural3rdPerson: Word('просушат', 4),
  masculinePast: Word('просушил', 6),
  femininePast: Word('просушила', 6),
  neuterPast: Word('просушило', 6),
  pluralPast: Word('просушили', 6),
  imperativeInformal: Word('просуши', 6),
  imperativeFormal: Word('просушите', 6),
  imperfect: [],
};

perfectVerbs.set(просушить.name.text, просушить);

export { просушить };