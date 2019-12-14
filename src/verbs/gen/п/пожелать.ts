import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожелать: PerfectVerb = {
  name: Word('пожелать', 5),
  singular1stPerson: Word('пожелаю', 5),
  singular2ndPerson: Word('пожелаешь', 5),
  singular3rdPerson: Word('пожелает', 5),
  plural1stPerson: Word('пожелаем', 5),
  plural2ndPerson: Word('пожелаете', 5),
  plural3rdPerson: Word('пожелают', 5),
  masculinePast: Word('пожелал', 5),
  femininePast: Word('пожелала', 5),
  neuterPast: Word('пожелало', 5),
  pluralPast: Word('пожелали', 5),
  imperativeInformal: Word('пожелай', 5),
  imperativeFormal: Word('пожелайте', 5),
  imperfect: ['желать'],
};

perfectVerbs.set(пожелать.name.text, пожелать);

export { пожелать };