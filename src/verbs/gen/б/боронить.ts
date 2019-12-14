import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const боронить: PerfectVerb = {
  name: Word('боронить', 5),
  singular1stPerson: Word('бороню', 5),
  singular2ndPerson: Word('боронишь', 5),
  singular3rdPerson: Word('боронит', 5),
  plural1stPerson: Word('бороним', 5),
  plural2ndPerson: Word('бороните', 5),
  plural3rdPerson: Word('боронят', 5),
  masculinePast: Word('боронил', 5),
  femininePast: Word('боронила', 5),
  neuterPast: Word('боронило', 5),
  pluralPast: Word('боронили', 5),
  imperativeInformal: Word('борони', 5),
  imperativeFormal: Word('бороните', 5),
  imperfect: [],
};

perfectVerbs.set(боронить.name.text, боронить);

export { боронить };