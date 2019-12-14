import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорезинивать: PerfectVerb = {
  name: Word('прорезинивать', 6),
  singular1stPerson: Word('прорезиниваю', 6),
  singular2ndPerson: Word('прорезиниваешь', 6),
  singular3rdPerson: Word('прорезинивает', 6),
  plural1stPerson: Word('прорезиниваем', 6),
  plural2ndPerson: Word('прорезиниваете', 6),
  plural3rdPerson: Word('прорезинивают', 6),
  masculinePast: Word('прорезинивал', 6),
  femininePast: Word('прорезинивала', 6),
  neuterPast: Word('прорезинивало', 6),
  pluralPast: Word('прорезинивали', 6),
  imperativeInformal: Word('прорезинивай', 6),
  imperativeFormal: Word('прорезинивайте', 6),
  imperfect: [],
};

perfectVerbs.set(прорезинивать.name.text, прорезинивать);

export { прорезинивать };