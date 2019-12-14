import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испечь: PerfectVerb = {
  name: Word('испечь', 3),
  singular1stPerson: Word('испеку', 5),
  singular2ndPerson: Word('испечёшь', 5),
  singular3rdPerson: Word('испечёт', 5),
  plural1stPerson: Word('испечём', 5),
  plural2ndPerson: Word('испечёте', 5),
  plural3rdPerson: Word('испекут', 5),
  masculinePast: Word('испёк', 3),
  femininePast: Word('испекла', 6),
  neuterPast: Word('испекло', 6),
  pluralPast: Word('испекли', 6),
  imperativeInformal: Word('испеки', 5),
  imperativeFormal: Word('испеките', 5),
  imperfect: ['печь'],
};

perfectVerbs.set(испечь.name.text, испечь);

export { испечь };