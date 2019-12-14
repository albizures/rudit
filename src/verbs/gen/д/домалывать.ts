import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домалывать: PerfectVerb = {
  name: Word('домалывать', 3),
  singular1stPerson: Word('домалываю', 3),
  singular2ndPerson: Word('домалываешь', 3),
  singular3rdPerson: Word('домалывает', 3),
  plural1stPerson: Word('домалываем', 3),
  plural2ndPerson: Word('домалываете', 3),
  plural3rdPerson: Word('домалывают', 3),
  masculinePast: Word('домалывал', 3),
  femininePast: Word('домалывала', 3),
  neuterPast: Word('домалывало', 3),
  pluralPast: Word('домалывали', 3),
  imperativeInformal: Word('домалывай', 3),
  imperativeFormal: Word('домалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(домалывать.name.text, домалывать);

export { домалывать };