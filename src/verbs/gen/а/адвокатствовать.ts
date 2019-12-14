import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const адвокатствовать: PerfectVerb = {
  name: Word('адвокатствовать', 5),
  singular1stPerson: Word('адвокатствую', 5),
  singular2ndPerson: Word('адвокатствуешь', 5),
  singular3rdPerson: Word('адвокатствует', 5),
  plural1stPerson: Word('адвокатствуем', 5),
  plural2ndPerson: Word('адвокатствуете', 5),
  plural3rdPerson: Word('адвокатствуют', 5),
  masculinePast: Word('адвокатствовал', 5),
  femininePast: Word('адвокатствовала', 5),
  neuterPast: Word('адвокатствовало', 5),
  pluralPast: Word('адвокатствовали', 5),
  imperativeInformal: Word('адвокатствуй', 5),
  imperativeFormal: Word('адвокатствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(адвокатствовать.name.text, адвокатствовать);

export { адвокатствовать };