import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наречь: PerfectVerb = {
  name: Word('наречь', 3),
  singular1stPerson: Word('нареку', 5),
  singular2ndPerson: Word('наречёшь', 5),
  singular3rdPerson: Word('наречёт', 5),
  plural1stPerson: Word('наречём', 5),
  plural2ndPerson: Word('наречёте', 5),
  plural3rdPerson: Word('нарекут', 5),
  masculinePast: Word('нарёк', 3),
  femininePast: Word('нарекла', 6),
  neuterPast: Word('нарекло', 6),
  pluralPast: Word('нарекли', 6),
  imperativeInformal: Word('нареки', 5),
  imperativeFormal: Word('нареките', 5),
  imperfect: [],
};

perfectVerbs.set(наречь.name.text, наречь);

export { наречь };