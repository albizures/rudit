import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттопырить: PerfectVerb = {
  name: Word('оттопырить', 5),
  singular1stPerson: Word('оттопырю', 5),
  singular2ndPerson: Word('оттопыришь', 5),
  singular3rdPerson: Word('оттопырит', 5),
  plural1stPerson: Word('оттопырим', 5),
  plural2ndPerson: Word('оттопырите', 5),
  plural3rdPerson: Word('оттопырят', 5),
  masculinePast: Word('оттопырил', 5),
  femininePast: Word('оттопырила', 5),
  neuterPast: Word('оттопырило', 5),
  pluralPast: Word('оттопырили', 5),
  imperativeInformal: Word('оттопырь', 5),
  imperativeFormal: Word('оттопырьте', 5),
  imperfect: [],
};

perfectVerbs.set(оттопырить.name.text, оттопырить);

export { оттопырить };