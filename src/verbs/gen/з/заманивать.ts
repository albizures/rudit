import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заманивать: PerfectVerb = {
  name: Word('заманивать', 3),
  singular1stPerson: Word('заманиваю', 3),
  singular2ndPerson: Word('заманиваешь', 3),
  singular3rdPerson: Word('заманивает', 3),
  plural1stPerson: Word('заманиваем', 3),
  plural2ndPerson: Word('заманиваете', 3),
  plural3rdPerson: Word('заманивают', 3),
  masculinePast: Word('заманивал', 3),
  femininePast: Word('заманивала', 3),
  neuterPast: Word('заманивало', 3),
  pluralPast: Word('заманивали', 3),
  imperativeInformal: Word('заманивай', 3),
  imperativeFormal: Word('заманивайте', 3),
  imperfect: ['заманить'],
};

perfectVerbs.set(заманивать.name.text, заманивать);

export { заманивать };