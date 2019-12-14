import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропитывать: PerfectVerb = {
  name: Word('пропитывать', 4),
  singular1stPerson: Word('пропитываю', 4),
  singular2ndPerson: Word('пропитываешь', 4),
  singular3rdPerson: Word('пропитывает', 4),
  plural1stPerson: Word('пропитываем', 4),
  plural2ndPerson: Word('пропитываете', 4),
  plural3rdPerson: Word('пропитывают', 4),
  masculinePast: Word('пропитывал', 4),
  femininePast: Word('пропитывала', 4),
  neuterPast: Word('пропитывало', 4),
  pluralPast: Word('пропитывали', 4),
  imperativeInformal: Word('пропитывай', 4),
  imperativeFormal: Word('пропитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(пропитывать.name.text, пропитывать);

export { пропитывать };