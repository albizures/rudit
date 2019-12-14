import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырвать: PerfectVerb = {
  name: Word('вырвать', 1),
  singular1stPerson: Word('вырву', 1),
  singular2ndPerson: Word('вырвешь', 1),
  singular3rdPerson: Word('вырвет', 1),
  plural1stPerson: Word('вырвем', 1),
  plural2ndPerson: Word('вырвете', 1),
  plural3rdPerson: Word('вырвут', 1),
  masculinePast: Word('вырвал', 1),
  femininePast: Word('вырвала', 1),
  neuterPast: Word('вырвало', 1),
  pluralPast: Word('вырвали', 1),
  imperativeInformal: Word('вырви', 1),
  imperativeFormal: Word('вырвите', 1),
  imperfect: ['вырывать'],
};

perfectVerbs.set(вырвать.name.text, вырвать);

export { вырвать };