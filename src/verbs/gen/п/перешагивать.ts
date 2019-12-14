import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешагивать: PerfectVerb = {
  name: Word('перешагивать', 5),
  singular1stPerson: Word('перешагиваю', 5),
  singular2ndPerson: Word('перешагиваешь', 5),
  singular3rdPerson: Word('перешагивает', 5),
  plural1stPerson: Word('перешагиваем', 5),
  plural2ndPerson: Word('перешагиваете', 5),
  plural3rdPerson: Word('перешагивают', 5),
  masculinePast: Word('перешагивал', 5),
  femininePast: Word('перешагивала', 5),
  neuterPast: Word('перешагивало', 5),
  pluralPast: Word('перешагивали', 5),
  imperativeInformal: Word('перешагивай', 5),
  imperativeFormal: Word('перешагивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перешагивать.name.text, перешагивать);

export { перешагивать };