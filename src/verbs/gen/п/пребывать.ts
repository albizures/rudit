import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пребывать: PerfectVerb = {
  name: Word('пребывать', 6),
  singular1stPerson: Word('пребываю', 6),
  singular2ndPerson: Word('пребываешь', 6),
  singular3rdPerson: Word('пребывает', 6),
  plural1stPerson: Word('пребываем', 6),
  plural2ndPerson: Word('пребываете', 6),
  plural3rdPerson: Word('пребывают', 6),
  masculinePast: Word('пребывал', 6),
  femininePast: Word('пребывала', 6),
  neuterPast: Word('пребывало', 6),
  pluralPast: Word('пребывали', 6),
  imperativeInformal: Word('пребывай', 6),
  imperativeFormal: Word('пребывайте', 6),
  imperfect: [],
};

perfectVerbs.set(пребывать.name.text, пребывать);

export { пребывать };