import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбагрить: PerfectVerb = {
  name: Word('сбагрить', 2),
  singular1stPerson: Word('сбагрю', 2),
  singular2ndPerson: Word('сбагришь', 2),
  singular3rdPerson: Word('сбагрит', 2),
  plural1stPerson: Word('сбагрим', 2),
  plural2ndPerson: Word('сбагрите', 2),
  plural3rdPerson: Word('сбагрят', 2),
  masculinePast: Word('сбагрил', 2),
  femininePast: Word('сбагрила', 2),
  neuterPast: Word('сбагрило', 2),
  pluralPast: Word('сбагрили', 2),
  imperativeInformal: Word('сбагри', 2),
  imperativeFormal: Word('сбагрите', 2),
  imperfect: [],
};

perfectVerbs.set(сбагрить.name.text, сбагрить);

export { сбагрить };