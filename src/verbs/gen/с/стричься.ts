import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стричься: PerfectVerb = {
  name: Word('стричься', 3),
  singular1stPerson: Word('стригусь', 5),
  singular2ndPerson: Word('стрижёшься', 3),
  singular3rdPerson: Word('стрижётся', 3),
  plural1stPerson: Word('стрижёмся', 3),
  plural2ndPerson: Word('стрижётесь', 7),
  plural3rdPerson: Word('стригутся', 5),
  masculinePast: Word('стригся', 3),
  femininePast: Word('стриглась', 3),
  neuterPast: Word('стриглось', 3),
  pluralPast: Word('стриглись', 3),
  imperativeInformal: Word('стригись', 5),
  imperativeFormal: Word('стригитесь', 5),
  imperfect: [],
};

perfectVerbs.set(стричься.name.text, стричься);

export { стричься };