import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сечь: PerfectVerb = {
  name: Word('сечь', 1),
  singular1stPerson: Word('секу', 3),
  singular2ndPerson: Word('сечёшь', 3),
  singular3rdPerson: Word('сечёт', 3),
  plural1stPerson: Word('сечём', 3),
  plural2ndPerson: Word('сечёте', 3),
  plural3rdPerson: Word('секут', 3),
  masculinePast: Word('сёк', 1),
  femininePast: Word('секла', 4),
  neuterPast: Word('секло', 4),
  pluralPast: Word('секли', 4),
  imperativeInformal: Word('секи', 3),
  imperativeFormal: Word('секите', 3),
  imperfect: ['высечь'],
};

perfectVerbs.set(сечь.name.text, сечь);

export { сечь };