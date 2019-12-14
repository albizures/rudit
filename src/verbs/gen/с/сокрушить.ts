import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сокрушить: PerfectVerb = {
  name: Word('сокрушить', 6),
  singular1stPerson: Word('сокрушу', 6),
  singular2ndPerson: Word('сокрушишь', 6),
  singular3rdPerson: Word('сокрушит', 6),
  plural1stPerson: Word('сокрушим', 6),
  plural2ndPerson: Word('сокрушите', 6),
  plural3rdPerson: Word('сокрушат', 6),
  masculinePast: Word('сокрушил', 6),
  femininePast: Word('сокрушила', 6),
  neuterPast: Word('сокрушило', 6),
  pluralPast: Word('сокрушили', 6),
  imperativeInformal: Word('сокруши', 6),
  imperativeFormal: Word('сокрушите', 6),
  imperfect: [],
};

perfectVerbs.set(сокрушить.name.text, сокрушить);

export { сокрушить };