import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начертать: PerfectVerb = {
  name: Word('начертать', 6),
  singular1stPerson: Word('начертаю', 6),
  singular2ndPerson: Word('начертаешь', 6),
  singular3rdPerson: Word('начертает', 6),
  plural1stPerson: Word('начертаем', 6),
  plural2ndPerson: Word('начертаете', 6),
  plural3rdPerson: Word('начертают', 6),
  masculinePast: Word('начертал', 6),
  femininePast: Word('начертала', 6),
  neuterPast: Word('начертало', 6),
  pluralPast: Word('начертали', 6),
  imperativeInformal: Word('начертай', 6),
  imperativeFormal: Word('начертайте', 6),
  imperfect: [],
};

perfectVerbs.set(начертать.name.text, начертать);

export { начертать };