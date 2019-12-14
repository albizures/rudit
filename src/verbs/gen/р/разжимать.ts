import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжимать: PerfectVerb = {
  name: Word('разжимать', 6),
  singular1stPerson: Word('разжимаю', 6),
  singular2ndPerson: Word('разжимаешь', 6),
  singular3rdPerson: Word('разжимает', 6),
  plural1stPerson: Word('разжимаем', 6),
  plural2ndPerson: Word('разжимаете', 6),
  plural3rdPerson: Word('разжимают', 6),
  masculinePast: Word('разжимал', 6),
  femininePast: Word('разжимала', 6),
  neuterPast: Word('разжимало', 6),
  pluralPast: Word('разжимали', 6),
  imperativeInformal: Word('разжимай', 6),
  imperativeFormal: Word('разжимайте', 6),
  imperfect: [],
};

perfectVerbs.set(разжимать.name.text, разжимать);

export { разжимать };