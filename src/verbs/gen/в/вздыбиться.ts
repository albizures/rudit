import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздыбиться: PerfectVerb = {
  name: Word('вздыбиться', 3),
  singular1stPerson: Word('вздыблюсь', 3),
  singular2ndPerson: Word('вздыбишься', 3),
  singular3rdPerson: Word('вздыбится', 3),
  plural1stPerson: Word('вздыбимся', 3),
  plural2ndPerson: Word('вздыбитесь', 3),
  plural3rdPerson: Word('вздыбятся', 3),
  masculinePast: Word('вздыбился', 3),
  femininePast: Word('вздыбилась', 3),
  neuterPast: Word('вздыбилось', 3),
  pluralPast: Word('вздыбились', 3),
  imperativeInformal: Word('вздыбься', 3),
  imperativeFormal: Word('вздыбьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вздыбиться.name.text, вздыбиться);

export { вздыбиться };