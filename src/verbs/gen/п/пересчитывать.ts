import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересчитывать: PerfectVerb = {
  name: Word('пересчитывать', 6),
  singular1stPerson: Word('пересчитываю', 6),
  singular2ndPerson: Word('пересчитываешь', 6),
  singular3rdPerson: Word('пересчитывает', 6),
  plural1stPerson: Word('пересчитываем', 6),
  plural2ndPerson: Word('пересчитываете', 6),
  plural3rdPerson: Word('пересчитывают', 6),
  masculinePast: Word('пересчитывал', 6),
  femininePast: Word('пересчитывала', 6),
  neuterPast: Word('пересчитывало', 6),
  pluralPast: Word('пересчитывали', 6),
  imperativeInformal: Word('пересчитывай', 6),
  imperativeFormal: Word('пересчитывайте', 6),
  imperfect: [],
};

perfectVerbs.set(пересчитывать.name.text, пересчитывать);

export { пересчитывать };