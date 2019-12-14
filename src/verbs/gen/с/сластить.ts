import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сластить: PerfectVerb = {
  name: Word('сластить', 5),
  singular1stPerson: Word('слащу', 4),
  singular2ndPerson: Word('сластишь', 5),
  singular3rdPerson: Word('сластит', 5),
  plural1stPerson: Word('сластим', 5),
  plural2ndPerson: Word('сластите', 5),
  plural3rdPerson: Word('сластят', 5),
  masculinePast: Word('сластил', 5),
  femininePast: Word('сластила', 5),
  neuterPast: Word('сластило', 5),
  pluralPast: Word('сластили', 5),
  imperativeInformal: Word('сласти', 5),
  imperativeFormal: Word('сластите', 5),
  imperfect: [],
};

perfectVerbs.set(сластить.name.text, сластить);

export { сластить };