import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проплыть: PerfectVerb = {
  name: Word('проплыть', 5),
  singular1stPerson: Word('проплыву', 7),
  singular2ndPerson: Word('проплывёшь', 2),
  singular3rdPerson: Word('проплывёт', 2),
  plural1stPerson: Word('проплывём', 2),
  plural2ndPerson: Word('проплывёте', 9),
  plural3rdPerson: Word('проплывут', 7),
  masculinePast: Word('проплыл', 5),
  femininePast: Word('проплыла', 7),
  neuterPast: Word('проплыло', 5),
  pluralPast: Word('проплыли', 5),
  imperativeInformal: Word('проплыви', 7),
  imperativeFormal: Word('проплывите', 7),
  imperfect: [],
};

perfectVerbs.set(проплыть.name.text, проплыть);

export { проплыть };