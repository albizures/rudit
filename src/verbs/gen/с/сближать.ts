import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сближать: PerfectVerb = {
  name: Word('сближать', 5),
  singular1stPerson: Word('сближаю', 5),
  singular2ndPerson: Word('сближаешь', 5),
  singular3rdPerson: Word('сближает', 5),
  plural1stPerson: Word('сближаем', 5),
  plural2ndPerson: Word('сближаете', 5),
  plural3rdPerson: Word('сближают', 5),
  masculinePast: Word('сближал', 5),
  femininePast: Word('сближала', 5),
  neuterPast: Word('сближало', 5),
  pluralPast: Word('сближали', 5),
  imperativeInformal: Word('сближай', 5),
  imperativeFormal: Word('сближайте', 5),
  imperfect: [],
};

perfectVerbs.set(сближать.name.text, сближать);

export { сближать };