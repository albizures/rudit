import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воронить: PerfectVerb = {
  name: Word('воронить', 3),
  singular1stPerson: Word('вороню', 3),
  singular2ndPerson: Word('воронишь', 3),
  singular3rdPerson: Word('воронит', 3),
  plural1stPerson: Word('вороним', 3),
  plural2ndPerson: Word('вороните', 3),
  plural3rdPerson: Word('воронят', 3),
  masculinePast: Word('воронил', 3),
  femininePast: Word('воронила', 3),
  neuterPast: Word('воронило', 3),
  pluralPast: Word('воронили', 3),
  imperativeInformal: Word('воронь', 3),
  imperativeFormal: Word('вороньте', 3),
  imperfect: [],
};

perfectVerbs.set(воронить.name.text, воронить);

export { воронить };