import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const индексировать: PerfectVerb = {
  name: Word('индексировать', 6),
  singular1stPerson: Word('индексирую', 6),
  singular2ndPerson: Word('индексируешь', 6),
  singular3rdPerson: Word('индексирует', 6),
  plural1stPerson: Word('индексируем', 6),
  plural2ndPerson: Word('индексируете', 6),
  plural3rdPerson: Word('индексируют', 6),
  masculinePast: Word('индексировал', 6),
  femininePast: Word('индексировала', 6),
  neuterPast: Word('индексировало', 6),
  pluralPast: Word('индексировали', 6),
  imperativeInformal: Word('индексируй', 6),
  imperativeFormal: Word('индексируйте', 6),
  imperfect: ['проиндексировать'],
};

perfectVerbs.set(индексировать.name.text, индексировать);

export { индексировать };