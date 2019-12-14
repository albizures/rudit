import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жать: PerfectVerb = {
  name: Word('жать', 1),
  singular1stPerson: Word('жму', 2),
  singular2ndPerson: Word('жмёшь', 2),
  singular3rdPerson: Word('жмёт', 2),
  plural1stPerson: Word('жмём', 2),
  plural2ndPerson: Word('жмёте', 4),
  plural3rdPerson: Word('жмут', 2),
  masculinePast: Word('жал', 1),
  femininePast: Word('жала', 1),
  neuterPast: Word('жало', 1),
  pluralPast: Word('жали', 1),
  imperativeInformal: Word('жми', 2),
  imperativeFormal: Word('жмите', 2),
  imperfect: ['сжать','пожать'],
};

perfectVerbs.set(жать.name.text, жать);

export { жать };