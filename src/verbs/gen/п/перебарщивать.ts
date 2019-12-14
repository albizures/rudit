import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебарщивать: PerfectVerb = {
  name: Word('перебарщивать', 5),
  singular1stPerson: Word('перебарщиваю', 5),
  singular2ndPerson: Word('перебарщиваешь', 5),
  singular3rdPerson: Word('перебарщивает', 5),
  plural1stPerson: Word('перебарщиваем', 5),
  plural2ndPerson: Word('перебарщиваете', 5),
  plural3rdPerson: Word('перебарщивают', 5),
  masculinePast: Word('перебарщивал', 5),
  femininePast: Word('перебарщивала', 5),
  neuterPast: Word('перебарщивало', 5),
  pluralPast: Word('перебарщивали', 5),
  imperativeInformal: Word('перебарщивай', 5),
  imperativeFormal: Word('перебарщивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перебарщивать.name.text, перебарщивать);

export { перебарщивать };