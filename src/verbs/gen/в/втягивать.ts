import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втягивать: PerfectVerb = {
  name: Word('втягивать', 2),
  singular1stPerson: Word('втягиваю', 2),
  singular2ndPerson: Word('втягиваешь', 2),
  singular3rdPerson: Word('втягивает', 2),
  plural1stPerson: Word('втягиваем', 2),
  plural2ndPerson: Word('втягиваете', 2),
  plural3rdPerson: Word('втягивают', 2),
  masculinePast: Word('втягивал', 2),
  femininePast: Word('втягивала', 2),
  neuterPast: Word('втягивало', 2),
  pluralPast: Word('втягивали', 2),
  imperativeInformal: Word('втягивай', 2),
  imperativeFormal: Word('втягивайте', 2),
  imperfect: [],
};

perfectVerbs.set(втягивать.name.text, втягивать);

export { втягивать };