import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгружать: PerfectVerb = {
  name: Word('разгружать', 7),
  singular1stPerson: Word('разгружаю', 7),
  singular2ndPerson: Word('разгружаешь', 7),
  singular3rdPerson: Word('разгружает', 7),
  plural1stPerson: Word('разгружаем', 7),
  plural2ndPerson: Word('разгружаете', 7),
  plural3rdPerson: Word('разгружают', 7),
  masculinePast: Word('разгружал', 7),
  femininePast: Word('разгружала', 7),
  neuterPast: Word('разгружало', 7),
  pluralPast: Word('разгружали', 7),
  imperativeInformal: Word('разгружай', 7),
  imperativeFormal: Word('разгружайте', 7),
  imperfect: [],
};

perfectVerbs.set(разгружать.name.text, разгружать);

export { разгружать };