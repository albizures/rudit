import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздуваться: PerfectVerb = {
  name: Word('вздуваться', 5),
  singular1stPerson: Word('вздуваюсь', 5),
  singular2ndPerson: Word('вздуваешься', 5),
  singular3rdPerson: Word('вздувается', 5),
  plural1stPerson: Word('вздуваемся', 5),
  plural2ndPerson: Word('вздуваетесь', 5),
  plural3rdPerson: Word('вздуваются', 5),
  masculinePast: Word('вздувался', 5),
  femininePast: Word('вздувалась', 5),
  neuterPast: Word('вздувалось', 5),
  pluralPast: Word('вздувались', 5),
  imperativeInformal: Word('вздувайся', 5),
  imperativeFormal: Word('вздувайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вздуваться.name.text, вздуваться);

export { вздуваться };