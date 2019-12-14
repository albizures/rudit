import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подступать: PerfectVerb = {
  name: Word('подступать', 7),
  singular1stPerson: Word('подступаю', 7),
  singular2ndPerson: Word('подступаешь', 7),
  singular3rdPerson: Word('подступает', 7),
  plural1stPerson: Word('подступаем', 7),
  plural2ndPerson: Word('подступаете', 7),
  plural3rdPerson: Word('подступают', 7),
  masculinePast: Word('подступал', 7),
  femininePast: Word('подступала', 7),
  neuterPast: Word('подступало', 7),
  pluralPast: Word('подступали', 7),
  imperativeInformal: Word('подступай', 7),
  imperativeFormal: Word('подступайте', 7),
  imperfect: [],
};

perfectVerbs.set(подступать.name.text, подступать);

export { подступать };