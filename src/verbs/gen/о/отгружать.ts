import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгружать: PerfectVerb = {
  name: Word('отгружать', 6),
  singular1stPerson: Word('отгружаю', 6),
  singular2ndPerson: Word('отгружаешь', 6),
  singular3rdPerson: Word('отгружает', 6),
  plural1stPerson: Word('отгружаем', 6),
  plural2ndPerson: Word('отгружаете', 6),
  plural3rdPerson: Word('отгружают', 6),
  masculinePast: Word('отгружал', 6),
  femininePast: Word('отгружала', 6),
  neuterPast: Word('отгружало', 6),
  pluralPast: Word('отгружали', 6),
  imperativeInformal: Word('отгружай', 6),
  imperativeFormal: Word('отгружайте', 6),
  imperfect: [],
};

perfectVerbs.set(отгружать.name.text, отгружать);

export { отгружать };