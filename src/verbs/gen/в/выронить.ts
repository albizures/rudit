import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выронить: PerfectVerb = {
  name: Word('выронить', 1),
  singular1stPerson: Word('выроню', 1),
  singular2ndPerson: Word('выронишь', 1),
  singular3rdPerson: Word('выронит', 1),
  plural1stPerson: Word('выроним', 1),
  plural2ndPerson: Word('выроните', 1),
  plural3rdPerson: Word('выронят', 1),
  masculinePast: Word('выронил', 1),
  femininePast: Word('выронила', 1),
  neuterPast: Word('выронило', 1),
  pluralPast: Word('выронили', 1),
  imperativeInformal: Word('вырони', 1),
  imperativeFormal: Word('выроните', 1),
  imperfect: [],
};

perfectVerbs.set(выронить.name.text, выронить);

export { выронить };