import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разуваться: PerfectVerb = {
  name: Word('разуваться', 5),
  singular1stPerson: Word('разуваюсь', 5),
  singular2ndPerson: Word('разуваешься', 5),
  singular3rdPerson: Word('разувается', 5),
  plural1stPerson: Word('разуваемся', 5),
  plural2ndPerson: Word('разуваетесь', 5),
  plural3rdPerson: Word('разуваются', 5),
  masculinePast: Word('разувался', 5),
  femininePast: Word('разувалась', 5),
  neuterPast: Word('разувалось', 5),
  pluralPast: Word('разувались', 5),
  imperativeInformal: Word('разувайся', 5),
  imperativeFormal: Word('разувайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разуваться.name.text, разуваться);

export { разуваться };