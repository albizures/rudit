import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изготовиться: PerfectVerb = {
  name: Word('изготовиться', 5),
  singular1stPerson: Word('изготовлюсь', 5),
  singular2ndPerson: Word('изготовишься', 5),
  singular3rdPerson: Word('изготовится', 5),
  plural1stPerson: Word('изготовимся', 5),
  plural2ndPerson: Word('изготовитесь', 5),
  plural3rdPerson: Word('изготовятся', 5),
  masculinePast: Word('изготовился', 5),
  femininePast: Word('изготовилась', 5),
  neuterPast: Word('изготовилось', 5),
  pluralPast: Word('изготовились', 5),
  imperativeInformal: Word('изготовься', 5),
  imperativeFormal: Word('изготовьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изготовиться.name.text, изготовиться);

export { изготовиться };