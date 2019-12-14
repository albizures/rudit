import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const змеиться: PerfectVerb = {
  name: Word('змеиться', 3),
  singular1stPerson: Word('змеюсь', 3),
  singular2ndPerson: Word('змеишься', 3),
  singular3rdPerson: Word('змеится', 3),
  plural1stPerson: Word('змеимся', 3),
  plural2ndPerson: Word('змеитесь', 3),
  plural3rdPerson: Word('змеятся', 3),
  masculinePast: Word('змеился', 3),
  femininePast: Word('змеилась', 3),
  neuterPast: Word('змеилось', 3),
  pluralPast: Word('змеились', 3),
  imperativeInformal: Word('змеись', 3),
  imperativeFormal: Word('змеитесь', 3),
  imperfect: [],
};

perfectVerbs.set(змеиться.name.text, змеиться);

export { змеиться };