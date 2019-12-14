import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переться: PerfectVerb = {
  name: Word('переться', 3),
  singular1stPerson: Word('прусь', 2),
  singular2ndPerson: Word('прёшься', 2),
  singular3rdPerson: Word('прётся', 2),
  plural1stPerson: Word('прёмся', 2),
  plural2ndPerson: Word('прётесь', 2),
  plural3rdPerson: Word('прутся', 2),
  masculinePast: Word('пёрся', 1),
  femininePast: Word('пёрлась', 1),
  neuterPast: Word('пёрлось', 1),
  pluralPast: Word('пёрлись', 1),
  imperativeInformal: Word('прись', 2),
  imperativeFormal: Word('притесь', 2),
  imperfect: [],
};

perfectVerbs.set(переться.name.text, переться);

export { переться };