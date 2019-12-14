import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напудрить: PerfectVerb = {
  name: Word('напудрить', 3),
  singular1stPerson: Word('напудрю', 3),
  singular2ndPerson: Word('напудришь', 3),
  singular3rdPerson: Word('напудрит', 3),
  plural1stPerson: Word('напудрим', 3),
  plural2ndPerson: Word('напудрите', 3),
  plural3rdPerson: Word('напудрят', 3),
  masculinePast: Word('напудрил', 3),
  femininePast: Word('напудрила', 3),
  neuterPast: Word('напудрило', 3),
  pluralPast: Word('напудрили', 3),
  imperativeInformal: Word('напудри', 3),
  imperativeFormal: Word('напудрите', 3),
  imperfect: [],
};

perfectVerbs.set(напудрить.name.text, напудрить);

export { напудрить };