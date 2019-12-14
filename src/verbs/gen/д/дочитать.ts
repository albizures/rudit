import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дочитать: PerfectVerb = {
  name: Word('дочитать', 5),
  singular1stPerson: Word('дочитаю', 5),
  singular2ndPerson: Word('дочитаешь', 5),
  singular3rdPerson: Word('дочитает', 5),
  plural1stPerson: Word('дочитаем', 5),
  plural2ndPerson: Word('дочитаете', 5),
  plural3rdPerson: Word('дочитают', 5),
  masculinePast: Word('дочитал', 5),
  femininePast: Word('дочитала', 5),
  neuterPast: Word('дочитало', 5),
  pluralPast: Word('дочитали', 5),
  imperativeInformal: Word('дочитай', 5),
  imperativeFormal: Word('дочитайте', 5),
  imperfect: [],
};

perfectVerbs.set(дочитать.name.text, дочитать);

export { дочитать };