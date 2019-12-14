import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожаловать: PerfectVerb = {
  name: Word('пожаловать', 3),
  singular1stPerson: Word('пожалую', 3),
  singular2ndPerson: Word('пожалуешь', 3),
  singular3rdPerson: Word('пожалует', 3),
  plural1stPerson: Word('пожалуем', 3),
  plural2ndPerson: Word('пожалуете', 3),
  plural3rdPerson: Word('пожалуют', 3),
  masculinePast: Word('пожаловал', 3),
  femininePast: Word('пожаловала', 3),
  neuterPast: Word('пожаловало', 3),
  pluralPast: Word('пожаловали', 3),
  imperativeInformal: Word('пожалуй', 3),
  imperativeFormal: Word('пожалуйте', 3),
  imperfect: ['жаловать'],
};

perfectVerbs.set(пожаловать.name.text, пожаловать);

export { пожаловать };