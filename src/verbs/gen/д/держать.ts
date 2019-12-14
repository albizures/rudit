import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const держать: PerfectVerb = {
  name: Word('держать', 4),
  singular1stPerson: Word('держу', 4),
  singular2ndPerson: Word('держишь', 1),
  singular3rdPerson: Word('держит', 1),
  plural1stPerson: Word('держим', 1),
  plural2ndPerson: Word('держите', 1),
  plural3rdPerson: Word('держат', 1),
  masculinePast: Word('держал', 4),
  femininePast: Word('держала', 4),
  neuterPast: Word('держало', 4),
  pluralPast: Word('держали', 4),
  imperativeInformal: Word('держи', 4),
  imperativeFormal: Word('держите', 4),
  imperfect: ['подержать','сдержать'],
};

perfectVerbs.set(держать.name.text, держать);

export { держать };