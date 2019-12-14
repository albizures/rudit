import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выступать: PerfectVerb = {
  name: Word('выступать', 6),
  singular1stPerson: Word('выступаю', 6),
  singular2ndPerson: Word('выступаешь', 6),
  singular3rdPerson: Word('выступает', 6),
  plural1stPerson: Word('выступаем', 6),
  plural2ndPerson: Word('выступаете', 6),
  plural3rdPerson: Word('выступают', 6),
  masculinePast: Word('выступал', 6),
  femininePast: Word('выступала', 6),
  neuterPast: Word('выступало', 6),
  pluralPast: Word('выступали', 6),
  imperativeInformal: Word('выступай', 6),
  imperativeFormal: Word('выступайте', 6),
  imperfect: ['выступить'],
};

perfectVerbs.set(выступать.name.text, выступать);

export { выступать };