import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хоронить: PerfectVerb = {
  name: Word('хоронить', 5),
  singular1stPerson: Word('хороню', 5),
  singular2ndPerson: Word('хоронишь', 3),
  singular3rdPerson: Word('хоронит', 3),
  plural1stPerson: Word('хороним', 3),
  plural2ndPerson: Word('хороните', 3),
  plural3rdPerson: Word('хоронят', 3),
  masculinePast: Word('хоронил', 5),
  femininePast: Word('хоронила', 5),
  neuterPast: Word('хоронило', 5),
  pluralPast: Word('хоронили', 5),
  imperativeInformal: Word('хорони', 5),
  imperativeFormal: Word('хороните', 5),
  imperfect: ['похоронить','схоронить'],
};

perfectVerbs.set(хоронить.name.text, хоронить);

export { хоронить };