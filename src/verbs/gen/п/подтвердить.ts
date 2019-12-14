import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтвердить: PerfectVerb = {
  name: Word('подтвердить', 8),
  singular1stPerson: Word('подтвержу', 8),
  singular2ndPerson: Word('подтвердишь', 8),
  singular3rdPerson: Word('подтвердит', 8),
  plural1stPerson: Word('подтвердим', 8),
  plural2ndPerson: Word('подтвердите', 8),
  plural3rdPerson: Word('подтвердят', 8),
  masculinePast: Word('подтвердил', 8),
  femininePast: Word('подтвердила', 8),
  neuterPast: Word('подтвердило', 8),
  pluralPast: Word('подтвердили', 8),
  imperativeInformal: Word('подтверди', 8),
  imperativeFormal: Word('подтвердите', 8),
  imperfect: ['подтверждать'],
};

perfectVerbs.set(подтвердить.name.text, подтвердить);

export { подтвердить };