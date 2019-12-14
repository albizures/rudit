import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выживать: PerfectVerb = {
  name: Word('выживать', 5),
  singular1stPerson: Word('выживаю', 5),
  singular2ndPerson: Word('выживаешь', 5),
  singular3rdPerson: Word('выживает', 5),
  plural1stPerson: Word('выживаем', 5),
  plural2ndPerson: Word('выживаете', 5),
  plural3rdPerson: Word('выживают', 5),
  masculinePast: Word('выживал', 5),
  femininePast: Word('выживала', 5),
  neuterPast: Word('выживало', 5),
  pluralPast: Word('выживали', 5),
  imperativeInformal: Word('выживай', 5),
  imperativeFormal: Word('выживайте', 5),
  imperfect: [],
};

perfectVerbs.set(выживать.name.text, выживать);

export { выживать };