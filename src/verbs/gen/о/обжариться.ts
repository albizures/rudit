import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжариться: PerfectVerb = {
  name: Word('обжариться', 3),
  singular1stPerson: Word('обжарюсь', 3),
  singular2ndPerson: Word('обжаришься', 3),
  singular3rdPerson: Word('обжарится', 3),
  plural1stPerson: Word('обжаримся', 3),
  plural2ndPerson: Word('обжаритесь', 3),
  plural3rdPerson: Word('обжарятся', 3),
  masculinePast: Word('обжарился', 3),
  femininePast: Word('обжарилась', 3),
  neuterPast: Word('обжарилось', 3),
  pluralPast: Word('обжарились', 3),
  imperativeInformal: Word('обжарься', 3),
  imperativeFormal: Word('обжарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обжариться.name.text, обжариться);

export { обжариться };