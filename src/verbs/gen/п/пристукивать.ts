import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристукивать: PerfectVerb = {
  name: Word('пристукивать', 5),
  singular1stPerson: Word('пристукиваю', 5),
  singular2ndPerson: Word('пристукиваешь', 5),
  singular3rdPerson: Word('пристукивает', 5),
  plural1stPerson: Word('пристукиваем', 5),
  plural2ndPerson: Word('пристукиваете', 5),
  plural3rdPerson: Word('пристукивают', 5),
  masculinePast: Word('пристукивал', 5),
  femininePast: Word('пристукивала', 5),
  neuterPast: Word('пристукивало', 5),
  pluralPast: Word('пристукивали', 5),
  imperativeInformal: Word('пристукивай', 5),
  imperativeFormal: Word('пристукивайте', 5),
  imperfect: [],
};

perfectVerbs.set(пристукивать.name.text, пристукивать);

export { пристукивать };