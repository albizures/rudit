import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const негодовать: PerfectVerb = {
  name: Word('негодовать', 7),
  singular1stPerson: Word('негодую', 5),
  singular2ndPerson: Word('негодуешь', 5),
  singular3rdPerson: Word('негодует', 5),
  plural1stPerson: Word('негодуем', 5),
  plural2ndPerson: Word('негодуете', 5),
  plural3rdPerson: Word('негодуют', 5),
  masculinePast: Word('негодовал', 7),
  femininePast: Word('негодовала', 7),
  neuterPast: Word('негодовало', 7),
  pluralPast: Word('негодовали', 7),
  imperativeInformal: Word('негодуй', 5),
  imperativeFormal: Word('негодуйте', 5),
  imperfect: [],
};

perfectVerbs.set(негодовать.name.text, негодовать);

export { негодовать };