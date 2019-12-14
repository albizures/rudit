import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикарманивать: PerfectVerb = {
  name: Word('прикарманивать', 7),
  singular1stPerson: Word('прикарманиваю', 7),
  singular2ndPerson: Word('прикарманиваешь', 7),
  singular3rdPerson: Word('прикарманивает', 7),
  plural1stPerson: Word('прикарманиваем', 7),
  plural2ndPerson: Word('прикарманиваете', 7),
  plural3rdPerson: Word('прикарманивают', 7),
  masculinePast: Word('прикарманивал', 7),
  femininePast: Word('прикарманивала', 7),
  neuterPast: Word('прикарманивало', 7),
  pluralPast: Word('прикарманивали', 7),
  imperativeInformal: Word('прикарманивай', 7),
  imperativeFormal: Word('прикарманивайте', 7),
  imperfect: [],
};

perfectVerbs.set(прикарманивать.name.text, прикарманивать);

export { прикарманивать };