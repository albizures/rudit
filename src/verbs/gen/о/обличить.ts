import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обличить: PerfectVerb = {
  name: Word('обличить', 5),
  singular1stPerson: Word('обличу', 5),
  singular2ndPerson: Word('обличишь', 5),
  singular3rdPerson: Word('обличит', 5),
  plural1stPerson: Word('обличим', 5),
  plural2ndPerson: Word('обличите', 5),
  plural3rdPerson: Word('обличат', 5),
  masculinePast: Word('обличил', 5),
  femininePast: Word('обличила', 5),
  neuterPast: Word('обличило', 5),
  pluralPast: Word('обличили', 5),
  imperativeInformal: Word('обличи', 5),
  imperativeFormal: Word('обличите', 5),
  imperfect: ['обличать'],
};

perfectVerbs.set(обличить.name.text, обличить);

export { обличить };