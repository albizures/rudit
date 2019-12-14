import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлизывать: PerfectVerb = {
  name: Word('подлизывать', 4),
  singular1stPerson: Word('подлизываю', 4),
  singular2ndPerson: Word('подлизываешь', 4),
  singular3rdPerson: Word('подлизывает', 4),
  plural1stPerson: Word('подлизываем', 4),
  plural2ndPerson: Word('подлизываете', 4),
  plural3rdPerson: Word('подлизывают', 4),
  masculinePast: Word('подлизывал', 4),
  femininePast: Word('подлизывала', 4),
  neuterPast: Word('подлизывало', 4),
  pluralPast: Word('подлизывали', 4),
  imperativeInformal: Word('подлизывай', 4),
  imperativeFormal: Word('подлизывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подлизывать.name.text, подлизывать);

export { подлизывать };