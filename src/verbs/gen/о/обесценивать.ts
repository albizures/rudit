import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обесценивать: PerfectVerb = {
  name: Word('обесценивать', 5),
  singular1stPerson: Word('обесцениваю', 5),
  singular2ndPerson: Word('обесцениваешь', 5),
  singular3rdPerson: Word('обесценивает', 5),
  plural1stPerson: Word('обесцениваем', 5),
  plural2ndPerson: Word('обесцениваете', 5),
  plural3rdPerson: Word('обесценивают', 5),
  masculinePast: Word('обесценивал', 5),
  femininePast: Word('обесценивала', 5),
  neuterPast: Word('обесценивало', 5),
  pluralPast: Word('обесценивали', 5),
  imperativeInformal: Word('обесценивай', 5),
  imperativeFormal: Word('обесценивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обесценивать.name.text, обесценивать);

export { обесценивать };