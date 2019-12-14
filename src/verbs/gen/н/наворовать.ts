import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наворовать: PerfectVerb = {
  name: Word('наворовать', 7),
  singular1stPerson: Word('наворую', 5),
  singular2ndPerson: Word('наворуешь', 5),
  singular3rdPerson: Word('наворует', 5),
  plural1stPerson: Word('наворуем', 5),
  plural2ndPerson: Word('наворуете', 5),
  plural3rdPerson: Word('наворуют', 5),
  masculinePast: Word('наворовал', 7),
  femininePast: Word('наворовала', 7),
  neuterPast: Word('наворовало', 7),
  pluralPast: Word('наворовали', 7),
  imperativeInformal: Word('наворуй', 5),
  imperativeFormal: Word('наворуйте', 5),
  imperfect: [],
};

perfectVerbs.set(наворовать.name.text, наворовать);

export { наворовать };