import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приумножать: PerfectVerb = {
  name: Word('приумножать', 8),
  singular1stPerson: Word('приумножаю', 8),
  singular2ndPerson: Word('приумножаешь', 8),
  singular3rdPerson: Word('приумножает', 8),
  plural1stPerson: Word('приумножаем', 8),
  plural2ndPerson: Word('приумножаете', 8),
  plural3rdPerson: Word('приумножают', 8),
  masculinePast: Word('приумножал', 8),
  femininePast: Word('приумножала', 8),
  neuterPast: Word('приумножало', 8),
  pluralPast: Word('приумножали', 8),
  imperativeInformal: Word('приумножай', 8),
  imperativeFormal: Word('приумножайте', 8),
  imperfect: [],
};

perfectVerbs.set(приумножать.name.text, приумножать);

export { приумножать };