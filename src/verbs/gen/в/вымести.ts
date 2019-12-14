import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымести: PerfectVerb = {
  name: Word('вымести', 1),
  singular1stPerson: Word('вымету', 1),
  singular2ndPerson: Word('выметешь', 1),
  singular3rdPerson: Word('выметет', 1),
  plural1stPerson: Word('выметем', 1),
  plural2ndPerson: Word('выметете', 1),
  plural3rdPerson: Word('выметут', 1),
  masculinePast: Word('вымел', 1),
  femininePast: Word('вымела', 1),
  neuterPast: Word('вымело', 1),
  pluralPast: Word('вымели', 1),
  imperativeInformal: Word('вымети', 1),
  imperativeFormal: Word('выметите', 1),
  imperfect: [],
};

perfectVerbs.set(вымести.name.text, вымести);

export { вымести };