import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрушить: PerfectVerb = {
  name: Word('разрушить', 4),
  singular1stPerson: Word('разрушу', 4),
  singular2ndPerson: Word('разрушишь', 4),
  singular3rdPerson: Word('разрушит', 4),
  plural1stPerson: Word('разрушим', 4),
  plural2ndPerson: Word('разрушите', 4),
  plural3rdPerson: Word('разрушат', 4),
  masculinePast: Word('разрушил', 4),
  femininePast: Word('разрушила', 4),
  neuterPast: Word('разрушило', 4),
  pluralPast: Word('разрушили', 4),
  imperativeInformal: Word('разрушь', 4),
  imperativeFormal: Word('разрушьте', 4),
  imperfect: ['разрушать'],
};

perfectVerbs.set(разрушить.name.text, разрушить);

export { разрушить };