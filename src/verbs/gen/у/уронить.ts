import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уронить: PerfectVerb = {
  name: Word('уронить', 4),
  singular1stPerson: Word('уроню', 4),
  singular2ndPerson: Word('уронишь', 2),
  singular3rdPerson: Word('уронит', 2),
  plural1stPerson: Word('уроним', 2),
  plural2ndPerson: Word('уроните', 2),
  plural3rdPerson: Word('уронят', 2),
  masculinePast: Word('уронил', 4),
  femininePast: Word('уронила', 4),
  neuterPast: Word('уронило', 4),
  pluralPast: Word('уронили', 4),
  imperativeInformal: Word('урони', 4),
  imperativeFormal: Word('уроните', 4),
  imperfect: [],
};

perfectVerbs.set(уронить.name.text, уронить);

export { уронить };