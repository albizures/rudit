import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допивать: PerfectVerb = {
  name: Word('допивать', 5),
  singular1stPerson: Word('допиваю', 5),
  singular2ndPerson: Word('допиваешь', 5),
  singular3rdPerson: Word('допивает', 5),
  plural1stPerson: Word('допиваем', 5),
  plural2ndPerson: Word('допиваете', 5),
  plural3rdPerson: Word('допивают', 5),
  masculinePast: Word('допивал', 5),
  femininePast: Word('допивала', 5),
  neuterPast: Word('допивало', 5),
  pluralPast: Word('допивали', 5),
  imperativeInformal: Word('допивай', 5),
  imperativeFormal: Word('допивайте', 5),
  imperfect: [],
};

perfectVerbs.set(допивать.name.text, допивать);

export { допивать };