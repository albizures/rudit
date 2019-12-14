import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испещрить: PerfectVerb = {
  name: Word('испещрить', 6),
  singular1stPerson: Word('испещрю', 6),
  singular2ndPerson: Word('испещришь', 6),
  singular3rdPerson: Word('испещрит', 6),
  plural1stPerson: Word('испещрим', 6),
  plural2ndPerson: Word('испещрите', 6),
  plural3rdPerson: Word('испещрят', 6),
  masculinePast: Word('испещрил', 6),
  femininePast: Word('испещрила', 6),
  neuterPast: Word('испещрило', 6),
  pluralPast: Word('испещрили', 6),
  imperativeInformal: Word('испещри', 6),
  imperativeFormal: Word('испещрите', 6),
  imperfect: [],
};

perfectVerbs.set(испещрить.name.text, испещрить);

export { испещрить };