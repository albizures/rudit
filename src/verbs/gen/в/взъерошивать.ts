import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взъерошивать: PerfectVerb = {
  name: Word('взъерошивать', 5),
  singular1stPerson: Word('взъерошиваю', 5),
  singular2ndPerson: Word('взъерошиваешь', 5),
  singular3rdPerson: Word('взъерошивает', 5),
  plural1stPerson: Word('взъерошиваем', 5),
  plural2ndPerson: Word('взъерошиваете', 5),
  plural3rdPerson: Word('взъерошивают', 5),
  masculinePast: Word('взъерошивал', 5),
  femininePast: Word('взъерошивала', 5),
  neuterPast: Word('взъерошивало', 5),
  pluralPast: Word('взъерошивали', 5),
  imperativeInformal: Word('взъерошивай', 5),
  imperativeFormal: Word('взъерошивайте', 5),
  imperfect: [],
};

perfectVerbs.set(взъерошивать.name.text, взъерошивать);

export { взъерошивать };