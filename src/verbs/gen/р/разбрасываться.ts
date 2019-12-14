import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбрасываться: PerfectVerb = {
  name: Word('разбрасываться', 5),
  singular1stPerson: Word('разбрасываюсь', 5),
  singular2ndPerson: Word('разбрасываешься', 5),
  singular3rdPerson: Word('разбрасывается', 5),
  plural1stPerson: Word('разбрасываемся', 5),
  plural2ndPerson: Word('разбрасываетесь', 5),
  plural3rdPerson: Word('разбрасываются', 5),
  masculinePast: Word('разбрасывался', 5),
  femininePast: Word('разбрасывалась', 5),
  neuterPast: Word('разбрасывалось', 5),
  pluralPast: Word('разбрасывались', 5),
  imperativeInformal: Word('разбрасывайся', 5),
  imperativeFormal: Word('разбрасывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разбрасываться.name.text, разбрасываться);

export { разбрасываться };