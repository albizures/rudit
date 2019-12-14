import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возникать: PerfectVerb = {
  name: Word('возникать', 6),
  singular1stPerson: Word('возникаю', 6),
  singular2ndPerson: Word('возникаешь', 6),
  singular3rdPerson: Word('возникает', 6),
  plural1stPerson: Word('возникаем', 6),
  plural2ndPerson: Word('возникаете', 6),
  plural3rdPerson: Word('возникают', 6),
  masculinePast: Word('возникал', 6),
  femininePast: Word('возникала', 6),
  neuterPast: Word('возникало', 6),
  pluralPast: Word('возникали', 6),
  imperativeInformal: Word('возникай', 6),
  imperativeFormal: Word('возникайте', 6),
  imperfect: ['возникнуть'],
};

perfectVerbs.set(возникать.name.text, возникать);

export { возникать };