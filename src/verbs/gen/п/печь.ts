import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const печь: PerfectVerb = {
  name: Word('печь', 1),
  singular1stPerson: Word('пеку', 3),
  singular2ndPerson: Word('печёшь', 1),
  singular3rdPerson: Word('печёт', 1),
  plural1stPerson: Word('печём', 1),
  plural2ndPerson: Word('печёте', 1),
  plural3rdPerson: Word('пекут', 3),
  masculinePast: Word('пёк', 1),
  femininePast: Word('пекла', 4),
  neuterPast: Word('пекло', 4),
  pluralPast: Word('пекли', 4),
  imperativeInformal: Word('пеки', 3),
  imperativeFormal: Word('пеките', 3),
  imperfect: ['испечь','спечь'],
};

perfectVerbs.set(печь.name.text, печь);

export { печь };