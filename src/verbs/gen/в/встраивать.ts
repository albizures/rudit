import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встраивать: PerfectVerb = {
  name: Word('встраивать', 4),
  singular1stPerson: Word('встраиваю', 4),
  singular2ndPerson: Word('встраиваешь', 4),
  singular3rdPerson: Word('встраивает', 4),
  plural1stPerson: Word('встраиваем', 4),
  plural2ndPerson: Word('встраиваете', 4),
  plural3rdPerson: Word('встраивают', 4),
  masculinePast: Word('встраивал', 4),
  femininePast: Word('встраивала', 4),
  neuterPast: Word('встраивало', 4),
  pluralPast: Word('встраивали', 4),
  imperativeInformal: Word('встраивай', 4),
  imperativeFormal: Word('встраивайте', 4),
  imperfect: [],
};

perfectVerbs.set(встраивать.name.text, встраивать);

export { встраивать };