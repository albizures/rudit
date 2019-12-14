import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всплёскивать: PerfectVerb = {
  name: Word('всплёскивать', 4),
  singular1stPerson: Word('всплёскиваю', 4),
  singular2ndPerson: Word('всплёскиваешь', 4),
  singular3rdPerson: Word('всплёскивает', 4),
  plural1stPerson: Word('всплёскиваем', 4),
  plural2ndPerson: Word('всплёскиваете', 4),
  plural3rdPerson: Word('всплёскивают', 4),
  masculinePast: Word('всплёскивал', 4),
  femininePast: Word('всплёскивала', 4),
  neuterPast: Word('всплёскивало', 4),
  pluralPast: Word('всплёскивали', 4),
  imperativeInformal: Word('всплёскивай', 4),
  imperativeFormal: Word('всплёскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(всплёскивать.name.text, всплёскивать);

export { всплёскивать };