import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплющивать: PerfectVerb = {
  name: Word('расплющивать', 5),
  singular1stPerson: Word('расплющиваю', 5),
  singular2ndPerson: Word('расплющиваешь', 5),
  singular3rdPerson: Word('расплющивает', 5),
  plural1stPerson: Word('расплющиваем', 5),
  plural2ndPerson: Word('расплющиваете', 5),
  plural3rdPerson: Word('расплющивают', 5),
  masculinePast: Word('расплющивал', 5),
  femininePast: Word('расплющивала', 5),
  neuterPast: Word('расплющивало', 5),
  pluralPast: Word('расплющивали', 5),
  imperativeInformal: Word('расплющивай', 5),
  imperativeFormal: Word('расплющивайте', 5),
  imperfect: [],
};

perfectVerbs.set(расплющивать.name.text, расплющивать);

export { расплющивать };