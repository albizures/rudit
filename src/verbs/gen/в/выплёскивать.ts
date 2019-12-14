import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплёскивать: PerfectVerb = {
  name: Word('выплёскивать', 9),
  singular1stPerson: Word('выплёскиваю', 9),
  singular2ndPerson: Word('выплёскиваешь', 9),
  singular3rdPerson: Word('выплёскивает', 9),
  plural1stPerson: Word('выплёскиваем', 9),
  plural2ndPerson: Word('выплёскиваете', 9),
  plural3rdPerson: Word('выплёскивают', 9),
  masculinePast: Word('выплёскивал', 9),
  femininePast: Word('выплёскивала', 9),
  neuterPast: Word('выплёскивало', 9),
  pluralPast: Word('выплёскивали', 9),
  imperativeInformal: Word('выплёскивай', 9),
  imperativeFormal: Word('выплёскивайте', 9),
  imperfect: [],
};

perfectVerbs.set(выплёскивать.name.text, выплёскивать);

export { выплёскивать };