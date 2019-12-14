import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглушить: PerfectVerb = {
  name: Word('приглушить', 7),
  singular1stPerson: Word('приглушу', 7),
  singular2ndPerson: Word('приглушишь', 7),
  singular3rdPerson: Word('приглушит', 7),
  plural1stPerson: Word('приглушим', 7),
  plural2ndPerson: Word('приглушите', 7),
  plural3rdPerson: Word('приглушат', 7),
  masculinePast: Word('приглушил', 7),
  femininePast: Word('приглушила', 7),
  neuterPast: Word('приглушило', 7),
  pluralPast: Word('приглушили', 7),
  imperativeInformal: Word('приглуши', 7),
  imperativeFormal: Word('приглушите', 7),
  imperfect: [],
};

perfectVerbs.set(приглушить.name.text, приглушить);

export { приглушить };