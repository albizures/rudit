import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остепениться: PerfectVerb = {
  name: Word('остепениться', 7),
  singular1stPerson: Word('остепенюсь', 7),
  singular2ndPerson: Word('остепенишься', 7),
  singular3rdPerson: Word('остепенится', 7),
  plural1stPerson: Word('остепенимся', 7),
  plural2ndPerson: Word('остепенитесь', 7),
  plural3rdPerson: Word('остепенятся', 7),
  masculinePast: Word('остепенился', 7),
  femininePast: Word('остепенилась', 7),
  neuterPast: Word('остепенилось', 7),
  pluralPast: Word('остепенились', 7),
  imperativeInformal: Word('остепенись', 7),
  imperativeFormal: Word('остепенитесь', 7),
  imperfect: [],
};

perfectVerbs.set(остепениться.name.text, остепениться);

export { остепениться };