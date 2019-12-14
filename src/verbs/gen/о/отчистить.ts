import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчистить: PerfectVerb = {
  name: Word('отчистить', 3),
  singular1stPerson: Word('отчищу', 3),
  singular2ndPerson: Word('отчистишь', 3),
  singular3rdPerson: Word('отчистит', 3),
  plural1stPerson: Word('отчистим', 3),
  plural2ndPerson: Word('отчистите', 3),
  plural3rdPerson: Word('отчистят', 3),
  masculinePast: Word('отчистил', 3),
  femininePast: Word('отчистила', 3),
  neuterPast: Word('отчистило', 3),
  pluralPast: Word('отчистили', 3),
  imperativeInformal: Word('отчисти//отчи'сть', 3),
  imperativeFormal: Word('отчи'стите//о'тчи'стьте', 0),
  imperfect: [],
};

perfectVerbs.set(отчистить.name.text, отчистить);

export { отчистить };