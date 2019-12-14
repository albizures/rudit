import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const катиться: PerfectVerb = {
  name: Word('катиться', 3),
  singular1stPerson: Word('качусь', 3),
  singular2ndPerson: Word('катишься', 1),
  singular3rdPerson: Word('катится', 1),
  plural1stPerson: Word('катимся', 1),
  plural2ndPerson: Word('катитесь', 1),
  plural3rdPerson: Word('катятся', 1),
  masculinePast: Word('катился', 3),
  femininePast: Word('катилась', 3),
  neuterPast: Word('катилось', 3),
  pluralPast: Word('катились', 3),
  imperativeInformal: Word('катись', 3),
  imperativeFormal: Word('катитесь', 3),
  imperfect: ['покатиться'],
};

perfectVerbs.set(катиться.name.text, катиться);

export { катиться };