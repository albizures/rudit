import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стряпать: PerfectVerb = {
  name: Word('стряпать', 3),
  singular1stPerson: Word('стряпаю', 3),
  singular2ndPerson: Word('стряпаешь', 3),
  singular3rdPerson: Word('стряпает', 3),
  plural1stPerson: Word('стряпаем', 3),
  plural2ndPerson: Word('стряпаете', 3),
  plural3rdPerson: Word('стряпают', 3),
  masculinePast: Word('стряпал', 3),
  femininePast: Word('стряпала', 3),
  neuterPast: Word('стряпало', 3),
  pluralPast: Word('стряпали', 3),
  imperativeInformal: Word('стряпай', 3),
  imperativeFormal: Word('стряпайте', 3),
  imperfect: [],
};

perfectVerbs.set(стряпать.name.text, стряпать);

export { стряпать };