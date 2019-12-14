import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const будоражить: PerfectVerb = {
  name: Word('будоражить', 5),
  singular1stPerson: Word('будоражу', 5),
  singular2ndPerson: Word('будоражишь', 5),
  singular3rdPerson: Word('будоражит', 5),
  plural1stPerson: Word('будоражим', 5),
  plural2ndPerson: Word('будоражите', 5),
  plural3rdPerson: Word('будоражат', 5),
  masculinePast: Word('будоражил', 5),
  femininePast: Word('будоражила', 5),
  neuterPast: Word('будоражило', 5),
  pluralPast: Word('будоражили', 5),
  imperativeInformal: Word('будоражь', 5),
  imperativeFormal: Word('будоражьте', 5),
  imperfect: [],
};

perfectVerbs.set(будоражить.name.text, будоражить);

export { будоражить };