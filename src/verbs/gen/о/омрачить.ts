import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омрачить: PerfectVerb = {
  name: Word('омрачить', 5),
  singular1stPerson: Word('омрачу', 5),
  singular2ndPerson: Word('омрачишь', 5),
  singular3rdPerson: Word('омрачит', 5),
  plural1stPerson: Word('омрачим', 5),
  plural2ndPerson: Word('омрачите', 5),
  plural3rdPerson: Word('омрачат', 5),
  masculinePast: Word('омрачил', 5),
  femininePast: Word('омрачила', 5),
  neuterPast: Word('омрачило', 5),
  pluralPast: Word('омрачили', 5),
  imperativeInformal: Word('омрачи', 5),
  imperativeFormal: Word('омрачите', 5),
  imperfect: [],
};

perfectVerbs.set(омрачить.name.text, омрачить);

export { омрачить };