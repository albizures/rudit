import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощипывать: PerfectVerb = {
  name: Word('пощипывать', 3),
  singular1stPerson: Word('пощипываю', 3),
  singular2ndPerson: Word('пощипываешь', 3),
  singular3rdPerson: Word('пощипывает', 3),
  plural1stPerson: Word('пощипываем', 3),
  plural2ndPerson: Word('пощипываете', 3),
  plural3rdPerson: Word('пощипывают', 3),
  masculinePast: Word('пощипывал', 3),
  femininePast: Word('пощипывала', 3),
  neuterPast: Word('пощипывало', 3),
  pluralPast: Word('пощипывали', 3),
  imperativeInformal: Word('пощипывай', 3),
  imperativeFormal: Word('пощипывайте', 3),
  imperfect: [],
};

perfectVerbs.set(пощипывать.name.text, пощипывать);

export { пощипывать };