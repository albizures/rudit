import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приближать: PerfectVerb = {
  name: Word('приближать', 7),
  singular1stPerson: Word('приближаю', 7),
  singular2ndPerson: Word('приближаешь', 7),
  singular3rdPerson: Word('приближает', 7),
  plural1stPerson: Word('приближаем', 7),
  plural2ndPerson: Word('приближаете', 7),
  plural3rdPerson: Word('приближают', 7),
  masculinePast: Word('приближал', 7),
  femininePast: Word('приближала', 7),
  neuterPast: Word('приближало', 7),
  pluralPast: Word('приближали', 7),
  imperativeInformal: Word('приближай', 7),
  imperativeFormal: Word('приближайте', 7),
  imperfect: [],
};

perfectVerbs.set(приближать.name.text, приближать);

export { приближать };