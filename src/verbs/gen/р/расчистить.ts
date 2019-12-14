import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчистить: PerfectVerb = {
  name: Word('расчистить', 4),
  singular1stPerson: Word('расчищу', 4),
  singular2ndPerson: Word('расчистишь', 4),
  singular3rdPerson: Word('расчистит', 4),
  plural1stPerson: Word('расчистим', 4),
  plural2ndPerson: Word('расчистите', 4),
  plural3rdPerson: Word('расчистят', 4),
  masculinePast: Word('расчистил', 4),
  femininePast: Word('расчистила', 4),
  neuterPast: Word('расчистило', 4),
  pluralPast: Word('расчистили', 4),
  imperativeInformal: Word('расчисти//расчи'сть', 4),
  imperativeFormal: Word('расчи'стите//ра'счи'стьте', 1),
  imperfect: [],
};

perfectVerbs.set(расчистить.name.text, расчистить);

export { расчистить };