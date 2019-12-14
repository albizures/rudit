import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересказывать: PerfectVerb = {
  name: Word('пересказывать', 6),
  singular1stPerson: Word('пересказываю', 6),
  singular2ndPerson: Word('пересказываешь', 6),
  singular3rdPerson: Word('пересказывает', 6),
  plural1stPerson: Word('пересказываем', 6),
  plural2ndPerson: Word('пересказываете', 6),
  plural3rdPerson: Word('пересказывают', 6),
  masculinePast: Word('пересказывал', 6),
  femininePast: Word('пересказывала', 6),
  neuterPast: Word('пересказывало', 6),
  pluralPast: Word('пересказывали', 6),
  imperativeInformal: Word('пересказывай', 6),
  imperativeFormal: Word('пересказывайте', 6),
  imperfect: [],
};

perfectVerbs.set(пересказывать.name.text, пересказывать);

export { пересказывать };