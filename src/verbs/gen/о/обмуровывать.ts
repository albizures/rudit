import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмуровывать: PerfectVerb = {
  name: Word('обмуровывать', 5),
  singular1stPerson: Word('обмуровываю', 5),
  singular2ndPerson: Word('обмуровываешь', 5),
  singular3rdPerson: Word('обмуровывает', 5),
  plural1stPerson: Word('обмуровываем', 5),
  plural2ndPerson: Word('обмуровываете', 5),
  plural3rdPerson: Word('обмуровывают', 5),
  masculinePast: Word('обмуровывал', 5),
  femininePast: Word('обмуровывала', 5),
  neuterPast: Word('обмуровывало', 5),
  pluralPast: Word('обмуровывали', 5),
  imperativeInformal: Word('обмуровывай', 5),
  imperativeFormal: Word('обмуровывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обмуровывать.name.text, обмуровывать);

export { обмуровывать };