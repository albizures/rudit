import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подобать: PerfectVerb = {
  name: Word('подобать', 5),
  singular1stPerson: Word('подобаю', 5),
  singular2ndPerson: Word('подобаешь', 5),
  singular3rdPerson: Word('подобает', 5),
  plural1stPerson: Word('подобаем', 5),
  plural2ndPerson: Word('подобаете', 5),
  plural3rdPerson: Word('подобают', 5),
  masculinePast: Word('подобал', 5),
  femininePast: Word('подобала', 5),
  neuterPast: Word('подобало', 5),
  pluralPast: Word('подобали', 5),
  imperativeInformal: Word('подобай', 5),
  imperativeFormal: Word('подобайте', 5),
  imperfect: [],
};

perfectVerbs.set(подобать.name.text, подобать);

export { подобать };