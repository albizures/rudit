import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдобрить: PerfectVerb = {
  name: Word('сдобрить', 2),
  singular1stPerson: Word('сдобрю', 2),
  singular2ndPerson: Word('сдобришь', 2),
  singular3rdPerson: Word('сдобрит', 2),
  plural1stPerson: Word('сдобрим', 2),
  plural2ndPerson: Word('сдобрите', 2),
  plural3rdPerson: Word('сдобрят', 2),
  masculinePast: Word('сдобрил', 2),
  femininePast: Word('сдобрила', 2),
  neuterPast: Word('сдобрило', 2),
  pluralPast: Word('сдобрили', 2),
  imperativeInformal: Word('сдобри', 2),
  imperativeFormal: Word('сдобрите', 2),
  imperfect: [],
};

perfectVerbs.set(сдобрить.name.text, сдобрить);

export { сдобрить };