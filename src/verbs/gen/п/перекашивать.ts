import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекашивать: PerfectVerb = {
  name: Word('перекашивать', 5),
  singular1stPerson: Word('перекашиваю', 5),
  singular2ndPerson: Word('перекашиваешь', 5),
  singular3rdPerson: Word('перекашивает', 5),
  plural1stPerson: Word('перекашиваем', 5),
  plural2ndPerson: Word('перекашиваете', 5),
  plural3rdPerson: Word('перекашивают', 5),
  masculinePast: Word('перекашивал', 5),
  femininePast: Word('перекашивала', 5),
  neuterPast: Word('перекашивало', 5),
  pluralPast: Word('перекашивали', 5),
  imperativeInformal: Word('перекашивай', 5),
  imperativeFormal: Word('перекашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекашивать.name.text, перекашивать);

export { перекашивать };