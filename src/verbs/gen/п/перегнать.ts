import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегнать: PerfectVerb = {
  name: Word('перегнать', 6),
  singular1stPerson: Word('перегоню', 7),
  singular2ndPerson: Word('перегонишь', 5),
  singular3rdPerson: Word('перегонит', 5),
  plural1stPerson: Word('перегоним', 5),
  plural2ndPerson: Word('перегоните', 5),
  plural3rdPerson: Word('перегонят', 5),
  masculinePast: Word('перегнал', 6),
  femininePast: Word('перегнала', 8),
  neuterPast: Word('перегнало', 6),
  pluralPast: Word('перегнали', 6),
  imperativeInformal: Word('перегони', 7),
  imperativeFormal: Word('перегоните', 7),
  imperfect: [],
};

perfectVerbs.set(перегнать.name.text, перегнать);

export { перегнать };