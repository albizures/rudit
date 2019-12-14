import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возгореться: PerfectVerb = {
  name: Word('возгореться', 6),
  singular1stPerson: Word('возгорюсь', 6),
  singular2ndPerson: Word('возгоришься', 6),
  singular3rdPerson: Word('возгорится', 6),
  plural1stPerson: Word('возгоримся', 6),
  plural2ndPerson: Word('возгоритесь', 6),
  plural3rdPerson: Word('возгорятся', 6),
  masculinePast: Word('возгорелся', 6),
  femininePast: Word('возгорелась', 6),
  neuterPast: Word('возгорелось', 6),
  pluralPast: Word('возгорелись', 6),
  imperativeInformal: Word('возгорись', 6),
  imperativeFormal: Word('возгоритесь', 6),
  imperfect: [],
};

perfectVerbs.set(возгореться.name.text, возгореться);

export { возгореться };