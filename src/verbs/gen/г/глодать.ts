import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глодать: PerfectVerb = {
  name: Word('глодать', 4),
  singular1stPerson: Word('гложу', 4),
  singular2ndPerson: Word('гложешь', 2),
  singular3rdPerson: Word('гложет', 2),
  plural1stPerson: Word('гложем', 2),
  plural2ndPerson: Word('гложете', 2),
  plural3rdPerson: Word('гложут', 2),
  masculinePast: Word('глодал', 4),
  femininePast: Word('глодала', 4),
  neuterPast: Word('глодало', 4),
  pluralPast: Word('глодали', 4),
  imperativeInformal: Word('гложи', 4),
  imperativeFormal: Word('гложите', 4),
  imperfect: [],
};

perfectVerbs.set(глодать.name.text, глодать);

export { глодать };