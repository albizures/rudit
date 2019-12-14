import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчистить: PerfectVerb = {
  name: Word('подчистить', 4),
  singular1stPerson: Word('подчищу', 4),
  singular2ndPerson: Word('подчистишь', 4),
  singular3rdPerson: Word('подчистит', 4),
  plural1stPerson: Word('подчистим', 4),
  plural2ndPerson: Word('подчистите', 4),
  plural3rdPerson: Word('подчистят', 4),
  masculinePast: Word('подчистил', 4),
  femininePast: Word('подчистила', 4),
  neuterPast: Word('подчистило', 4),
  pluralPast: Word('подчистили', 4),
  imperativeInformal: Word('подчисти//подчи'сть', 4),
  imperativeFormal: Word('подчи'стите//по'дчи'стьте', 1),
  imperfect: [],
};

perfectVerbs.set(подчистить.name.text, подчистить);

export { подчистить };