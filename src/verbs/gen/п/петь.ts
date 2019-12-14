import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const петь: PerfectVerb = {
  name: Word('петь', 1),
  singular1stPerson: Word('пою', 2),
  singular2ndPerson: Word('поёшь', 1),
  singular3rdPerson: Word('поёт', 1),
  plural1stPerson: Word('поём', 1),
  plural2ndPerson: Word('поёте', 4),
  plural3rdPerson: Word('поют', 2),
  masculinePast: Word('пел', 1),
  femininePast: Word('пела', 1),
  neuterPast: Word('пело', 1),
  pluralPast: Word('пели', 1),
  imperativeInformal: Word('пой', 1),
  imperativeFormal: Word('пойте', 1),
  imperfect: ['спеть','пропеть'],
};

perfectVerbs.set(петь.name.text, петь);

export { петь };