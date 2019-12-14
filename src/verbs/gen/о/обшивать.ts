import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обшивать: PerfectVerb = {
  name: Word('обшивать', 5),
  singular1stPerson: Word('обшиваю', 5),
  singular2ndPerson: Word('обшиваешь', 5),
  singular3rdPerson: Word('обшивает', 5),
  plural1stPerson: Word('обшиваем', 5),
  plural2ndPerson: Word('обшиваете', 5),
  plural3rdPerson: Word('обшивают', 5),
  masculinePast: Word('обшивал', 5),
  femininePast: Word('обшивала', 5),
  neuterPast: Word('обшивало', 5),
  pluralPast: Word('обшивали', 5),
  imperativeInformal: Word('обшивай', 5),
  imperativeFormal: Word('обшивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обшивать.name.text, обшивать);

export { обшивать };