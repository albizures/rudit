import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припекать: PerfectVerb = {
  name: Word('припекать', 6),
  singular1stPerson: Word('припекаю', 6),
  singular2ndPerson: Word('припекаешь', 6),
  singular3rdPerson: Word('припекает', 6),
  plural1stPerson: Word('припекаем', 6),
  plural2ndPerson: Word('припекаете', 6),
  plural3rdPerson: Word('припекают', 6),
  masculinePast: Word('припекал', 6),
  femininePast: Word('припекала', 6),
  neuterPast: Word('припекало', 6),
  pluralPast: Word('припекали', 6),
  imperativeInformal: Word('припекай', 6),
  imperativeFormal: Word('припекайте', 6),
  imperfect: [],
};

perfectVerbs.set(припекать.name.text, припекать);

export { припекать };