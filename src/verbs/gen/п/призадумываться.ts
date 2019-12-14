import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const призадумываться: PerfectVerb = {
  name: Word('призадумываться', 6),
  singular1stPerson: Word('призадумываюсь', 6),
  singular2ndPerson: Word('призадумываешься', 6),
  singular3rdPerson: Word('призадумывается', 6),
  plural1stPerson: Word('призадумываемся', 6),
  plural2ndPerson: Word('призадумываетесь', 6),
  plural3rdPerson: Word('призадумываются', 6),
  masculinePast: Word('призадумывался', 6),
  femininePast: Word('призадумывалась', 6),
  neuterPast: Word('призадумывалось', 6),
  pluralPast: Word('призадумывались', 6),
  imperativeInformal: Word('призадумывайся', 6),
  imperativeFormal: Word('призадумывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(призадумываться.name.text, призадумываться);

export { призадумываться };