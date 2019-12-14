import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const счистить: PerfectVerb = {
  name: Word('счистить', 2),
  singular1stPerson: Word('счищу', 2),
  singular2ndPerson: Word('счистишь', 2),
  singular3rdPerson: Word('счистит', 2),
  plural1stPerson: Word('счистим', 2),
  plural2ndPerson: Word('счистите', 2),
  plural3rdPerson: Word('счистят', 2),
  masculinePast: Word('счистил', 2),
  femininePast: Word('счистила', 2),
  neuterPast: Word('счистило', 2),
  pluralPast: Word('счистили', 2),
  imperativeInformal: Word('счисти//счи'сть', 2),
  imperativeFormal: Word('счистите//счи'стьте', 2),
  imperfect: [],
};

perfectVerbs.set(счистить.name.text, счистить);

export { счистить };