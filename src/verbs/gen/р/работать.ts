import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const работать: PerfectVerb = {
  name: Word('работать', 3),
  singular1stPerson: Word('работаю', 3),
  singular2ndPerson: Word('работаешь', 3),
  singular3rdPerson: Word('работает', 3),
  plural1stPerson: Word('работаем', 3),
  plural2ndPerson: Word('работаете', 3),
  plural3rdPerson: Word('работают', 3),
  masculinePast: Word('работал', 3),
  femininePast: Word('работала', 3),
  neuterPast: Word('работало', 3),
  pluralPast: Word('работали', 3),
  imperativeInformal: Word('работай', 3),
  imperativeFormal: Word('работайте', 3),
  imperfect: ['поработать'],
};

perfectVerbs.set(работать.name.text, работать);

export { работать };