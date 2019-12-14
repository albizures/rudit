import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стягивать: PerfectVerb = {
  name: Word('стягивать', 2),
  singular1stPerson: Word('стягиваю', 2),
  singular2ndPerson: Word('стягиваешь', 2),
  singular3rdPerson: Word('стягивает', 2),
  plural1stPerson: Word('стягиваем', 2),
  plural2ndPerson: Word('стягиваете', 2),
  plural3rdPerson: Word('стягивают', 2),
  masculinePast: Word('стягивал', 2),
  femininePast: Word('стягивала', 2),
  neuterPast: Word('стягивало', 2),
  pluralPast: Word('стягивали', 2),
  imperativeInformal: Word('стягивай', 2),
  imperativeFormal: Word('стягивайте', 2),
  imperfect: [],
};

perfectVerbs.set(стягивать.name.text, стягивать);

export { стягивать };