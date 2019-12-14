import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озадачить: PerfectVerb = {
  name: Word('озадачить', 4),
  singular1stPerson: Word('озадачу', 4),
  singular2ndPerson: Word('озадачишь', 4),
  singular3rdPerson: Word('озадачит', 4),
  plural1stPerson: Word('озадачим', 4),
  plural2ndPerson: Word('озадачите', 4),
  plural3rdPerson: Word('озадачат', 4),
  masculinePast: Word('озадачил', 4),
  femininePast: Word('озадачила', 4),
  neuterPast: Word('озадачило', 4),
  pluralPast: Word('озадачили', 4),
  imperativeInformal: Word('озадачь', 4),
  imperativeFormal: Word('озадачьте', 4),
  imperfect: [],
};

perfectVerbs.set(озадачить.name.text, озадачить);

export { озадачить };