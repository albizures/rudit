import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const теплиться: PerfectVerb = {
  name: Word('теплиться', 1),
  singular1stPerson: Word('теплюсь', 1),
  singular2ndPerson: Word('теплишься', 1),
  singular3rdPerson: Word('теплится', 1),
  plural1stPerson: Word('теплимся', 1),
  plural2ndPerson: Word('теплитесь', 1),
  plural3rdPerson: Word('теплятся', 1),
  masculinePast: Word('теплился', 1),
  femininePast: Word('теплилась', 1),
  neuterPast: Word('теплилось', 1),
  pluralPast: Word('теплились', 1),
  imperativeInformal: Word('теплись', 1),
  imperativeFormal: Word('теплитесь', 1),
  imperfect: [],
};

perfectVerbs.set(теплиться.name.text, теплиться);

export { теплиться };