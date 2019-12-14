import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пописывать: PerfectVerb = {
  name: Word('пописывать', 3),
  singular1stPerson: Word('пописываю', 3),
  singular2ndPerson: Word('пописываешь', 3),
  singular3rdPerson: Word('пописывает', 3),
  plural1stPerson: Word('пописываем', 3),
  plural2ndPerson: Word('пописываете', 3),
  plural3rdPerson: Word('пописывают', 3),
  masculinePast: Word('пописывал', 3),
  femininePast: Word('пописывала', 3),
  neuterPast: Word('пописывало', 3),
  pluralPast: Word('пописывали', 3),
  imperativeInformal: Word('пописывай', 3),
  imperativeFormal: Word('пописывайте', 3),
  imperfect: [],
};

perfectVerbs.set(пописывать.name.text, пописывать);

export { пописывать };