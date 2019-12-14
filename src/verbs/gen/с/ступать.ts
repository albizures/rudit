import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ступать: PerfectVerb = {
  name: Word('ступать', 4),
  singular1stPerson: Word('ступаю', 4),
  singular2ndPerson: Word('ступаешь', 4),
  singular3rdPerson: Word('ступает', 4),
  plural1stPerson: Word('ступаем', 4),
  plural2ndPerson: Word('ступаете', 4),
  plural3rdPerson: Word('ступают', 4),
  masculinePast: Word('ступал', 4),
  femininePast: Word('ступала', 4),
  neuterPast: Word('ступало', 4),
  pluralPast: Word('ступали', 4),
  imperativeInformal: Word('ступай', 4),
  imperativeFormal: Word('ступайте', 4),
  imperfect: [],
};

perfectVerbs.set(ступать.name.text, ступать);

export { ступать };