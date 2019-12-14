import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возобновиться: PerfectVerb = {
  name: Word('возобновиться', 8),
  singular1stPerson: Word('возобновлюсь', 9),
  singular2ndPerson: Word('возобновишься', 8),
  singular3rdPerson: Word('возобновится', 8),
  plural1stPerson: Word('возобновимся', 8),
  plural2ndPerson: Word('возобновитесь', 8),
  plural3rdPerson: Word('возобновятся', 8),
  masculinePast: Word('возобновился', 8),
  femininePast: Word('возобновилась', 8),
  neuterPast: Word('возобновилось', 8),
  pluralPast: Word('возобновились', 8),
  imperativeInformal: Word('возобновись', 8),
  imperativeFormal: Word('возобновитесь', 8),
  imperfect: [],
};

perfectVerbs.set(возобновиться.name.text, возобновиться);

export { возобновиться };