import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассечь: PerfectVerb = {
  name: Word('рассечь', 4),
  singular1stPerson: Word('рассеку', 6),
  singular2ndPerson: Word('рассечёшь', 1),
  singular3rdPerson: Word('рассечёт', 1),
  plural1stPerson: Word('рассечём', 1),
  plural2ndPerson: Word('рассечёте', 1),
  plural3rdPerson: Word('рассекут', 6),
  masculinePast: Word('рассёк', 1),
  femininePast: Word('рассекла', 7),
  neuterPast: Word('рассекло', 7),
  pluralPast: Word('рассекли', 7),
  imperativeInformal: Word('рассеки', 6),
  imperativeFormal: Word('рассеките', 6),
  imperfect: [],
};

perfectVerbs.set(рассечь.name.text, рассечь);

export { рассечь };