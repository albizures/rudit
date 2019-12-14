import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замесить: PerfectVerb = {
  name: Word('замесить', 5),
  singular1stPerson: Word('замешу', 5),
  singular2ndPerson: Word('замесишь', 3),
  singular3rdPerson: Word('замесит', 3),
  plural1stPerson: Word('замесим', 3),
  plural2ndPerson: Word('замесите', 3),
  plural3rdPerson: Word('замесят', 3),
  masculinePast: Word('замесил', 5),
  femininePast: Word('замесила', 5),
  neuterPast: Word('замесило', 5),
  pluralPast: Word('замесили', 5),
  imperativeInformal: Word('замеси', 5),
  imperativeFormal: Word('замесите', 5),
  imperfect: [],
};

perfectVerbs.set(замесить.name.text, замесить);

export { замесить };