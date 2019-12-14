import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстирывать: PerfectVerb = {
  name: Word('обстирывать', 4),
  singular1stPerson: Word('обстирываю', 4),
  singular2ndPerson: Word('обстирываешь', 4),
  singular3rdPerson: Word('обстирывает', 4),
  plural1stPerson: Word('обстирываем', 4),
  plural2ndPerson: Word('обстирываете', 4),
  plural3rdPerson: Word('обстирывают', 4),
  masculinePast: Word('обстирывал', 4),
  femininePast: Word('обстирывала', 4),
  neuterPast: Word('обстирывало', 4),
  pluralPast: Word('обстирывали', 4),
  imperativeInformal: Word('обстирывай', 4),
  imperativeFormal: Word('обстирывайте', 4),
  imperfect: [],
};

perfectVerbs.set(обстирывать.name.text, обстирывать);

export { обстирывать };