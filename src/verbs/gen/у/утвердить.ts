import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утвердить: PerfectVerb = {
  name: Word('утвердить', 6),
  singular1stPerson: Word('утвержу', 6),
  singular2ndPerson: Word('утвердишь', 6),
  singular3rdPerson: Word('утвердит', 6),
  plural1stPerson: Word('утвердим', 6),
  plural2ndPerson: Word('утвердите', 6),
  plural3rdPerson: Word('утвердят', 6),
  masculinePast: Word('утвердил', 6),
  femininePast: Word('утвердила', 6),
  neuterPast: Word('утвердило', 6),
  pluralPast: Word('утвердили', 6),
  imperativeInformal: Word('утверди', 6),
  imperativeFormal: Word('утвердите', 6),
  imperfect: ['утверждать'],
};

perfectVerbs.set(утвердить.name.text, утвердить);

export { утвердить };