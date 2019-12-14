import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домывать: PerfectVerb = {
  name: Word('домывать', 5),
  singular1stPerson: Word('домываю', 5),
  singular2ndPerson: Word('домываешь', 5),
  singular3rdPerson: Word('домывает', 5),
  plural1stPerson: Word('домываем', 5),
  plural2ndPerson: Word('домываете', 5),
  plural3rdPerson: Word('домывают', 5),
  masculinePast: Word('домывал', 5),
  femininePast: Word('домывала', 5),
  neuterPast: Word('домывало', 5),
  pluralPast: Word('домывали', 5),
  imperativeInformal: Word('домывай', 5),
  imperativeFormal: Word('домывайте', 5),
  imperfect: [],
};

perfectVerbs.set(домывать.name.text, домывать);

export { домывать };