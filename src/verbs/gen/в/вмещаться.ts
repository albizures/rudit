import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмещаться: PerfectVerb = {
  name: Word('вмещаться', 4),
  singular1stPerson: Word('вмещаюсь', 4),
  singular2ndPerson: Word('вмещаешься', 4),
  singular3rdPerson: Word('вмещается', 4),
  plural1stPerson: Word('вмещаемся', 4),
  plural2ndPerson: Word('вмещаетесь', 4),
  plural3rdPerson: Word('вмещаются', 4),
  masculinePast: Word('вмещался', 4),
  femininePast: Word('вмещалась', 4),
  neuterPast: Word('вмещалось', 4),
  pluralPast: Word('вмещались', 4),
  imperativeInformal: Word('вмещайся', 4),
  imperativeFormal: Word('вмещайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вмещаться.name.text, вмещаться);

export { вмещаться };