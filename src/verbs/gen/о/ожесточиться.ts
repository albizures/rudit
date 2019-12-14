import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожесточиться: PerfectVerb = {
  name: Word('ожесточиться', 7),
  singular1stPerson: Word('ожесточусь', 7),
  singular2ndPerson: Word('ожесточишься', 7),
  singular3rdPerson: Word('ожесточится', 7),
  plural1stPerson: Word('ожесточимся', 7),
  plural2ndPerson: Word('ожесточитесь', 7),
  plural3rdPerson: Word('ожесточатся', 7),
  masculinePast: Word('ожесточился', 7),
  femininePast: Word('ожесточилась', 7),
  neuterPast: Word('ожесточилось', 7),
  pluralPast: Word('ожесточились', 7),
  imperativeInformal: Word('ожесточись', 7),
  imperativeFormal: Word('ожесточитесь', 7),
  imperfect: [],
};

perfectVerbs.set(ожесточиться.name.text, ожесточиться);

export { ожесточиться };