import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приказывать: PerfectVerb = {
  name: Word('приказывать', 4),
  singular1stPerson: Word('приказываю', 4),
  singular2ndPerson: Word('приказываешь', 4),
  singular3rdPerson: Word('приказывает', 4),
  plural1stPerson: Word('приказываем', 4),
  plural2ndPerson: Word('приказываете', 4),
  plural3rdPerson: Word('приказывают', 4),
  masculinePast: Word('приказывал', 4),
  femininePast: Word('приказывала', 4),
  neuterPast: Word('приказывало', 4),
  pluralPast: Word('приказывали', 4),
  imperativeInformal: Word('приказывай', 4),
  imperativeFormal: Word('приказывайте', 4),
  imperfect: ['приказать'],
};

perfectVerbs.set(приказывать.name.text, приказывать);

export { приказывать };