import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдуваться: PerfectVerb = {
  name: Word('отдуваться', 5),
  singular1stPerson: Word('отдуваюсь', 5),
  singular2ndPerson: Word('отдуваешься', 5),
  singular3rdPerson: Word('отдувается', 5),
  plural1stPerson: Word('отдуваемся', 5),
  plural2ndPerson: Word('отдуваетесь', 5),
  plural3rdPerson: Word('отдуваются', 5),
  masculinePast: Word('отдувался', 5),
  femininePast: Word('отдувалась', 5),
  neuterPast: Word('отдувалось', 5),
  pluralPast: Word('отдувались', 5),
  imperativeInformal: Word('отдувайся', 5),
  imperativeFormal: Word('отдувайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отдуваться.name.text, отдуваться);

export { отдуваться };