import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрисовывать: PerfectVerb = {
  name: Word('обрисовывать', 5),
  singular1stPerson: Word('обрисовываю', 5),
  singular2ndPerson: Word('обрисовываешь', 5),
  singular3rdPerson: Word('обрисовывает', 5),
  plural1stPerson: Word('обрисовываем', 5),
  plural2ndPerson: Word('обрисовываете', 5),
  plural3rdPerson: Word('обрисовывают', 5),
  masculinePast: Word('обрисовывал', 5),
  femininePast: Word('обрисовывала', 5),
  neuterPast: Word('обрисовывало', 5),
  pluralPast: Word('обрисовывали', 5),
  imperativeInformal: Word('обрисовывай', 5),
  imperativeFormal: Word('обрисовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обрисовывать.name.text, обрисовывать);

export { обрисовывать };