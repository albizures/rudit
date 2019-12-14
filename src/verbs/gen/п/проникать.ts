import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проникать: PerfectVerb = {
  name: Word('проникать', 6),
  singular1stPerson: Word('проникаю', 6),
  singular2ndPerson: Word('проникаешь', 6),
  singular3rdPerson: Word('проникает', 6),
  plural1stPerson: Word('проникаем', 6),
  plural2ndPerson: Word('проникаете', 6),
  plural3rdPerson: Word('проникают', 6),
  masculinePast: Word('проникал', 6),
  femininePast: Word('проникала', 6),
  neuterPast: Word('проникало', 6),
  pluralPast: Word('проникали', 6),
  imperativeInformal: Word('проникай', 6),
  imperativeFormal: Word('проникайте', 6),
  imperfect: ['проникнуть'],
};

perfectVerbs.set(проникать.name.text, проникать);

export { проникать };