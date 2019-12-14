import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ютиться: PerfectVerb = {
  name: Word('ютиться', 2),
  singular1stPerson: Word('ючусь', 2),
  singular2ndPerson: Word('ютишься', 2),
  singular3rdPerson: Word('ютится', 2),
  plural1stPerson: Word('ютимся', 2),
  plural2ndPerson: Word('ютитесь', 2),
  plural3rdPerson: Word('ютятся', 2),
  masculinePast: Word('ютился', 2),
  femininePast: Word('ютилась', 2),
  neuterPast: Word('ютилось', 2),
  pluralPast: Word('ютились', 2),
  imperativeInformal: Word('ютись', 2),
  imperativeFormal: Word('ютитесь', 2),
  imperfect: [],
};

perfectVerbs.set(ютиться.name.text, ютиться);

export { ютиться };