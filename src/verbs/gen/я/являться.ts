import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const являться: PerfectVerb = {
  name: Word('являться', 3),
  singular1stPerson: Word('являюсь', 3),
  singular2ndPerson: Word('являешься', 3),
  singular3rdPerson: Word('является', 3),
  plural1stPerson: Word('являемся', 3),
  plural2ndPerson: Word('являетесь', 3),
  plural3rdPerson: Word('являются', 3),
  masculinePast: Word('являлся', 3),
  femininePast: Word('являлась', 3),
  neuterPast: Word('являлось', 3),
  pluralPast: Word('являлись', 3),
  imperativeInformal: Word('являйся', 3),
  imperativeFormal: Word('являйтесь', 3),
  imperfect: ['явиться'],
};

perfectVerbs.set(являться.name.text, являться);

export { являться };