import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгребать: PerfectVerb = {
  name: Word('подгребать', 7),
  singular1stPerson: Word('подгребаю', 7),
  singular2ndPerson: Word('подгребаешь', 7),
  singular3rdPerson: Word('подгребает', 7),
  plural1stPerson: Word('подгребаем', 7),
  plural2ndPerson: Word('подгребаете', 7),
  plural3rdPerson: Word('подгребают', 7),
  masculinePast: Word('подгребал', 7),
  femininePast: Word('подгребала', 7),
  neuterPast: Word('подгребало', 7),
  pluralPast: Word('подгребали', 7),
  imperativeInformal: Word('подгребай', 7),
  imperativeFormal: Word('подгребайте', 7),
  imperfect: [],
};

perfectVerbs.set(подгребать.name.text, подгребать);

export { подгребать };