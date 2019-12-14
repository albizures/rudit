import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помножать: PerfectVerb = {
  name: Word('помножать', 6),
  singular1stPerson: Word('помножаю', 6),
  singular2ndPerson: Word('помножаешь', 6),
  singular3rdPerson: Word('помножает', 6),
  plural1stPerson: Word('помножаем', 6),
  plural2ndPerson: Word('помножаете', 6),
  plural3rdPerson: Word('помножают', 6),
  masculinePast: Word('помножал', 6),
  femininePast: Word('помножала', 6),
  neuterPast: Word('помножало', 6),
  pluralPast: Word('помножали', 6),
  imperativeInformal: Word('помножай', 6),
  imperativeFormal: Word('помножайте', 6),
  imperfect: [],
};

perfectVerbs.set(помножать.name.text, помножать);

export { помножать };