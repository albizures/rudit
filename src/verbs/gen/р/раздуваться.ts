import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздуваться: PerfectVerb = {
  name: Word('раздуваться', 6),
  singular1stPerson: Word('раздуваюсь', 6),
  singular2ndPerson: Word('раздуваешься', 6),
  singular3rdPerson: Word('раздувается', 6),
  plural1stPerson: Word('раздуваемся', 6),
  plural2ndPerson: Word('раздуваетесь', 6),
  plural3rdPerson: Word('раздуваются', 6),
  masculinePast: Word('раздувался', 6),
  femininePast: Word('раздувалась', 6),
  neuterPast: Word('раздувалось', 6),
  pluralPast: Word('раздувались', 6),
  imperativeInformal: Word('раздувайся', 6),
  imperativeFormal: Word('раздувайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(раздуваться.name.text, раздуваться);

export { раздуваться };