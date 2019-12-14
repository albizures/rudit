import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплёскивать: PerfectVerb = {
  name: Word('выплёскивать', 4),
  singular1stPerson: Word('выплёскиваю', 4),
  singular2ndPerson: Word('выплёскиваешь', 4),
  singular3rdPerson: Word('выплёскивает', 4),
  plural1stPerson: Word('выплёскиваем', 4),
  plural2ndPerson: Word('выплёскиваете', 4),
  plural3rdPerson: Word('выплёскивают', 4),
  masculinePast: Word('выплёскивал', 4),
  femininePast: Word('выплёскивала', 4),
  neuterPast: Word('выплёскивало', 4),
  pluralPast: Word('выплёскивали', 4),
  imperativeInformal: Word('выплёскивай', 4),
  imperativeFormal: Word('выплёскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выплёскивать.name.text, выплёскивать);

export { выплёскивать };