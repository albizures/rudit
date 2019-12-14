import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгорбиться: PerfectVerb = {
  name: Word('сгорбиться', 2),
  singular1stPerson: Word('сгорблюсь', 2),
  singular2ndPerson: Word('сгорбишься', 2),
  singular3rdPerson: Word('сгорбится', 2),
  plural1stPerson: Word('сгорбимся', 2),
  plural2ndPerson: Word('сгорбитесь', 2),
  plural3rdPerson: Word('сгорбятся', 2),
  masculinePast: Word('сгорбился', 2),
  femininePast: Word('сгорбилась', 2),
  neuterPast: Word('сгорбилось', 2),
  pluralPast: Word('сгорбились', 2),
  imperativeInformal: Word('сгорбись//сго'рбься', 2),
  imperativeFormal: Word('сгорбитесь//сго'рбьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сгорбиться.name.text, сгорбиться);

export { сгорбиться };