import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкорнать: PerfectVerb = {
  name: Word('обкорнать', 6),
  singular1stPerson: Word('обкорнаю', 6),
  singular2ndPerson: Word('обкорнаешь', 6),
  singular3rdPerson: Word('обкорнает', 6),
  plural1stPerson: Word('обкорнаем', 6),
  plural2ndPerson: Word('обкорнаете', 6),
  plural3rdPerson: Word('обкорнают', 6),
  masculinePast: Word('обкорнал', 6),
  femininePast: Word('обкорнала', 6),
  neuterPast: Word('обкорнало', 6),
  pluralPast: Word('обкорнали', 6),
  imperativeInformal: Word('обкорнай', 6),
  imperativeFormal: Word('обкорнайте', 6),
  imperfect: [],
};

perfectVerbs.set(обкорнать.name.text, обкорнать);

export { обкорнать };