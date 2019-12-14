import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расквартировывать: PerfectVerb = {
  name: Word('расквартировывать', 10),
  singular1stPerson: Word('расквартировываю', 10),
  singular2ndPerson: Word('расквартировываешь', 10),
  singular3rdPerson: Word('расквартировывает', 10),
  plural1stPerson: Word('расквартировываем', 10),
  plural2ndPerson: Word('расквартировываете', 10),
  plural3rdPerson: Word('расквартировывают', 10),
  masculinePast: Word('расквартировывал', 10),
  femininePast: Word('расквартировывала', 10),
  neuterPast: Word('расквартировывало', 10),
  pluralPast: Word('расквартировывали', 10),
  imperativeInformal: Word('расквартировывай', 10),
  imperativeFormal: Word('расквартировывайте', 10),
  imperfect: [],
};

perfectVerbs.set(расквартировывать.name.text, расквартировывать);

export { расквартировывать };