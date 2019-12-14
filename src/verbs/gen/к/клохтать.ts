import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клохтать: PerfectVerb = {
  name: Word('клохтать', 5),
  singular1stPerson: Word('клохчу', 5),
  singular2ndPerson: Word('клохчешь', 2),
  singular3rdPerson: Word('клохчет', 2),
  plural1stPerson: Word('клохчем', 2),
  plural2ndPerson: Word('клохчете', 2),
  plural3rdPerson: Word('клохчут', 2),
  masculinePast: Word('клохтал', 5),
  femininePast: Word('клохтала', 5),
  neuterPast: Word('клохтало', 5),
  pluralPast: Word('клохтали', 5),
  imperativeInformal: Word('клохчи', 5),
  imperativeFormal: Word('клохчите', 5),
  imperfect: [],
};

perfectVerbs.set(клохтать.name.text, клохтать);

export { клохтать };