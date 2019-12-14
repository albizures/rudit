import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгореться: PerfectVerb = {
  name: Word('разгореться', 6),
  singular1stPerson: Word('разгорюсь', 6),
  singular2ndPerson: Word('разгоришься', 6),
  singular3rdPerson: Word('разгорится', 6),
  plural1stPerson: Word('разгоримся', 6),
  plural2ndPerson: Word('разгоритесь', 6),
  plural3rdPerson: Word('разгорятся', 6),
  masculinePast: Word('разгорелся', 6),
  femininePast: Word('разгорелась', 6),
  neuterPast: Word('разгорелось', 6),
  pluralPast: Word('разгорелись', 6),
  imperativeInformal: Word('разгорись', 6),
  imperativeFormal: Word('разгоритесь', 6),
  imperfect: [],
};

perfectVerbs.set(разгореться.name.text, разгореться);

export { разгореться };