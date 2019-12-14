import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разграничивать: PerfectVerb = {
  name: Word('разграничивать', 7),
  singular1stPerson: Word('разграничиваю', 7),
  singular2ndPerson: Word('разграничиваешь', 7),
  singular3rdPerson: Word('разграничивает', 7),
  plural1stPerson: Word('разграничиваем', 7),
  plural2ndPerson: Word('разграничиваете', 7),
  plural3rdPerson: Word('разграничивают', 7),
  masculinePast: Word('разграничивал', 7),
  femininePast: Word('разграничивала', 7),
  neuterPast: Word('разграничивало', 7),
  pluralPast: Word('разграничивали', 7),
  imperativeInformal: Word('разграничивай', 7),
  imperativeFormal: Word('разграничивайте', 7),
  imperfect: [],
};

perfectVerbs.set(разграничивать.name.text, разграничивать);

export { разграничивать };