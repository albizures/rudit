import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обчистить: PerfectVerb = {
  name: Word('обчистить', 3),
  singular1stPerson: Word('обчищу', 3),
  singular2ndPerson: Word('обчистишь', 3),
  singular3rdPerson: Word('обчистит', 3),
  plural1stPerson: Word('обчистим', 3),
  plural2ndPerson: Word('обчистите', 3),
  plural3rdPerson: Word('обчистят', 3),
  masculinePast: Word('обчистил', 3),
  femininePast: Word('обчистила', 3),
  neuterPast: Word('обчистило', 3),
  pluralPast: Word('обчистили', 3),
  imperativeInformal: Word('обчисти//обчи'сть', 3),
  imperativeFormal: Word('обчи'стите//о'бчи'стьте', 0),
  imperfect: [],
};

perfectVerbs.set(обчистить.name.text, обчистить);

export { обчистить };