import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заволакивать: PerfectVerb = {
  name: Word('заволакивать', 5),
  singular1stPerson: Word('заволакиваю', 5),
  singular2ndPerson: Word('заволакиваешь', 5),
  singular3rdPerson: Word('заволакивает', 5),
  plural1stPerson: Word('заволакиваем', 5),
  plural2ndPerson: Word('заволакиваете', 5),
  plural3rdPerson: Word('заволакивают', 5),
  masculinePast: Word('заволакивал', 5),
  femininePast: Word('заволакивала', 5),
  neuterPast: Word('заволакивало', 5),
  pluralPast: Word('заволакивали', 5),
  imperativeInformal: Word('заволакивай', 5),
  imperativeFormal: Word('заволакивайте', 5),
  imperfect: [],
};

perfectVerbs.set(заволакивать.name.text, заволакивать);

export { заволакивать };