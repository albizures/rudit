import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приступать: PerfectVerb = {
  name: Word('приступать', 7),
  singular1stPerson: Word('приступаю', 7),
  singular2ndPerson: Word('приступаешь', 7),
  singular3rdPerson: Word('приступает', 7),
  plural1stPerson: Word('приступаем', 7),
  plural2ndPerson: Word('приступаете', 7),
  plural3rdPerson: Word('приступают', 7),
  masculinePast: Word('приступал', 7),
  femininePast: Word('приступала', 7),
  neuterPast: Word('приступало', 7),
  pluralPast: Word('приступали', 7),
  imperativeInformal: Word('приступай', 7),
  imperativeFormal: Word('приступайте', 7),
  imperfect: [],
};

perfectVerbs.set(приступать.name.text, приступать);

export { приступать };