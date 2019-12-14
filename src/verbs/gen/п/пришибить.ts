import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришибить: PerfectVerb = {
  name: Word('пришибить', 6),
  singular1stPerson: Word('пришибу', 6),
  singular2ndPerson: Word('пришибёшь', 6),
  singular3rdPerson: Word('пришибёт', 6),
  plural1stPerson: Word('пришибём', 6),
  plural2ndPerson: Word('пришибёте', 6),
  plural3rdPerson: Word('пришибут', 6),
  masculinePast: Word('пришиб', 4),
  femininePast: Word('пришибла', 4),
  neuterPast: Word('пришибло', 4),
  pluralPast: Word('пришибли', 4),
  imperativeInformal: Word('пришиби', 6),
  imperativeFormal: Word('пришибите', 6),
  imperfect: [],
};

perfectVerbs.set(пришибить.name.text, пришибить);

export { пришибить };