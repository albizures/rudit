import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привлечь: PerfectVerb = {
  name: Word('привлечь', 5),
  singular1stPerson: Word('привлеку', 7),
  singular2ndPerson: Word('привлечёшь', 5),
  singular3rdPerson: Word('привлечёт', 5),
  plural1stPerson: Word('привлечём', 5),
  plural2ndPerson: Word('привлечёте', 5),
  plural3rdPerson: Word('привлекут', 7),
  masculinePast: Word('привлёк', 2),
  femininePast: Word('привлекла', 8),
  neuterPast: Word('привлекло', 8),
  pluralPast: Word('привлекли', 8),
  imperativeInformal: Word('привлеки', 7),
  imperativeFormal: Word('привлеките', 7),
  imperfect: ['привлекать'],
};

perfectVerbs.set(привлечь.name.text, привлечь);

export { привлечь };