import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворовать: PerfectVerb = {
  name: Word('поворовать', 7),
  singular1stPerson: Word('поворую', 5),
  singular2ndPerson: Word('поворуешь', 5),
  singular3rdPerson: Word('поворует', 5),
  plural1stPerson: Word('поворуем', 5),
  plural2ndPerson: Word('поворуете', 5),
  plural3rdPerson: Word('поворуют', 5),
  masculinePast: Word('поворовал', 7),
  femininePast: Word('поворовала', 7),
  neuterPast: Word('поворовало', 7),
  pluralPast: Word('поворовали', 7),
  imperativeInformal: Word('поворуй', 5),
  imperativeFormal: Word('поворуйте', 5),
  imperfect: [],
};

perfectVerbs.set(поворовать.name.text, поворовать);

export { поворовать };