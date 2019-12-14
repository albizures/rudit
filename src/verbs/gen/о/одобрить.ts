import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одобрить: PerfectVerb = {
  name: Word('одобрить', 2),
  singular1stPerson: Word('одобрю', 2),
  singular2ndPerson: Word('одобришь', 2),
  singular3rdPerson: Word('одобрит', 2),
  plural1stPerson: Word('одобрим', 2),
  plural2ndPerson: Word('одобрите', 2),
  plural3rdPerson: Word('одобрят', 2),
  masculinePast: Word('одобрил', 2),
  femininePast: Word('одобрила', 2),
  neuterPast: Word('одобрило', 2),
  pluralPast: Word('одобрили', 2),
  imperativeInformal: Word('одобри', 2),
  imperativeFormal: Word('одобрите', 2),
  imperfect: ['одобрять'],
};

perfectVerbs.set(одобрить.name.text, одобрить);

export { одобрить };