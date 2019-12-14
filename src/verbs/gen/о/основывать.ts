import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const основывать: PerfectVerb = {
  name: Word('основывать', 3),
  singular1stPerson: Word('основываю', 3),
  singular2ndPerson: Word('основываешь', 3),
  singular3rdPerson: Word('основывает', 3),
  plural1stPerson: Word('основываем', 3),
  plural2ndPerson: Word('основываете', 3),
  plural3rdPerson: Word('основывают', 3),
  masculinePast: Word('основывал', 3),
  femininePast: Word('основывала', 3),
  neuterPast: Word('основывало', 3),
  pluralPast: Word('основывали', 3),
  imperativeInformal: Word('основывай', 3),
  imperativeFormal: Word('основывайте', 3),
  imperfect: ['основать'],
};

perfectVerbs.set(основывать.name.text, основывать);

export { основывать };