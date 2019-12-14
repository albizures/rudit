import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const падать: PerfectVerb = {
  name: Word('падать', 1),
  singular1stPerson: Word('падаю', 1),
  singular2ndPerson: Word('падаешь', 1),
  singular3rdPerson: Word('падает', 1),
  plural1stPerson: Word('падаем', 1),
  plural2ndPerson: Word('падаете', 1),
  plural3rdPerson: Word('падают', 1),
  masculinePast: Word('падал', 1),
  femininePast: Word('падала', 1),
  neuterPast: Word('падало', 1),
  pluralPast: Word('падали', 1),
  imperativeInformal: Word('падай', 1),
  imperativeFormal: Word('падайте', 1),
  imperfect: ['упасть','пасть'],
};

perfectVerbs.set(падать.name.text, падать);

export { падать };