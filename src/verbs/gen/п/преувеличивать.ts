import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преувеличивать: PerfectVerb = {
  name: Word('преувеличивать', 7),
  singular1stPerson: Word('преувеличиваю', 7),
  singular2ndPerson: Word('преувеличиваешь', 7),
  singular3rdPerson: Word('преувеличивает', 7),
  plural1stPerson: Word('преувеличиваем', 7),
  plural2ndPerson: Word('преувеличиваете', 7),
  plural3rdPerson: Word('преувеличивают', 7),
  masculinePast: Word('преувеличивал', 7),
  femininePast: Word('преувеличивала', 7),
  neuterPast: Word('преувеличивало', 7),
  pluralPast: Word('преувеличивали', 7),
  imperativeInformal: Word('преувеличивай', 7),
  imperativeFormal: Word('преувеличивайте', 7),
  imperfect: [],
};

perfectVerbs.set(преувеличивать.name.text, преувеличивать);

export { преувеличивать };