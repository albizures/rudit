import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изжариться: PerfectVerb = {
  name: Word('изжариться', 3),
  singular1stPerson: Word('изжарюсь', 3),
  singular2ndPerson: Word('изжаришься', 3),
  singular3rdPerson: Word('изжарится', 3),
  plural1stPerson: Word('изжаримся', 3),
  plural2ndPerson: Word('изжаритесь', 3),
  plural3rdPerson: Word('изжарятся', 3),
  masculinePast: Word('изжарился', 3),
  femininePast: Word('изжарилась', 3),
  neuterPast: Word('изжарилось', 3),
  pluralPast: Word('изжарились', 3),
  imperativeInformal: Word('изжарься', 3),
  imperativeFormal: Word('изжарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(изжариться.name.text, изжариться);

export { изжариться };