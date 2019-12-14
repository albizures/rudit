import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглушить: PerfectVerb = {
  name: Word('заглушить', 6),
  singular1stPerson: Word('заглушу', 6),
  singular2ndPerson: Word('заглушишь', 6),
  singular3rdPerson: Word('заглушит', 6),
  plural1stPerson: Word('заглушим', 6),
  plural2ndPerson: Word('заглушите', 6),
  plural3rdPerson: Word('заглушат', 6),
  masculinePast: Word('заглушил', 6),
  femininePast: Word('заглушила', 6),
  neuterPast: Word('заглушило', 6),
  pluralPast: Word('заглушили', 6),
  imperativeInformal: Word('заглуши', 6),
  imperativeFormal: Word('заглушите', 6),
  imperfect: [],
};

perfectVerbs.set(заглушить.name.text, заглушить);

export { заглушить };