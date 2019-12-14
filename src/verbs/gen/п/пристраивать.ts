import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристраивать: PerfectVerb = {
  name: Word('пристраивать', 6),
  singular1stPerson: Word('пристраиваю', 6),
  singular2ndPerson: Word('пристраиваешь', 6),
  singular3rdPerson: Word('пристраивает', 6),
  plural1stPerson: Word('пристраиваем', 6),
  plural2ndPerson: Word('пристраиваете', 6),
  plural3rdPerson: Word('пристраивают', 6),
  masculinePast: Word('пристраивал', 6),
  femininePast: Word('пристраивала', 6),
  neuterPast: Word('пристраивало', 6),
  pluralPast: Word('пристраивали', 6),
  imperativeInformal: Word('пристраивай', 6),
  imperativeFormal: Word('пристраивайте', 6),
  imperfect: ['пристроить'],
};

perfectVerbs.set(пристраивать.name.text, пристраивать);

export { пристраивать };