import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надуваться: PerfectVerb = {
  name: Word('надуваться', 5),
  singular1stPerson: Word('надуваюсь', 5),
  singular2ndPerson: Word('надуваешься', 5),
  singular3rdPerson: Word('надувается', 5),
  plural1stPerson: Word('надуваемся', 5),
  plural2ndPerson: Word('надуваетесь', 5),
  plural3rdPerson: Word('надуваются', 5),
  masculinePast: Word('надувался', 5),
  femininePast: Word('надувалась', 5),
  neuterPast: Word('надувалось', 5),
  pluralPast: Word('надувались', 5),
  imperativeInformal: Word('надувайся', 5),
  imperativeFormal: Word('надувайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(надуваться.name.text, надуваться);

export { надуваться };