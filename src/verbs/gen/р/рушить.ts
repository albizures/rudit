import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рушить: PerfectVerb = {
  name: Word('рушить', 1),
  singular1stPerson: Word('рушу', 1),
  singular2ndPerson: Word('рушишь', 1),
  singular3rdPerson: Word('рушит', 1),
  plural1stPerson: Word('рушим', 1),
  plural2ndPerson: Word('рушите', 1),
  plural3rdPerson: Word('рушат', 1),
  masculinePast: Word('рушил', 1),
  femininePast: Word('рушила', 1),
  neuterPast: Word('рушило', 1),
  pluralPast: Word('рушили', 1),
  imperativeInformal: Word('рушь', 1),
  imperativeFormal: Word('рушьте', 1),
  imperfect: [],
};

perfectVerbs.set(рушить.name.text, рушить);

export { рушить };