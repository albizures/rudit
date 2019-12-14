import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const видать: PerfectVerb = {
  name: Word('видать', 3),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('', -1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('', -1),
  masculinePast: Word('видал', 3),
  femininePast: Word('видала', 3),
  neuterPast: Word('видало', 3),
  pluralPast: Word('видали', 3),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['увидать'],
};

perfectVerbs.set(видать.name.text, видать);

export { видать };