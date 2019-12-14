import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намять: PerfectVerb = {
  name: Word('намять', 3),
  singular1stPerson: Word('намну', 4),
  singular2ndPerson: Word('намнёшь', 1),
  singular3rdPerson: Word('намнёт', 1),
  plural1stPerson: Word('намнём', 1),
  plural2ndPerson: Word('намнёте', 1),
  plural3rdPerson: Word('намнут', 4),
  masculinePast: Word('намял', 3),
  femininePast: Word('намяла', 3),
  neuterPast: Word('намяло', 3),
  pluralPast: Word('намяли', 3),
  imperativeInformal: Word('намни', 4),
  imperativeFormal: Word('намните', 4),
  imperfect: [],
};

perfectVerbs.set(намять.name.text, намять);

export { намять };