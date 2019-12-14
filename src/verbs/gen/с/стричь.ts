import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стричь: PerfectVerb = {
  name: Word('стричь', 3),
  singular1stPerson: Word('стригу', 5),
  singular2ndPerson: Word('стрижёшь', 3),
  singular3rdPerson: Word('стрижёт', 3),
  plural1stPerson: Word('стрижём', 3),
  plural2ndPerson: Word('стрижёте', 7),
  plural3rdPerson: Word('стригут', 5),
  masculinePast: Word('стриг', 3),
  femininePast: Word('стригла', 6),
  neuterPast: Word('стригло', 6),
  pluralPast: Word('стригли', 6),
  imperativeInformal: Word('стриги', 5),
  imperativeFormal: Word('стригите', 5),
  imperfect: ['постричь'],
};

perfectVerbs.set(стричь.name.text, стричь);

export { стричь };