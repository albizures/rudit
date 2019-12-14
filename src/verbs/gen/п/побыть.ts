import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побыть: PerfectVerb = {
  name: Word('побыть', 3),
  singular1stPerson: Word('побуду', 3),
  singular2ndPerson: Word('побудешь', 3),
  singular3rdPerson: Word('побудет', 3),
  plural1stPerson: Word('побудем', 3),
  plural2ndPerson: Word('побудете', 3),
  plural3rdPerson: Word('побудут', 3),
  masculinePast: Word('побыл//по'был', 3),
  femininePast: Word('побыла', 5),
  neuterPast: Word('побыло//по'было', 3),
  pluralPast: Word('побыли//по'были', 3),
  imperativeInformal: Word('побудь', 3),
  imperativeFormal: Word('побудьте', 3),
  imperfect: [],
};

perfectVerbs.set(побыть.name.text, побыть);

export { побыть };