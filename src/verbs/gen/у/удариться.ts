import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удариться: PerfectVerb = {
  name: Word('удариться', 2),
  singular1stPerson: Word('ударюсь', 2),
  singular2ndPerson: Word('ударишься', 2),
  singular3rdPerson: Word('ударится', 2),
  plural1stPerson: Word('ударимся', 2),
  plural2ndPerson: Word('ударитесь', 2),
  plural3rdPerson: Word('ударятся', 2),
  masculinePast: Word('ударился', 2),
  femininePast: Word('ударилась', 2),
  neuterPast: Word('ударилось', 2),
  pluralPast: Word('ударились', 2),
  imperativeInformal: Word('ударься', 2),
  imperativeFormal: Word('ударьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(удариться.name.text, удариться);

export { удариться };