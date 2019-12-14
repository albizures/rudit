import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрисовать: PerfectVerb = {
  name: Word('обрисовать', 7),
  singular1stPerson: Word('обрисую', 5),
  singular2ndPerson: Word('обрисуешь', 5),
  singular3rdPerson: Word('обрисует', 5),
  plural1stPerson: Word('обрисуем', 5),
  plural2ndPerson: Word('обрисуете', 5),
  plural3rdPerson: Word('обрисуют', 5),
  masculinePast: Word('обрисовал', 7),
  femininePast: Word('обрисовала', 7),
  neuterPast: Word('обрисовало', 7),
  pluralPast: Word('обрисовали', 7),
  imperativeInformal: Word('обрисуй', 5),
  imperativeFormal: Word('обрисуйте', 5),
  imperfect: [],
};

perfectVerbs.set(обрисовать.name.text, обрисовать);

export { обрисовать };