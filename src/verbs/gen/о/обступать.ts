import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обступать: PerfectVerb = {
  name: Word('обступать', 6),
  singular1stPerson: Word('обступаю', 6),
  singular2ndPerson: Word('обступаешь', 6),
  singular3rdPerson: Word('обступает', 6),
  plural1stPerson: Word('обступаем', 6),
  plural2ndPerson: Word('обступаете', 6),
  plural3rdPerson: Word('обступают', 6),
  masculinePast: Word('обступал', 6),
  femininePast: Word('обступала', 6),
  neuterPast: Word('обступало', 6),
  pluralPast: Word('обступали', 6),
  imperativeInformal: Word('обступай', 6),
  imperativeFormal: Word('обступайте', 6),
  imperfect: [],
};

perfectVerbs.set(обступать.name.text, обступать);

export { обступать };