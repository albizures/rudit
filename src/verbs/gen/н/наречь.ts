import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наречь: PerfectVerb = {
  name: Word('наречь', 3),
  singular1stPerson: Word('нареку', 5),
  singular2ndPerson: Word('наречёшь', 1),
  singular3rdPerson: Word('наречёт', 1),
  plural1stPerson: Word('наречём', 1),
  plural2ndPerson: Word('наречёте', 1),
  plural3rdPerson: Word('нарекут', 5),
  masculinePast: Word('нарёк', 1),
  femininePast: Word('нарекла', 6),
  neuterPast: Word('нарекло', 6),
  pluralPast: Word('нарекли', 6),
  imperativeInformal: Word('нареки', 5),
  imperativeFormal: Word('нареките', 5),
  imperfect: [],
};

perfectVerbs.set(наречь.name.text, наречь);

export { наречь };