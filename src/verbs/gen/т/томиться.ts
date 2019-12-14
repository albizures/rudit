import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const томиться: PerfectVerb = {
  name: Word('томиться', 3),
  singular1stPerson: Word('томлюсь', 4),
  singular2ndPerson: Word('томишься', 3),
  singular3rdPerson: Word('томится', 3),
  plural1stPerson: Word('томимся', 3),
  plural2ndPerson: Word('томитесь', 3),
  plural3rdPerson: Word('томятся', 3),
  masculinePast: Word('томился', 3),
  femininePast: Word('томилась', 3),
  neuterPast: Word('томилось', 3),
  pluralPast: Word('томились', 3),
  imperativeInformal: Word('томись', 3),
  imperativeFormal: Word('томитесь', 3),
  imperfect: [],
};

perfectVerbs.set(томиться.name.text, томиться);

export { томиться };