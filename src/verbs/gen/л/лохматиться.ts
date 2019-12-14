import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лохматиться: PerfectVerb = {
  name: Word('лохматиться', 4),
  singular1stPerson: Word('лохмачусь', 4),
  singular2ndPerson: Word('лохматишься', 4),
  singular3rdPerson: Word('лохматится', 4),
  plural1stPerson: Word('лохматимся', 4),
  plural2ndPerson: Word('лохматитесь', 4),
  plural3rdPerson: Word('лохматятся', 4),
  masculinePast: Word('лохматился', 4),
  femininePast: Word('лохматилась', 4),
  neuterPast: Word('лохматилось', 4),
  pluralPast: Word('лохматились', 4),
  imperativeInformal: Word('лохматься', 4),
  imperativeFormal: Word('лохматьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(лохматиться.name.text, лохматиться);

export { лохматиться };