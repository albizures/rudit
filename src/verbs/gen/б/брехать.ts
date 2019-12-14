import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брехать: PerfectVerb = {
  name: Word('брехать', 4),
  singular1stPerson: Word('брешу', 4),
  singular2ndPerson: Word('брешешь', 2),
  singular3rdPerson: Word('брешет', 2),
  plural1stPerson: Word('брешем', 2),
  plural2ndPerson: Word('брешете', 2),
  plural3rdPerson: Word('брешут', 2),
  masculinePast: Word('брехал', 4),
  femininePast: Word('брехала', 4),
  neuterPast: Word('брехало', 4),
  pluralPast: Word('брехали', 4),
  imperativeInformal: Word('бреши', 4),
  imperativeFormal: Word('брешите', 4),
  imperfect: ['брехнуть','сбрехать'],
};

perfectVerbs.set(брехать.name.text, брехать);

export { брехать };