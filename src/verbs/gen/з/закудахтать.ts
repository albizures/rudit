import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закудахтать: PerfectVerb = {
  name: Word('закудахтать', 5),
  singular1stPerson: Word('закудахчу', 5),
  singular2ndPerson: Word('закудахчешь', 5),
  singular3rdPerson: Word('закудахчет', 5),
  plural1stPerson: Word('закудахчем', 5),
  plural2ndPerson: Word('закудахчете', 5),
  plural3rdPerson: Word('закудахчут', 5),
  masculinePast: Word('закудахтал', 5),
  femininePast: Word('закудахтала', 5),
  neuterPast: Word('закудахтало', 5),
  pluralPast: Word('закудахтали', 5),
  imperativeInformal: Word('закудахчи', 5),
  imperativeFormal: Word('закудахчите', 5),
  imperfect: [],
};

perfectVerbs.set(закудахтать.name.text, закудахтать);

export { закудахтать };