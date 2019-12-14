import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрисовать: PerfectVerb = {
  name: Word('изрисовать', 7),
  singular1stPerson: Word('изрисую', 5),
  singular2ndPerson: Word('изрисуешь', 5),
  singular3rdPerson: Word('изрисует', 5),
  plural1stPerson: Word('изрисуем', 5),
  plural2ndPerson: Word('изрисуете', 5),
  plural3rdPerson: Word('изрисуют', 5),
  masculinePast: Word('изрисовал', 7),
  femininePast: Word('изрисовала', 7),
  neuterPast: Word('изрисовало', 7),
  pluralPast: Word('изрисовали', 7),
  imperativeInformal: Word('изрисуй', 5),
  imperativeFormal: Word('изрисуйте', 5),
  imperfect: [],
};

perfectVerbs.set(изрисовать.name.text, изрисовать);

export { изрисовать };