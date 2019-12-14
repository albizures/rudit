import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пастеризовать: PerfectVerb = {
  name: Word('пастеризовать', 10),
  singular1stPerson: Word('пастеризую', 8),
  singular2ndPerson: Word('пастеризуешь', 8),
  singular3rdPerson: Word('пастеризует', 8),
  plural1stPerson: Word('пастеризуем', 8),
  plural2ndPerson: Word('пастеризуете', 8),
  plural3rdPerson: Word('пастеризуют', 8),
  masculinePast: Word('пастеризовал', 10),
  femininePast: Word('пастеризовала', 10),
  neuterPast: Word('пастеризовало', 10),
  pluralPast: Word('пастеризовали', 10),
  imperativeInformal: Word('пастеризуй', 8),
  imperativeFormal: Word('пастеризуйте', 8),
  imperfect: [],
};

perfectVerbs.set(пастеризовать.name.text, пастеризовать);

export { пастеризовать };