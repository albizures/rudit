import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскорбиться: PerfectVerb = {
  name: Word('оскорбиться', 6),
  singular1stPerson: Word('оскорблюсь', 7),
  singular2ndPerson: Word('оскорбишься', 6),
  singular3rdPerson: Word('оскорбится', 6),
  plural1stPerson: Word('оскорбимся', 6),
  plural2ndPerson: Word('оскорбитесь', 6),
  plural3rdPerson: Word('оскорбятся', 6),
  masculinePast: Word('оскорбился', 6),
  femininePast: Word('оскорбилась', 6),
  neuterPast: Word('оскорбилось', 6),
  pluralPast: Word('оскорбились', 6),
  imperativeInformal: Word('оскорбись', 6),
  imperativeFormal: Word('оскорбитесь', 6),
  imperfect: [],
};

perfectVerbs.set(оскорбиться.name.text, оскорбиться);

export { оскорбиться };