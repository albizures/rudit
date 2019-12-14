import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удалиться: PerfectVerb = {
  name: Word('удалиться', 4),
  singular1stPerson: Word('удалюсь', 4),
  singular2ndPerson: Word('удалишься', 4),
  singular3rdPerson: Word('удалится', 4),
  plural1stPerson: Word('удалимся', 4),
  plural2ndPerson: Word('удалитесь', 4),
  plural3rdPerson: Word('удалятся', 4),
  masculinePast: Word('удалился', 4),
  femininePast: Word('удалилась', 4),
  neuterPast: Word('удалилось', 4),
  pluralPast: Word('удалились', 4),
  imperativeInformal: Word('удались', 4),
  imperativeFormal: Word('удалитесь', 4),
  imperfect: [],
};

perfectVerbs.set(удалиться.name.text, удалиться);

export { удалиться };