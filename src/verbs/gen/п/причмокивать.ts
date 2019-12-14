import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причмокивать: PerfectVerb = {
  name: Word('причмокивать', 5),
  singular1stPerson: Word('причмокиваю', 5),
  singular2ndPerson: Word('причмокиваешь', 5),
  singular3rdPerson: Word('причмокивает', 5),
  plural1stPerson: Word('причмокиваем', 5),
  plural2ndPerson: Word('причмокиваете', 5),
  plural3rdPerson: Word('причмокивают', 5),
  masculinePast: Word('причмокивал', 5),
  femininePast: Word('причмокивала', 5),
  neuterPast: Word('причмокивало', 5),
  pluralPast: Word('причмокивали', 5),
  imperativeInformal: Word('причмокивай', 5),
  imperativeFormal: Word('причмокивайте', 5),
  imperfect: [],
};

perfectVerbs.set(причмокивать.name.text, причмокивать);

export { причмокивать };