import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const акать: PerfectVerb = {
  name: Word('акать', 0),
  singular1stPerson: Word('акаю', 0),
  singular2ndPerson: Word('акаешь', 0),
  singular3rdPerson: Word('акает', 0),
  plural1stPerson: Word('акаем', 0),
  plural2ndPerson: Word('акаете', 0),
  plural3rdPerson: Word('акают', 0),
  masculinePast: Word('акал', 0),
  femininePast: Word('акала', 0),
  neuterPast: Word('акало', 0),
  pluralPast: Word('акали', 0),
  imperativeInformal: Word('акай', 0),
  imperativeFormal: Word('акайте', 0),
  imperfect: [],
};

perfectVerbs.set(акать.name.text, акать);

export { акать };