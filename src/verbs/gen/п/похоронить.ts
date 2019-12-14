import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похоронить: PerfectVerb = {
  name: Word('похоронить', 7),
  singular1stPerson: Word('похороню', 7),
  singular2ndPerson: Word('похоронишь', 5),
  singular3rdPerson: Word('похоронит', 5),
  plural1stPerson: Word('похороним', 5),
  plural2ndPerson: Word('похороните', 5),
  plural3rdPerson: Word('похоронят', 5),
  masculinePast: Word('похоронил', 7),
  femininePast: Word('похоронила', 7),
  neuterPast: Word('похоронило', 7),
  pluralPast: Word('похоронили', 7),
  imperativeInformal: Word('похорони', 7),
  imperativeFormal: Word('похороните', 7),
  imperfect: ['хоронить'],
};

perfectVerbs.set(похоронить.name.text, похоронить);

export { похоронить };