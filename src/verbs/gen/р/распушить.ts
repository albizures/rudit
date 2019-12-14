import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распушить: PerfectVerb = {
  name: Word('распушить', 6),
  singular1stPerson: Word('распушу', 6),
  singular2ndPerson: Word('распушишь', 6),
  singular3rdPerson: Word('распушит', 6),
  plural1stPerson: Word('распушим', 6),
  plural2ndPerson: Word('распушите', 6),
  plural3rdPerson: Word('распушат', 6),
  masculinePast: Word('распушил', 6),
  femininePast: Word('распушила', 6),
  neuterPast: Word('распушило', 6),
  pluralPast: Word('распушили', 6),
  imperativeInformal: Word('распуши', 6),
  imperativeFormal: Word('распушите', 6),
  imperfect: [],
};

perfectVerbs.set(распушить.name.text, распушить);

export { распушить };