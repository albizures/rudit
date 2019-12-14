import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приникать: PerfectVerb = {
  name: Word('приникать', 6),
  singular1stPerson: Word('приникаю', 6),
  singular2ndPerson: Word('приникаешь', 6),
  singular3rdPerson: Word('приникает', 6),
  plural1stPerson: Word('приникаем', 6),
  plural2ndPerson: Word('приникаете', 6),
  plural3rdPerson: Word('приникают', 6),
  masculinePast: Word('приникал', 6),
  femininePast: Word('приникала', 6),
  neuterPast: Word('приникало', 6),
  pluralPast: Word('приникали', 6),
  imperativeInformal: Word('приникай', 6),
  imperativeFormal: Word('приникайте', 6),
  imperfect: [],
};

perfectVerbs.set(приникать.name.text, приникать);

export { приникать };