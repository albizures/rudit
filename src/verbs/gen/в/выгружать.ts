import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгружать: PerfectVerb = {
  name: Word('выгружать', 6),
  singular1stPerson: Word('выгружаю', 6),
  singular2ndPerson: Word('выгружаешь', 6),
  singular3rdPerson: Word('выгружает', 6),
  plural1stPerson: Word('выгружаем', 6),
  plural2ndPerson: Word('выгружаете', 6),
  plural3rdPerson: Word('выгружают', 6),
  masculinePast: Word('выгружал', 6),
  femininePast: Word('выгружала', 6),
  neuterPast: Word('выгружало', 6),
  pluralPast: Word('выгружали', 6),
  imperativeInformal: Word('выгружай', 6),
  imperativeFormal: Word('выгружайте', 6),
  imperfect: [],
};

perfectVerbs.set(выгружать.name.text, выгружать);

export { выгружать };