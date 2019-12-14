import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обветрить: PerfectVerb = {
  name: Word('обветрить', 3),
  singular1stPerson: Word('обветрю', 3),
  singular2ndPerson: Word('обветришь', 3),
  singular3rdPerson: Word('обветрит', 3),
  plural1stPerson: Word('обветрим', 3),
  plural2ndPerson: Word('обветрите', 3),
  plural3rdPerson: Word('обветрят', 3),
  masculinePast: Word('обветрил', 3),
  femininePast: Word('обветрила', 3),
  neuterPast: Word('обветрило', 3),
  pluralPast: Word('обветрили', 3),
  imperativeInformal: Word('обветри', 3),
  imperativeFormal: Word('обветрите', 3),
  imperfect: [],
};

perfectVerbs.set(обветрить.name.text, обветрить);

export { обветрить };