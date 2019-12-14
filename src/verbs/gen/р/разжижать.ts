import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжижать: PerfectVerb = {
  name: Word('разжижать', 6),
  singular1stPerson: Word('разжижаю', 6),
  singular2ndPerson: Word('разжижаешь', 6),
  singular3rdPerson: Word('разжижает', 6),
  plural1stPerson: Word('разжижаем', 6),
  plural2ndPerson: Word('разжижаете', 6),
  plural3rdPerson: Word('разжижают', 6),
  masculinePast: Word('разжижал', 6),
  femininePast: Word('разжижала', 6),
  neuterPast: Word('разжижало', 6),
  pluralPast: Word('разжижали', 6),
  imperativeInformal: Word('разжижай', 6),
  imperativeFormal: Word('разжижайте', 6),
  imperfect: [],
};

perfectVerbs.set(разжижать.name.text, разжижать);

export { разжижать };