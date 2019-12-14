import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const весить: PerfectVerb = {
  name: Word('весить', 1),
  singular1stPerson: Word('вешу', 1),
  singular2ndPerson: Word('весишь', 1),
  singular3rdPerson: Word('весит', 1),
  plural1stPerson: Word('весим', 1),
  plural2ndPerson: Word('весите', 1),
  plural3rdPerson: Word('весят', 1),
  masculinePast: Word('весил', 1),
  femininePast: Word('весила', 1),
  neuterPast: Word('весило', 1),
  pluralPast: Word('весили', 1),
  imperativeInformal: Word('весь', 1),
  imperativeFormal: Word('весьте', 1),
  imperfect: [],
};

perfectVerbs.set(весить.name.text, весить);

export { весить };