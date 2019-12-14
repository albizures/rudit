import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взыскивать: PerfectVerb = {
  name: Word('взыскивать', 2),
  singular1stPerson: Word('взыскиваю', 2),
  singular2ndPerson: Word('взыскиваешь', 2),
  singular3rdPerson: Word('взыскивает', 2),
  plural1stPerson: Word('взыскиваем', 2),
  plural2ndPerson: Word('взыскиваете', 2),
  plural3rdPerson: Word('взыскивают', 2),
  masculinePast: Word('взыскивал', 2),
  femininePast: Word('взыскивала', 2),
  neuterPast: Word('взыскивало', 2),
  pluralPast: Word('взыскивали', 2),
  imperativeInformal: Word('взыскивай', 2),
  imperativeFormal: Word('взыскивайте', 2),
  imperfect: [],
};

perfectVerbs.set(взыскивать.name.text, взыскивать);

export { взыскивать };