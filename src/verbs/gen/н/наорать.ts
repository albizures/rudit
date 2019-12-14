import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наорать: PerfectVerb = {
  name: Word('наорать', 4),
  singular1stPerson: Word('наору', 4),
  singular2ndPerson: Word('наорёшь', 1),
  singular3rdPerson: Word('наорёт', 1),
  plural1stPerson: Word('наорём', 1),
  plural2ndPerson: Word('наорёте', 1),
  plural3rdPerson: Word('наорут', 4),
  masculinePast: Word('наорал', 4),
  femininePast: Word('наорала', 4),
  neuterPast: Word('наорало', 4),
  pluralPast: Word('наорали', 4),
  imperativeInformal: Word('наори', 4),
  imperativeFormal: Word('наорите', 4),
  imperfect: [],
};

perfectVerbs.set(наорать.name.text, наорать);

export { наорать };