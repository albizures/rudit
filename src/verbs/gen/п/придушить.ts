import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придушить: PerfectVerb = {
  name: Word('придушить', 6),
  singular1stPerson: Word('придушу', 6),
  singular2ndPerson: Word('придушишь', 4),
  singular3rdPerson: Word('придушит', 4),
  plural1stPerson: Word('придушим', 4),
  plural2ndPerson: Word('придушите', 4),
  plural3rdPerson: Word('придушат', 4),
  masculinePast: Word('придушил', 6),
  femininePast: Word('придушила', 6),
  neuterPast: Word('придушило', 6),
  pluralPast: Word('придушили', 6),
  imperativeInformal: Word('придуши', 6),
  imperativeFormal: Word('придушите', 6),
  imperfect: [],
};

perfectVerbs.set(придушить.name.text, придушить);

export { придушить };