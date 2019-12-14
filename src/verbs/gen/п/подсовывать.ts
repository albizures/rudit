import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсовывать: PerfectVerb = {
  name: Word('подсовывать', 4),
  singular1stPerson: Word('подсовываю', 4),
  singular2ndPerson: Word('подсовываешь', 4),
  singular3rdPerson: Word('подсовывает', 4),
  plural1stPerson: Word('подсовываем', 4),
  plural2ndPerson: Word('подсовываете', 4),
  plural3rdPerson: Word('подсовывают', 4),
  masculinePast: Word('подсовывал', 4),
  femininePast: Word('подсовывала', 4),
  neuterPast: Word('подсовывало', 4),
  pluralPast: Word('подсовывали', 4),
  imperativeInformal: Word('подсовывай', 4),
  imperativeFormal: Word('подсовывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подсовывать.name.text, подсовывать);

export { подсовывать };