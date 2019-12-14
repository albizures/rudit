import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворчать: PerfectVerb = {
  name: Word('поворчать', 6),
  singular1stPerson: Word('поворчу', 6),
  singular2ndPerson: Word('поворчишь', 6),
  singular3rdPerson: Word('поворчит', 6),
  plural1stPerson: Word('поворчим', 6),
  plural2ndPerson: Word('поворчите', 6),
  plural3rdPerson: Word('поворчат', 6),
  masculinePast: Word('поворчал', 6),
  femininePast: Word('поворчала', 6),
  neuterPast: Word('поворчало', 6),
  pluralPast: Word('поворчали', 6),
  imperativeInformal: Word('поворчи', 6),
  imperativeFormal: Word('поворчите', 6),
  imperfect: [],
};

perfectVerbs.set(поворчать.name.text, поворчать);

export { поворчать };