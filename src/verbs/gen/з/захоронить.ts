import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захоронить: PerfectVerb = {
  name: Word('захоронить', 7),
  singular1stPerson: Word('захороню', 7),
  singular2ndPerson: Word('захоронишь', 5),
  singular3rdPerson: Word('захоронит', 5),
  plural1stPerson: Word('захороним', 5),
  plural2ndPerson: Word('захороните', 5),
  plural3rdPerson: Word('захоронят', 5),
  masculinePast: Word('захоронил', 7),
  femininePast: Word('захоронила', 7),
  neuterPast: Word('захоронило', 7),
  pluralPast: Word('захоронили', 7),
  imperativeInformal: Word('захорони', 7),
  imperativeFormal: Word('захороните', 7),
  imperfect: [],
};

perfectVerbs.set(захоронить.name.text, захоронить);

export { захоронить };