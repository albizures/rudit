import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подушить: PerfectVerb = {
  name: Word('подушить', 5),
  singular1stPerson: Word('подушу', 5),
  singular2ndPerson: Word('подушишь', 3),
  singular3rdPerson: Word('подушит', 3),
  plural1stPerson: Word('подушим', 3),
  plural2ndPerson: Word('подушите', 3),
  plural3rdPerson: Word('подушат', 3),
  masculinePast: Word('подушил', 5),
  femininePast: Word('подушила', 5),
  neuterPast: Word('подушило', 5),
  pluralPast: Word('подушили', 5),
  imperativeInformal: Word('подуши', 5),
  imperativeFormal: Word('подушите', 5),
  imperfect: [],
};

perfectVerbs.set(подушить.name.text, подушить);

export { подушить };