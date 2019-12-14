import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облечь: PerfectVerb = {
  name: Word('облечь', 3),
  singular1stPerson: Word('облеку', 5),
  singular2ndPerson: Word('облечёшь', 5),
  singular3rdPerson: Word('облечёт', 5),
  plural1stPerson: Word('облечём', 5),
  plural2ndPerson: Word('облечёте', 5),
  plural3rdPerson: Word('облекут', 5),
  masculinePast: Word('облёк', 3),
  femininePast: Word('облекла', 6),
  neuterPast: Word('облекло', 6),
  pluralPast: Word('облекли', 6),
  imperativeInformal: Word('облеки', 5),
  imperativeFormal: Word('облеките', 5),
  imperfect: [],
};

perfectVerbs.set(облечь.name.text, облечь);

export { облечь };