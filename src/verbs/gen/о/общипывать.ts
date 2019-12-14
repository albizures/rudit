import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const общипывать: PerfectVerb = {
  name: Word('общипывать', 3),
  singular1stPerson: Word('общипываю', 3),
  singular2ndPerson: Word('общипываешь', 3),
  singular3rdPerson: Word('общипывает', 3),
  plural1stPerson: Word('общипываем', 3),
  plural2ndPerson: Word('общипываете', 3),
  plural3rdPerson: Word('общипывают', 3),
  masculinePast: Word('общипывал', 3),
  femininePast: Word('общипывала', 3),
  neuterPast: Word('общипывало', 3),
  pluralPast: Word('общипывали', 3),
  imperativeInformal: Word('общипывай', 3),
  imperativeFormal: Word('общипывайте', 3),
  imperfect: [],
};

perfectVerbs.set(общипывать.name.text, общипывать);

export { общипывать };