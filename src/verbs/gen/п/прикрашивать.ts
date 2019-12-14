import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрашивать: PerfectVerb = {
  name: Word('прикрашивать', 5),
  singular1stPerson: Word('прикрашиваю', 5),
  singular2ndPerson: Word('прикрашиваешь', 5),
  singular3rdPerson: Word('прикрашивает', 5),
  plural1stPerson: Word('прикрашиваем', 5),
  plural2ndPerson: Word('прикрашиваете', 5),
  plural3rdPerson: Word('прикрашивают', 5),
  masculinePast: Word('прикрашивал', 5),
  femininePast: Word('прикрашивала', 5),
  neuterPast: Word('прикрашивало', 5),
  pluralPast: Word('прикрашивали', 5),
  imperativeInformal: Word('прикрашивай', 5),
  imperativeFormal: Word('прикрашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(прикрашивать.name.text, прикрашивать);

export { прикрашивать };