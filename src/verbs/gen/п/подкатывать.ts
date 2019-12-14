import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкатывать: PerfectVerb = {
  name: Word('подкатывать', 4),
  singular1stPerson: Word('подкатываю', 4),
  singular2ndPerson: Word('подкатываешь', 4),
  singular3rdPerson: Word('подкатывает', 4),
  plural1stPerson: Word('подкатываем', 4),
  plural2ndPerson: Word('подкатываете', 4),
  plural3rdPerson: Word('подкатывают', 4),
  masculinePast: Word('подкатывал', 4),
  femininePast: Word('подкатывала', 4),
  neuterPast: Word('подкатывало', 4),
  pluralPast: Word('подкатывали', 4),
  imperativeInformal: Word('подкатывай', 4),
  imperativeFormal: Word('подкатывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подкатывать.name.text, подкатывать);

export { подкатывать };