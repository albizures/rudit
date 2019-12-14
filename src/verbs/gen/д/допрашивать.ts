import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допрашивать: PerfectVerb = {
  name: Word('допрашивать', 4),
  singular1stPerson: Word('допрашиваю', 4),
  singular2ndPerson: Word('допрашиваешь', 4),
  singular3rdPerson: Word('допрашивает', 4),
  plural1stPerson: Word('допрашиваем', 4),
  plural2ndPerson: Word('допрашиваете', 4),
  plural3rdPerson: Word('допрашивают', 4),
  masculinePast: Word('допрашивал', 4),
  femininePast: Word('допрашивала', 4),
  neuterPast: Word('допрашивало', 4),
  pluralPast: Word('допрашивали', 4),
  imperativeInformal: Word('допрашивай', 4),
  imperativeFormal: Word('допрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(допрашивать.name.text, допрашивать);

export { допрашивать };