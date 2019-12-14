import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгребать: PerfectVerb = {
  name: Word('разгребать', 7),
  singular1stPerson: Word('разгребаю', 7),
  singular2ndPerson: Word('разгребаешь', 7),
  singular3rdPerson: Word('разгребает', 7),
  plural1stPerson: Word('разгребаем', 7),
  plural2ndPerson: Word('разгребаете', 7),
  plural3rdPerson: Word('разгребают', 7),
  masculinePast: Word('разгребал', 7),
  femininePast: Word('разгребала', 7),
  neuterPast: Word('разгребало', 7),
  pluralPast: Word('разгребали', 7),
  imperativeInformal: Word('разгребай', 7),
  imperativeFormal: Word('разгребайте', 7),
  imperfect: [],
};

perfectVerbs.set(разгребать.name.text, разгребать);

export { разгребать };