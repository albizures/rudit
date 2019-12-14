import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противополагать: PerfectVerb = {
  name: Word('противополагать', 12),
  singular1stPerson: Word('противополагаю', 12),
  singular2ndPerson: Word('противополагаешь', 12),
  singular3rdPerson: Word('противополагает', 12),
  plural1stPerson: Word('противополагаем', 12),
  plural2ndPerson: Word('противополагаете', 12),
  plural3rdPerson: Word('противополагают', 12),
  masculinePast: Word('противополагал', 12),
  femininePast: Word('противополагала', 12),
  neuterPast: Word('противополагало', 12),
  pluralPast: Word('противополагали', 12),
  imperativeInformal: Word('противополагай', 12),
  imperativeFormal: Word('противополагайте', 12),
  imperfect: [],
};

perfectVerbs.set(противополагать.name.text, противополагать);

export { противополагать };