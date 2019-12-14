import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттяпать: PerfectVerb = {
  name: Word('оттяпать', 3),
  singular1stPerson: Word('оттяпаю', 3),
  singular2ndPerson: Word('оттяпаешь', 3),
  singular3rdPerson: Word('оттяпает', 3),
  plural1stPerson: Word('оттяпаем', 3),
  plural2ndPerson: Word('оттяпаете', 3),
  plural3rdPerson: Word('оттяпают', 3),
  masculinePast: Word('оттяпал', 3),
  femininePast: Word('оттяпала', 3),
  neuterPast: Word('оттяпало', 3),
  pluralPast: Word('оттяпали', 3),
  imperativeInformal: Word('оттяпай', 3),
  imperativeFormal: Word('оттяпайте', 3),
  imperfect: [],
};

perfectVerbs.set(оттяпать.name.text, оттяпать);

export { оттяпать };