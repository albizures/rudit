import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корчиться: PerfectVerb = {
  name: Word('корчиться', 1),
  singular1stPerson: Word('корчусь', 1),
  singular2ndPerson: Word('корчишься', 1),
  singular3rdPerson: Word('корчится', 1),
  plural1stPerson: Word('корчимся', 1),
  plural2ndPerson: Word('корчитесь', 1),
  plural3rdPerson: Word('корчатся', 1),
  masculinePast: Word('корчился', 1),
  femininePast: Word('корчилась', 1),
  neuterPast: Word('корчилось', 1),
  pluralPast: Word('корчились', 1),
  imperativeInformal: Word('корчись//ко'рчься', 1),
  imperativeFormal: Word('корчитесь//ко'рчьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(корчиться.name.text, корчиться);

export { корчиться };