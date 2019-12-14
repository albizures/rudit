import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изобразиться: PerfectVerb = {
  name: Word('изобразиться', 7),
  singular1stPerson: Word('изображусь', 7),
  singular2ndPerson: Word('изобразишься', 7),
  singular3rdPerson: Word('изобразится', 7),
  plural1stPerson: Word('изобразимся', 7),
  plural2ndPerson: Word('изобразитесь', 7),
  plural3rdPerson: Word('изобразятся', 7),
  masculinePast: Word('изобразился', 7),
  femininePast: Word('изобразилась', 7),
  neuterPast: Word('изобразилось', 7),
  pluralPast: Word('изобразились', 7),
  imperativeInformal: Word('изобразись', 7),
  imperativeFormal: Word('изобразитесь', 7),
  imperfect: [],
};

perfectVerbs.set(изобразиться.name.text, изобразиться);

export { изобразиться };