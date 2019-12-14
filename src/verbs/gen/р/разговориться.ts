import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разговориться: PerfectVerb = {
  name: Word('разговориться', 8),
  singular1stPerson: Word('разговорюсь', 8),
  singular2ndPerson: Word('разговоришься', 8),
  singular3rdPerson: Word('разговорится', 8),
  plural1stPerson: Word('разговоримся', 8),
  plural2ndPerson: Word('разговоритесь', 8),
  plural3rdPerson: Word('разговорятся', 8),
  masculinePast: Word('разговорился', 8),
  femininePast: Word('разговорилась', 8),
  neuterPast: Word('разговорилось', 8),
  pluralPast: Word('разговорились', 8),
  imperativeInformal: Word('разговорись', 8),
  imperativeFormal: Word('разговоритесь', 8),
  imperfect: [],
};

perfectVerbs.set(разговориться.name.text, разговориться);

export { разговориться };