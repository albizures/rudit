import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропалывать: PerfectVerb = {
  name: Word('пропалывать', 4),
  singular1stPerson: Word('пропалываю', 4),
  singular2ndPerson: Word('пропалываешь', 4),
  singular3rdPerson: Word('пропалывает', 4),
  plural1stPerson: Word('пропалываем', 4),
  plural2ndPerson: Word('пропалываете', 4),
  plural3rdPerson: Word('пропалывают', 4),
  masculinePast: Word('пропалывал', 4),
  femininePast: Word('пропалывала', 4),
  neuterPast: Word('пропалывало', 4),
  pluralPast: Word('пропалывали', 4),
  imperativeInformal: Word('пропалывай', 4),
  imperativeFormal: Word('пропалывайте', 4),
  imperfect: [],
};

perfectVerbs.set(пропалывать.name.text, пропалывать);

export { пропалывать };