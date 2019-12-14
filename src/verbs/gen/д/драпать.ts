import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драпать: PerfectVerb = {
  name: Word('драпать', 2),
  singular1stPerson: Word('драпаю', 2),
  singular2ndPerson: Word('драпаешь', 2),
  singular3rdPerson: Word('драпает', 2),
  plural1stPerson: Word('драпаем', 2),
  plural2ndPerson: Word('драпаете', 2),
  plural3rdPerson: Word('драпают', 2),
  masculinePast: Word('драпал', 2),
  femininePast: Word('драпала', 2),
  neuterPast: Word('драпало', 2),
  pluralPast: Word('драпали', 2),
  imperativeInformal: Word('драпай', 2),
  imperativeFormal: Word('драпайте', 2),
  imperfect: [],
};

perfectVerbs.set(драпать.name.text, драпать);

export { драпать };