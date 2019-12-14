import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совмещаться: PerfectVerb = {
  name: Word('совмещаться', 6),
  singular1stPerson: Word('совмещаюсь', 6),
  singular2ndPerson: Word('совмещаешься', 6),
  singular3rdPerson: Word('совмещается', 6),
  plural1stPerson: Word('совмещаемся', 6),
  plural2ndPerson: Word('совмещаетесь', 6),
  plural3rdPerson: Word('совмещаются', 6),
  masculinePast: Word('совмещался', 6),
  femininePast: Word('совмещалась', 6),
  neuterPast: Word('совмещалось', 6),
  pluralPast: Word('совмещались', 6),
  imperativeInformal: Word('совмещайся', 6),
  imperativeFormal: Word('совмещайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(совмещаться.name.text, совмещаться);

export { совмещаться };