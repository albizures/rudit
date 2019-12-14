import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обескуражить: PerfectVerb = {
  name: Word('обескуражить', 9),
  singular1stPerson: Word('обескуражу', 7),
  singular2ndPerson: Word('обескуражишь', 7),
  singular3rdPerson: Word('обескуражит', 7),
  plural1stPerson: Word('обескуражим', 7),
  plural2ndPerson: Word('обескуражите', 7),
  plural3rdPerson: Word('обескуражат', 7),
  masculinePast: Word('обескуражил', 9),
  femininePast: Word('обескуражила', 9),
  neuterPast: Word('обескуражило', 9),
  pluralPast: Word('обескуражили', 9),
  imperativeInformal: Word('обескуражь', 7),
  imperativeFormal: Word('обескуражьте', 7),
  imperfect: [],
};

perfectVerbs.set(обескуражить.name.text, обескуражить);

export { обескуражить };