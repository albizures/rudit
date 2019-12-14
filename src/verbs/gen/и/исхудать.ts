import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исхудать: PerfectVerb = {
  name: Word('исхудать', 5),
  singular1stPerson: Word('исхудаю', 5),
  singular2ndPerson: Word('исхудаешь', 5),
  singular3rdPerson: Word('исхудает', 5),
  plural1stPerson: Word('исхудаем', 5),
  plural2ndPerson: Word('исхудаете', 5),
  plural3rdPerson: Word('исхудают', 5),
  masculinePast: Word('исхудал', 5),
  femininePast: Word('исхудала', 5),
  neuterPast: Word('исхудало', 5),
  pluralPast: Word('исхудали', 5),
  imperativeInformal: Word('исхудай', 5),
  imperativeFormal: Word('исхудайте', 5),
  imperfect: [],
};

perfectVerbs.set(исхудать.name.text, исхудать);

export { исхудать };