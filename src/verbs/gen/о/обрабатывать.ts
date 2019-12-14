import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрабатывать: PerfectVerb = {
  name: Word('обрабатывать', 5),
  singular1stPerson: Word('обрабатываю', 5),
  singular2ndPerson: Word('обрабатываешь', 5),
  singular3rdPerson: Word('обрабатывает', 5),
  plural1stPerson: Word('обрабатываем', 5),
  plural2ndPerson: Word('обрабатываете', 5),
  plural3rdPerson: Word('обрабатывают', 5),
  masculinePast: Word('обрабатывал', 5),
  femininePast: Word('обрабатывала', 5),
  neuterPast: Word('обрабатывало', 5),
  pluralPast: Word('обрабатывали', 5),
  imperativeInformal: Word('обрабатывай', 5),
  imperativeFormal: Word('обрабатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обрабатывать.name.text, обрабатывать);

export { обрабатывать };