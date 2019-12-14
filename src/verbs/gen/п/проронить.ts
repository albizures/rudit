import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проронить: PerfectVerb = {
  name: Word('проронить', 6),
  singular1stPerson: Word('пророню', 6),
  singular2ndPerson: Word('проронишь', 4),
  singular3rdPerson: Word('проронит', 4),
  plural1stPerson: Word('пророним', 4),
  plural2ndPerson: Word('пророните', 4),
  plural3rdPerson: Word('проронят', 4),
  masculinePast: Word('проронил', 6),
  femininePast: Word('проронила', 6),
  neuterPast: Word('проронило', 6),
  pluralPast: Word('проронили', 6),
  imperativeInformal: Word('пророни', 6),
  imperativeFormal: Word('пророните', 6),
  imperfect: [],
};

perfectVerbs.set(проронить.name.text, проронить);

export { проронить };