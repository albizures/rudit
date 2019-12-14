import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замолкать: PerfectVerb = {
  name: Word('замолкать', 6),
  singular1stPerson: Word('замолкаю', 6),
  singular2ndPerson: Word('замолкаешь', 6),
  singular3rdPerson: Word('замолкает', 6),
  plural1stPerson: Word('замолкаем', 6),
  plural2ndPerson: Word('замолкаете', 6),
  plural3rdPerson: Word('замолкают', 6),
  masculinePast: Word('замолкал', 6),
  femininePast: Word('замолкала', 6),
  neuterPast: Word('замолкало', 6),
  pluralPast: Word('замолкали', 6),
  imperativeInformal: Word('замолкай', 6),
  imperativeFormal: Word('замолкайте', 6),
  imperfect: ['замолчать','замолкнуть'],
};

perfectVerbs.set(замолкать.name.text, замолкать);

export { замолкать };