import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const держаться: PerfectVerb = {
  name: Word('держаться', 4),
  singular1stPerson: Word('держусь', 4),
  singular2ndPerson: Word('держишься', 1),
  singular3rdPerson: Word('держится', 1),
  plural1stPerson: Word('держимся', 1),
  plural2ndPerson: Word('держитесь', 1),
  plural3rdPerson: Word('держатся', 1),
  masculinePast: Word('держался', 4),
  femininePast: Word('держалась', 4),
  neuterPast: Word('держалось', 4),
  pluralPast: Word('держались', 4),
  imperativeInformal: Word('держись', 4),
  imperativeFormal: Word('держитесь', 4),
  imperfect: ['подержаться'],
};

perfectVerbs.set(держаться.name.text, держаться);

export { держаться };