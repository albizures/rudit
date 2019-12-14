import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрушить: PerfectVerb = {
  name: Word('обрушить', 3),
  singular1stPerson: Word('обрушу', 3),
  singular2ndPerson: Word('обрушишь', 3),
  singular3rdPerson: Word('обрушит', 3),
  plural1stPerson: Word('обрушим', 3),
  plural2ndPerson: Word('обрушите', 3),
  plural3rdPerson: Word('обрушат', 3),
  masculinePast: Word('обрушил', 3),
  femininePast: Word('обрушила', 3),
  neuterPast: Word('обрушило', 3),
  pluralPast: Word('обрушили', 3),
  imperativeInformal: Word('обрушь', 3),
  imperativeFormal: Word('обрушьте', 3),
  imperfect: [],
};

perfectVerbs.set(обрушить.name.text, обрушить);

export { обрушить };