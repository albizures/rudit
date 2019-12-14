import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осквернить: PerfectVerb = {
  name: Word('осквернить', 7),
  singular1stPerson: Word('оскверню', 7),
  singular2ndPerson: Word('осквернишь', 7),
  singular3rdPerson: Word('осквернит', 7),
  plural1stPerson: Word('оскверним', 7),
  plural2ndPerson: Word('оскверните', 7),
  plural3rdPerson: Word('осквернят', 7),
  masculinePast: Word('осквернил', 7),
  femininePast: Word('осквернила', 7),
  neuterPast: Word('осквернило', 7),
  pluralPast: Word('осквернили', 7),
  imperativeInformal: Word('оскверни', 7),
  imperativeFormal: Word('оскверните', 7),
  imperfect: [],
};

perfectVerbs.set(осквернить.name.text, осквернить);

export { осквернить };