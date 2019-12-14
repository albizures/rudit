import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затвориться: PerfectVerb = {
  name: Word('затвориться', 6),
  singular1stPerson: Word('затворюсь', 6),
  singular2ndPerson: Word('затворишься', 6),
  singular3rdPerson: Word('затворится', 6),
  plural1stPerson: Word('затворимся', 6),
  plural2ndPerson: Word('затворитесь', 6),
  plural3rdPerson: Word('затворятся', 6),
  masculinePast: Word('затворился', 6),
  femininePast: Word('затворилась', 6),
  neuterPast: Word('затворилось', 6),
  pluralPast: Word('затворились', 6),
  imperativeInformal: Word('затворись', 6),
  imperativeFormal: Word('затворитесь', 6),
  imperfect: [],
};

perfectVerbs.set(затвориться.name.text, затвориться);

export { затвориться };