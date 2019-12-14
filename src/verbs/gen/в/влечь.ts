import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влечь: PerfectVerb = {
  name: Word('влечь', 2),
  singular1stPerson: Word('влеку', 4),
  singular2ndPerson: Word('влечёшь', 2),
  singular3rdPerson: Word('влечёт', 2),
  plural1stPerson: Word('влечём', 2),
  plural2ndPerson: Word('влечёте', 2),
  plural3rdPerson: Word('влекут', 4),
  masculinePast: Word('влёк', 2),
  femininePast: Word('влекла', 5),
  neuterPast: Word('влекло', 5),
  pluralPast: Word('влекли', 5),
  imperativeInformal: Word('влеки', 4),
  imperativeFormal: Word('влеките', 4),
  imperfect: [],
};

perfectVerbs.set(влечь.name.text, влечь);

export { влечь };