import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const узаконивать: PerfectVerb = {
  name: Word('узаконивать', 4),
  singular1stPerson: Word('узакониваю', 4),
  singular2ndPerson: Word('узакониваешь', 4),
  singular3rdPerson: Word('узаконивает', 4),
  plural1stPerson: Word('узакониваем', 4),
  plural2ndPerson: Word('узакониваете', 4),
  plural3rdPerson: Word('узаконивают', 4),
  masculinePast: Word('узаконивал', 4),
  femininePast: Word('узаконивала', 4),
  neuterPast: Word('узаконивало', 4),
  pluralPast: Word('узаконивали', 4),
  imperativeInformal: Word('узаконивай', 4),
  imperativeFormal: Word('узаконивайте', 4),
  imperfect: [],
};

perfectVerbs.set(узаконивать.name.text, узаконивать);

export { узаконивать };