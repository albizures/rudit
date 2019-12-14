import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засушить: PerfectVerb = {
  name: Word('засушить', 5),
  singular1stPerson: Word('засушу', 5),
  singular2ndPerson: Word('засушишь', 3),
  singular3rdPerson: Word('засушит', 3),
  plural1stPerson: Word('засушим', 3),
  plural2ndPerson: Word('засушите', 3),
  plural3rdPerson: Word('засушат', 3),
  masculinePast: Word('засушил', 5),
  femininePast: Word('засушила', 5),
  neuterPast: Word('засушило', 5),
  pluralPast: Word('засушили', 5),
  imperativeInformal: Word('засуши', 5),
  imperativeFormal: Word('засушите', 5),
  imperfect: [],
};

perfectVerbs.set(засушить.name.text, засушить);

export { засушить };