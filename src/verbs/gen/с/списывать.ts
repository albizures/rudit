import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const списывать: PerfectVerb = {
  name: Word('списывать', 2),
  singular1stPerson: Word('списываю', 2),
  singular2ndPerson: Word('списываешь', 2),
  singular3rdPerson: Word('списывает', 2),
  plural1stPerson: Word('списываем', 2),
  plural2ndPerson: Word('списываете', 2),
  plural3rdPerson: Word('списывают', 2),
  masculinePast: Word('списывал', 2),
  femininePast: Word('списывала', 2),
  neuterPast: Word('списывало', 2),
  pluralPast: Word('списывали', 2),
  imperativeInformal: Word('списывай', 2),
  imperativeFormal: Word('списывайте', 2),
  imperfect: [],
};

perfectVerbs.set(списывать.name.text, списывать);

export { списывать };