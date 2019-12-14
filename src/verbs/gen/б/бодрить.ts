import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бодрить: PerfectVerb = {
  name: Word('бодрить', 4),
  singular1stPerson: Word('бодрю', 4),
  singular2ndPerson: Word('бодришь', 4),
  singular3rdPerson: Word('бодрит', 4),
  plural1stPerson: Word('бодрим', 4),
  plural2ndPerson: Word('бодрите', 4),
  plural3rdPerson: Word('бодрят', 4),
  masculinePast: Word('бодрил', 4),
  femininePast: Word('бодрила', 4),
  neuterPast: Word('бодрило', 4),
  pluralPast: Word('бодрили', 4),
  imperativeInformal: Word('бодри', 4),
  imperativeFormal: Word('бодрите', 4),
  imperfect: [],
};

perfectVerbs.set(бодрить.name.text, бодрить);

export { бодрить };