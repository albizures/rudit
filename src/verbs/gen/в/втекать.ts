import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втекать: PerfectVerb = {
  name: Word('втекать', 4),
  singular1stPerson: Word('втекаю', 4),
  singular2ndPerson: Word('втекаешь', 4),
  singular3rdPerson: Word('втекает', 4),
  plural1stPerson: Word('втекаем', 4),
  plural2ndPerson: Word('втекаете', 4),
  plural3rdPerson: Word('втекают', 4),
  masculinePast: Word('втекал', 4),
  femininePast: Word('втекала', 4),
  neuterPast: Word('втекало', 4),
  pluralPast: Word('втекали', 4),
  imperativeInformal: Word('втекай', 4),
  imperativeFormal: Word('втекайте', 4),
  imperfect: [],
};

perfectVerbs.set(втекать.name.text, втекать);

export { втекать };