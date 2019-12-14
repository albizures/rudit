import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намывать: PerfectVerb = {
  name: Word('намывать', 5),
  singular1stPerson: Word('намываю', 5),
  singular2ndPerson: Word('намываешь', 5),
  singular3rdPerson: Word('намывает', 5),
  plural1stPerson: Word('намываем', 5),
  plural2ndPerson: Word('намываете', 5),
  plural3rdPerson: Word('намывают', 5),
  masculinePast: Word('намывал', 5),
  femininePast: Word('намывала', 5),
  neuterPast: Word('намывало', 5),
  pluralPast: Word('намывали', 5),
  imperativeInformal: Word('намывай', 5),
  imperativeFormal: Word('намывайте', 5),
  imperfect: [],
};

perfectVerbs.set(намывать.name.text, намывать);

export { намывать };