import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошарашивать: PerfectVerb = {
  name: Word('ошарашивать', 4),
  singular1stPerson: Word('ошарашиваю', 4),
  singular2ndPerson: Word('ошарашиваешь', 4),
  singular3rdPerson: Word('ошарашивает', 4),
  plural1stPerson: Word('ошарашиваем', 4),
  plural2ndPerson: Word('ошарашиваете', 4),
  plural3rdPerson: Word('ошарашивают', 4),
  masculinePast: Word('ошарашивал', 4),
  femininePast: Word('ошарашивала', 4),
  neuterPast: Word('ошарашивало', 4),
  pluralPast: Word('ошарашивали', 4),
  imperativeInformal: Word('ошарашивай', 4),
  imperativeFormal: Word('ошарашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(ошарашивать.name.text, ошарашивать);

export { ошарашивать };