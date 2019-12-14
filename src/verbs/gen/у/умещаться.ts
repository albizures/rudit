import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умещаться: PerfectVerb = {
  name: Word('умещаться', 4),
  singular1stPerson: Word('умещаюсь', 4),
  singular2ndPerson: Word('умещаешься', 4),
  singular3rdPerson: Word('умещается', 4),
  plural1stPerson: Word('умещаемся', 4),
  plural2ndPerson: Word('умещаетесь', 4),
  plural3rdPerson: Word('умещаются', 4),
  masculinePast: Word('умещался', 4),
  femininePast: Word('умещалась', 4),
  neuterPast: Word('умещалось', 4),
  pluralPast: Word('умещались', 4),
  imperativeInformal: Word('умещайся', 4),
  imperativeFormal: Word('умещайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(умещаться.name.text, умещаться);

export { умещаться };