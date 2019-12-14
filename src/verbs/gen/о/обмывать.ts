import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмывать: PerfectVerb = {
  name: Word('обмывать', 5),
  singular1stPerson: Word('обмываю', 5),
  singular2ndPerson: Word('обмываешь', 5),
  singular3rdPerson: Word('обмывает', 5),
  plural1stPerson: Word('обмываем', 5),
  plural2ndPerson: Word('обмываете', 5),
  plural3rdPerson: Word('обмывают', 5),
  masculinePast: Word('обмывал', 5),
  femininePast: Word('обмывала', 5),
  neuterPast: Word('обмывало', 5),
  pluralPast: Word('обмывали', 5),
  imperativeInformal: Word('обмывай', 5),
  imperativeFormal: Word('обмывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обмывать.name.text, обмывать);

export { обмывать };