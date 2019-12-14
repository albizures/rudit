import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спать: PerfectVerb = {
  name: Word('спать', 2),
  singular1stPerson: Word('сплю', 3),
  singular2ndPerson: Word('спишь', 2),
  singular3rdPerson: Word('спит', 2),
  plural1stPerson: Word('спим', 2),
  plural2ndPerson: Word('спите', 2),
  plural3rdPerson: Word('спят', 2),
  masculinePast: Word('спал', 2),
  femininePast: Word('спала', 4),
  neuterPast: Word('спало', 2),
  pluralPast: Word('спали', 2),
  imperativeInformal: Word('спи', 2),
  imperativeFormal: Word('спите', 2),
  imperfect: ['поспать'],
};

perfectVerbs.set(спать.name.text, спать);

export { спать };