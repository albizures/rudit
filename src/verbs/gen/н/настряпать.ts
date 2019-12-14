import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настряпать: PerfectVerb = {
  name: Word('настряпать', 5),
  singular1stPerson: Word('настряпаю', 5),
  singular2ndPerson: Word('настряпаешь', 5),
  singular3rdPerson: Word('настряпает', 5),
  plural1stPerson: Word('настряпаем', 5),
  plural2ndPerson: Word('настряпаете', 5),
  plural3rdPerson: Word('настряпают', 5),
  masculinePast: Word('настряпал', 5),
  femininePast: Word('настряпала', 5),
  neuterPast: Word('настряпало', 5),
  pluralPast: Word('настряпали', 5),
  imperativeInformal: Word('настряпай', 5),
  imperativeFormal: Word('настряпайте', 5),
  imperfect: [],
};

perfectVerbs.set(настряпать.name.text, настряпать);

export { настряпать };