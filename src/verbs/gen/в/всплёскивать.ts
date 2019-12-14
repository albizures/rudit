import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всплёскивать: PerfectVerb = {
  name: Word('всплёскивать', 9),
  singular1stPerson: Word('всплёскиваю', 9),
  singular2ndPerson: Word('всплёскиваешь', 9),
  singular3rdPerson: Word('всплёскивает', 9),
  plural1stPerson: Word('всплёскиваем', 9),
  plural2ndPerson: Word('всплёскиваете', 9),
  plural3rdPerson: Word('всплёскивают', 9),
  masculinePast: Word('всплёскивал', 9),
  femininePast: Word('всплёскивала', 9),
  neuterPast: Word('всплёскивало', 9),
  pluralPast: Word('всплёскивали', 9),
  imperativeInformal: Word('всплёскивай', 9),
  imperativeFormal: Word('всплёскивайте', 9),
  imperfect: [],
};

perfectVerbs.set(всплёскивать.name.text, всплёскивать);

export { всплёскивать };