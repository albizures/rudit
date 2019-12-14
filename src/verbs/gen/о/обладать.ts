import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обладать: PerfectVerb = {
  name: Word('обладать', 5),
  singular1stPerson: Word('обладаю', 5),
  singular2ndPerson: Word('обладаешь', 5),
  singular3rdPerson: Word('обладает', 5),
  plural1stPerson: Word('обладаем', 5),
  plural2ndPerson: Word('обладаете', 5),
  plural3rdPerson: Word('обладают', 5),
  masculinePast: Word('обладал', 5),
  femininePast: Word('обладала', 5),
  neuterPast: Word('обладало', 5),
  pluralPast: Word('обладали', 5),
  imperativeInformal: Word('обладай', 5),
  imperativeFormal: Word('обладайте', 5),
  imperfect: [],
};

perfectVerbs.set(обладать.name.text, обладать);

export { обладать };