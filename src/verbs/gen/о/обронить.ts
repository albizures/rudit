import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обронить: PerfectVerb = {
  name: Word('обронить', 5),
  singular1stPerson: Word('оброню', 5),
  singular2ndPerson: Word('обронишь', 3),
  singular3rdPerson: Word('обронит', 3),
  plural1stPerson: Word('оброним', 3),
  plural2ndPerson: Word('оброните', 3),
  plural3rdPerson: Word('обронят', 3),
  masculinePast: Word('обронил', 5),
  femininePast: Word('обронила', 5),
  neuterPast: Word('обронило', 5),
  pluralPast: Word('обронили', 5),
  imperativeInformal: Word('оброни', 5),
  imperativeFormal: Word('оброните', 5),
  imperfect: [],
};

perfectVerbs.set(обронить.name.text, обронить);

export { обронить };