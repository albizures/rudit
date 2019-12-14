import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приманивать: PerfectVerb = {
  name: Word('приманивать', 4),
  singular1stPerson: Word('приманиваю', 4),
  singular2ndPerson: Word('приманиваешь', 4),
  singular3rdPerson: Word('приманивает', 4),
  plural1stPerson: Word('приманиваем', 4),
  plural2ndPerson: Word('приманиваете', 4),
  plural3rdPerson: Word('приманивают', 4),
  masculinePast: Word('приманивал', 4),
  femininePast: Word('приманивала', 4),
  neuterPast: Word('приманивало', 4),
  pluralPast: Word('приманивали', 4),
  imperativeInformal: Word('приманивай', 4),
  imperativeFormal: Word('приманивайте', 4),
  imperfect: ['приманить'],
};

perfectVerbs.set(приманивать.name.text, приманивать);

export { приманивать };