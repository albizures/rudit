import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затягивать: PerfectVerb = {
  name: Word('затягивать', 3),
  singular1stPerson: Word('затягиваю', 3),
  singular2ndPerson: Word('затягиваешь', 3),
  singular3rdPerson: Word('затягивает', 3),
  plural1stPerson: Word('затягиваем', 3),
  plural2ndPerson: Word('затягиваете', 3),
  plural3rdPerson: Word('затягивают', 3),
  masculinePast: Word('затягивал', 3),
  femininePast: Word('затягивала', 3),
  neuterPast: Word('затягивало', 3),
  pluralPast: Word('затягивали', 3),
  imperativeInformal: Word('затягивай', 3),
  imperativeFormal: Word('затягивайте', 3),
  imperfect: [],
};

perfectVerbs.set(затягивать.name.text, затягивать);

export { затягивать };