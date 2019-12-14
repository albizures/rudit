import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мудрить: PerfectVerb = {
  name: Word('мудрить', 4),
  singular1stPerson: Word('мудрю', 4),
  singular2ndPerson: Word('мудришь', 4),
  singular3rdPerson: Word('мудрит', 4),
  plural1stPerson: Word('мудрим', 4),
  plural2ndPerson: Word('мудрите', 4),
  plural3rdPerson: Word('мудрят', 4),
  masculinePast: Word('мудрил', 4),
  femininePast: Word('мудрила', 4),
  neuterPast: Word('мудрило', 4),
  pluralPast: Word('мудрили', 4),
  imperativeInformal: Word('мудри', 4),
  imperativeFormal: Word('мудрите', 4),
  imperfect: [],
};

perfectVerbs.set(мудрить.name.text, мудрить);

export { мудрить };