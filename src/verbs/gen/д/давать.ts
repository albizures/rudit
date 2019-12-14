import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const давать: PerfectVerb = {
  name: Word('давать', 3),
  singular1stPerson: Word('даю', 2),
  singular2ndPerson: Word('даёшь', 2),
  singular3rdPerson: Word('даёт', 2),
  plural1stPerson: Word('даём', 2),
  plural2ndPerson: Word('даёте', 2),
  plural3rdPerson: Word('дают', 2),
  masculinePast: Word('давал', 3),
  femininePast: Word('давала', 3),
  neuterPast: Word('давало', 3),
  pluralPast: Word('давали', 3),
  imperativeInformal: Word('давай', 3),
  imperativeFormal: Word('давайте', 3),
  imperfect: ['дать'],
};

perfectVerbs.set(давать.name.text, давать);

export { давать };