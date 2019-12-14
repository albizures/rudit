import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забыть: PerfectVerb = {
  name: Word('забыть', 3),
  singular1stPerson: Word('забуду', 3),
  singular2ndPerson: Word('забудешь', 3),
  singular3rdPerson: Word('забудет', 3),
  plural1stPerson: Word('забудем', 3),
  plural2ndPerson: Word('забудете', 3),
  plural3rdPerson: Word('забудут', 3),
  masculinePast: Word('забыл', 3),
  femininePast: Word('забыла', 3),
  neuterPast: Word('забыло', 3),
  pluralPast: Word('забыли', 3),
  imperativeInformal: Word('забудь', 3),
  imperativeFormal: Word('забудьте', 3),
  imperfect: ['забывать'],
};

perfectVerbs.set(забыть.name.text, забыть);

export { забыть };