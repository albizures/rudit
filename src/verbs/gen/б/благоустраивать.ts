import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благоустраивать: PerfectVerb = {
  name: Word('благоустраивать', 9),
  singular1stPerson: Word('благоустраиваю', 9),
  singular2ndPerson: Word('благоустраиваешь', 9),
  singular3rdPerson: Word('благоустраивает', 9),
  plural1stPerson: Word('благоустраиваем', 9),
  plural2ndPerson: Word('благоустраиваете', 9),
  plural3rdPerson: Word('благоустраивают', 9),
  masculinePast: Word('благоустраивал', 9),
  femininePast: Word('благоустраивала', 9),
  neuterPast: Word('благоустраивало', 9),
  pluralPast: Word('благоустраивали', 9),
  imperativeInformal: Word('благоустраивай', 9),
  imperativeFormal: Word('благоустраивайте', 9),
  imperfect: [],
};

perfectVerbs.set(благоустраивать.name.text, благоустраивать);

export { благоустраивать };