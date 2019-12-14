import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрывать: PerfectVerb = {
  name: Word('обрывать', 5),
  singular1stPerson: Word('обрываю', 5),
  singular2ndPerson: Word('обрываешь', 5),
  singular3rdPerson: Word('обрывает', 5),
  plural1stPerson: Word('обрываем', 5),
  plural2ndPerson: Word('обрываете', 5),
  plural3rdPerson: Word('обрывают', 5),
  masculinePast: Word('обрывал', 5),
  femininePast: Word('обрывала', 5),
  neuterPast: Word('обрывало', 5),
  pluralPast: Word('обрывали', 5),
  imperativeInformal: Word('обрывай', 5),
  imperativeFormal: Word('обрывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обрывать.name.text, обрывать);

export { обрывать };