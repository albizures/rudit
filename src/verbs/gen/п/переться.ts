import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переться: PerfectVerb = {
  name: Word('переться', 3),
  singular1stPerson: Word('прусь', 2),
  singular2ndPerson: Word('прёшься', 6),
  singular3rdPerson: Word('прётся', 5),
  plural1stPerson: Word('прёмся', 5),
  plural2ndPerson: Word('прётесь', 4),
  plural3rdPerson: Word('прутся', 2),
  masculinePast: Word('пёрся', 4),
  femininePast: Word('пёрлась', 4),
  neuterPast: Word('пёрлось', 4),
  pluralPast: Word('пёрлись', 4),
  imperativeInformal: Word('прись', 2),
  imperativeFormal: Word('притесь', 2),
  imperfect: [],
};

perfectVerbs.set(переться.name.text, переться);

export { переться };