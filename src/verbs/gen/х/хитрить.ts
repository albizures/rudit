import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хитрить: PerfectVerb = {
  name: Word('хитрить', 4),
  singular1stPerson: Word('хитрю', 4),
  singular2ndPerson: Word('хитришь', 4),
  singular3rdPerson: Word('хитрит', 4),
  plural1stPerson: Word('хитрим', 4),
  plural2ndPerson: Word('хитрите', 4),
  plural3rdPerson: Word('хитрят', 4),
  masculinePast: Word('хитрил', 4),
  femininePast: Word('хитрила', 4),
  neuterPast: Word('хитрило', 4),
  pluralPast: Word('хитрили', 4),
  imperativeInformal: Word('хитри', 4),
  imperativeFormal: Word('хитрите', 4),
  imperfect: [],
};

perfectVerbs.set(хитрить.name.text, хитрить);

export { хитрить };