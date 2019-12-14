import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плыть: PerfectVerb = {
  name: Word('плыть', 2),
  singular1stPerson: Word('плыву', 4),
  singular2ndPerson: Word('плывёшь', 4),
  singular3rdPerson: Word('плывёт', 4),
  plural1stPerson: Word('плывём', 4),
  plural2ndPerson: Word('плывёте', 4),
  plural3rdPerson: Word('плывут', 4),
  masculinePast: Word('плыл', 2),
  femininePast: Word('плыла', 4),
  neuterPast: Word('плыло,плыло'', 2),
  pluralPast: Word('плыли,плыли'', 2),
  imperativeInformal: Word('плыви', 4),
  imperativeFormal: Word('плывите', 4),
  imperfect: ['поплыть'],
};

perfectVerbs.set(плыть.name.text, плыть);

export { плыть };