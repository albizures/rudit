import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмелиться: PerfectVerb = {
  name: Word('осмелиться', 3),
  singular1stPerson: Word('осмелюсь', 3),
  singular2ndPerson: Word('осмелишься', 3),
  singular3rdPerson: Word('осмелится', 3),
  plural1stPerson: Word('осмелимся', 3),
  plural2ndPerson: Word('осмелитесь', 3),
  plural3rdPerson: Word('осмелятся', 3),
  masculinePast: Word('осмелился', 3),
  femininePast: Word('осмелилась', 3),
  neuterPast: Word('осмелилось', 3),
  pluralPast: Word('осмелились', 3),
  imperativeInformal: Word('осмелься', 3),
  imperativeFormal: Word('осмельтесь', 3),
  imperfect: [],
};

perfectVerbs.set(осмелиться.name.text, осмелиться);

export { осмелиться };