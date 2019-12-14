import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созывать: PerfectVerb = {
  name: Word('созывать', 5),
  singular1stPerson: Word('созываю', 5),
  singular2ndPerson: Word('созываешь', 5),
  singular3rdPerson: Word('созывает', 5),
  plural1stPerson: Word('созываем', 5),
  plural2ndPerson: Word('созываете', 5),
  plural3rdPerson: Word('созывают', 5),
  masculinePast: Word('созывал', 5),
  femininePast: Word('созывала', 5),
  neuterPast: Word('созывало', 5),
  pluralPast: Word('созывали', 5),
  imperativeInformal: Word('созывай', 5),
  imperativeFormal: Word('созывайте', 5),
  imperfect: [],
};

perfectVerbs.set(созывать.name.text, созывать);

export { созывать };