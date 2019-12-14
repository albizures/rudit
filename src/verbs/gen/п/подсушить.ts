import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсушить: PerfectVerb = {
  name: Word('подсушить', 6),
  singular1stPerson: Word('подсушу', 6),
  singular2ndPerson: Word('подсушишь', 4),
  singular3rdPerson: Word('подсушит', 4),
  plural1stPerson: Word('подсушим', 4),
  plural2ndPerson: Word('подсушите', 4),
  plural3rdPerson: Word('подсушат', 4),
  masculinePast: Word('подсушил', 6),
  femininePast: Word('подсушила', 6),
  neuterPast: Word('подсушило', 6),
  pluralPast: Word('подсушили', 6),
  imperativeInformal: Word('подсуши', 6),
  imperativeFormal: Word('подсушите', 6),
  imperfect: [],
};

perfectVerbs.set(подсушить.name.text, подсушить);

export { подсушить };