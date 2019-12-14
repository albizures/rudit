import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объединиться: PerfectVerb = {
  name: Word('объединиться', 7),
  singular1stPerson: Word('объединюсь', 7),
  singular2ndPerson: Word('объединишься', 7),
  singular3rdPerson: Word('объединится', 7),
  plural1stPerson: Word('объединимся', 7),
  plural2ndPerson: Word('объединитесь', 7),
  plural3rdPerson: Word('объединятся', 7),
  masculinePast: Word('объединился', 7),
  femininePast: Word('объединилась', 7),
  neuterPast: Word('объединилось', 7),
  pluralPast: Word('объединились', 7),
  imperativeInformal: Word('объединись', 7),
  imperativeFormal: Word('объединитесь', 7),
  imperfect: ['объединяться'],
};

perfectVerbs.set(объединиться.name.text, объединиться);

export { объединиться };