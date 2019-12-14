import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const желать: PerfectVerb = {
  name: Word('желать', 3),
  singular1stPerson: Word('желаю', 3),
  singular2ndPerson: Word('желаешь', 3),
  singular3rdPerson: Word('желает', 3),
  plural1stPerson: Word('желаем', 3),
  plural2ndPerson: Word('желаете', 3),
  plural3rdPerson: Word('желают', 3),
  masculinePast: Word('желал', 3),
  femininePast: Word('желала', 3),
  neuterPast: Word('желало', 3),
  pluralPast: Word('желали', 3),
  imperativeInformal: Word('желай', 3),
  imperativeFormal: Word('желайте', 3),
  imperfect: ['пожелать','возжелать'],
};

perfectVerbs.set(желать.name.text, желать);

export { желать };