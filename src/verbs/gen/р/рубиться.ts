import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рубиться: PerfectVerb = {
  name: Word('рубиться', 3),
  singular1stPerson: Word('рублюсь', 4),
  singular2ndPerson: Word('рубишься', 1),
  singular3rdPerson: Word('рубится', 1),
  plural1stPerson: Word('рубимся', 1),
  plural2ndPerson: Word('рубитесь', 1),
  plural3rdPerson: Word('рубятся', 1),
  masculinePast: Word('рубился', 3),
  femininePast: Word('рубилась', 3),
  neuterPast: Word('рубилось', 3),
  pluralPast: Word('рубились', 3),
  imperativeInformal: Word('рубись', 3),
  imperativeFormal: Word('рубитесь', 3),
  imperfect: [],
};

perfectVerbs.set(рубиться.name.text, рубиться);

export { рубиться };