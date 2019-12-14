import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схоронить: PerfectVerb = {
  name: Word('схоронить', 6),
  singular1stPerson: Word('схороню', 6),
  singular2ndPerson: Word('схоронишь', 4),
  singular3rdPerson: Word('схоронит', 4),
  plural1stPerson: Word('схороним', 4),
  plural2ndPerson: Word('схороните', 4),
  plural3rdPerson: Word('схоронят', 4),
  masculinePast: Word('схоронил', 6),
  femininePast: Word('схоронила', 6),
  neuterPast: Word('схоронило', 6),
  pluralPast: Word('схоронили', 6),
  imperativeInformal: Word('схорони', 6),
  imperativeFormal: Word('схороните', 6),
  imperfect: ['хоронить'],
};

perfectVerbs.set(схоронить.name.text, схоронить);

export { схоронить };