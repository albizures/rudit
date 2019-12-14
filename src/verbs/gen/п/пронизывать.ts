import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронизывать: PerfectVerb = {
  name: Word('пронизывать', 4),
  singular1stPerson: Word('пронизываю', 4),
  singular2ndPerson: Word('пронизываешь', 4),
  singular3rdPerson: Word('пронизывает', 4),
  plural1stPerson: Word('пронизываем', 4),
  plural2ndPerson: Word('пронизываете', 4),
  plural3rdPerson: Word('пронизывают', 4),
  masculinePast: Word('пронизывал', 4),
  femininePast: Word('пронизывала', 4),
  neuterPast: Word('пронизывало', 4),
  pluralPast: Word('пронизывали', 4),
  imperativeInformal: Word('пронизывай', 4),
  imperativeFormal: Word('пронизывайте', 4),
  imperfect: [],
};

perfectVerbs.set(пронизывать.name.text, пронизывать);

export { пронизывать };