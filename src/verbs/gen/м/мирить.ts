import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мирить: PerfectVerb = {
  name: Word('мирить', 3),
  singular1stPerson: Word('мирю', 3),
  singular2ndPerson: Word('миришь', 3),
  singular3rdPerson: Word('мирит', 3),
  plural1stPerson: Word('мирим', 3),
  plural2ndPerson: Word('мирите', 3),
  plural3rdPerson: Word('мирят', 3),
  masculinePast: Word('мирил', 3),
  femininePast: Word('мирила', 3),
  neuterPast: Word('мирило', 3),
  pluralPast: Word('мирили', 3),
  imperativeInformal: Word('мири', 3),
  imperativeFormal: Word('мирите', 3),
  imperfect: [],
};

perfectVerbs.set(мирить.name.text, мирить);

export { мирить };