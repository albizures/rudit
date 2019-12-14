import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грабастать: PerfectVerb = {
  name: Word('грабастать', 4),
  singular1stPerson: Word('грабастаю', 4),
  singular2ndPerson: Word('грабастаешь', 4),
  singular3rdPerson: Word('грабастает', 4),
  plural1stPerson: Word('грабастаем', 4),
  plural2ndPerson: Word('грабастаете', 4),
  plural3rdPerson: Word('грабастают', 4),
  masculinePast: Word('грабастал', 4),
  femininePast: Word('грабастала', 4),
  neuterPast: Word('грабастало', 4),
  pluralPast: Word('грабастали', 4),
  imperativeInformal: Word('грабастай', 4),
  imperativeFormal: Word('грабастайте', 4),
  imperfect: [],
};

perfectVerbs.set(грабастать.name.text, грабастать);

export { грабастать };