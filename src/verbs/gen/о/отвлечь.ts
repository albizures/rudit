import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвлечь: PerfectVerb = {
  name: Word('отвлечь', 4),
  singular1stPerson: Word('отвлеку', 6),
  singular2ndPerson: Word('отвлечёшь', 6),
  singular3rdPerson: Word('отвлечёт', 6),
  plural1stPerson: Word('отвлечём', 6),
  plural2ndPerson: Word('отвлечёте', 6),
  plural3rdPerson: Word('отвлекут', 6),
  masculinePast: Word('отвлёк', 4),
  femininePast: Word('отвлекла', 7),
  neuterPast: Word('отвлекло', 7),
  pluralPast: Word('отвлекли', 7),
  imperativeInformal: Word('отвлеки', 6),
  imperativeFormal: Word('отвлеките', 6),
  imperfect: ['отвлекать'],
};

perfectVerbs.set(отвлечь.name.text, отвлечь);

export { отвлечь };