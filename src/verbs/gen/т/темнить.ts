import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const темнить: PerfectVerb = {
  name: Word('темнить', 4),
  singular1stPerson: Word('темню', 4),
  singular2ndPerson: Word('темнишь', 4),
  singular3rdPerson: Word('темнит', 4),
  plural1stPerson: Word('темним', 4),
  plural2ndPerson: Word('темните', 4),
  plural3rdPerson: Word('темнят', 4),
  masculinePast: Word('темнил', 4),
  femininePast: Word('темнила', 4),
  neuterPast: Word('темнило', 4),
  pluralPast: Word('темнили', 4),
  imperativeInformal: Word('темни', 4),
  imperativeFormal: Word('темните', 4),
  imperfect: [],
};

perfectVerbs.set(темнить.name.text, темнить);

export { темнить };