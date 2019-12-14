import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угомониться: PerfectVerb = {
  name: Word('угомониться', 6),
  singular1stPerson: Word('угомонюсь', 6),
  singular2ndPerson: Word('угомонишься', 6),
  singular3rdPerson: Word('угомонится', 6),
  plural1stPerson: Word('угомонимся', 6),
  plural2ndPerson: Word('угомонитесь', 6),
  plural3rdPerson: Word('угомонятся', 6),
  masculinePast: Word('угомонился', 6),
  femininePast: Word('угомонилась', 6),
  neuterPast: Word('угомонилось', 6),
  pluralPast: Word('угомонились', 6),
  imperativeInformal: Word('угомонись', 6),
  imperativeFormal: Word('угомонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(угомониться.name.text, угомониться);

export { угомониться };