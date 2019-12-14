import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгружать: PerfectVerb = {
  name: Word('сгружать', 5),
  singular1stPerson: Word('сгружаю', 5),
  singular2ndPerson: Word('сгружаешь', 5),
  singular3rdPerson: Word('сгружает', 5),
  plural1stPerson: Word('сгружаем', 5),
  plural2ndPerson: Word('сгружаете', 5),
  plural3rdPerson: Word('сгружают', 5),
  masculinePast: Word('сгружал', 5),
  femininePast: Word('сгружала', 5),
  neuterPast: Word('сгружало', 5),
  pluralPast: Word('сгружали', 5),
  imperativeInformal: Word('сгружай', 5),
  imperativeFormal: Word('сгружайте', 5),
  imperfect: [],
};

perfectVerbs.set(сгружать.name.text, сгружать);

export { сгружать };