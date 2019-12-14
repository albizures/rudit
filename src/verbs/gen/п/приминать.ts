import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приминать: PerfectVerb = {
  name: Word('приминать', 6),
  singular1stPerson: Word('приминаю', 6),
  singular2ndPerson: Word('приминаешь', 6),
  singular3rdPerson: Word('приминает', 6),
  plural1stPerson: Word('приминаем', 6),
  plural2ndPerson: Word('приминаете', 6),
  plural3rdPerson: Word('приминают', 6),
  masculinePast: Word('приминал', 6),
  femininePast: Word('приминала', 6),
  neuterPast: Word('приминало', 6),
  pluralPast: Word('приминали', 6),
  imperativeInformal: Word('приминай', 6),
  imperativeFormal: Word('приминайте', 6),
  imperfect: [],
};

perfectVerbs.set(приминать.name.text, приминать);

export { приминать };