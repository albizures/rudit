import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгребать: PerfectVerb = {
  name: Word('сгребать', 5),
  singular1stPerson: Word('сгребаю', 5),
  singular2ndPerson: Word('сгребаешь', 5),
  singular3rdPerson: Word('сгребает', 5),
  plural1stPerson: Word('сгребаем', 5),
  plural2ndPerson: Word('сгребаете', 5),
  plural3rdPerson: Word('сгребают', 5),
  masculinePast: Word('сгребал', 5),
  femininePast: Word('сгребала', 5),
  neuterPast: Word('сгребало', 5),
  pluralPast: Word('сгребали', 5),
  imperativeInformal: Word('сгребай', 5),
  imperativeFormal: Word('сгребайте', 5),
  imperfect: [],
};

perfectVerbs.set(сгребать.name.text, сгребать);

export { сгребать };