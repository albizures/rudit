import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притушить: PerfectVerb = {
  name: Word('притушить', 6),
  singular1stPerson: Word('притушу', 6),
  singular2ndPerson: Word('притушишь', 4),
  singular3rdPerson: Word('притушит', 4),
  plural1stPerson: Word('притушим', 4),
  plural2ndPerson: Word('притушите', 4),
  plural3rdPerson: Word('притушат', 4),
  masculinePast: Word('притушил', 6),
  femininePast: Word('притушила', 6),
  neuterPast: Word('притушило', 6),
  pluralPast: Word('притушили', 6),
  imperativeInformal: Word('притуши', 6),
  imperativeFormal: Word('притушите', 6),
  imperfect: [],
};

perfectVerbs.set(притушить.name.text, притушить);

export { притушить };