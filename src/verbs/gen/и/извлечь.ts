import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извлечь: PerfectVerb = {
  name: Word('извлечь', 4),
  singular1stPerson: Word('извлеку', 6),
  singular2ndPerson: Word('извлечёшь', 4),
  singular3rdPerson: Word('извлечёт', 4),
  plural1stPerson: Word('извлечём', 4),
  plural2ndPerson: Word('извлечёте', 4),
  plural3rdPerson: Word('извлекут', 6),
  masculinePast: Word('извлёк', 0),
  femininePast: Word('извлекла', 7),
  neuterPast: Word('извлекло', 7),
  pluralPast: Word('извлекли', 7),
  imperativeInformal: Word('извлеки', 6),
  imperativeFormal: Word('извлеките', 6),
  imperfect: ['извлекать'],
};

perfectVerbs.set(извлечь.name.text, извлечь);

export { извлечь };