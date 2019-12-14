import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запушить: PerfectVerb = {
  name: Word('запушить', 5),
  singular1stPerson: Word('запушу', 5),
  singular2ndPerson: Word('запушишь', 5),
  singular3rdPerson: Word('запушит', 5),
  plural1stPerson: Word('запушим', 5),
  plural2ndPerson: Word('запушите', 5),
  plural3rdPerson: Word('запушат', 5),
  masculinePast: Word('запушил', 5),
  femininePast: Word('запушила', 5),
  neuterPast: Word('запушило', 5),
  pluralPast: Word('запушили', 5),
  imperativeInformal: Word('запуши', 5),
  imperativeFormal: Word('запушите', 5),
  imperfect: [],
};

perfectVerbs.set(запушить.name.text, запушить);

export { запушить };